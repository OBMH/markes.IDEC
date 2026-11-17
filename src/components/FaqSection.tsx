import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101A32]/8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
            <span>الأسئلة الشائعة</span>
            <span aria-hidden="true">·</span>
            <span>إجابات واضحة وموثوقة</span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101A32] leading-snug"
            style={{ textWrap: 'balance' }}
          >
            كل ما تود معرفته عن Elegant Dental Center Smile (EDCS )
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const contentId = `faq-panel-${item.id}`;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#101A32]/12 bg-[#F8F6F0] overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-right flex items-center justify-between gap-4 hover:bg-[#101A32]/[0.03] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#101A32] flex items-center gap-3">
                      <span className="text-xs font-bold text-[#B08B42] tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#101A32] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B08B42]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#101A32]/80 leading-relaxed border-t border-[#101A32]/8 bg-white"
                  >
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
