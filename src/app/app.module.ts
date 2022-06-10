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

import { DatePipe } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DonorComponent } from './pages/donor/donor.component';
import { BloodbankComponent } from './pages/bloodbank/bloodbank.component';


@NgModule({
  declarations: [AppComponent, NotificationsComponent, FooterComponent, DashboardComponent, DonorComponent, BloodbankComponent],
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
