import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onNavigateToBooking: () => void;
}

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'معرض الصور', href: '#gallery' },
  { label: 'أطباؤنا', href: '#doctors' },
  { label: 'التقييمات', href: '#reviews' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#101A32]/98 backdrop-blur-md border-b border-[#C9A45C]/25 shadow-sm'
          : 'bg-[#101A32] border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Logo & Two-Line Official Name */}
        <a
          href="#hero"
          className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
          aria-label="Elegant Dental Center Smile (EDCS ) - مركز إيدكس لتقويم وزراعة وتجميل الأسنان"
        >
          <span className="w-15 h-15 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-transparent shrink-0 flex items-center justify-center">
            <img
              src={CLINIC_INFO.assets.logo}
              alt="شعار Elegant Dental Center Smile (EDCS )"
              width={64}
              height={64}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-contain mix-blend-lighten"
              style={{ objectFit: 'contain' }}
            />
          </span>
          <span className="flex flex-col text-right leading-snug">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-[#C9A45C] transition-colors">
              Elegant Dental Center Smile (EDCS )
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-[#C9A45C] mt-0.5">
              مركز إيدكس لتقويم وزراعة وتجميل الأسنان
            </span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-white/85"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 text-white/85 hover:text-[#C9A45C] border-b-2 border-transparent hover:border-[#C9A45C] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onNavigateToBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#101A32] bg-[#C9A45C] hover:bg-[#d5b36e] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>احجز موعدك</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white hover:text-[#C9A45C] hover:bg-white/5 border border-white/15 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="قائمة الجوال"
          className="lg:hidden bg-[#101A32] border-t border-white/10 px-4 pt-3 pb-6 space-y-1 shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-[#C9A45C] hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 px-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-[#101A32] bg-[#C9A45C] hover:bg-[#d5b36e] rounded-lg transition-colors cursor-pointer"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              <span>احجز موعدك</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
