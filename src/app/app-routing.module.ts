import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ServiceregistrationComponent } from './serviceregistration/serviceregistration.component';
import { BloodbanksComponent } from './bloodbanks/bloodbanks.component';
import { HospitallistComponent } from './hospitallist/hospitallist.component';
import { RemindersComponent } from './reminders/reminders.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { MyinterestComponent } from './myinterest/myinterest.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FamilyhistoryComponent } from './familyhistory/familyhistory.component';
import { PatientslistComponent } from './patientslist/patientslist.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'userregistration', component: UserregistrationComponent },
  { path: 'serviceregistration', component: ServiceregistrationComponent },
  { path: 'bloodbanks', component: BloodbanksComponent },
  { path: 'hospitallist', component: HospitallistComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'appoinments', component: AppoinmentsComponent },
  { path: 'family', component: FamilyhistoryComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'interest', component: MyinterestComponent },
  { path: 'patientslist', component: PatientslistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
