import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

const DEFAULT_WHATSAPP_MESSAGE =
  'مرحبًا مركز إيدكس Elegant Dental Center Smile (EDCS )، أود الاستفسار وحجز موعد لديكم.';

export const FloatingWhatsAppButton: React.FC = () => {
  const prefilledWhatsappUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    DEFAULT_WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={prefilledWhatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm border border-white/25 transition-colors duration-200 animate-whatsapp-pulse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.359 5.016L2 22l5.156-1.359c1.484.813 3.156 1.25 4.875 1.25 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.453 1.344-2.016 1.422-.531.078-1.203.109-1.953-.125-.453-.141-1.047-.344-1.797-.672-3.172-1.375-5.234-4.563-5.391-4.781-.156-.203-1.281-1.703-1.281-3.25s.813-2.313 1.109-2.625c.297-.313.641-.391.859-.391.219 0 .422.016.609.016.188.016.453-.078.703.531.266.625.891 2.172.969 2.328.078.156.125.344.031.547-.094.203-.141.344-.297.531-.156.188-.328.406-.469.547-.156.156-.313.328-.141.641.188.313.813 1.344 1.75 2.172 1.203 1.078 2.219 1.406 2.531 1.563.313.156.5.125.688-.078.188-.203.797-.922 1.016-1.234.219-.313.422-.266.719-.156.297.109 1.875.891 2.203 1.047.328.156.547.234.625.375.078.141.078.813-.172 1.516z" />
      </svg>
      <span className="whitespace-nowrap">واتساب</span>
    </a>
  );
};
