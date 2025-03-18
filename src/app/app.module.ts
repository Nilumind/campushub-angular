import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import MatTimepickerModule if it exists
// import { MatTimepickerModule } from '@angular/material/timepicker';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SheduleComponent } from './layout/shedule-admin/shedule/shedule.component';
import { ShedulePopUpComponent } from './layout/shedule-admin/shedule-pop-up/shedule-pop-up.component';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module
import { MatNativeDateModule } from '@angular/material/core';
import { AdminCheckReservationsComponent } from './layout/admin-check-reservations/admin-check-reservations.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardLayoutComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    SheduleComponent,
    ShedulePopUpComponent,
    AdminCheckReservationsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    // MatTimepickerModule, // Uncomment this line if MatTimepickerModule exists
    HttpClientModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatTableModule,
    MatDialogModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatSelectModule, 
    MatOption,
    MatCardModule,
    MatIconModule,
    MatGridListModule// Add this import
  ],
  providers: [],
  bootstrap: [AppComponent],
   
})
export class AppModule { }
