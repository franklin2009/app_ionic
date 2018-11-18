import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TranslatePipe } from './../pipe/translate-pipe';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    private translate: TranslatePipe
    ) {
      platform.ready().then(() => {
         this.translate.use('es').then(ans=>console.log(ans));
         statusBar.styleDefault();
         splashScreen.hide();
      });
  }
}
