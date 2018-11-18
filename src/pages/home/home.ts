import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alertList:any[]=[];

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public alertCtrl: AlertController) {
    var pathImg:string = './../../assets/imgs/';
    this.alertList=[
        { title:'Alerta Amarilla', description:'Notificar ... 1', image: pathImg+'alerta_amarilla.png', type: 1},
        { title:'Alerta Naranja', description:'Notificar ... 2', image: pathImg+'alerta_naranja.png', type:2},
        { title:'Alerta Roja', description:'Notificar ... 3', image: pathImg+'alerta_roja.png', type:3},
    ];
  }

  /*onSeletAlert(item:any):void {
    this.navCtrl.push(HomeAlertPage,{ typeAlert: item.type});
  }*/

  onSeletAlert(item:any):void{
    this.geolocation.getCurrentPosition().then((position) => {
      //position.coords.latitude, position.coords.longitude
      var _data={
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        title: item.title,
        type: item.type,
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
