import { CLINIC_INFO, WORKING_HOURS } from '../data/clinicData';

export interface BookingFormData {
  patientName: string;
  phone: string;
  service: string;
  preferredDay: string;
  preferredTime: string;
  notes: string;
}

export interface BookingValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof BookingFormData, string>>;
}

export const AVAILABLE_TIME_SLOTS = [
  'صباحًا (8:00 ص - 12:00 م)',
  'ظهرًا (12:00 م - 4:00 م)',
  'مساءً (4:00 م - 8:00 م)',
  'ليلاً (8:00 م - 12:00 ص)',
  'مناوبة ليلية / طوارئ (بعد منتصف الليل)',
] as const;

export function isClinicOpenOnDay(dayName: string): boolean {
  const normalized = dayName.trim();
  const found = WORKING_HOURS.find((item) => item.day === normalized);
  return found ? found.isOpen : false;
}

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[\s\-()]/g, '').trim();
}

export function isValidPhoneNumber(phone: string): boolean {
  const cleaned = normalizePhoneNumber(phone);
  // Accept standard Yemeni mobile/landline formats or international numbers (7 to 15 digits, optional leading +)
  return /^\+?\d{7,15}$/.test(cleaned);
}

export function validateBookingForm(data: BookingFormData): BookingValidationResult {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  const trimmedName = data.patientName.trim();
  if (!trimmedName) {
    errors.patientName = 'يرجى إدخال اسم المراجع الكامل.';
  } else if (trimmedName.length < 3) {
    errors.patientName = 'يرجى إدخال اسم صحيح لا يقل عن 3 أحرف.';
  }

  const trimmedPhone = data.phone.trim();
  if (!trimmedPhone) {
    errors.phone = 'يرجى إدخال رقم الهاتف للتواصل.';
  } else if (!isValidPhoneNumber(trimmedPhone)) {
    errors.phone = 'يرجى إدخال رقم هاتف صحيح (مثال: 0776800058 أو +967776800058).';
  }

  if (!data.service.trim()) {
    errors.service = 'يرجى اختيار الخدمة المطلوبة.';
  }

  if (!data.preferredDay.trim()) {
    errors.preferredDay = 'يرجى اختيار اليوم المناسب للزيارة.';
  } else if (!isClinicOpenOnDay(data.preferredDay)) {
    errors.preferredDay = 'المركز مغلق يوم الجمعة، يرجى اختيار يوم آخر من أيام العمل (السبت - الخميس).';
  }

  if (!data.preferredTime.trim()) {
    errors.preferredTime = 'يرجى اختيار الوقت المناسب للزيارة.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppBookingMessage(data: BookingFormData): string {
  const lines = [
    'مرحبًا مركز إيدكس Elegant Dental Center Smile (EDCS )،',
    'أرغب في إرسال طلب حجز موعد بالتفاصيل التالية:',
    '',
    `• اسم المراجع: ${data.patientName.trim()}`,
    `• رقم الهاتف: ${data.phone.trim()}`,
    `• الخدمة المطلوبة: ${data.service.trim()}`,
    `• اليوم المناسب: ${data.preferredDay.trim()}`,
    `• الوقت المناسب: ${data.preferredTime.trim()}`,
  ];

  if (data.notes.trim()) {
    lines.push(`• ملاحظات إضافية: ${data.notes.trim()}`);
  }

  lines.push('');
  lines.push('بانتظار تأكيدكم للموعد، وشكرًا لكم.');

  return lines.join('\n');
}

export function buildWhatsAppBookingUrl(data: BookingFormData): string {
  const message = buildWhatsAppBookingMessage(data);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`;
}
