import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Wallpaper', url: '/wallpaper', icon: 'paper-plane' },
    { title: 'Popups', url: '/popups', icon: 'heart' },
    { title: 'Random website', url: '/random-website', icon: 'archive' },
  ];
  constructor() {}
}
