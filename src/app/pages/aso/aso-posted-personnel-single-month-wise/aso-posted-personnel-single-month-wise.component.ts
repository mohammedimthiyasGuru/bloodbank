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
  selector: 'app-aso-posted-personnel-single-month-wise',
  templateUrl: './aso-posted-personnel-single-month-wise.component.html',
  styleUrls: ['./aso-posted-personnel-single-month-wise.component.scss']
})
export class AsoPostedPersonnelSingleMonthWiseComponent implements OnInit {

  security_detail:any;

  date_value_detail = [];

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
    var  current_month_year = this.datepipe.transform(new Date(),'yyyy-MM-dd');
    function getMonthDifference(startDate, endDate) {
      return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())
      );
    }
   var total_month = getMonthDifference(new Date('2022-01-01'), new Date(current_month_year));
   console.log(total_month);
   total_month = total_month + 1;
   var date_value = [];
   var start_date = new Date('2022-01-01');
   function daysInMonth (month, year) {
     console.log(month,year);
    return new Date(year, month, 0).getDate();
   }
   for(let a  = 0 ; a < total_month ; a++){
    var d = new Date(start_date);
    d.setMonth(d.getMonth() + a);
    var yy = this.datepipe.transform(d,'yyyy')
    var mm = this.datepipe.transform(d,'MM')
    var day_count = daysInMonth(+mm,+yy);
    console.log(day_count);
    var dat = this.datepipe.transform(d,'yyyy-MM-dd')
    date_value.push({
      display_date  : this.datepipe.transform(d,'MMM yyyy'),
      shift_one : 0,
      shift_two : 0,
      shift_three : 0,
      shift_present_count : 0,
      shift_total_days : day_count
    });
   }

   console.log(date_value);
   this.date_value_detail = date_value;





  }

  notifications(){

  }

  single_emp_attend(){
    this.navCtrl.navigateForward('aso_posted_personnel_single_date_wise');
  }

  back_redirec(){
    this.navCtrl.navigateForward('aso_posted_personnel_single_date_wise');
  }
}
