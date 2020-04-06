import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTodoPage } from './all-todo.page';

const routes: Routes = [
  {
    path: '',
    component: AllTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllTodoPageRoutingModule {}
