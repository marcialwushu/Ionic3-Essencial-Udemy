import { IonicStorageProvider } from './../ionic-storage/ionic-storage';

import { ToastController } from 'ionic-angular';
import { RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
  private msg: string = 'É preciso logar para acessar!';
  private chave_token: string = "token";

  constructor(
    public http: HttpClient,
    public storage: Storage,
    public toastCtrl: ToastController,
    private _storage: IonicStorageProvider
  ) {
    
  }

  setToken(valor: string) {
    this._storage.set(this.chave_token, valor);
  }

  logged(){
    this._storage.get("token").then((val) => {
      console.log(val);
      if(val === null || val === ''){
        return false;
      }
      return true;
    }).catch(() => {
      return false;
    });
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
      if(val){
        return val;
      } else {
        let toast = this.toastCtrl.create({
          message: this.msg,
          duration: 3000
        });
        toast.present();
        
        return false; 
      }
    });
  }

  logout(){
    this.storage.remove('token');
  }

}
 