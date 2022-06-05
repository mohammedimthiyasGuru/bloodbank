import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(public navCtrl: NavController,) { }

  ngOnInit() {
  }

  get_back(){
    this.navCtrl.navigateRoot('/');
  }


}
