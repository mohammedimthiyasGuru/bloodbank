import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';



@Component({
  selector: 'app-fo-daily-summary-single-month-wise',
  templateUrl: './fo-daily-summary-single-month-wise.component.html',
  styleUrls: ['./fo-daily-summary-single-month-wise.component.scss']
})
export class FoDailySummarySingleMonthWiseComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  notifications(){

  }

  single_emp_attend(){
    this.navCtrl.navigateForward('fo_daily_summary_single_date_wise');
  }
}
