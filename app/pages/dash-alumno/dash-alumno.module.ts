import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAlumnoPageRoutingModule } from './dash-alumno-routing.module';

import { DashAlumnoPage } from './dash-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAlumnoPageRoutingModule
  ],
  declarations: [DashAlumnoPage]
})
export class DashAlumnoPageModule {}
