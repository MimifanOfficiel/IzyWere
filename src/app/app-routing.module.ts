import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'wallpaper',
    loadChildren: () => import('./wallpaper/wallpaper.module').then( m => m.WallpaperPageModule)
  },
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
