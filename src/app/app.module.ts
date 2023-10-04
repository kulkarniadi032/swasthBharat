import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartsComponent } from './charts/charts.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ServiceregistrationComponent } from './serviceregistration/serviceregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BloodbanksComponent } from './bloodbanks/bloodbanks.component';
import { HttpClientModule } from '@angular/common/http';
import { HospitallistComponent } from './hospitallist/hospitallist.component';
import { RemindersComponent } from './reminders/reminders.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { FamilyhistoryComponent } from './familyhistory/familyhistory.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MyinterestComponent } from './myinterest/myinterest.component';
import { PatientslistComponent } from './patientslist/patientslist.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ChartsComponent,
    UserregistrationComponent,
    ServiceregistrationComponent,
    BloodbanksComponent,
    HospitallistComponent,
    RemindersComponent,
    AppoinmentsComponent,
    FamilyhistoryComponent,
    InsuranceComponent,
    MyinterestComponent,
    PatientslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
