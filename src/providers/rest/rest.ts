import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private apiUrl = 'https://swapi.co/api';
  private apiBeer = 'https://beer.symfonycasts.com.br/v1';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getPeople(){
    return this.http.get(this.apiUrl + '/people');
  }

  getFilms(){
    return this.http.get(this.apiUrl + '/films');
  }

  getBeer(){
    return this.http.get(this.apiBeer + '/beers');
  }

}
