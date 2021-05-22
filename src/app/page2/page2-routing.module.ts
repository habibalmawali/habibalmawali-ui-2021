import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Page } from './page2.page';

const routes: Routes = [
  {
    path: '',
    component: Page2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2PageRoutingModule {}
