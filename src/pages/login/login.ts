import { IonicStorageProvider } from './../../providers/ionic-storage/ionic-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';


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

  user: { username: string, password: string } = { username: '', password: '' }
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider
  ) {
  }

  login(){
    console.log(this.user)
    this.user.username = ''
    this.user.password = ''   

    this.navCtrl.setRoot(HomePage);
    //this.authService.login(this.credential);
  }

  logout(){
    //this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewCanEnter(){
    return this.authService.logged();
   }

  

}
