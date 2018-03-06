import { RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    
  }

  login(credentials){
    let headers = new Headers();
    headers.append('Content-Type', 'aplication/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post('https://beer.symfonycasts.com.br/v1/auth/login', credentials, options)
        .map(res => { res.json() })
        .subscribe(data => {
          this.storage.set('token', data.token); 
        });
  }

  userIsLogged(){
    return this.storage.get('token').then(val => {
      if(val !== undefined){
        return val;
      } else {
        return false; 
      }
    });
  }

  logout(){
    this.storage.remove('token');
  }

}
 