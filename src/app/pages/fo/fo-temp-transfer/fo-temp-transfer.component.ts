import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fo-temp-transfer',
  templateUrl: './fo-temp-transfer.component.html',
  styleUrls: ['./fo-temp-transfer.component.scss']
})
export class FoTempTransferComponent implements OnInit {

  popup = false;
  constructor() { }

  ngOnInit() {
  }

  transfer_pop(){
    this.popup = true
  }

  notifications(){

  }

  markaspresent_mark(){
    this.popup = false; 
    alert('Request Forwarded to ops control room. Pls wait for a while');
  }

  mark_as_cancel(){
    this.popup = false;
  }



}
