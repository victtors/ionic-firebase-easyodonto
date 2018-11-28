import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { CadastroPacientePage } from '../pages/cadastro-paciente/cadastro-paciente';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrServiceProvider } from '../providers/toastr-service/toastr-service';
import { EditarPage } from '../pages/editar/editar';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { AuthServiceProvider } from '../providers/auth/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPacientePage,
    ListPage,
    PacientesPage,
    LoginPage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD_j_ACa48K46VVJdINWED2LGFUxOZ9Y4s",
      authDomain: "easyodonto-ccb4f.firebaseapp.com",
      databaseURL: "https://easyodonto-ccb4f.firebaseio.com",
      projectId: "easyodonto-ccb4f",
      storageBucket: "easyodonto-ccb4f.appspot.com",
      messagingSenderId: "764649080199"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPacientePage,
    ListPage,
    PacientesPage,
    LoginPage,
    EditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    ToastrServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
