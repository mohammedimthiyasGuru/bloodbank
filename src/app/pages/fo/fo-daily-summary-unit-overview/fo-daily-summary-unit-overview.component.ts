import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fo-daily-summary-unit-overview',
  templateUrl: './fo-daily-summary-unit-overview.component.html',
  styleUrls: ['./fo-daily-summary-unit-overview.component.scss']
})
export class FoDailySummaryUnitOverviewComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  notifications(){

  }

  new_fo_monthlyview_redir(){
    this.navCtrl.navigateForward('fo_daily_summary_unit_singleview');
  }


  back_redirec(){
    this.navCtrl.navigateForward('fo_view_units');
  }

}
