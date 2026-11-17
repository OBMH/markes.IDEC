import React from 'react';
import { Star, Calendar, ArrowLeft } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroSectionProps {
  onBookNow: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookNow,
  onExploreServices,
}) => {
  return (
    <section
      id="hero"
      aria-label="الواجهة الرئيسية لمركز إيدكس لتقويم وزراعة وتجميل الأسنان"
      className="relative bg-[#101A32] text-white overflow-hidden"
    >
      {/* Background Real Clinic Photograph with Measured Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLINIC_INFO.assets.center3}
          alt="الجناح الطبي والاستقبال الرئيسي في مركز Elegant Dental Center Smile (EDCS )"
          width={1280}
          height={800}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-102"
        />
        {/* Multi-layered navy scrim to guarantee high contrast for Arabic typography */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-[#101A32]/95 via-[#101A32]/85 to-[#101A32]/65"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#101A32] via-transparent to-[#101A32]/40"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-3xl">
          {/* Quiet Kicker + Verified Rating Indicator */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#F8F6F0]/90 mb-6">
            <span className="font-semibold text-[#C9A45C] tracking-wide">
              {CLINIC_INFO.nameAr}
            </span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <div
              className="inline-flex items-center gap-1.5 text-white font-medium tabular-nums"
              aria-label={`التقييم ${CLINIC_INFO.ratingValue} من ${CLINIC_INFO.ratingMax} بناءً على ${CLINIC_INFO.reviewsCount} مراجعة`}
            >
              <Star
                className="w-4 h-4 fill-[#C9A45C] text-[#C9A45C] shrink-0"
                aria-hidden="true"
              />
              <span>
                ⭐ {CLINIC_INFO.ratingValue}/{CLINIC_INFO.ratingMax} | {CLINIC_INFO.reviewsCount} مراجعة
              </span>
            </div>
          </div>

          {/* Primary Headline */}
          <h1
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.2] tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            {CLINIC_INFO.heroTitle}
          </h1>

          {/* Hero Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F8F6F0]/90 leading-relaxed max-w-2xl mb-10 font-normal">
            {CLINIC_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onBookNow}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-[#101A32] bg-[#C9A45C] hover:bg-[#d6b46f] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
            >
              <Calendar className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>احجز موعدك الآن</span>
            </button>

            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-medium text-white bg-white/10 hover:bg-white/15 border border-white/25 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>اكتشف خدماتنا</span>
              <ArrowLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
