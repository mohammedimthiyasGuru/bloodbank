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
  selector: 'app-aso-posted-personnel-single-date-wise',
  templateUrl: './aso-posted-personnel-single-date-wise.component.html',
  styleUrls: ['./aso-posted-personnel-single-date-wise.component.scss']
})
export class AsoPostedPersonnelSingleDateWiseComponent implements OnInit {

  security_detail:any;
  date_detail = [];

  constructor(
    public navCtrl: NavController,
    private _api: ApiService,
    private toastr:ToastrManager,
    public datepipe: DatePipe,
    @Inject(SESSION_STORAGE) private storage: StorageService
    ) { }

  ngOnInit() {
    this.security_detail = this.storage.get('security_detail'); 
    console.log(this.security_detail);
    var  current_date = this.datepipe.transform(new Date(),'dd');
    var  current_month_year = this.datepipe.transform(new Date(),'yyyy-MM');
    console.log(current_date);
    console.log(current_month_year);
    this.date_detail = [];
    var counts = +current_date;
    for(let a = 1; a <=+current_date ; a++){
      var dates = '';
      if(counts < 10){
        dates = '0'+counts;
      }else{
        dates = ""+counts;
      }
      this.date_detail.push({
        date : ""+current_month_year+'-'+dates,
        shift_one : '-',
        shift_two : '-',
        shift_three : '-',
        remarks : ''
      })
      counts = counts - 1; 
    }
    console.log(this.date_detail);
    this.check_attendance_value();
  }
  notifications(){

  }

  new_fo_monthlyview_redir(){
    this.navCtrl.navigateForward('aso_posted_personnel_single_month_wise');
  }

  check_attendance_value(){
     console.log(this.date_detail);

    //  fetch_single_emp_attendance_list
    let a  = {
      emp_id : this.security_detail._id
    }
    this._api.fetch_single_emp_attendance_list(a).subscribe(
      (response: any) => {
         console.log(response.Data);
         response.Data.forEach(elements => { 
          this.date_detail.forEach(element => { 
            if(elements.date == element.date){
                 console.log("True");
                 console.log(element.shift_type);
                 if('SHIFT 1' == elements.shift_type){
                  element.shift_one = 'p';
                  element.remarks = element.remarks+','+elements.remarks;
                 }
                 else if('SHIFT 2' == elements.shift_type){
                  element.shift_one = 'p';
                  element.remarks = element.remarks+','+elements.remarks;
                 }
                 else if('SHIFT 3' == elements.shift_type){
                  element.shift_one = 'p';
                  element.remarks = element.remarks+','+elements.remarks;
                 }
            }
           });




         });


      });


  }

  back_redirec(){
    this.navCtrl.navigateForward('aso_posted_personnel');
  }

}