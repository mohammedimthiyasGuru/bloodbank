import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ApiService } from '../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private _api: ApiService,
    private toastr:ToastrManager,
    private statusBar: StatusBar,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {
  }

  logout(){
    this.navCtrl.navigateRoot('/');
  }

}
