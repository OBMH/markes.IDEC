import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Right Column: Verbatim Official Address & Directions CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F8F6F0] rounded-2xl p-8 sm:p-10 border border-[#101A32]/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
                <span>الموقع الجغرافي</span>
                <span aria-hidden="true">·</span>
                <span>سهولة الوصول</span>
              </div>

              <h2
                id="location-heading"
                className="text-2xl sm:text-3xl font-bold text-[#101A32] leading-snug mb-6"
              >
                {CLINIC_INFO.locationSectionTitle}
              </h2>

              {/* Full Verbatim Arabic Address */}
              <div className="p-5 rounded-xl bg-white border border-[#101A32]/10 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#C9A45C] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#B08B42] mb-1.5">
                      العنوان الرسمي الكامل
                    </p>
                    <p className="text-base font-bold text-[#101A32] leading-relaxed mb-2">
                      {CLINIC_INFO.fullAddressAr}
                    </p>
                    <p
                      className="text-sm font-medium text-[#101A32]/70 font-english"
                      dir="ltr"
                    >
                      {CLINIC_INFO.cityCountryEn}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#101A32]/80 mb-8">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
                <span>للاستفسار عن الموقع:</span>
                <a
                  href={`tel:${CLINIC_INFO.phoneTel}`}
                  className="font-bold text-[#101A32] hover:text-[#B08B42] tabular-nums"
                  dir="ltr"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-[#101A32] bg-[#C9A45C] hover:bg-[#d7b571] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
            >
              <Navigation className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>احصل على الاتجاهات</span>
            </a>
          </div>

          {/* Left Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-[#101A32]/12 bg-[#101A32]">
              <iframe
                title="موقع مركز إيدكس Elegant Dental Center Smile (EDCS ) على خرائط Google - صنعاء دار سلم المقالح الجديد"
                src="https://maps.google.com/maps?q=%D8%B5%D9%86%D8%B9%D8%A7%D8%A1+%D8%AF%D8%A7%D8%B1+%D8%B3%D9%84%D9%85+%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%84%D8%AD+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF+%D9%85%D8%B9%D9%87%D8%AF+%D8%B1%D8%A7%D8%AF%D9%81%D9%88%D8%B1%D8%AF+Elegant+Dental+Center&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
