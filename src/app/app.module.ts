import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Newnotification} from '../pages/newnotification/newnotification';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Login } from '../pages/login/login';
import { HomeStaff } from '../pages/home-staff/home-staff';
import { HomeStudent } from '../pages/home-student/home-student';
import { NotificationStaff } from '../pages/notification-staff/notification-staff';
import { NotificationStudent } from '../pages/notification-student/notification-student';
import { MessageStaff } from '../pages/message-staff/message-staff';
import { MessageStudent } from '../pages/message-student/message-student';
import { Profile } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Login,
    HomeStaff,
    HomeStudent,
    NotificationStaff,
    NotificationStudent,
    MessageStaff,
    MessageStudent,
    Profile,
    TabsPage,
    Newnotification
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Login,
    HomeStaff,
    HomeStudent,
    NotificationStaff,
    NotificationStudent,
    MessageStaff,
    MessageStudent,
    Profile,
    TabsPage,
    Newnotification
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
