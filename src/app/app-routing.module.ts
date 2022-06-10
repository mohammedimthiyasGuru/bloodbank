import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BloodbankComponent } from './pages/bloodbank/bloodbank.component';
import { DonorComponent } from './pages/donor/donor.component';


const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },

  // { path: '', component:PsomarkattendanceComponent },
  
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },


  
  

  { path: 'fodatewise', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  // { path: 'foattendance_detail', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },




  { path: 'dashboard', component: DashboardComponent },
  { path: 'bloodbank', component: BloodbankComponent },
  { path: 'donarlist', component: DonorComponent },





];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
