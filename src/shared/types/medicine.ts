
// Shared types for medicine management
export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  instructions: string;
  remainingQuantity: number;
  totalQuantity: number;
  unit: string; // 'viên', 'ml', 'gói', etc.
  imageUrl?: string;
  receiptImageUrl?: string;
  reminderTimes: string[]; // ['08:00', '14:00', '20:00']
  isActive: boolean;
  patientId: string;
  addedBy: string; // user id who added this medicine
  createdAt: string;
  updatedAt: string;
}

export interface MedicineReminder {
  id: string;
  medicineId: string;
  scheduledTime: string;
  actualTime?: string;
  status: 'pending' | 'taken' | 'missed' | 'skipped';
  notes?: string;
  confirmedBy?: string; // user id who confirmed
  createdAt: string;
  updatedAt: string;
}

export interface AddMedicineData {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  instructions: string;
  totalQuantity: number;
  unit: string;
  reminderTimes: string[];
  imageUrl?: string;
  receiptImageUrl?: string;
}
