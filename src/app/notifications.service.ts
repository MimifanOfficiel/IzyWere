import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
	providedIn: 'root',
})
export class NotificationService {
	
	async setupPersistentNotification() {
		// Demander l'autorisation
		const permission = await LocalNotifications.requestPermissions();
		if (permission.display === 'granted') {
			// Planifier une notification persistante
			await LocalNotifications.schedule({
				notifications: [
					{
						id: 1,
						title: "You're mine :3",
						body: "This device's owner is a dirty gooner :3",
						largeBody: "Both this device and its' owner are now Mommy Lila's property <3",
						autoCancel: false, // Ne pas fermer la notification automatiquement
						ongoing: true, // Rend la notification persistante
						smallIcon: 'ic_stat_icon',
					},
				],
			});
		}
	}
}
