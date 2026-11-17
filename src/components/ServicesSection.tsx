import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';
import {
  CORE_SERVICES,
  PREVENTIVE_SERVICES,
  ServiceItem,
} from '../data/clinicData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

const ServiceCard: React.FC<{
  service: ServiceItem;
  onSelect: (title: string) => void;
}> = ({ service, onSelect }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="w-full group bg-white rounded-xl border border-[#101A32]/10 overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        {/* Real Photographic Image Header */}
        <div className="relative h-56 w-full overflow-hidden bg-[#101A32]">
          {!imgError ? (
            <img
              src={service.image}
              alt={service.imageAlt}
              width={640}
              height={427}
              loading="eager"
              decoding="async"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-150"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#101A32] to-[#182647] p-6 text-center">
              <span className="text-[#C9A45C] font-bold text-lg">
                {service.title}
              </span>
            </div>
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101A32]/70 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-xs text-white/90">
            <span className="font-semibold text-[#C9A45C] tabular-nums">
              {service.number}. {service.categoryLabel}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#101A32] mb-3 group-hover:text-[#B08B42] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-[#101A32]/75 leading-relaxed mb-5">
            {service.description}
          </p>

          <ul className="space-y-2 border-t border-[#101A32]/8 pt-4">
            {service.highlights.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-xs font-medium text-[#101A32]/80"
              >
                <Check
                  className="w-3.5 h-3.5 text-[#C9A45C] shrink-0"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <button
          type="button"
          onClick={() => onSelect(service.title)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#101A32] bg-[#F8F6F0] hover:bg-[#C9A45C] hover:text-[#101A32] border border-[#101A32]/12 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>احجز موعدًا لخدمة {service.title}</span>
        </button>
      </div>
    </article>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'preventive'>('all');

  const showCore = activeFilter === 'all' || activeFilter === 'core';
  const showPreventive = activeFilter === 'all' || activeFilter === 'preventive';

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
              <span>الخدمات الطبية والتخصصات</span>
              <span aria-hidden="true">·</span>
              <span>رعاية علاجية ووقائية شاملة</span>
            </div>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101A32] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              خدمات متخصصة في زراعة وتقويم وتجميل الأسنان والعناية بصحة الفم
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="تصفية الخدمات الطبية"
            className="flex flex-wrap sm:inline-flex items-center gap-1 p-1.5 bg-white border border-[#101A32]/10 rounded-lg w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`flex-1 sm:flex-initial px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#101A32] text-[#C9A45C]'
                  : 'text-[#101A32]/75 hover:text-[#101A32]'
              }`}
            >
              جميع الخدمات (9)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('core')}
              className={`flex-1 sm:flex-initial px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'core'
                  ? 'bg-[#101A32] text-[#C9A45C]'
                  : 'text-[#101A32]/75 hover:text-[#101A32]'
              }`}
            >
              التخصصات الأساسية (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('preventive')}
              className={`flex-1 sm:flex-initial px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'preventive'
                  ? 'bg-[#101A32] text-[#C9A45C]'
                  : 'text-[#101A32]/75 hover:text-[#101A32]'
              }`}
            >
              العناية الوقائية واللثة (5)
            </button>
          </div>
        </div>

        {/* Part 1: Core Dental Specialties */}
        {showCore && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-8 border-b border-[#101A32]/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101A32]">
                  أولاً: الخدمات والتخصصات الأساسية
                </h3>
                <p className="text-sm text-[#101A32]/70 mt-1">
                  حلول تخصصية متكاملة في زراعة وتقويم وتجميل الأسنان وتصميم الابتسامة
                </p>
              </div>
              <span className="text-xs font-semibold text-[#B08B42] tabular-nums">
                01 — 04 تخصصات رئيسية
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelect={onSelectServiceForBooking}
                />
              ))}
            </div>
          </div>
        )}

        {/* Part 2: Preventive Oral & Gum Care Services */}
        {showPreventive && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-8 border-b border-[#101A32]/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101A32]">
                  ثانيًا: خدمات العناية بصحة الفم والأسنان واللثة
                </h3>
                <p className="text-sm text-[#101A32]/70 mt-1">
                  برامج ومجالات العناية الوقائية للحفاظ على نظافة الأسنان وسلامة اللثة والوقاية من التسوس
                </p>
              </div>
              <span className="text-xs font-semibold text-[#B08B42] tabular-nums">
                05 — 09 مجالات العناية الوقائية
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {PREVENTIVE_SERVICES.map((service, idx) => (
                <div
                  key={service.id}
                  className={
                    idx < 3
                      ? 'lg:col-span-2 flex'
                      : 'lg:col-span-3 flex'
                  }
                >
                  <ServiceCard
                    service={service}
                    onSelect={onSelectServiceForBooking}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
