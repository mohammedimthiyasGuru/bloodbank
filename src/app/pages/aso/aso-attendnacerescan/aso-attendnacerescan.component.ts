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
  selector: 'app-aso-attendnacerescan',
  templateUrl: './aso-attendnacerescan.component.html',
  styleUrls: ['./aso-attendnacerescan.component.scss']
})
export class AsoAttendnacerescanComponent {

 
  encodeData: any;
  scannedData: any;
  barcodeScannerOptions: BarcodeScannerOptions;

  start_statuss = true;
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
  shift_type = this.storage.get('shift_type');
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
     
      this.get_site_security_list();
      
    console.log(this.site_details);
    this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    

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
        this.check_present_status('E-004','IQBAL','AM','62922b37e2f8f96f1ecb78dd');
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



}