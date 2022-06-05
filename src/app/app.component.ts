import { Component, OnInit, Inject } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';


import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employee_detail = this.storage.get('employee_detail');
  public appPages: Array<Pages>;
  routes_value = '/aso_dashboard';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private toastr:ToastrManager,
    public datepipe: DatePipe,
    @Inject(SESSION_STORAGE) private storage: StorageService

  ) {
    
    console.log(this.employee_detail);
    if(this.employee_detail != null){
      if(this.employee_detail.user_designation == 'ASO'){
        this.routes_value = '/aso_dashboard';
      }else if(this.employee_detail.user_designation == 'Field Officer'){
        this.routes_value = '/fo_dashboard';
      }
    }else{
      this.employee_detail = {
        name : '',
        address : ''
      }
    }
    this.appPages = [
      {
        title: 'Home',
        url: this.routes_value,
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },
      {
        title: 'App Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
