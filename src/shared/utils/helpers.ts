
import { BLOOD_PRESSURE_RANGES } from '../constants/app';
import type { BloodPressureReading } from '../types/health';

// Shared utility functions
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric'
  });
};

export const formatTime = (time: string): string => {
  return time.slice(0, 5); // HH:MM format
};

export const formatDateTime = (datetime: string | Date): string => {
  const d = new Date(datetime);
  return d.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getBloodPressureStatus = (systolic: number, diastolic: number): {
  status: string;
  color: string;
  description: string;
} => {
  const { NORMAL, ELEVATED, HIGH_STAGE_1, HIGH_STAGE_2, CRISIS } = BLOOD_PRESSURE_RANGES;
  
  if (systolic >= CRISIS.systolic[0] || diastolic >= CRISIS.diastolic[0]) {
    return {
      status: 'CRISIS',
      color: 'red',
      description: 'Cần cấp cứu ngay lập tức'
    };
  }
  
  if (systolic >= HIGH_STAGE_2.systolic[0] || diastolic >= HIGH_STAGE_2.diastolic[0]) {
    return {
      status: 'HIGH_STAGE_2', 
      color: 'red',
      description: 'Cao huyết áp độ 2'
    };
  }
  
  if (systolic >= HIGH_STAGE_1.systolic[0] || diastolic >= HIGH_STAGE_1.diastolic[0]) {
    return {
      status: 'HIGH_STAGE_1',
      color: 'orange', 
      description: 'Cao huyết áp độ 1'
    };
  }
  
  if (systolic >= ELEVATED.systolic[0] && diastolic <= ELEVATED.diastolic[1]) {
    return {
      status: 'ELEVATED',
      color: 'yellow',
      description: 'Huyết áp cao'
    };
  }
  
  return {
    status: 'NORMAL',
    color: 'green', 
    description: 'Bình thường'
  };
};

export const calculateMedicineProgress = (remainingQuantity: number, totalQuantity: number): number => {
  return Math.max(0, Math.min(100, ((totalQuantity - remainingQuantity) / totalQuantity) * 100));
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
