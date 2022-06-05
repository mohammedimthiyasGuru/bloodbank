import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-aso-view-attendance-overal-shiftcount',
  templateUrl: './aso-view-attendance-overal-shiftcount.component.html',
  styleUrls: ['./aso-view-attendance-overal-shiftcount.component.scss']
})
export class AsoViewAttendanceOveralShiftcountComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  notifications(){

  }

  new_fo_monthlyview_redir(){
    this.navCtrl.navigateForward('aso_view_attendance_shift_wise');
  }

}
