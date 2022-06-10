import { Component, OnInit, Inject } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ApiService } from '../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss']
})
export class DonorComponent implements OnInit {
  
  phone_number = '';
  name = '';
  location = '';
  bloodgroup = '';
  _id = '';


  status1 = false;
  status2 = false;
  status3 = false;
  status4 = false;
  status5 = false;
  status6 = false;
  status7 = false;
  status8 = false;




  employee_detail = this.storage.get('user_detail');
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private _api: ApiService,
    private toastr:ToastrManager,
    private statusBar: StatusBar,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    console.log(this.employee_detail);
    this.name = this.employee_detail.phone_number;
    this.fetch_data();
    this.change_status1(true);
  }


  add_value(){
    let a = {
      'user_id' : this.employee_detail._id,
      'phone_number' : this.phone_number,
      'name': this.name,
      'location': this.location,
      'bloodgroup': this.bloodgroup,
     };
    console.log(a);
    this._api.add_blood_group(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if(response.Code == 200){
        console.log(response.Data);
        this.toastr.successToastr(response.Message);
        this.ngOnInit();
      }else {
        this.toastr.errorToastr(response.Message);
      }
    }
  ); 
  }

  update(){
    let a = {
      '_id' : this._id,
      'phone_number' : this.phone_number,
      'name': this.name,
      'location': this.location,
      'bloodgroup': this.bloodgroup,
     };
    console.log(a);
    this._api.update_blood_group(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if(response.Code == 200){
        console.log(response.Data);
        this.toastr.successToastr(response.Message);
      }else {
        this.toastr.errorToastr(response.Message);
      }
    }
  );
  }



  fetch_data(){
    let a = {
      "_id" : this.employee_detail._id
     };
    console.log(a);
    this._api.fetch_details_id(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if(response.Code == 200){
        console.log(response.Data);
        this._id = response.Data._id;
        this.name = response.Data.name;
        this.phone_number = response.Data.phone_number;
        this.location = response.Data.location;
        this.bloodgroup = response.Data.bloodgroup;
        if(this.bloodgroup == 'A+'){
         this.change_status1(true);
        }
        if(this.bloodgroup == 'AB+'){
          this.change_status2(true);
        }
        if(this.bloodgroup == 'O-'){
          this.change_status3(true);
        }
        if(this.bloodgroup == 'B-'){
          this.change_status4(true);
        }
        if(this.bloodgroup == 'A-'){
          this.change_status5(true);
        }
        if(this.bloodgroup == 'AB-'){
          this.change_status6(true);
        }
        if(this.bloodgroup == 'O+'){
          this.change_status7(true);
        }
        if(this.bloodgroup == 'B+'){
          this.change_status8(true);
        }


        
      }else {
        // this.toastr.warningToastr(response.Message);
      }
    }
  );
  }



  backaction(){
    this.navCtrl.navigateRoot('/dashboard');
  }



  change_status1(datas){
    this.change_status_clear()
    this.status1 = datas;
    this.bloodgroup = 'A+';
  }

  change_status2(datas){
    this.change_status_clear()
    this.status2 = datas;
    this.bloodgroup = 'AB+';
  }
  change_status3(datas){
    this.change_status_clear()
    this.status3 = datas;
    this.bloodgroup = 'O-';
    
  }

   change_status4(datas){
     this.change_status_clear()
    this.status4 = datas;
    this.bloodgroup = 'B-';
  }

   change_status5(datas){
    this.change_status_clear()
    this.status5 = datas;
    this.bloodgroup = 'A-';
    
  }

  change_status6(datas){
    this.change_status_clear()
    this.status6 = datas;
    this.bloodgroup = 'AB-';
    
  }

  change_status7(datas){
    this.change_status_clear()
    this.status7 = datas;
    this.bloodgroup = 'O+';

  }

  change_status8(datas){
    this.change_status_clear()
    this.status8 = datas;
    this.bloodgroup = 'B+';

  }

  change_status_clear(){
    this.status1 = false;
    this.status2 = false;
    this.status3 = false;
    this.status4 = false;
    this.status5 = false;
    this.status6 = false;
    this.status7 = false;
    this.status8 = false;
  }

}
