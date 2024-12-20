import { Component } from '@angular/core';
import { NotificationService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    // { title: 'Wallpaper', url: '/wallpaper', icon: 'paper-plane' },
    { title: 'Popups', url: '/popups', icon: 'heart' },
    { title: 'Random website', url: '/random-website', icon: 'cloud' },
    { title: 'Shared Accounts', url: '/accounts', icon: 'people' },
    // { title: 'Notifications settings', url: '/notifications-settings', icon: 'settings' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];
  constructor(private notificationService: NotificationService) {
    this.initializeApp();
  }

  initializeApp() {
    this.notificationService.setupPersistentNotification();
  }
}
