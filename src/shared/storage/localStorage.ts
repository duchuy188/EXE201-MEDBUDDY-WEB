
// Shared localStorage utilities
const STORAGE_KEYS = {
  USER: 'medbuddy_user',
  TOKEN: 'medbuddy_token',
  REFRESH_TOKEN: 'medbuddy_refresh_token',
  SETTINGS: 'medbuddy_settings',
  TEMP_DATA: 'medbuddy_temp'
} as const;

export const storage = {
  // User data
  getUser: () => {
    try {
      const user = localStorage.getItem(STORAGE_KEYS.USER);
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },
  
  setUser: (user: any) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },
  
  removeUser: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
  },
  
  // Authentication tokens
  getToken: () => localStorage.getItem(STORAGE_KEYS.TOKEN),
  setToken: (token: string) => localStorage.setItem(STORAGE_KEYS.TOKEN, token),
  removeToken: () => localStorage.removeItem(STORAGE_KEYS.TOKEN),
  
  getRefreshToken: () => localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN),
  setRefreshToken: (token: string) => localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token),
  removeRefreshToken: () => localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
  
  // App settings
  getSettings: () => {
    try {
      const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settings ? JSON.parse(settings) : {};
    } catch {
      return {};
    }
  },
  
  setSettings: (settings: any) => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },
  
  // Temporary data
  getTempData: (key: string) => {
    try {
      const tempData = localStorage.getItem(STORAGE_KEYS.TEMP_DATA);
      const parsed = tempData ? JSON.parse(tempData) : {};
      return parsed[key] || null;
    } catch {
      return null;
    }
  },
  
  setTempData: (key: string, data: any) => {
    try {
      const tempData = localStorage.getItem(STORAGE_KEYS.TEMP_DATA);
      const parsed = tempData ? JSON.parse(tempData) : {};
      parsed[key] = data;
      localStorage.setItem(STORAGE_KEYS.TEMP_DATA, JSON.stringify(parsed));
    } catch {
      // Ignore storage errors
    }
  },
  
  // Clear all data
  clearAll: () => {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};
