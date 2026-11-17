import React from 'react';
import { Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { CLINIC_INFO, GALLERY_ITEMS } from '../data/clinicData';

interface GallerySectionProps {
  selectedImage: string | null;
  onSelectImage: (imagePath: string | null) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  selectedImage,
  onSelectImage,
}) => {
  const currentIndex = selectedImage
    ? GALLERY_ITEMS.findIndex((item) => item.image === selectedImage)
    : -1;

  const activeItem =
    currentIndex >= 0
      ? GALLERY_ITEMS[currentIndex]
      : selectedImage
      ? {
          id: 'custom',
          title: CLINIC_INFO.nameAr,
          subtitle: CLINIC_INFO.nameEn,
          description: 'صورة حقيقية من داخل مركز إيدكس Elegant Dental Center Smile (EDCS ).',
          image: selectedImage,
          aspectLabel: 'معرض المركز',
        }
      : null;

  const handleNext = () => {
    if (currentIndex < 0) return;
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    onSelectImage(GALLERY_ITEMS[nextIdx].image);
  };

  const handlePrev = () => {
    if (currentIndex < 0) return;
    const prevIdx =
      (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelectImage(GALLERY_ITEMS[prevIdx].image);
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
              <span>معرض الصور الحقيقية للمركز</span>
              <span aria-hidden="true">·</span>
              <span>اضغط على أي صورة للتكبير</span>
            </div>
            <h2
              id="gallery-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101A32] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {CLINIC_INFO.gallerySectionTitle}
            </h2>
          </div>

          <p className="text-sm text-[#101A32]/75 max-w-md">
            صور فوتوغرافية حقيقية من داخل عيادات ومرافق مركز إيدكس لتقويم وزراعة وتجميل الأسنان في صنعاء.
          </p>
        </div>

        {/* 3 Authentic Center Photos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Primary Wide Suite Photo (Center 3) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="group relative flex-1 rounded-2xl overflow-hidden bg-[#101A32] border border-[#101A32]/10 flex flex-col justify-between">
              <button
                type="button"
                onClick={() => onSelectImage(GALLERY_ITEMS[0].image)}
                aria-label={`تكبير صورة: ${GALLERY_ITEMS[0].title}`}
                className="relative w-full flex-1 overflow-hidden text-right cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
              >
                <img
                  src={GALLERY_ITEMS[0].image}
                  alt={GALLERY_ITEMS[0].title}
                  width={1280}
                  height={800}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full min-h-[340px] sm:min-h-[440px] object-cover object-center group-hover:scale-103 transition-transform duration-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A32]/85 via-[#101A32]/20 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#101A32]/80 border border-white/20 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#101A32] transition-colors">
                  <Maximize2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="absolute bottom-5 right-5 left-5 text-white">
                  <p className="text-xs font-semibold text-[#C9A45C] mb-1">
                    {GALLERY_ITEMS[0].subtitle}
                  </p>
                  <h3 className="text-xl font-bold mb-1.5">
                    {GALLERY_ITEMS[0].title}
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {GALLERY_ITEMS[0].description}
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Secondary Column: Center 1 (Operatory) & Center 2 (Waiting Lounge) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {GALLERY_ITEMS.slice(1).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-[#101A32] border border-[#101A32]/10 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => onSelectImage(item.image)}
                  aria-label={`تكبير صورة: ${item.title}`}
                  className="relative w-full h-full min-h-[250px] overflow-hidden text-right cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={960}
                    height={720}
                    loading="eager"
                    decoding="async"
                    className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A32]/90 via-[#101A32]/25 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#101A32]/80 border border-white/20 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#101A32] transition-colors">
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-4 right-4 left-4 text-white">
                    <p className="text-xs font-semibold text-[#C9A45C] mb-0.5">
                      {item.subtitle}
                    </p>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`عرض الصورة المكبرة: ${activeItem.title}`}
          className="fixed inset-0 z-50 bg-[#101A32]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => onSelectImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#101A32] border border-[#C9A45C]/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <p className="text-xs text-[#C9A45C] font-semibold">
                  {activeItem.subtitle}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onSelectImage(null)}
                aria-label="إغلاق العرض المكبر"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#101A32] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-black/40 flex items-center justify-center max-h-[72vh] overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />

              {currentIndex >= 0 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="الصورة السابقة"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#101A32]/85 hover:bg-[#C9A45C] text-white hover:text-[#101A32] border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="الصورة التالية"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#101A32]/85 hover:bg-[#C9A45C] text-white hover:text-[#101A32] border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Footer */}
            <div className="px-6 py-4 bg-[#101A32] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-white/85">{activeItem.description}</p>
              {currentIndex >= 0 && (
                <span className="text-xs text-[#C9A45C] font-semibold tabular-nums shrink-0">
                  صورة {currentIndex + 1} من {GALLERY_ITEMS.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
