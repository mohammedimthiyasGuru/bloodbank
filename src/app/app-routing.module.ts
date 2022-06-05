import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsoAttendancemarkingComponent } from './pages/aso/aso-attendancemarking/aso-attendancemarking.component';
import { AsoAttendanceoverviewComponent } from './pages/aso/aso-attendanceoverview/aso-attendanceoverview.component';
import { AsoDashboardComponent } from './pages/aso/aso-dashboard/aso-dashboard.component';
import { AsoPostedPersonnelSingleDateWiseComponent } from './pages/aso/aso-posted-personnel-single-date-wise/aso-posted-personnel-single-date-wise.component';
import { AsoPostedPersonnelSingleMonthWiseComponent } from './pages/aso/aso-posted-personnel-single-month-wise/aso-posted-personnel-single-month-wise.component';
import { AsoPostedPersonnelComponent } from './pages/aso/aso-posted-personnel/aso-posted-personnel.component';
import { AsoViewAttendanceOveralShiftcountComponent } from './pages/aso/aso-view-attendance-overal-shiftcount/aso-view-attendance-overal-shiftcount.component';
import { AsoViewAttendanceShiftWiseComponent } from './pages/aso/aso-view-attendance-shift-wise/aso-view-attendance-shift-wise.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { FoDailySummarySingleDateWiseComponent } from './pages/fo/fo-daily-summary-single-date-wise/fo-daily-summary-single-date-wise.component';
import { FoDailySummarySingleMonthWiseComponent } from './pages/fo/fo-daily-summary-single-month-wise/fo-daily-summary-single-month-wise.component';
import { FoDailySummaryUnitOverviewComponent } from './pages/fo/fo-daily-summary-unit-overview/fo-daily-summary-unit-overview.component';
import { FoDailySummaryUnitSingleviewComponent } from './pages/fo/fo-daily-summary-unit-singleview/fo-daily-summary-unit-singleview.component';
import { FoDailySummaryComponent } from './pages/fo/fo-daily-summary/fo-daily-summary.component';
import { FoDashboardComponent } from './pages/fo/fo-dashboard/fo-dashboard.component';
import { FoTempTransferComponent } from './pages/fo/fo-temp-transfer/fo-temp-transfer.component';
import { FoViewUnitsComponent } from './pages/fo/fo-view-units/fo-view-units.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { AsoAttendnacerescanComponent } from './pages/aso/aso-attendnacerescan/aso-attendnacerescan.component';
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

  { path: 'forgot_password', component: ForgotpasswordComponent },
  { path: 'change_password', component: ChangepasswordComponent },





  { path: 'aso_dashboard', component: AsoDashboardComponent },
  { path: 'aso_posted_personnel', component: AsoPostedPersonnelComponent },
  { path: 'aso_posted_personnel_single_date_wise', component: AsoPostedPersonnelSingleDateWiseComponent },
  { path: 'aso_posted_personnel_single_month_wise', component: AsoPostedPersonnelSingleMonthWiseComponent },
  { path: 'aso_view_attendance_shift_wise', component: AsoViewAttendanceShiftWiseComponent },
  { path: 'aso_view_attendance_overal_shiftcount', component: AsoViewAttendanceOveralShiftcountComponent },
  { path: 'aso_attendancemarking', component: AsoAttendancemarkingComponent },
  { path: 'aso_attendanceoverview', component: AsoAttendanceoverviewComponent },

  { path: 'aso_attendance_rescan', component: AsoAttendnacerescanComponent },
 
  
  { path: 'fo_dashboard', component: FoDashboardComponent },
  { path: 'fo_daily_summary', component: FoDailySummaryComponent },
  { path: 'fo_daily_summary_unit_overview', component: FoDailySummaryUnitOverviewComponent },
  { path: 'fo_daily_summary_unit_singleview', component: FoDailySummaryUnitSingleviewComponent },
  { path: 'fo_daily_summary_single_date_wise', component: FoDailySummarySingleDateWiseComponent },
  { path: 'fo_daily_summary_single_month_wise', component: FoDailySummarySingleMonthWiseComponent },
  { path: 'fo_temp_transfer', component: FoTempTransferComponent },
  { path: 'fo_view_units', component: FoViewUnitsComponent },


  
  

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
