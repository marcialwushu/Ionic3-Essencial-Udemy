import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public film = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public restProvider: RestProvider
  ) {
    this.getFilms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Menssagem',
      subTitle: 'Você logou!',
      buttons: ['OK']
    });
    alert.present();
  }

  getFilms(){
    this.restProvider.getFilms().subscribe
    (data => {
      console.log(data);
      const response = (data as any);
      this.film = this.film.concat(response.results);
    })
  }


}
