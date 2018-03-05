import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private url:string = 'https://beer.symfonycasts.com.br/v1';
  selectedItem: any;
  icons: string[];
  public items = {
    name: "", 
    price: "", 
    type: "", 
    mark: "",
    img: ""
  };

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController, 
    public navParams: NavParams,
    public http: Http,
    private camera: Camera
  ) {
    
  }

  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((ImageData) => {
      let base64Image = 'data:image/jpeg;base64' + ImageData;
      this.items.img = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

  saveItems(items){
    let headers = new Headers();
    headers.append('Content-Type', 'aplication/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url + '/beers', items, options)
        .map(res => { res.json() })
        .subscribe(data => {
          let toast = this.toastCtrl.create({
            message: 'Added successfuly',
            duration: 3000
          });
          toast.present();
        });
  }

  getBeerInfo(id){
    this.navCtrl.push(ListPage,
    {
      'beer+id' : id,
      'api_url' : this.url
    });
  }
  

  
}
