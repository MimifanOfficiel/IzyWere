import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomWebsitePage } from './random-website.page';

const routes: Routes = [
  {
    path: '',
    component: RandomWebsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomWebsitePageRoutingModule {}
