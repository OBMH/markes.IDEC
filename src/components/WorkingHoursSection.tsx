import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { CLINIC_INFO, WORKING_HOURS } from '../data/clinicData';

export const WorkingHoursSection: React.FC = () => {
  const currentDayIndex = new Date().getDay();

  return (
    <section
      id="working-hours"
      aria-labelledby="working-hours-heading"
      className="py-20 lg:py-24 bg-[#F8F6F0] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Right Column: Heading & 24/7 Care Message */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
              <span>أوقات العمل الرسمية</span>
              <span aria-hidden="true">·</span>
              <span>جدول الدوام الأسبوعي</span>
            </div>

            <h2
              id="working-hours-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101A32] leading-snug mb-5"
              style={{ textWrap: 'balance' }}
            >
              أوقات الدوام في Elegant Dental Center Smile (EDCS )
            </h2>

            <p className="text-base sm:text-lg font-semibold text-[#101A32] leading-relaxed mb-6">
              {CLINIC_INFO.workingHoursNote}
            </p>

            <p className="text-sm text-[#101A32]/75 leading-relaxed mb-8">
              يستقبل المركز المراجعين على مدار 24 ساعة من يوم السبت وحتى يوم الخميس، بينما يكون يوم الجمعة عطلة أسبوعية للمركز.
            </p>

            <div className="p-6 rounded-xl bg-[#101A32] text-white border border-[#C9A45C]/30">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#C9A45C] shrink-0" aria-hidden="true" />
                <span className="text-sm font-bold text-[#C9A45C]">
                  خدمة متواصلة خلال أيام العمل
                </span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                يمكنكم إرسال طلب حجز الموعد في أي وقت عبر الموقع أو واتساب، وسيتم التواصل معكم لتأكيد الموعد المناسب.
              </p>
            </div>
          </div>

          {/* Left Column: Structured Weekly Schedule Table */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#101A32]/12 overflow-hidden">
              <div className="px-6 py-4 bg-[#101A32] text-white flex items-center justify-between">
                <span className="text-sm font-bold">اليوم</span>
                <span className="text-sm font-bold text-[#C9A45C]">
                  حالة الدوام وأوقات العمل
                </span>
              </div>

              <div className="divide-y divide-[#101A32]/8">
                {WORKING_HOURS.map((item) => {
                  const isToday = item.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`px-6 py-4 flex items-center justify-between gap-4 transition-colors ${
                        !item.isOpen
                          ? 'bg-[#F8F6F0]/90'
                          : isToday
                          ? 'bg-[#C9A45C]/10'
                          : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-base font-bold ${
                            !item.isOpen ? 'text-[#101A32]/70' : 'text-[#101A32]'
                          }`}
                        >
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="text-xs font-semibold text-[#B08B42]">
                            (اليوم)
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {item.isOpen ? (
                          <>
                            <CheckCircle2
                              className="w-4 h-4 text-[#C9A45C] shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-semibold text-[#101A32] tabular-nums">
                              {item.hours}
                            </span>
                          </>
                        ) : (
                          <>
                            <XCircle
                              className="w-4 h-4 text-[#B08B42] shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-bold text-[#B08B42]">
                              {item.hours} (عطلة أسبوعية)
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
