import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAlertPage } from './home-alert';

@NgModule({
  declarations: [
    HomeAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAlertPage),
  ],
})
export class HomeAlertPageModule {}
