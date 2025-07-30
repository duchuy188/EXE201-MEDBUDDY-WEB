
// Shared types for user management
export type UserRole = 'patient' | 'family';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  dateOfBirth?: string;
  address?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  phone?: string;
  role: UserRole;
  dateOfBirth?: string;
}
