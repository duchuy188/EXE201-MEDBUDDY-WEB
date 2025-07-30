
// Shared constants across web and mobile
export const APP_CONFIG = {
  NAME: 'HAP MEDBUDDY',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@hapmedbuddy.com',
  SUPPORT_PHONE: '1900-XXX-XXX'
} as const;

export const MEDICINE_UNITS = [
  'viên',
  'ml',
  'gói',
  'ống',
  'chai',
  'hộp',
  'lọ'
] as const;

export const MEDICINE_FREQUENCIES = [
  'Một lần/ngày',
  'Hai lần/ngày', 
  'Ba lần/ngày',
  'Bốn lần/ngày',
  'Theo chỉ định bác sĩ',
  'Khi cần thiết'
] as const;

export const REMINDER_TIMES = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00'
] as const;

export const BLOOD_PRESSURE_RANGES = {
  NORMAL: { systolic: [90, 120], diastolic: [60, 80] },
  ELEVATED: { systolic: [120, 129], diastolic: [60, 80] },
  HIGH_STAGE_1: { systolic: [130, 139], diastolic: [80, 89] },
  HIGH_STAGE_2: { systolic: [140, 180], diastolic: [90, 120] },
  CRISIS: { systolic: [180, 300], diastolic: [120, 200] }
} as const;
