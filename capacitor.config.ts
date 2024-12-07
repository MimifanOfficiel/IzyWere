import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.mimifan.izywere',
  appName: 'Izywere',
  webDir: 'www',
  plugins: {
    WallpaperPlugin: {
      // Optional: You can add any configuration options for your plugin here
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon',
      iconColor: '#488AFF',
      sound: 'beep.wav',
    },
  },
  server: {
    cleartext: false, // Forcer HTTPS
    allowNavigation: ['cuties.lilabrandon.fr'] // Ajouter le domaine de l'API
  }
};

export default config;
