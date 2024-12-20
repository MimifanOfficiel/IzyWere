import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  // {
  //   path: 'wallpaper',
  //   loadChildren: () => import('./wallpaper/wallpaper.module').then( m => m.WallpaperPageModule)
  // },
  {
    path: 'popups',
    loadChildren: () => import('./popups/popups.module').then( m => m.PopupsPageModule)
  },
  {
    path: 'random-website',
    loadChildren: () => import('./random-website/random-website.module').then( m => m.RandomWebsitePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'notifications-settings',
    loadChildren: () => import('./notifications-settings/notifications-settings.module').then( m => m.NotificationsSettingsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then( m => m.AccountsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
