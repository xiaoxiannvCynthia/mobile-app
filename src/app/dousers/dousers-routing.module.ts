import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DousersPage } from './dousers.page';

const routes: Routes = [
  {
    path: '',
    component: DousersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DousersPageRoutingModule {}
