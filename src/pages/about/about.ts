import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./../../assets/css/circle.css']
})
export class AboutPage {

  map: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {}

  ionViewDidLoad(){
    this.initMap();
  }


  initMap() {
    var customMapType = new google.maps.StyledMapType([
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "landscape",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      },{
        featureType: "transit",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      },{
        featureType: "water",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]);

     var customMapTypeId = 'custom_style';
    let myLatLng={'lat':4.6514089, 'lng':-74.0627375};
    let mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      maxZoom:16,
      minZoom:10,
      zoom:15,
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false
    });

    this.map.mapTypes.set(customMapTypeId, customMapType);
    this.map.setMapTypeId(customMapTypeId);

    console.log('myLatLng', myLatLng);

    this.markets.forEach(
      mark=>{
          let m = new google.maps.Marker({
            map: this.map,
            position: mark.position,
            icon: mark.icon
          });

          console.log('mark', mark);
      }
    );

    mapEle.classList.add('show-map');
  }


  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    let mapEle: HTMLElement = document.getElementById('map');
    let myLatLng = {lat: latitude, lng: longitude};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }

  markets = [{
      'position': {'lat':4.6514089, 'lng':-74.0627375},
      'title': 'Alerta roja',
      'icon': {'url': './../../assets/imgs/pin-red.png'}
   },
   {
    'position': {'lat':4.6528566, 'lng':-74.0634773},
    'title': 'Alerta amarilla',
    'icon': {'url': './../../assets/imgs/pin-yellow.png'}
 },
 {
  'position': {'lat':4.6531264, 'lng':-74.0607617},
  'title': 'Alerta naranja',
  'icon': {'url': './../../assets/imgs/pin-orange.png'}
},
{
  'position': {'lat':4.6506985, 'lng':-74.0604099},
  'title': 'Alerta roja',
  'icon': {'url': './../../assets/imgs/pin-red.png'}
},
{
  'position': {'lat':4.6541245, 'lng':-74.0605632},
  'title': 'Alerta naranja',
  'icon': {'url': './../../assets/imgs/pin-orange.png'}
}
  ];

}
