
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hap.medbuddy',
  appName: 'HAP MedBuddy',
  webDir: 'dist',
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#A0E7E5",
      sound: "beep.wav",
    },
  },
};

export default config;
