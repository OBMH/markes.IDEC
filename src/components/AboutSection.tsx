import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutSectionProps {
  onOpenLightbox?: (imagePath: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="pt-10 pb-20 lg:pt-12 lg:pb-24 bg-[#FFFFFF] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Right Column (in RTL): Editorial Copy & Patient Experience Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#B08B42] mb-3">
                <span>من نحن</span>
                <span aria-hidden="true">·</span>
                <span className="font-english tracking-wider uppercase text-base sm:text-lg font-semibold">
                  {CLINIC_INFO.nameEn}
                </span>
              </div>

              <h2
                id="about-heading"
                className="text-2xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#101A32] leading-snug mb-6"
                style={{ textWrap: 'balance' }}
              >
                {CLINIC_INFO.aboutTitle}
              </h2>

              <p className="text-base sm:text-lg text-[#101A32]/80 leading-relaxed mb-8">
                {CLINIC_INFO.aboutDescription}
              </p>

              {/* Key Care Commitments */}
              <div className="space-y-4 pt-6 border-t border-[#101A32]/10">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck
                    className="w-5 h-5 text-[#C9A45C] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[#101A32]">
                      تخصصات علاجية وتجميلية متكاملة
                    </h3>
                    <p className="text-sm text-[#101A32]/70 leading-relaxed mt-0.5">
                      نجمع بين زراعة الأسنان، تقويم الأسنان، وتجميل الابتسامة، إلى جانب العناية الوقائية بصحة اللثة ونظافة الفم.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Sparkles
                    className="w-5 h-5 text-[#C9A45C] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[#101A32]">
                      بيئة مريحة تهتم بتجربة المراجع
                    </h3>
                    <p className="text-sm text-[#101A32]/70 leading-relaxed mt-0.5">
                      حرصنا على تصميم عيادات ومرافق الاستقبال لتمنح المراجع الهدوء والخصوصية والراحة طوال فترة زيارته.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Experience / Waiting Lounge Highlight using Center Photo 2 */}
            <div className="mt-10 pt-8 border-t border-[#101A32]/10 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5">
                <button
                  type="button"
                  onClick={() => onOpenLightbox?.(CLINIC_INFO.assets.center2)}
                  className="group relative block w-full overflow-hidden rounded-xl border border-[#101A32]/10 focus-visible:outline-2 focus-visible:outline-[#C9A45C] cursor-pointer"
                  aria-label="تكبير صورة صالة استقبال وانتظار المراجعين في المركز"
                >
                  <img
                    src={CLINIC_INFO.assets.center2}
                    alt="صالة انتظار المراجعين في مركز إيدكس Elegant Dental Center Smile (EDCS )"
                    width={760}
                    height={1000}
                    loading="eager"
                    decoding="async"
                    className="w-full h-40 object-cover object-center group-hover:scale-105 transition-transform duration-150"
                  />
                </button>
              </div>
              <div className="sm:col-span-7">
                <p className="text-xs font-semibold text-[#B08B42] mb-1">
                  تجربة المراجعين والمرافق الطبية
                </p>
                <h3 className="text-base font-bold text-[#101A32] mb-2">
                  استقبال راقٍ وراحة تبدأ من اللحظة الأولى
                </h3>
                <p className="text-sm text-[#101A32]/75 leading-relaxed">
                  تستقبلكم صالة الانتظار الرحبة بشعارنا الدائم «Smile with EDC» مع خدمة مستمرة على مدار 24 ساعة خلال أيام العمل الأسبوعية.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column (in RTL): Authentic Center Photo 1 (Clinical Operatory) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-[#101A32]/10 bg-[#F8F6F0] flex flex-col justify-between">
              <button
                type="button"
                onClick={() => onOpenLightbox?.(CLINIC_INFO.assets.center1)}
                className="group relative w-full flex-1 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                aria-label="تكبير صورة غرفة المعالجة السنية في مركز إيدكس"
              >
                <img
                  src={CLINIC_INFO.assets.center1}
                  alt="غرفة المعالجة ووحدة طب الأسنان في مركز Elegant Dental Center Smile (EDCS )"
                  width={1200}
                  height={894}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full min-h-[380px] lg:min-h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A32]/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between gap-4 text-right text-white">
                  <div>
                    <p className="text-xs text-[#C9A45C] font-semibold mb-1">
                      مرافق المركز الحقيقية
                    </p>
                    <p className="text-base sm:text-lg font-bold">
                      عيادات مجهزة بعناية لراحتكم وسلامتكم
                    </p>
                  </div>
                  <span className="text-xs font-medium text-white/90 underline underline-offset-4 shrink-0">
                    تكبير الصورة
                  </span>
                </div>
              </button>

              {/* Bottom caption strip */}
              <div className="px-6 py-4 bg-[#F8F6F0] border-t border-[#101A32]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#101A32]/80">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
                  <span>خصوصية تامة وعناية فائقة بالتعقيم والنظافة</span>
                </div>
                <span className="font-english text-sm font-semibold text-[#101A32]">
                  Elegant Dental Center Smile (EDCS ) — Sana&apos;a
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
