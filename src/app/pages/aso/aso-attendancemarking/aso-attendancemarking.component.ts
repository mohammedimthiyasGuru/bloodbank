import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common';


import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';
  import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';


import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";


@Component({
  selector: 'app-aso-attendancemarking',
  templateUrl: './aso-attendancemarking.component.html',
  styleUrls: ['./aso-attendancemarking.component.scss']
})
export class AsoAttendancemarkingComponent {

  encodeData: any;
  scannedData: any;
  barcodeScannerOptions: BarcodeScannerOptions;

  start_statuss = false;
  start_status  =  false;
  site_details = this.storage.get('site_detail_att');
  site_shift = 1;
  shift_employee_list:any;
  today_date = this.datePipe.transform(new Date(),'yyyy-MM-dd');
  
  user_not_found_pop = false;
  temp_emp  = {emp_no : '',emp_name : '', emp_type : '',_id:''};
  scanned_data = {
    'E_Code': '',
    'Name' : '',
    'Role' :''
  }


  
  shift_start = '';
  shift_type = '';
  shift_count = {
    shift_one : 0,
    shift_two : 0,
    shift_three : 0
  }
  current_scan_count = 0;
  scanned_count = 0;


  constructor(private barcodeScanner: BarcodeScanner,public navCtrl: NavController,@Inject(SESSION_STORAGE) private storage: StorageService
    ,private _api: ApiService,
    private toastr:ToastrManager,
    private datePipe: DatePipe,
    ) {
      
    console.log(this.site_details);
    this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.get_site_security_list();
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        console.log(this.scannedData.text);
        const splitted = this.scannedData.text.split(",");
        console.log(splitted); 
        this.check_present_status(splitted[0],splitted[1],splitted[2],splitted[3]);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  scanCode1(){
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        console.log(this.scannedData.text);
        const splitted = this.scannedData.text.split(",");
        console.log(splitted); 
        this.check_present_status(splitted[0],splitted[1],splitted[2],splitted[3])
        // console.log(this.scannedData);
        // this.start_status = true;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

  over_view(){
    this.storage.set('shift_type',this.shift_type);
    this.navCtrl.navigateForward('aso_attendanceoverview');
  }

  back_action(){
    this.navCtrl.navigateForward('aso_dashboard');
  }


  notifications(){

  }

  check_shift(data){
    this.storage.set('update_attendance_id','');
     if(data == 1){
      this.shift_type = 'SHIFT 1';
     }if(data == 2){
      this.shift_type = 'SHIFT 2';
     }if(data == 3){
      this.shift_type = 'SHIFT 3';
     }
     this.storage.set('shift_type',this.shift_type);
     let a  = {
      site_id : this.site_details._id,
      shift_type  : this.shift_type,
      date  : this.datePipe.transform(new Date(),'yyyy-MM-dd'),
      }
     this._api.check_submit_status(a).subscribe(
      (response: any) => {
         console.log(response.Data);
         if(response.Code == 200){
            if(response.Data.submitted_status == 'SUBMITTED'){
              alert("Attendance Already Marked");
            }else{
              this.storage.set('update_attendance_id',response.Data._id);
              alert('Attendance Already Marked & Kept in Hold');
              console.log(response.Data);
              this.navCtrl.navigateForward('aso_attendanceoverview');    
              }
         }else {
          this.check_shift2(data); 
         }
      });











  }

  check_shift2(data){
    this.start_statuss = false;
    this.start_status  =  false;
    console.log(this.site_details);
    if(data <= this.site_details.unit_no_of_shift){
      console.log('valid');
       if(data == 1){
         this.shift_type = 'SHIFT 1';
         var current_date = new Date(); 
         var current_date_one = this.datePipe.transform(new Date(),'yyyy-MM-dd')
        //  var shift_temp_one_st = new Date(""+current_date_one+"T"+this.site_details.unit_shift_one_start+":10.214");
         var shift_temp_one_st = new Date(""+current_date_one+"T"+"01:40"+":10.214");
         console.log(current_date,shift_temp_one_st);
         this.shift_start = ""+this.site_details.unit_shift_one_start +" - "+ this.site_details.unit_shift_one_end
         if(current_date < shift_temp_one_st){
           this.toastr.warningToastr('Shift not start, Start scanning once shift start')
         }else{
           console.log('Start');
           this.start_statuss = true;
           this.get_site_security_list();
         }
       }else if(data == 2){
        this.shift_type = 'SHIFT 2';
        var current_date = new Date(); 
        var current_date_one = this.datePipe.transform(new Date(),'yyyy-MM-dd')
        // var shift_temp_one_st = new Date(""+current_date_one+"T"+this.site_details.unit_shift_two_start+":10.214");
        var shift_temp_one_st = new Date(""+current_date_one+"T"+"01:40"+":10.214");
        console.log(current_date,shift_temp_one_st);
        this.shift_start = ""+this.site_details.unit_shift_two_start +" - "+ this.site_details.unit_shift_two_end
        if(current_date < shift_temp_one_st){
          this.toastr.warningToastr('Shift not start, Start scanning once shift start')
        }else{
          console.log('Start');
          this.start_statuss = true;
          this.get_site_security_list();
        }
      }else if(data == 3){
        this.shift_type = 'SHIFT 3';
        var current_date = new Date(); 
        var current_date_one = this.datePipe.transform(new Date(),'yyyy-MM-dd')
        // var shift_temp_one_st = new Date(""+current_date_one+"T"+this.site_details.unit_shift_three_start+":10.214");
        var shift_temp_one_st = new Date(""+current_date_one+"T"+"01:40"+":10.214");
        console.log(current_date,shift_temp_one_st);
        this.shift_start = ""+this.site_details.unit_shift_three_start +" - "+ this.site_details.unit_shift_three_end
        if(current_date < shift_temp_one_st){
          this.toastr.warningToastr('Shift not start, Start scanning once shift start')
        }else{
          console.log('Start');
          this.start_statuss = true;
          this.get_site_security_list();
        }
      }
    }else{
      this.toastr.warningToastr('This site not having this shift');
    }
  }

get_site_security_list(){
  this.shift_employee_list = [];
  this.shift_count = {
    shift_one : 0,
    shift_two : 0,
    shift_three : 0
  }
  this.current_scan_count = 0;
  let a = {
    site_id : this.site_details._id
  }
  this._api.get_site_security_list_fetch(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if(response.Code == 200){
        response.Data.forEach(element => {
          if(element.shift_type == 'SHIFT 1' && element.emp_id.user_designation !== 'ASO' && element.emp_id.user_designation !== 'Field Officer'){
            this.shift_count.shift_one = this.shift_count.shift_one + 1;
          }
          if(element.shift_type == 'SHIFT 2' && element.emp_id.user_designation !== 'ASO' && element.emp_id.user_designation !== 'Field Officer'){
            this.shift_count.shift_two = this.shift_count.shift_two + 1;
          }
          if(element.shift_type == 'SHIFT 3' && element.emp_id.user_designation !== 'ASO' && element.emp_id.user_designation !== 'Field Officer'){
            this.shift_count.shift_three = this.shift_count.shift_three + 1;
          }
          if(this.shift_type == element.shift_type && element.emp_id.user_designation !== 'ASO' && element.emp_id.user_designation !== 'Field Officer'){
             this.current_scan_count = this.current_scan_count + 1;
             this.shift_employee_list.push(element.emp_id);
          }
         });
      }else {
        this.toastr.errorToastr(response.Message);
      }
    }
  );
}
 
check_present_status(emp_nos,emp_names,emp_types,empids)
{
  console.log(emp_nos,emp_names,emp_types,empids);
  var empid = empids;
  var emp_name = emp_names;
  var emp_no = emp_nos;
  var emp_type = emp_types;
  console.log(this.shift_employee_list);
  var check_status = 0;
  for(let c = 0; c < this.shift_employee_list.length; c++){
     console.log(""+this.shift_employee_list[c]._id,empid);
      if(""+this.shift_employee_list[c]._id == ""+empid){
        this.check_statu_two(empid,'Allocated','Scanned');
        check_status = 1;
        this.temp_emp =  {emp_no : emp_no,emp_name : emp_name, emp_type : emp_type,_id:empid}
      }
      if(c == this.shift_employee_list.length - 1){
        if(check_status == 0){
          this.user_not_found_pop = true;
          // alert('User Not Found');
          this.temp_emp =  {emp_no:emp_nos,emp_name:emp_name,emp_type:emp_type,_id:empid}
        }
      }
  }





}

check_statu_two(empid,remarks,status){
  var scanned_detail = this.storage.get('employee_detail');
  let a  = {
    site_id : this.site_details._id,
    date: this.datePipe.transform(new Date(),'yyyy-MM-dd'),
    emp_id : empid,
    shift_type : this.shift_type,
    remarks : remarks,
    status: status,
    scanned_by : scanned_detail._id,
    date_of_scan : this.datePipe.transform(new Date(),'yyyy-MM-dd'),
  }
  console.log(a);
    this._api.check_present_status(a).subscribe(
   (response: any) => {
      console.log(response);
      if(response.Code == 401){
       alert("This present already marked today")
      }else{
        this.start_status = true;
        this.scanned_count = this.scanned_count + 1;
      }
   }
   );
}


mark_as_cancel(){
 this.user_not_found_pop = false;
 this.temp_emp =  {emp_no : '',emp_name : '', emp_type : '',_id:''}
}


markaspresent_mark(){
  this.user_not_found_pop = false;
  console.log(this.temp_emp);
  this.check_statu_two(this.temp_emp._id,'Re-allocated by scanned','Self Allocated');
}



}