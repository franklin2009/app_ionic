
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {  HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { HomeAlertPage } from './../pages/home-alert/home-alert';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';

import { TranslatePipe } from './../pipe/translate-pipe';
import { TranslateTransformPipe } from './../pipe/translate-transform.pipe';
import {CounterModule} from 'angular-circle-counter';
import { AuthService } from './../services/uth-service';

import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeAlertPage,
    LoginPage,
    RegisterPage,
    TabsPage,
    TranslateTransformPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CounterModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeAlertPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    TranslatePipe,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
