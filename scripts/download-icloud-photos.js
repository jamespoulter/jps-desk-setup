#!/usr/bin/env node

/**
 * Download photos from an iCloud shared album link and update gallery.ts.
 * Uses the Apple CloudKit shared streams API.
 *
 * Usage: node scripts/download-icloud-photos.js [icloud-share-url]
 *
 * Default URL: https://share.icloud.com/photos/030GfjNqR78ElhyXSRcfbIrFA
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SHARE_URL = process.argv[2] || 'https://share.icloud.com/photos/030GfjNqR78ElhyXSRcfbIrFA';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'setup');
const GALLERY_TS = path.join(__dirname, '..', 'src', 'data', 'gallery.ts');

// Gallery items: filename, alt text, and caption for each photo (in order)
const GALLERY_ITEMS = [
  { filename: 'full-setup', alt: 'Full desk setup overview', caption: 'The full setup' },
  { filename: 'camera-prompter', alt: 'Camera and prompter closeup', caption: 'Camera & Prompter' },
  { filename: 'audio-corner', alt: 'Audio setup — RØDE PodMic and Wave XLR', caption: 'Audio Corner' },
  { filename: 'input-devices', alt: 'Keyboard and peripherals', caption: 'Input Devices' },
  { filename: '3d-printing', alt: '3D printing station', caption: '3D Printing' },
];

function extractToken(url) {
  const match = url.match(/\/photos\/([A-Za-z0-9_-]+)/);
  if (!match) throw new Error('Could not extract token from URL: ' + url);
  return match[1];
}

function request(url, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.request(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve({ redirect: res.headers.location, statusCode: res.statusCode });
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({ statusCode: res.statusCode, headers: res.headers, body: buffer, text: buffer.toString('utf-8') });
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function findPartition(token) {
  const headers = { 'Content-Type': 'application/json', 'Origin': 'https://www.icloud.com' };
  const body = JSON.stringify({ streamCtag: null });

  for (let p = 1; p <= 80; p++) {
    const pp = String(p).padStart(2, '0');
    const baseUrl = `https://p${pp}-sharedstreams.icloud.com/${token}/sharedstreams`;
    try {
      const res = await request(`${baseUrl}/webstream`, { method: 'POST', headers }, body);

      if (res.redirect) {
        const m = res.redirect.match(/(https:\/\/p\d+-sharedstreams\.icloud\.com)/);
        if (m) {
          const redirectBase = `${m[1]}/${token}/sharedstreams`;
          console.log(`  Redirected from p${pp} → ${redirectBase}`);
          return redirectBase;
        }
      }
      if (res.statusCode === 200) {
        console.log(`  Found partition: p${pp}`);
        return baseUrl;
      }
    } catch {
      // try next
    }
  }
  throw new Error(
    'Could not reach any iCloud partition server.\n' +
    'This can happen if outbound requests to *.icloud.com are blocked (e.g. in a sandbox).\n' +
    'Try running this script on your local machine instead.'
  );
}

async function getWebStream(baseUrl) {
  const res = await request(
    `${baseUrl}/webstream`,
    { method: 'POST', headers: { 'Content-Type': 'application/json', 'Origin': 'https://www.icloud.com' } },
    JSON.stringify({ streamCtag: null })
  );
  if (res.statusCode !== 200) throw new Error(`webstream failed (${res.statusCode}): ${res.text}`);
  return JSON.parse(res.text);
}

async function getAssetUrls(baseUrl, checksums) {
  const res = await request(
    `${baseUrl}/webasseturls`,
    { method: 'POST', headers: { 'Content-Type': 'application/json', 'Origin': 'https://www.icloud.com' } },
    JSON.stringify({ photoGuids: checksums })
  );
  if (res.statusCode !== 200) throw new Error(`webasseturls failed (${res.statusCode}): ${res.text}`);
  return JSON.parse(res.text);
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Download failed (${res.statusCode}) for ${url}`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
    }).on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
  });
}

function updateGalleryTs(downloadedFiles) {
  const entries = downloadedFiles
    .map((f, i) => {
      const item = GALLERY_ITEMS[i] || { alt: `Photo ${i + 1}`, caption: `Photo ${i + 1}` };
      return `  { src: "/images/setup/${f}", alt: "${item.alt}", caption: "${item.caption}" },`;
    })
    .join('\n');

  const content = `export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY: GalleryItem[] = [
${entries}
];
`;

  fs.writeFileSync(GALLERY_TS, content);
  console.log(`\nUpdated ${GALLERY_TS}`);
}

async function main() {
  const token = extractToken(SHARE_URL);
  console.log(`iCloud token: ${token}`);
  console.log(`Output dir:   ${OUTPUT_DIR}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Remove old SVG placeholders
  for (const f of fs.readdirSync(OUTPUT_DIR)) {
    if (f.endsWith('.svg')) {
      fs.unlinkSync(path.join(OUTPUT_DIR, f));
    }
  }

  console.log('Finding iCloud partition server...');
  const baseUrl = await findPartition(token);

  console.log('\nFetching photo stream...');
  const stream = await getWebStream(baseUrl);
  const photos = stream.photos || [];
  console.log(`Found ${photos.length} photo(s)\n`);

  if (photos.length === 0) {
    console.error('No photos found in the shared album.');
    process.exit(1);
  }

  // Sort photos by date (oldest first) so they match the gallery order
  photos.sort((a, b) => {
    const da = a.dateCreated ? new Date(a.dateCreated).getTime() : 0;
    const db = b.dateCreated ? new Date(b.dateCreated).getTime() : 0;
    return da - db;
  });

  // Select the best (largest) derivative for each photo
  const photoInfo = [];
  for (const photo of photos) {
    const derivatives = photo.derivatives || {};
    let best = null;
    let bestSize = 0;
    for (const [, deriv] of Object.entries(derivatives)) {
      const size = parseInt(deriv.fileSize || '0', 10);
      if (size > bestSize) { bestSize = size; best = deriv; }
    }
    if (best) {
      photoInfo.push({ checksum: best.checksum, fileSize: bestSize, caption: photo.caption || '' });
    }
  }

  console.log('Requesting download URLs...');
  const assetData = await getAssetUrls(baseUrl, photoInfo.map((p) => p.checksum));
  const items = assetData.items || {};
  console.log(`Got ${Object.keys(items).length} URL(s)\n`);

  // Download
  const downloadedFiles = [];
  for (let i = 0; i < photoInfo.length; i++) {
    const info = photoInfo[i];
    const asset = items[info.checksum];
    if (!asset) { console.warn(`  Skipping (no URL): checksum ${info.checksum}`); continue; }

    const url = `https://${asset.url_location}${asset.url_path}`;
    const ext = (asset.url_path || '').match(/\.(jpe?g|png|heic|webp|gif)/i)?.[1]?.toLowerCase() || 'jpg';
    const baseName = i < GALLERY_ITEMS.length ? GALLERY_ITEMS[i].filename : `photo-${i + 1}`;
    const filename = `${baseName}.${ext}`;
    const destPath = path.join(OUTPUT_DIR, filename);

    console.log(`[${i + 1}/${photoInfo.length}] ${filename} (${(info.fileSize / 1024).toFixed(0)} KB)`);
    await downloadFile(url, destPath);
    console.log(`  → ${destPath}`);
    downloadedFiles.push(filename);
  }

  console.log(`\nDownloaded ${downloadedFiles.length} photo(s)`);

  // Update gallery.ts
  updateGalleryTs(downloadedFiles);

  console.log('\nDone! Run `npm run build` to verify.');
}

main().catch((err) => {
  console.error('\nError:', err.message);
  process.exit(1);
});
