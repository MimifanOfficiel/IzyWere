import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';


@Component({
  selector: 'app-notifications-settings',
  templateUrl: './notifications-settings.page.html',
  styleUrls: ['./notifications-settings.page.scss'],
})
export class NotificationsSettingsPage implements OnInit {
  selectedTime: string = ''; // Saves the selected time

  constructor() {
    // Get the saved time from the local storage
	if(localStorage.getItem('notificationTime')) {
		this.selectedTime = localStorage.getItem('notificationTime') || '';

		const [date, time] = this.selectedTime.split('T');
		const [hours, minutes, seconds] = time.split(':').map(Number);

		const notificationDate = new Date(date);
		notificationDate.setHours(hours);
		notificationDate.setMinutes(minutes);

		// Schedule a daily notification at the selected time
		LocalNotifications.schedule({
			notifications: [
				{
				id: 2, // Unique ID for this notification
				title: "It's gooning time <3",
				body: "Goon your mind away for Mommy <3",
				schedule: {
					repeats: true, // recurring notification
					at: notificationDate, // set the time for the notification
				},
				},
			],
		});
	}
  }

  async scheduleDailyNotification() {
    if (!this.selectedTime) {
      console.error('No time selected');
      return;
    }

    const [date, time] = this.selectedTime.split('T');
    const [hours, minutes, seconds] = time.split(':').map(Number);

    const notificationDate = new Date(date);
    notificationDate.setHours(hours);
    notificationDate.setMinutes(minutes);

    localStorage.setItem('notificationTime', this.selectedTime);

    // Schedule a daily notification at the selected time
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 2, // Unique ID for this notification
          title: "It's gooning time <3",
          body: "Goon your mind away for Mommy <3",
          schedule: {
            repeats: true, // recurring notification
            at: notificationDate, // set the time for the notification
          },
        },
      ],
    });

  }
  
  ngOnInit() {
  }

}
