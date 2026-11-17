import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="تذييل الصفحة وبيانات المركز"
      className="bg-[#101A32] text-white border-t border-[#C9A45C]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Original Logo, Brand Name & Brief Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-16 h-16 rounded-full overflow-hidden bg-transparent shrink-0 flex items-center justify-center">
                <img
                  src={CLINIC_INFO.assets.logo}
                  alt="شعار Elegant Dental Center Smile (EDCS )"
                  className="w-full h-full object-contain mix-blend-lighten"
                  style={{ objectFit: 'contain' }}
                />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {CLINIC_INFO.nameEn}
                </h2>
                <p className="text-xs font-medium text-[#C9A45C] mt-0.5">
                  {CLINIC_INFO.nameAr}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/75 leading-relaxed mb-6">
              في مركز إيدكس Elegant Dental Center Smile (EDCS ) نؤمن أن الابتسامة الصحية تبدأ من العناية الصحيحة. نقدم خدمات متخصصة في زراعة وتقويم وتجميل الأسنان، إلى جانب خدمات العناية بصحة الفم واللثة.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-[#C9A45C] hover:text-[#101A32] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-[#C9A45C] hover:text-[#101A32] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Section Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#C9A45C] mb-4">
              أقسام الموقع
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#hero" className="hover:text-[#C9A45C] transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A45C] transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C9A45C] transition-colors">
                  خدماتنا الطبية
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A45C] transition-colors">
                  معرض الصور
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-[#C9A45C] transition-colors">
                  أطباؤنا
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C9A45C] transition-colors">
                  التقييمات
                </a>
              </li>
              <li>
                <a href="#working-hours" className="hover:text-[#C9A45C] transition-colors">
                  أوقات العمل
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C9A45C] transition-colors">
                  حجز موعد وتواصل
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Numbers & Working Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-[#C9A45C] mb-4">
              أرقام التواصل وأوقات الدوام
            </h3>
            <ul className="space-y-3.5 text-sm text-white/85">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs text-white/60">الهاتف:</span>
                  <a
                    href={`tel:${CLINIC_INFO.phoneTel}`}
                    className="font-semibold hover:text-[#C9A45C] tabular-nums inline-block"
                    dir="ltr"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <span className="mx-1.5 text-white/30">|</span>
                  <a
                    href={`tel:${CLINIC_INFO.secondaryPhoneTel}`}
                    className="font-semibold hover:text-[#C9A45C] tabular-nums inline-block"
                    dir="ltr"
                  >
                    {CLINIC_INFO.secondaryPhoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle
                  className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs text-white/60">واتساب:</span>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-[#C9A45C] tabular-nums inline-block"
                    dir="ltr"
                  >
                    {CLINIC_INFO.whatsappDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock
                  className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs text-white/60">أوقات الدوام:</span>
                  <p className="text-xs leading-relaxed text-white/90">
                    الأحد – الخميس والسبت: مفتوح 24 ساعة
                    <br />
                    الجمعة: مغلق
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Full Verbatim Address */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-[#C9A45C] mb-4">
              العنوان الرسمي الكامل
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
              <MapPin
                className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-white mb-2">
                  {CLINIC_INFO.fullAddressAr}
                </p>
                <p className="text-xs text-white/65 font-english" dir="ltr">
                  {CLINIC_INFO.cityCountryEn}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <p dir="ltr">© Elegant Dental Center Smile (EDCS ). All Rights Reserved.</p>
          <p>{CLINIC_INFO.nameAr} — صنعاء، اليمن</p>
        </div>
      </div>
    </footer>
  );
};
