import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

//import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public film = new Array<any>();
  public starship : Array<{}>; 
  private url:string = 'https://swapi.co/api';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public restProvider: RestProvider,
    public http: Http
  ) {
    this.getFilms();

    this.http.get(this.url + '/starships')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
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
