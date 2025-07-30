
// Shared types for voice messages
export interface VoiceMessage {
  id: string;
  patientId: string;
  senderName: string;
  audioUrl: string;
  duration: number; // in seconds
  transcription?: string;
  isPlayed: boolean;
  messageType: 'reminder' | 'encouragement' | 'instruction' | 'general';
  scheduledFor?: string; // for scheduled playback
  tags?: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface VoiceReminderSettings {
  patientId: string;
  isEnabled: boolean;
  playbackTimes: string[]; // times when voice messages should play
  volume: number; // 0-100
  autoPlay: boolean;
  repeatCount: number;
  updatedBy: string;
  updatedAt: string;
}
