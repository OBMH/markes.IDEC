import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  buildWhatsAppBookingMessage,
  buildWhatsAppBookingUrl,
  isClinicOpenOnDay,
  isValidPhoneNumber,
} from './booking';
import { CLINIC_INFO, ALL_SERVICES, DOCTORS_LIST } from '../data/clinicData';

test('official clinic address and data match exact specification', () => {
  assert.equal(CLINIC_INFO.nameEn, 'Elegant Dental Center Smile (EDCS )');
  assert.equal(CLINIC_INFO.nameShort, 'EDCS');
  assert.equal(CLINIC_INFO.nameAr, 'مركز إيدكس لتقويم وزراعة وتجميل الأسنان');
  assert.equal(
    CLINIC_INFO.fullAddressAr,
    'صنعاء - دار سلم - المقالح الجديد - قبل مستشفى ابو حرب الملصي 17 يوليو سابقا امام معهد رادفورد'
  );
  assert.equal(CLINIC_INFO.whatsappNumber, '967776800058');
  assert.equal(CLINIC_INFO.ratingValue, '4.9');
  assert.equal(CLINIC_INFO.reviewsCount, 39);
  assert.equal(ALL_SERVICES.length, 9);
  assert.equal(DOCTORS_LIST.length, 2);
});

test('working hours check identifies Friday as closed and other days as open 24h', () => {
  assert.equal(isClinicOpenOnDay('الأحد'), true);
  assert.equal(isClinicOpenOnDay('الخميس'), true);
  assert.equal(isClinicOpenOnDay('السبت'), true);
  assert.equal(isClinicOpenOnDay('الجمعة'), false);
});

test('phone validation accepts local Yemeni and international formats', () => {
  assert.equal(isValidPhoneNumber('0776 800 058'), true);
  assert.equal(isValidPhoneNumber('+967 776 800 058'), true);
  assert.equal(isValidPhoneNumber('785000899'), true);
  assert.equal(isValidPhoneNumber('123'), false);
  assert.equal(isValidPhoneNumber('abc'), false);
});

test('validateBookingForm catches empty required fields and Friday selection', () => {
  const emptyResult = validateBookingForm({
    patientName: '',
    phone: '',
    service: '',
    preferredDay: '',
    preferredTime: '',
    notes: '',
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.patientName);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.service);
  assert.ok(emptyResult.errors.preferredDay);
  assert.ok(emptyResult.errors.preferredTime);

  const fridayResult = validateBookingForm({
    patientName: 'أحمد صالح',
    phone: '0776800058',
    service: 'زراعة الأسنان',
    preferredDay: 'الجمعة',
    preferredTime: 'صباحًا (8:00 ص - 12:00 م)',
    notes: '',
  });
  assert.equal(fridayResult.isValid, false);
  assert.ok(fridayResult.errors.preferredDay?.includes('الجمعة'));
});

test('validateBookingForm passes valid booking and builds exact WhatsApp URL', () => {
  const validForm = {
    patientName: 'محمد عبدالله',
    phone: '+967 776 800 058',
    service: 'زراعة الأسنان',
    preferredDay: 'الأحد',
    preferredTime: 'مساءً (4:00 م - 8:00 م)',
    notes: 'أفضل الموعد الساعة 5 عصرًا',
  };

  const validation = validateBookingForm(validForm);
  assert.equal(validation.isValid, true);

  const msg = buildWhatsAppBookingMessage(validForm);
  assert.ok(msg.includes('محمد عبدالله'));
  assert.ok(msg.includes('زراعة الأسنان'));
  assert.ok(msg.includes('الأحد'));
  assert.ok(msg.includes('بانتظار تأكيدكم للموعد'));

  const url = buildWhatsAppBookingUrl(validForm);
  assert.ok(url.startsWith('https://wa.me/967776800058?text='));
});
