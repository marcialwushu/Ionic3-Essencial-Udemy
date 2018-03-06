import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credential: Object = {
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    console.log('loging...');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
