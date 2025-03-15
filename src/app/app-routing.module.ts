import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { SettingsComponent } from './layout/settings/settings.component';

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
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardLayoutComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
