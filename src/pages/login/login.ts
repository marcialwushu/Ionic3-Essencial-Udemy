import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider
  ) {
  }

  login(){
    this.authService.login(this.credential)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
