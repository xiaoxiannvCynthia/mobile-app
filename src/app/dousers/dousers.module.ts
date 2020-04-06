import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DousersPageRoutingModule } from './dousers-routing.module';

import { DousersPage } from './dousers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DousersPageRoutingModule
  ],
  declarations: [DousersPage]
})
export class DousersPageModule {}
