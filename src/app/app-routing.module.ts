import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './login/login.component';
import { SheduleComponent } from './layout/shedule-admin/shedule/shedule.component';
import { ShedulePopUpComponent } from './layout/shedule-admin/shedule-pop-up/shedule-pop-up.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shedule', component: SheduleComponent },
  // { path: 'shedule-popup', component: ShedulePopUpComponent},// No layout here
{
  path: '',
  component: DashboardLayoutComponent,
  children: [
    { path: 'dashboard', loadComponent: () => import('./layout/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent) },
    { path: 'profile', loadComponent: () => import('./layout/profile/profile.component').then(m => m.ProfileComponent) },
    { path: 'settings', loadComponent: () => import('./layout/settings/settings.component').then(m => m.SettingsComponent) }
  ]
},
{ path: '**', redirectTo: 'dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
