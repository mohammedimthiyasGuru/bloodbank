import { Component,Inject,OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ApiService } from '../../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fo-dashboard',
  templateUrl: './fo-dashboard.component.html',
  styleUrls: ['./fo-dashboard.component.scss']
})
export class FoDashboardComponent implements OnInit {

  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  showModalBox: boolean = false;
  show_present = false;
  popup = false;
  usertypes : any;
  user_type = 'FO';
  employee_detail = this.storage.get('employee_detail');
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private _api: ApiService,
    private toastr:ToastrManager,
    public datepipe: DatePipe,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    console.log(this.employee_detail);
    this.check_present_status();
  }



  check_present_status(){
   let a = {
    date : this.datepipe.transform(new Date(),'yyyy-MM-dd'),
    emp_id : this.employee_detail._id,
   }
    this._api.check_present(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if(response.Code == 200){
          this.popup = false;
          this.show_present = true
          // this.toastr.successToastr(response.Message);
        }else {
          // this.toastr.errorToastr(response.Message);
        }
      }
    );



  }


  markaspresent_show(){
    this.popup = true;
  }

  mark_as_cancel(){
    this.popup = false;
  }

  markaspresent_mark(){
    let a = {
      site_id : '',
      emp_id : this.employee_detail._id,
      shift_type : '-',
      scanned_by : 'SELF',
      date_of_scan : ''+new Date(),
      remarks : 'SELF',
      status : '-',
      date : this.datepipe.transform(new Date(),'yyyy-MM-dd')
    }
    this._api.mark_fo_attendance(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if(response.Code == 200){
          this.toastr.successToastr(response.Message);
          this.popup = false;
          this.show_present = true
        }else {
          this.toastr.errorToastr(response.Message);
        }
      }
    );
 
  }



  notifications(){

  }


  new_fo_dailysummary_redir(){
    this.navCtrl.navigateForward('fo_daily_summary');
  }

  new_fo_temp_transfer(){
    this.navCtrl.navigateForward('fo_temp_transfer');
  }
  new_fo_unitview(){
    this.navCtrl.navigateForward('fo_view_units');
  }


}
