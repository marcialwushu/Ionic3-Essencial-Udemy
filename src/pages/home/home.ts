import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';
//import { Http, Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';

import { RestProvider } from '../../providers/rest/rest';



import 'rxjs/add/operator/map';


@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    RestProvider
  ]
})
export class HomePage {
  
  public loading = new Array<any>();
  public film = new Array<any>();
  

  
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
   
  ) {
    this.getPeople();
    this.getFilms();
    
  }

  getPeople(){
    this.restProvider.getPeople().subscribe
      (data => {
        console.log(data);
        const response = (data as any);
        this.loading = this.loading.concat(response.results);
      })
  }

  getFilms(){
    this.restProvider.getFilms().subscribe
    (data => {
      console.log(data);
      const response = (data as any);
      this.film = this.film.concat(response.results);

    })
  }
    
  goToTestPage(id){
    
    this.navCtrl.push(TestPage, {
      'loading': id
    });
  }

  
}
