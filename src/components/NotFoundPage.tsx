import React from 'react';
import { Home, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome }) => {
  return (
    <main className="min-h-screen bg-[#101A32] text-white flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-lg w-full bg-[#182647] border border-[#C9A45C]/30 rounded-2xl p-8 sm:p-12">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-transparent mx-auto mb-6 flex items-center justify-center">
          <img
            src={CLINIC_INFO.assets.logo}
            alt="شعار Elegant Dental Center Smile (EDCS )"
            className="w-full h-full object-contain mix-blend-lighten"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <p className="font-english text-5xl font-bold text-[#C9A45C] tabular-nums mb-3">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          الصفحة المطلوبة غير موجودة
        </h1>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
          عذرًا، الرابط الذي تحاول الوصول إليه غير متوفر أو تم نقله. يمكنك العودة مباشرة إلى الصفحة الرئيسية لمركز إيدكس Elegant Dental Center Smile (EDCS ) أو التواصل معنا لحجز موعدك.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onReturnHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#101A32] bg-[#C9A45C] hover:bg-[#d7b571] rounded-lg transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>العودة إلى الرئيسية</span>
          </button>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/70 flex items-center justify-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#C9A45C]" aria-hidden="true" />
          <span dir="ltr">{CLINIC_INFO.phoneDisplay}</span>
        </div>
      </div>
    </main>
  );
};
