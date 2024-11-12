import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { porteroGuard } from './servicios/portero.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
    
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
  {
    path: 'cambio-clave',
    loadChildren: () => import('./pages/cambio-clave/cambio-clave.module').then( m => m.CambioClavePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule),
  },
  {
    path: 'dash-profe',
    loadChildren: () => import('./pages/dash-profe/dash-profe.module').then( m => m.DashProfePageModule),
    canActivate: [porteroGuard]
  },
  {
    path: 'dash-alumno',
    loadChildren: () => import('./pages/dash-alumno/dash-alumno.module').then( m => m.DashAlumnoPageModule),
    canActivate: [porteroGuard]
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
