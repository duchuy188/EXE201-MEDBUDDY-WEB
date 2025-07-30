
// Shared API endpoints configuration
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register', 
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile'
  },
  
  // Users
  USERS: {
    LIST: '/users',
    GET: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`
  },
  
  // Medicines
  MEDICINES: {
    LIST: '/medicines',
    GET: (id: string) => `/medicines/${id}`,
    CREATE: '/medicines',
    UPDATE: (id: string) => `/medicines/${id}`,
    DELETE: (id: string) => `/medicines/${id}`,
    BY_PATIENT: (patientId: string) => `/medicines/patient/${patientId}`
  },
  
  // Medicine Reminders
  REMINDERS: {
    LIST: '/reminders',
    GET: (id: string) => `/reminders/${id}`,
    CREATE: '/reminders',
    UPDATE: (id: string) => `/reminders/${id}`,
    MARK_TAKEN: (id: string) => `/reminders/${id}/taken`,
    BY_PATIENT: (patientId: string) => `/reminders/patient/${patientId}`
  },
  
  // Health Records
  HEALTH: {
    BLOOD_PRESSURE: {
      LIST: '/health/blood-pressure',
      CREATE: '/health/blood-pressure',
      BY_PATIENT: (patientId: string) => `/health/blood-pressure/patient/${patientId}`
    },
    METRICS: {
      LIST: '/health/metrics',
      CREATE: '/health/metrics',
      BY_PATIENT: (patientId: string) => `/health/metrics/patient/${patientId}`
    }
  },
  
  // Appointments
  APPOINTMENTS: {
    LIST: '/appointments',
    GET: (id: string) => `/appointments/${id}`,
    CREATE: '/appointments',
    UPDATE: (id: string) => `/appointments/${id}`,
    DELETE: (id: string) => `/appointments/${id}`,
    BY_PATIENT: (patientId: string) => `/appointments/patient/${patientId}`
  },
  
  // Voice Messages
  VOICE: {
    LIST: '/voice-messages',
    GET: (id: string) => `/voice-messages/${id}`,
    CREATE: '/voice-messages',
    DELETE: (id: string) => `/voice-messages/${id}`,
    BY_PATIENT: (patientId: string) => `/voice-messages/patient/${patientId}`,
    UPLOAD: '/voice-messages/upload'
  },
  
  // File Upload
  UPLOAD: {
    IMAGE: '/upload/image',
    AUDIO: '/upload/audio',
    DOCUMENT: '/upload/document'
  }
} as const;

export const getApiUrl = (endpoint: string, baseUrl?: string): string => {
  const base = baseUrl || process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  return `${base}${endpoint}`;
};
