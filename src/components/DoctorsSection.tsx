import React from 'react';
import { Stethoscope, CheckCircle2, Calendar } from 'lucide-react';
import { CLINIC_INFO, DOCTORS_LIST } from '../data/clinicData';

interface DoctorsSectionProps {
  onBookWithDoctor: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onBookWithDoctor,
}) => {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="py-20 lg:py-28 bg-[#101A32] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A45C] mb-3">
            <span>الأطباء والفريق الطبي</span>
            <span aria-hidden="true">·</span>
            <span>رعاية طبية مسؤولة</span>
          </div>

          <h2
            id="doctors-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-5"
            style={{ textWrap: 'balance' }}
          >
            {CLINIC_INFO.doctorsSectionTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#F8F6F0]/80 leading-relaxed">
            {CLINIC_INFO.doctorsSectionSubtitle}
          </p>
        </div>

        {/* Typographic Luxury Doctor Cards (Strictly No Personal/AI Photos as Requested) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DOCTORS_LIST.map((doctor, index) => (
            <article
              key={doctor.id}
              className="rounded-2xl bg-[#182647]/80 border border-[#C9A45C]/30 p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Top Decorative Header with Refined Medical Icon */}
                <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#101A32] border border-[#C9A45C]/40 flex items-center justify-center shrink-0">
                      <Stethoscope
                        className="w-7 h-7 text-[#C9A45C]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#C9A45C] mb-1">
                        {doctor.roleLabel}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                        {doctor.name}
                      </h3>
                    </div>
                  </div>
                  <span className="font-english text-2xl font-bold text-[#C9A45C]/40 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Marketing Description */}
                <p className="text-base text-[#F8F6F0]/85 leading-relaxed mb-6">
                  {doctor.description}
                </p>

                {/* Care Focus Points */}
                <ul className="space-y-3 mb-8">
                  {doctor.focusPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-[#F8F6F0]/90"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-white/65">
                  مركز إيدكس لتقويم وزراعة وتجميل الأسنان
                </span>
                <button
                  type="button"
                  onClick={onBookWithDoctor}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#101A32] bg-[#C9A45C] hover:bg-[#d7b571] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>احجز موعدك بالمركز</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
