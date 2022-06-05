import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(  public navCtrl: NavController,) { }

  ngOnInit() {
  }


  bloaddonar(){
    this.navCtrl.navigateRoot('/donarlist');
  }

  bloodbank(){
    this.navCtrl.navigateRoot('/bloodbank');
  }

}
