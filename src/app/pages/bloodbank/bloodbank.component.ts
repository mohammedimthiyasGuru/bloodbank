import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.scss']
})
export class BloodbankComponent implements OnInit {

  bloodgroup = '';



  constructor(public navCtrl: NavController,private _api: ApiService,private toastr:ToastrManager) { }


  status1 = false;
  status2 = false;
  status3 = false;
  status4 = false;
  status5 = false;
  status6 = false;
  status7 = false;
  status8 = false;


  data_list = [];





  ngOnInit() {
    this.change_status1(true);
  }


  backaction(){
    this.navCtrl.navigateRoot('/dashboard');
  }



  fetch_data(data){
    this.data_list = [];
    let a = {
      "bloodgroup" : data
     };
    console.log(a);
    this._api.fetch_details_list(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if(response.Code == 200){
        console.log(response.Data);
        this.data_list = response.Data;
      }else {
        this.toastr.warningToastr(response.Message);
      }
    }
  );
  }





  change_status1(datas){
    this.change_status_clear()
    this.status1 = datas;
    this.bloodgroup = 'A+';
    this.fetch_data(this.bloodgroup);
  }

  change_status2(datas){
    this.change_status_clear()
    this.status2 = datas;
    this.bloodgroup = 'AB+';
     this.fetch_data(this.bloodgroup);
  }
  change_status3(datas){
    this.change_status_clear()
    this.status3 = datas;
    this.bloodgroup = 'O-';
    this.fetch_data(this.bloodgroup);
    
  }

   change_status4(datas){
     this.change_status_clear()
    this.status4 = datas;
    this.bloodgroup = 'B-';
    this.fetch_data(this.bloodgroup);
  }

   change_status5(datas){
    this.change_status_clear()
    this.status5 = datas;
    this.bloodgroup = 'A-';
    this.fetch_data(this.bloodgroup);
    
  }

  change_status6(datas){
    this.change_status_clear()
    this.status6 = datas;
    this.bloodgroup = 'AB-';
    this.fetch_data(this.bloodgroup);
    
  }

  change_status7(datas){
    this.change_status_clear()
    this.status7 = datas;
    this.bloodgroup = 'O+';
    this.fetch_data(this.bloodgroup);

  }

  change_status8(datas){
    this.change_status_clear()
    this.status8 = datas;
    this.bloodgroup = 'B+';
    this.fetch_data(this.bloodgroup);

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
