import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';


@Component({
  selector: 'app-fo-daily-summary-unit-singleview',
  templateUrl: './fo-daily-summary-unit-singleview.component.html',
  styleUrls: ['./fo-daily-summary-unit-singleview.component.scss']
})
export class FoDailySummaryUnitSingleviewComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  notifications(){
    
  }


  prev_shift(){

  }

  next_shift(){

  }
  markaspresent_mark(){
    this.navCtrl.navigateForward('fo_daily_summary_single_date_wise');
  }

  view_single_attendance(){
    this.navCtrl.navigateForward('fo_daily_summary_single_date_wise');
  }

}
