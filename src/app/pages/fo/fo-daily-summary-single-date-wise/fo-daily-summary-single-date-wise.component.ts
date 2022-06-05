import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';


@Component({
  selector: 'app-fo-daily-summary-single-date-wise',
  templateUrl: './fo-daily-summary-single-date-wise.component.html',
  styleUrls: ['./fo-daily-summary-single-date-wise.component.scss']
})
export class FoDailySummarySingleDateWiseComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  notifications(){

  }

  new_fo_monthlyview_redir(){
    this.navCtrl.navigateForward('fo_daily_summary_single_month_wise');
  }

}
