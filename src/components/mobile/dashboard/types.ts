
export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  lastActivity: string;
  status: 'online' | 'offline' | 'away';
  healthStatus: 'good' | 'warning' | 'critical';
  lastBP?: string;
  medicineToday: boolean;
}

export interface ActivityItem {
  id: string;
  message: string;
  time: string;
  type: 'success' | 'info' | 'warning';
}
