import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { WorkingHoursSection } from './components/WorkingHoursSection';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { ALL_SERVICES } from './data/clinicData';

export default function App() {
  const [pathname, setPathname] = useState<string>(() => window.location.pathname);
  const [preselectedService, setPreselectedService] = useState<string>(
    ALL_SERVICES[0].title
  );
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  // Warm image cache immediately after first paint so all sections render with zero delay
  useEffect(() => {
    const preloadSources = ALL_SERVICES.map((s) => s.image);
    preloadSources.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'instant' });
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleReturnHome = () => {
    window.history.pushState({}, '', '/');
    setPathname('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Show custom 404 page if path is not root
  if (pathname !== '/' && pathname !== '/index.html') {
    return (
      <>
        <NotFoundPage onReturnHome={handleReturnHome} />
        <FloatingWhatsAppButton />
      </>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#F8F6F0] text-[#101A32]" dir="rtl">
      <Navbar onNavigateToBooking={() => scrollToSection('contact')} />

      <main className="flex-1">
        <HeroSection
          onBookNow={() => scrollToSection('contact')}
          onExploreServices={() => scrollToSection('services')}
        />

        <AboutSection
          onOpenLightbox={(imagePath) => setLightboxImage(imagePath)}
        />

        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        <WhyChooseUsSection />

        <DoctorsSection
          onBookWithDoctor={() => scrollToSection('contact')}
        />

        <GallerySection
          selectedImage={lightboxImage}
          onSelectImage={setLightboxImage}
        />

        <ReviewsSection />

        <WorkingHoursSection />

        <LocationSection />

        <BookingSection preselectedService={preselectedService} />

        <FaqSection />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
