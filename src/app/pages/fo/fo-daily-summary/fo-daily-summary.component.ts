import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';


@Component({
  selector: 'app-fo-daily-summary',
  templateUrl: './fo-daily-summary.component.html',
  styleUrls: ['./fo-daily-summary.component.scss']
})
export class FoDailySummaryComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  notifications(){

  }

  new_fo_monthlyview_redir(){
    this.navCtrl.navigateForward('fo_daily_summary_unit_overview');
  }

  prev_date(){

  }

  next_date(){}

  back_redirec(){
    this.navCtrl.navigateForward('fo_dashboard');
  }

}
