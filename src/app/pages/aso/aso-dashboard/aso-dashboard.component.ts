import { Component,Inject,OnInit} from '@angular/core';
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
  selector: 'app-aso-dashboard',
  templateUrl: './aso-dashboard.component.html',
  styleUrls: ['./aso-dashboard.component.scss']
})
export class AsoDashboardComponent implements OnInit {

  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  showModalBox: boolean = false;
  show_present = false;
  popup = false;
  usertypes : any;
  user_type = 'FO';
  employee_detail = this.storage.get('employee_detail');

  site_name = 'NO SITE FOUND';

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
    this.check_site_detail();


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


   check_site_detail(){
    let a = {
      emp_id : this.employee_detail._id
     }
      this._api.check_site_details(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if(response.Code == 200){
            this.storage.set('site_detail_att',response.Data.site_id);
            this.site_name = ""+response.Data.site_id.unit_name+" ( "+response.Data.site_id.unit_code+" )";
          }else {
            this.site_name =  'NO SITE FOUND';
          }
        }
      );
   }
  

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  notifications(){

  }

  mark_present(){
    this.show_present = true;
  }


  markaspresent_show(){
    this.popup = true;
  }

  mark_as_cancel(){
    this.popup = false;
  }


  markaspresent_mark(){
    var site_details = this.storage.get('site_detail_att');
    let a = {
      site_id : site_details._id,
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




  new_fo_posted_person_redir(){
    
    if(this.site_name == 'NO SITE FOUND'){
     this.toastr.warningToastr('You do not have the site. Contact admin');
    }else{
      this.navCtrl.navigateForward('aso_posted_personnel');
    }
  }

  new_fo_viewattendance_redir(){
    if(this.site_name == 'NO SITE FOUND'){
      this.toastr.warningToastr('You do not have the site. Contact admin');
     }else{
    this.navCtrl.navigateForward('aso_view_attendance_shift_wise');
     }
  }

  new_fo_attendance_marking(){
    if(this.site_name == 'NO SITE FOUND'){
      this.toastr.warningToastr('You do not have the site. Contact admin');
     }else{
    this.navCtrl.navigateForward('aso_attendancemarking');
     }
  }



}
