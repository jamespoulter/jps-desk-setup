import { GALLERY } from '@/data/gallery';
import { LightboxProvider } from '@/components/LightboxContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GallerySection from '@/components/GallerySection';
import GearSection from '@/components/GearSection';
import SoftwareSection from '@/components/SoftwareSection';
import BookSection from '@/components/BookSection';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

export default function Page() {
  return (
    <LightboxProvider items={GALLERY}>
      <Navigation />
      <Hero />
      <GallerySection />
      <GearSection />
      <SoftwareSection />
      <BookSection />
      <Footer />
      <Lightbox />
    </LightboxProvider>
  );
}
