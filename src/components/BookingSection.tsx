import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import {
  CLINIC_INFO,
  ALL_SERVICES,
  WORKING_HOURS,
} from '../data/clinicData';
import {
  BookingFormData,
  AVAILABLE_TIME_SLOTS,
  validateBookingForm,
  buildWhatsAppBookingUrl,
  buildWhatsAppBookingMessage,
} from '../utils/booking';

interface BookingSectionProps {
  preselectedService: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    phone: '',
    service: preselectedService || ALL_SERVICES[0].title,
    preferredDay: 'الأحد',
    preferredTime: AVAILABLE_TIME_SLOTS[0],
    notes: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormData, string>>
  >({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    field: keyof BookingFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedUrl(null);
      return;
    }

    setErrors({});
    const whatsappUrl = buildWhatsAppBookingUrl(formData);
    const whatsappMsg = buildWhatsAppBookingMessage(formData);
    setSubmittedUrl(whatsappUrl);
    setSubmittedMessage(whatsappMsg);

    // Trigger anchor navigation to WhatsApp in a new tab without window.open
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="booking-heading"
      className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#101A32]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Right Column: Official Contact Information & Channels */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B08B42] mb-3">
              <span>الحجز والتواصل المباشر</span>
              <span aria-hidden="true">·</span>
              <span>خدمة المراجعين</span>
            </div>

            <h2
              id="booking-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101A32] leading-snug mb-5"
              style={{ textWrap: 'balance' }}
            >
              {CLINIC_INFO.bookingSectionTitle}
            </h2>

            <p className="text-base text-[#101A32]/80 leading-relaxed mb-8">
              يسعدنا استقبال طلبات حجز المواعيد والاستفسارات عبر واتساب أو الاتصال المباشر. قم بتعبئة البيانات وسنقوم بتحويل طلبك مباشرة إلى واتساب المركز لتأكيد الموعد.
            </p>

            {/* Official Contact Cards */}
            <div className="space-y-4">
              {/* Primary Phone */}
              <div className="p-5 rounded-xl bg-white border border-[#101A32]/10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#101A32] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C9A45C]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#B08B42] mb-1">
                    أرقام الهاتف المباشرة
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <a
                      href={`tel:${CLINIC_INFO.phoneTel}`}
                      className="text-base font-bold text-[#101A32] hover:text-[#B08B42] tabular-nums"
                      dir="ltr"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                    <span className="hidden sm:inline text-[#101A32]/30">·</span>
                    <a
                      href={`tel:${CLINIC_INFO.secondaryPhoneTel}`}
                      className="text-base font-bold text-[#101A32] hover:text-[#B08B42] tabular-nums"
                      dir="ltr"
                    >
                      {CLINIC_INFO.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="p-5 rounded-xl bg-white border border-[#101A32]/10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#101A32] flex items-center justify-center shrink-0">
                  <MessageCircle
                    className="w-5 h-5 text-[#C9A45C]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#B08B42] mb-1">
                    رقم الواتساب الرسمي
                  </p>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#101A32] hover:text-[#B08B42] tabular-nums inline-block"
                    dir="ltr"
                  >
                    {CLINIC_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Full Verbatim Address in Contact Section */}
              <div className="p-5 rounded-xl bg-white border border-[#101A32]/10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#101A32] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A45C]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#B08B42] mb-1">
                    العنوان الكامل للمركز
                  </p>
                  <p className="text-sm font-bold text-[#101A32] leading-relaxed mb-1">
                    {CLINIC_INFO.fullAddressAr}
                  </p>
                  <p
                    className="text-xs font-medium text-[#101A32]/70 font-english"
                    dir="ltr"
                  >
                    {CLINIC_INFO.cityCountryEn}
                  </p>
                </div>
              </div>

              {/* Official Facebook & Google Maps Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#101A32] bg-white hover:bg-[#101A32] hover:text-white border border-[#101A32]/15 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>صفحتنا الرسمية على Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#101A32] bg-white hover:bg-[#101A32] hover:text-white border border-[#101A32]/15 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>الموقع على Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Left Column: Validated WhatsApp Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#101A32]/12 p-7 sm:p-10 shadow-sm">
              <div className="pb-6 mb-6 border-b border-[#101A32]/10">
                <h3 className="text-xl font-bold text-[#101A32] mb-1.5">
                  نموذج طلب حجز موعد
                </h3>
                <p className="text-xs text-[#101A32]/70">
                  ملاحظة هامة: إرسال هذا النموذج يُنشئ طلب حجز عبر واتساب، ويحتاج الموعد إلى تأكيد نهائي من قبل استقبال المركز.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Patient Name */}
                  <div>
                    <label
                      htmlFor="booking-patient-name"
                      className="block text-sm font-semibold text-[#101A32] mb-2"
                    >
                      اسم المراجع <span className="text-[#B08B42]">*</span>
                    </label>
                    <input
                      id="booking-patient-name"
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={(e) => handleChange('patientName', e.target.value)}
                      placeholder="الاسم الكامل"
                      className={`w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border text-sm text-[#101A32] placeholder:text-[#101A32]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A45C] ${
                        errors.patientName
                          ? 'border-red-600'
                          : 'border-[#101A32]/15'
                      }`}
                    />
                    {errors.patientName && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.patientName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-semibold text-[#101A32] mb-2"
                    >
                      رقم الهاتف <span className="text-[#B08B42]">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="0776 800 058"
                      className={`w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border text-sm text-[#101A32] text-right placeholder:text-[#101A32]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A45C] tabular-nums ${
                        errors.phone ? 'border-red-600' : 'border-[#101A32]/15'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Requested Service */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-sm font-semibold text-[#101A32] mb-2"
                  >
                    الخدمة المطلوبة <span className="text-[#B08B42]">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border text-sm text-[#101A32] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] ${
                      errors.service ? 'border-red-600' : 'border-[#101A32]/15'
                    }`}
                  >
                    <optgroup label="التخصصات الأساسية">
                      {ALL_SERVICES.filter((s) => s.category === 'core').map(
                        (s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="العناية بصحة الفم والأسنان واللثة">
                      {ALL_SERVICES.filter((s) => s.category === 'preventive').map(
                        (s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        )
                      )}
                    </optgroup>
                  </select>
                  {errors.service && (
                    <p
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Day */}
                  <div>
                    <label
                      htmlFor="booking-day"
                      className="block text-sm font-semibold text-[#101A32] mb-2"
                    >
                      اليوم المناسب <span className="text-[#B08B42]">*</span>
                    </label>
                    <select
                      id="booking-day"
                      value={formData.preferredDay}
                      onChange={(e) => handleChange('preferredDay', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border text-sm text-[#101A32] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] ${
                        errors.preferredDay
                          ? 'border-red-600'
                          : 'border-[#101A32]/15'
                      }`}
                    >
                      {WORKING_HOURS.map((dayObj) => (
                        <option key={dayObj.day} value={dayObj.day}>
                          {dayObj.day} ({dayObj.hours})
                        </option>
                      ))}
                    </select>
                    {errors.preferredDay && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.preferredDay}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="booking-time"
                      className="block text-sm font-semibold text-[#101A32] mb-2"
                    >
                      الوقت المناسب <span className="text-[#B08B42]">*</span>
                    </label>
                    <select
                      id="booking-time"
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border text-sm text-[#101A32] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] ${
                        errors.preferredTime
                          ? 'border-red-600'
                          : 'border-[#101A32]/15'
                      }`}
                    >
                      {AVAILABLE_TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.preferredTime}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-sm font-semibold text-[#101A32] mb-2"
                  >
                    ملاحظات إضافية (اختياري)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    placeholder="أي استفسار أو تفصيل إضافي تود إضافته لطلب الحجز..."
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border border-[#101A32]/15 text-sm text-[#101A32] placeholder:text-[#101A32]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-[#101A32] bg-[#C9A45C] hover:bg-[#d7b571] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                >
                  <Send className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>إرسال طلب الحجز عبر واتساب</span>
                </button>
              </form>

              {/* Confirmation & Direct WhatsApp Handoff Panel */}
              {submittedUrl && submittedMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 p-5 rounded-xl bg-[#101A32] text-white border border-[#C9A45C]/40"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#C9A45C]">
                        تم تجهيز طلب الحجز عبر واتساب بنجاح
                      </h4>
                      <p className="text-xs text-white/80 mt-1 leading-relaxed">
                        يرجى إرسال الرسالة في محادثة واتساب ليقوم فريق المركز بمراجعة الطلب وتأكيد الموعد معكم.
                      </p>
                    </div>
                  </div>

                  <pre className="text-xs bg-black/30 p-3.5 rounded-lg text-white/90 whitespace-pre-wrap font-sans leading-relaxed mb-4 border border-white/10">
                    {submittedMessage}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#101A32] bg-[#C9A45C] hover:bg-[#d7b571] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>فتح المحادثة على واتساب الآن</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#C9A45C]" />
                          <span>تم نسخ تفاصيل الطلب</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>نسخ نص الرسالة</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
