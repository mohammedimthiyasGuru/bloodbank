import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

import { ToastrModule } from 'ng6-toastr-notifications';





// Components
import { NotificationsComponent } from './components/notifications/notifications.component';


import { StorageServiceModule } from 'angular-webstorage-service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsoDashboardComponent } from './pages/aso/aso-dashboard/aso-dashboard.component';
import { AsoPostedPersonnelComponent } from './pages/aso/aso-posted-personnel/aso-posted-personnel.component';
import { AsoPostedPersonnelSingleDateWiseComponent } from './pages/aso/aso-posted-personnel-single-date-wise/aso-posted-personnel-single-date-wise.component';
import { AsoPostedPersonnelSingleMonthWiseComponent } from './pages/aso/aso-posted-personnel-single-month-wise/aso-posted-personnel-single-month-wise.component';
import { AsoViewAttendanceShiftWiseComponent } from './pages/aso/aso-view-attendance-shift-wise/aso-view-attendance-shift-wise.component';
import { AsoViewAttendanceOveralShiftcountComponent } from './pages/aso/aso-view-attendance-overal-shiftcount/aso-view-attendance-overal-shiftcount.component';
import { AsoAttendancemarkingComponent } from './pages/aso/aso-attendancemarking/aso-attendancemarking.component';
import { AsoAttendanceoverviewComponent } from './pages/aso/aso-attendanceoverview/aso-attendanceoverview.component';
import { FoDashboardComponent } from './pages/fo/fo-dashboard/fo-dashboard.component';
import { FoDailySummaryComponent } from './pages/fo/fo-daily-summary/fo-daily-summary.component';
import { FoDailySummaryUnitOverviewComponent } from './pages/fo/fo-daily-summary-unit-overview/fo-daily-summary-unit-overview.component';
import { FoDailySummaryUnitSingleviewComponent } from './pages/fo/fo-daily-summary-unit-singleview/fo-daily-summary-unit-singleview.component';
import { FoDailySummarySingleDateWiseComponent } from './pages/fo/fo-daily-summary-single-date-wise/fo-daily-summary-single-date-wise.component';
import { FoDailySummarySingleMonthWiseComponent } from './pages/fo/fo-daily-summary-single-month-wise/fo-daily-summary-single-month-wise.component';
import { FoTempTransferComponent } from './pages/fo/fo-temp-transfer/fo-temp-transfer.component';
import { FoViewUnitsComponent } from './pages/fo/fo-view-units/fo-view-units.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';
import { AsoAttendnacerescanComponent } from './pages/aso/aso-attendnacerescan/aso-attendnacerescan.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DonorComponent } from './pages/donor/donor.component';
import { BloodbankComponent } from './pages/bloodbank/bloodbank.component';


@NgModule({
  declarations: [AppComponent, NotificationsComponent, AsoDashboardComponent, AsoPostedPersonnelComponent, AsoPostedPersonnelSingleDateWiseComponent, AsoPostedPersonnelSingleMonthWiseComponent, AsoViewAttendanceShiftWiseComponent, AsoViewAttendanceOveralShiftcountComponent, AsoAttendancemarkingComponent, AsoAttendanceoverviewComponent, FoDashboardComponent, FoDailySummaryComponent, FoDailySummaryUnitOverviewComponent, FoDailySummaryUnitSingleviewComponent, FoDailySummarySingleDateWiseComponent, FoDailySummarySingleMonthWiseComponent, FoTempTransferComponent, FoViewUnitsComponent, ChangepasswordComponent, ForgotpasswordComponent, FooterComponent, AsoAttendnacerescanComponent, DashboardComponent, DonorComponent, BloodbankComponent, 
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule,
    StorageServiceModule,

     ReactiveFormsModule,
    FormsModule,
   

  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,Storage,
    SplashScreen,
    DatePipe,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
