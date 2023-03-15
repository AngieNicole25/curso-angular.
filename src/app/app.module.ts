import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { FIREBASE_OPTIONS } from "@angular/fire/compat";

const firebaseConfig = {
  apiKey: "AIzaSyB15e1P9hlVFoLKvEZCC9yz6LZeB2FEwAs",
  authDomain: "pelisup-8bc9d.firebaseapp.com",
  projectId: "pelisup-8bc9d",
  storageBucket: "pelisup-8bc9d.appspot.com",
  messagingSenderId: "453737590240",
  appId: "1:453737590240:web:c9ec77fa00cf4396ff4f85"
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    RoutesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
 
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
