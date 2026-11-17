import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#101A32] text-white p-8 sm:p-12 lg:p-16 border border-[#C9A45C]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Right Column (RTL): Editorial Heading & Message */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A45C] mb-4">
                <span>التقييمات والثقة</span>
                <span aria-hidden="true">·</span>
                <span>بيانات Google Maps الرسمية</span>
              </div>

              <h2
                id="reviews-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-5"
                style={{ textWrap: 'balance' }}
              >
                {CLINIC_INFO.reviewsSectionTitle}
              </h2>

              <p className="text-base sm:text-lg text-[#F8F6F0]/85 leading-relaxed mb-8 max-w-2xl">
                {CLINIC_INFO.reviewsDescription}
              </p>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#101A32] bg-[#C9A45C] hover:bg-[#d7b571] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
              >
                <span>شاهد موقعنا على Google</span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Left Column (RTL): Quantitative Rating Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#182647] border border-white/12 p-8 text-center">
                <p className="text-xs font-semibold text-[#C9A45C] mb-3">
                  التقييم العام للمركز على Google
                </p>

                <div
                  className="text-5xl sm:text-6xl font-bold text-white tabular-nums tracking-tight mb-4"
                  dir="ltr"
                >
                  {CLINIC_INFO.ratingValue}{' '}
                  <span className="text-2xl sm:text-3xl text-white/60 font-normal">
                    / {CLINIC_INFO.ratingMax}
                  </span>
                </div>

                {/* 5 Gold Stars */}
                <div
                  className="flex items-center justify-center gap-1.5 mb-3"
                  aria-label="5 نجوم"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 fill-[#C9A45C] text-[#C9A45C]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-lg font-bold text-white tabular-nums mb-2">
                  {CLINIC_INFO.reviewsCount} مراجعة
                </p>

                <p className="text-xs text-white/65">
                  التقييم وعدد المراجعات معروضان وفق البيانات المتوفرة حاليًا على خرائط Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
