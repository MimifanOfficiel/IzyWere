import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomWebsitePageRoutingModule } from './random-website-routing.module';

import { RandomWebsitePage } from './random-website.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomWebsitePageRoutingModule
  ],
  declarations: [RandomWebsitePage]
})
export class RandomWebsitePageModule {}
