export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY: GalleryItem[] = [
  { src: "/images/setup/full-setup.svg", alt: "Full desk setup overview", caption: "The full setup" },
  { src: "/images/setup/camera-prompter.svg", alt: "Camera and prompter closeup", caption: "Camera & Prompter" },
  { src: "/images/setup/audio-corner.svg", alt: "Audio setup — RØDE PodMic and Wave XLR", caption: "Audio Corner" },
  { src: "/images/setup/input-devices.svg", alt: "Keyboard and peripherals", caption: "Input Devices" },
  { src: "/images/setup/3d-printing.svg", alt: "3D printing station", caption: "3D Printing" },
];
