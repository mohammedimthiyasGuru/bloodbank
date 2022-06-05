import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';



import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';




@Component({
  selector: 'app-aso-posted-personnel',
  templateUrl: './aso-posted-personnel.component.html',
  styleUrls: ['./aso-posted-personnel.component.scss']
})
export class AsoPostedPersonnelComponent implements OnInit {

   site_details = this.storage.get('site_detail_att');
   current_date = this.datepipe.transform(new Date(),'dd MMM yy');
   strength_detail = [];
   total_strength_count = 0;
   present_strength_count = 0;
   balance_strength_count = 0;
   strength_emp_detail = [];


   attendance_detail = [];

   today_date = this.datepipe.transform(new Date(),'dd MMM yyyy');
 
 

 
   two_strength_emp_detail : any;
   two_strength_detail : any;
   two_total_strength_count = 0;
 

   update_attendance_id = this.storage.get('update_attendance_id');
 



  constructor(
    public navCtrl: NavController,
    private _api: ApiService,
    private toastr:ToastrManager,
    public datepipe: DatePipe,
    @Inject(SESSION_STORAGE) private storage: StorageService
    ) { }

  ngOnInit() {
    console.log(this.site_details);
    this.total_strength();
  }

  notifications(){

  }


  total_strength(){
    let a = {
      site_id : this.site_details._id
     }
      this._api.total_strength_fetch(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if(response.Code == 200){
            response.Data.forEach(element => {
              element.present_status = 'A';
              element.remark_status = '-';
            }); 
           let array = response.Data;
           this.strength_emp_detail = response.Data;
           console.log(this.strength_emp_detail);
           var counts = array.reduce((p, c) => {
            var name = c.emp_id.user_designation;
            if (!p.hasOwnProperty(name)) {
              p[name] = 0;
            }
            p[name]++;
            return p;
          }, {});
          console.log(counts);
          var countsExtended = Object.keys(counts).map(k => {
          this.total_strength_count = this.total_strength_count +  counts[k];
          return { name: k, count: counts[k], present_count : 0, balance : counts[k]}; });
          console.log(countsExtended);
          this.balance_strength_count = this.total_strength_count - this.two_total_strength_count;
          this.strength_detail = countsExtended;
          this.fetch_attendance_detail();
            // this.toastr.successToastr(response.Message);
          }else {
            this.toastr.errorToastr(response.Message);
          }
        }
      );
  }


  fetch_attendance_detail(){
    let a = {
      date : this.datepipe.transform(new Date(),'yyyy-MM-dd'),
      site_id : this.site_details._id,
    }
    this._api.fetch_attendance_overview_site(a).subscribe(
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
            this.present_status_mark();
            // this.loader_visible = false;
          } else {
          //  this.loader_visible = false;
           this.toastr.warningToastr('No Record Found');
     
          }
       
      }
    );
  





  }


  present_status_mark(){

    this.attendance_detail.forEach(element => {
      if(element.status !== 'Scanned'){
       this.strength_emp_detail.push(
         {
          allocated_date: element.date,
          emp_id: element.emp_id,
          present_status: "P",
          remark_status: element.remarks,
          shift_type: element.shift_type,
          site_id: element.site_id._id,
          __v: 0,
          _id: "",
         }
       )
      }
 });



    console.log(this.strength_emp_detail);
    console.log(this.attendance_detail);
    this.strength_emp_detail.forEach(elements => {
          this.attendance_detail.forEach(element => {
               if(""+elements.emp_id._id == ""+element.emp_id._id && element.shift_type == elements.shift_type){
                elements.present_status = 'P';
                elements.remark_status = element.remarks;
               }
          });
    });
  }

  single_emp_attend(data){
    this.storage.set('security_detail',data);
    this.navCtrl.navigateForward('aso_posted_personnel_single_date_wise');
  }
}
