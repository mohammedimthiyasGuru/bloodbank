import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ApiService } from '../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;


  login_id : any;
  password : any;
  loader_visible = false;

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
  ) {

    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#33000000');
   }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {



  }




  goToHome() {
    this.loader_visible = true;
    console.log(this.login_id,this.password)
    this.storage.set('user_type', this.login_id);
    let a = {
      'phone_number' : this.login_id,
      'password': this.password
     };
    console.log(a);
    this._api.login_api(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if(response.Code == 200){
        this.toastr.successToastr(response.Message);
        this.storage.set('employee_detail',response.Data)
        this.navCtrl.navigateRoot('/dashboard');
      }else {
        this.loader_visible = false;
        this.toastr.errorToastr(response.Message);
      }
    }
  );   
  }

  
  forgot_view(){
    this.navCtrl.navigateRoot('/forgot_password');
  }

}
