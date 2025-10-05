
// Shared types for health monitoring
export interface BloodPressureReading {
  id: string;
  systolic: number;
  diastolic: number;
  heartRate?: number;
  measurementTime: string;
  notes?: string;
  patientId: string;
  recordedBy: string; // user id who recorded
  createdAt: string;
  updatedAt: string;
}

export interface HealthMetrics {
  id: string;
  patientId: string;
  weight?: number;
  height?: number;
  bloodSugar?: number;
  temperature?: number;
  oxygenSaturation?: number;
  measurementDate: string;
  notes?: string;
  recordedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorName: string;
  hospital: string;
  department: string;
  appointmentDate: string;
  appointmentTime: string;
  purpose: string;
  notes?: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'missed';
  reminderSet: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
