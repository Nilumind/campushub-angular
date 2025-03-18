import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './login/login.component';
import { SheduleComponent } from './layout/shedule-admin/shedule/shedule.component';
import { ShedulePopUpComponent } from './layout/shedule-admin/shedule-pop-up/shedule-pop-up.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { AdminCheckReservationsComponent } from './layout/admin-check-reservations/admin-check-reservations.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

// const routes: Routes = [
//   { path: 'register', component: RegisterComponent },
//   { path: 'login', component: LoginComponent },// No layout here
// {
//   path: '',
//   component: DashboardLayoutComponent,
//   children: [
//     { path: 'dashboard', loadComponent: () => import('./layout/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent) },
//     { path: 'profile', loadComponent: () => import('./layout/profile/profile.component').then(m => m.ProfileComponent) },
//     { path: 'settings', loadComponent: () => import('./layout/settings/settings.component').then(m => m.SettingsComponent) }
//   ]
// },
// { path: '**', redirectTo: 'dashboard' }
// ];

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'shedule-popup', component: ShedulePopUpComponent},// No layout here

  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirect root to /dashboard  // Your Dashboard layout itself
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'shedule', component: SheduleComponent }, 
      { path: 'reservations', component: AdminCheckReservationsComponent },
      { path: 'dashboard', component: DashboardComponent },  // Schedule as a child route
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
