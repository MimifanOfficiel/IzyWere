import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallpaperPageRoutingModule } from './wallpaper-routing.module';

import { WallpaperPage } from './wallpaper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallpaperPageRoutingModule
  ],
  declarations: [WallpaperPage]
})
export class WallpaperPageModule {}
