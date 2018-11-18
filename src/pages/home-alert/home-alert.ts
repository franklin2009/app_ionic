import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-home-alert',
  templateUrl: 'home-alert.html',
})
export class HomeAlertPage {

  alertList:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public alertCtrl: AlertController) {
    var pathImg = './../../assets/imgs/';
    var img='';
    var typeAlert=1;
    switch(typeAlert){
       case 1: img=pathImg+'btn-yellow.png'; break;
       case 2: img=pathImg+'btn-orange.png'; break;
       case 3: img=pathImg+'btn-red.png'; break;
    }
    this.alertList=[
        { title:'Sub-Titulo .. 1', description:'Descripcion ... 1' , image: pathImg+'btn-yellow.png', type:1, subType:1, status:0, date: 1541273327},
        { title:'Sub-Titulo .. 2', description:'Descripcion ... 2' , image: pathImg+'btn-orange.png', type:2, subType:2, status:0,  date: 1541273327},
        { title:'Sub-Titulo .. 3', description:'Descripcion ... 3' , image: pathImg+'btn-orange.png', type:2, subType:3, status:1,  date: 1541273327},
        { title:'Sub-Titulo .. 4', description:'Descripcion ... 4' , image: pathImg+'btn-red.png', type:3, subType:4, status:1,  date: 1541273327},
        { title:'Sub-Titulo .. 5', description:'Descripcion ... 5' , image: pathImg+'btn-yellow.png', type:1, subType:5, status:1,  date: 1541273327},
        { title:'Sub-Titulo .. 6', description:'Descripcion ... 6' , image: pathImg+'btn-red.png', type:3, subType:6, status:0,  date: 1541273327}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAlertPage');
  }

  onSeletAlert(item:any):void{
    this.geolocation.getCurrentPosition().then((position) => {
      //position.coords.latitude, position.coords.longitude
      var _data={
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        title: item.title,
        type: item.type,
        subType:  item.subType,
        user: {
            id:  0,// time+
            name:'anonymous',
            email:'',
            register:false
        }
      }
      console.log("data > ",_data);
      this.showAlert("Alerta Enviada", "Gracias por tu reporte. Para dar mas detalle de tu reporte, selecciona la opcion 'Documentar'");
    }, (err) => {
      console.log(err);
    });
  }

  showAlert(_title:string, _subTitle:string):void {
    const alert = this.alertCtrl.create({
      title: _title,
      subTitle: _subTitle,
      buttons: [
          {
            text: 'Documentar',
            handler: () => {
              console.log('Documentar clicked');
            }
          },
          {
            text: 'Despues',
            handler: () => {
              console.log('Despues clicked');
            }
          },
          {
            text: 'No quiero',
            handler: () => {
              console.log('No quiero clicked');
            }
          },
      ]
    });
    alert.present();
  }

}
