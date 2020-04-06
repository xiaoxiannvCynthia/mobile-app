import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTodoPageRoutingModule } from './all-todo-routing.module';

import { AllTodoPage } from './all-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTodoPageRoutingModule
  ],
  declarations: [AllTodoPage]
})
export class AllTodoPageModule {}
