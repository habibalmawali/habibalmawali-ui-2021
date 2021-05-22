import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3Page } from './page3.page';

const routes: Routes = [
  {
    path: '',
    component: Page3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3PageRoutingModule {}
