import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { InboxPage } from '../pages/inbox/inbox';
import { AuthProvider } from '../providers/auth/auth';
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    InboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
  ]
})
export class AppModule { }
