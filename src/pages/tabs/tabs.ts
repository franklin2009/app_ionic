
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HomeAlertPage } from './../home-alert/home-alert';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = HomeAlertPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {  }
}
