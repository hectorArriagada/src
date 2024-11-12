import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashProfePageRoutingModule } from './dash-profe-routing.module';

import { DashProfePage } from './dash-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashProfePageRoutingModule
  ],
  declarations: [DashProfePage]
})
export class DashProfePageModule {}
