import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


@Injectable()
export class IonicStorageProvider {

  constructor(
    public http: HttpClient,
    private _storage: Storage
  ) {
    
  }

  set(chave: string, valor: string){
    this._storage.set(chave, valor);
  }

  get(chave: string){
    return new Promise((resolve, reject) => {
      this._storage.get(chave).then((val) => {
        resolve(val);
      }).catch(() => {
        reject(reject)
      });
    });
  }

  clearAll(){
    this._storage.clear();
  }

}
