import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';


@Component({
  selector: 'app-fo-view-units',
  templateUrl: './fo-view-units.component.html',
  styleUrls: ['./fo-view-units.component.scss']
})
export class FoViewUnitsComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  notifications(){

  }

  view_attendance(){
    this.navCtrl.navigateForward('fo_daily_summary_unit_overview');
  }

  back_redirec(){
    this.navCtrl.navigateForward('fo_dashboard');
  }



}
