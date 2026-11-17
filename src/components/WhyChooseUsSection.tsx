import React from 'react';
import {
  Award,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  CalendarCheck,
  MapPin,
} from 'lucide-react';
import { WHY_CHOOSE_US, WhyChooseUsItem } from '../data/clinicData';

const renderIcon = (iconName: WhyChooseUsItem['iconName']) => {
  const iconClass = 'w-6 h-6 text-[#C9A45C]';
  switch (iconName) {
    case 'implant':
      return <Award className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={iconClass} aria-hidden="true" />;
    case 'stethoscope':
      return <Stethoscope className={iconClass} aria-hidden="true" />;
    case 'calendar':
      return <CalendarCheck className={iconClass} aria-hidden="true" />;
    case 'mapPin':
      return <MapPin className={iconClass} aria-hidden="true" />;
  }
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
            <span>لماذا تختارنا؟</span>
            <span aria-hidden="true">·</span>
            <span>معايير الرعاية في إيدكس (EDCS )</span>
          </div>
          <h2
            id="why-choose-us-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101A32] leading-snug"
            style={{ textWrap: 'balance' }}
          >
            مزايا تجعل Elegant Dental Center Smile (EDCS ) خيارك الموثوق للعناية بابتسامتك
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-xl bg-[#F8F6F0] border border-[#101A32]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#101A32] flex items-center justify-center shrink-0">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="text-sm font-bold text-[#B08B42] tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#101A32] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#101A32]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
