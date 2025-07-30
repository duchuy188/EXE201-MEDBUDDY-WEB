
import { z } from 'zod';

// Shared validation schemas
export const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  phone: z.string().optional(),
  role: z.enum(['patient', 'family']),
  dateOfBirth: z.string().optional()
});

export const medicineSchema = z.object({
  name: z.string().min(1, 'Tên thuốc không được để trống'),
  dosage: z.string().min(1, 'Liều lượng không được để trống'),
  frequency: z.string().min(1, 'Tần suất không được để trống'),
  startDate: z.string().min(1, 'Ngày bắt đầu không được để trống'),
  endDate: z.string().optional(),
  instructions: z.string().min(1, 'Hướng dẫn sử dụng không được để trống'),
  totalQuantity: z.number().min(1, 'Số lượng phải lớn hơn 0'),
  unit: z.string().min(1, 'Đơn vị không được để trống'),
  reminderTimes: z.array(z.string()).min(1, 'Phải có ít nhất 1 giờ nhắc nhở')
});

export const bloodPressureSchema = z.object({
  systolic: z.number().min(50).max(300, 'Huyết áp tâm thu không hợp lệ'),
  diastolic: z.number().min(30).max(200, 'Huyết áp tâm trương không hợp lệ'),
  heartRate: z.number().min(40).max(200).optional(),
  notes: z.string().optional()
});

export const appointmentSchema = z.object({
  doctorName: z.string().min(1, 'Tên bác sĩ không được để trống'),
  hospital: z.string().min(1, 'Tên bệnh viện không được để trống'),
  department: z.string().min(1, 'Khoa không được để trống'),
  appointmentDate: z.string().min(1, 'Ngày khám không được để trống'),
  appointmentTime: z.string().min(1, 'Giờ khám không được để trống'),
  purpose: z.string().min(1, 'Mục đích khám không được để trống')
});
