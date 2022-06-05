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
  selector: 'app-aso-view-attendance-shift-wise',
  templateUrl: './aso-view-attendance-shift-wise.component.html',
  styleUrls: ['./aso-view-attendance-shift-wise.component.scss']
})
export class AsoViewAttendanceShiftWiseComponent implements OnInit {
  loader_visible = false;
  shift_type = '';
  site_details : any;
  attendance_detail = [];

  site_time = '';

  today_date = this.datepipe.transform(new Date(),'dd MMM yyyy');


  strength_emp_detail : any;
  strength_detail : any;
  total_strength_count = 0;

  two_strength_emp_detail : any;
  two_strength_detail : any;
  two_total_strength_count = 0;

  balance_strength_count = 0;
  update_attendance_id = this.storage.get('update_attendance_id');


  selected_date = this.datepipe.transform(new Date(),'yyyy-MM-dd');




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
  ) {

   }

  ngOnInit() {
    this.clear();
    this.total_strength_count = 0;
    this.two_total_strength_count = 0;
    this.balance_strength_count = 0;
    this.storage.set('shift_type','SHIFT 1');
    this.shift_type = this.storage.get('shift_type');
    this.site_details = this.storage.get('site_detail_att');
    this.total_strength();
    console.log(this.update_attendance_id);
    console.log(this.site_details);
    this.site_time = ""+this.site_details.unit_shift_one_start+" - "+this.site_details.unit_shift_one_end;






  }

  add_rescan(){
    this.navCtrl.navigateForward('aso_attendance_rescan'); 
  }

  submit_value(){
    
  }

  notifications(){
    
  }

  fetch_attendance_detail(){
    let a = {
      date : this.selected_date,
      site_id : this.site_details._id,
      shift_type : this.shift_type
    }
    this._api.fetch_attendance_overview(a).subscribe(
      (response: any) => {
        this.attendance_detail = response.Data;
        if(this.attendance_detail.length !== 0){
        let array = response.Data;
           this.two_strength_emp_detail = response.Data;
           var counts = array.reduce((p, c) => {
            var name = c.emp_id.user_designation;
            if (!p.hasOwnProperty(name)) {
              p[name] = 0;
            }
            p[name]++;
            return p;
          }, {});
          var countsExtended = Object.keys(counts).map((k:any) => {
          this.two_total_strength_count = this.two_total_strength_count +  counts[k];
          return { name: k, count: counts[k], present_count : 0, balance : 0 }; 
          });
          console.log(countsExtended);
          this.two_strength_detail = countsExtended;
            this.balance_strength_count = this.total_strength_count - this.two_total_strength_count;
            this.strength_detail.forEach(elements => {
              this.two_strength_detail.forEach(element => {
                if(elements.name == element.name){
                  elements.present_count = element.count;
                  elements.balance = elements.count - elements.present_count;
                }
              });
            });
            console.log(this.strength_detail);
            console.log(this.two_strength_detail);
            this.loader_visible = false;
          } else {
           this.loader_visible = false;
           this.toastr.warningToastr('No Record Found');
     
          }
       
      }
    );
  





  }


  total_strength(){
    this.loader_visible = true;
    console.log('Details');
    let a = {
      site_id : this.site_details._id,
      shift_type : this.shift_type
     }
      this._api.total_strength_fetch_shift(a).subscribe(
        (response: any) => {
          if(response.Code == 200){
           const array = response.Data;
           if(array.length !== 0){
           console.log(array);
           this.strength_emp_detail = response.Data;
           var counts = array.reduce((p, c) => {
            var name = c.emp_id.user_designation;
            if (!p.hasOwnProperty(name)) {
              p[name] = 0;
            }
            p[name]++;
            return p;
          }, {});
          var countsExtended = Object.keys(counts).map((k:any) => {
          this.total_strength_count = this.total_strength_count +  counts[k];
          return { name: k, count: counts[k], present_count : 0, balance : counts[k]}; 
          });
          this.strength_detail = countsExtended;
          this.fetch_attendance_detail();
          }else {
            this.loader_visible = false;
            this.toastr.errorToastr('No Allocation Found');
          }
          }
          else {
            this.loader_visible = false;
            this.toastr.errorToastr(response.Message);
          }
        }
      );
  }


  clear(){
    this.strength_emp_detail = [];
    this.strength_detail = [];
    this.total_strength_count = 0;
    this.two_strength_emp_detail = [];
    this.two_strength_detail = [];
    this.two_total_strength_count = 0;
    this.balance_strength_count = 0;
  }


  submitted_detail(data){
var employee_detail = this.storage.get('employee_detail');
let a  = {
site_id : this.site_details._id,
submitted_by : employee_detail._id,
shift_type  : this.shift_type,
overall_strgth  : this.total_strength_count,
present_strgth  : this.two_total_strength_count,
absent_strgth  : this.balance_strength_count,
date  : this.datepipe.transform(new Date(),'yyyy-MM-dd'),
over_data  : this.strength_emp_detail,
submitted_status : data
    }
    console.log(a);
    this._api.submitted_detail(a).subscribe(
      (response: any) => {
        this.toastr.successToastr(data+" Successfully");
        this.navCtrl.navigateForward('aso_view_attendance_overal_shiftcount'); 
      }
      );
  }



  submitted_detail_hold(data){
    let c = {_id : this.update_attendance_id};
    this._api.submitted_detail_delete(c).subscribe(
      (response: any) => {
        console.log(response);
        var employee_detail = this.storage.get('employee_detail');
        let a  = {
        site_id : this.site_details._id,
        submitted_by : employee_detail._id,
        shift_type  : this.shift_type,
        overall_strgth  : this.total_strength_count,
        present_strgth  : this.two_total_strength_count,
        absent_strgth  : this.balance_strength_count,
        date  : this.datepipe.transform(new Date(),'yyyy-MM-dd'),
        over_data  : this.strength_emp_detail,
        submitted_status : data
            }
            console.log(a);
            this._api.submitted_detail(a).subscribe(
              (response: any) => {
                this.toastr.successToastr(data+" Successfully");
                this.navCtrl.navigateForward('aso_view_attendance_overal_shiftcount'); 
              }
              );
      });
      }
      setDate(date, e){
        date === "start" ? (this.selected_date = e) : (this.selected_date = e);
        console.log(this.selected_date);
        this.today_date = this.datepipe.transform(new Date(this.selected_date),'dd MMM yyyy');
        this.clear();
        this.total_strength();
      }
      prev_shift(){
        console.log(this.shift_type); 
        if(this.shift_type == 'SHIFT 3'){
          this.storage.set('shift_type','SHIFT 2');
          this.shift_type = this.storage.get('shift_type');
          console.log(this.site_details);
          this.site_time = ""+this.site_details.unit_shift_two_start+" - "+this.site_details.unit_shift_two_end;
          this.clear();
          this.total_strength();
         }
         else if(this.shift_type == 'SHIFT 2'){
          this.storage.set('shift_type','SHIFT 1');
          this.shift_type = this.storage.get('shift_type');
          console.log(this.site_details);
          this.site_time = ""+this.site_details.unit_shift_one_start+" - "+this.site_details.unit_shift_one_end;
          this.clear();
          this.total_strength();
         }
         else if(this.shift_type == 'SHIFT 1'){
          this.toastr.warningToastr('There is no previous shift');
         }
      }

      next_shift(){
         console.log(this.shift_type); 
         if(this.shift_type == 'SHIFT 1'){
          this.storage.set('shift_type','SHIFT 2');
          this.shift_type = this.storage.get('shift_type');
          console.log(this.site_details);
          this.site_time = ""+this.site_details.unit_shift_two_start+" - "+this.site_details.unit_shift_two_end;
          this.clear();
          this.total_strength();
         }
         else if(this.shift_type == 'SHIFT 2'){
          this.storage.set('shift_type','SHIFT 3');
          this.shift_type = this.storage.get('shift_type');
          console.log(this.site_details);
          this.site_time = ""+this.site_details.unit_shift_three_start+" - "+this.site_details.unit_shift_three_end;
          this.clear();
          this.total_strength();
         }
         else if(this.shift_type == 'SHIFT 3'){
          this.toastr.warningToastr('There is no next shift');
         }
      }

      markaspresent_mark(){
        this.navCtrl.navigateForward('aso_view_attendance_overal_shiftcount');
      }
}


