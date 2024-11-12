import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashProfePage } from './dash-profe.page';

const routes: Routes = [
  {
    path: '',
    component: DashProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashProfePageRoutingModule {}
