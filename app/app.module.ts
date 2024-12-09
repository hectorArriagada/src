import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MatProgressSpinnerModule, IonicStorageModule.forRoot(),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync(), provideHttpClient(),
    provideFirebaseApp(() => initializeApp( environment.firebase )), provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"ionic-9b450","appId":"1:1037914900113:web:0f280133b9fc4290da2130","storageBucket":"ionic-9b450.firebasestorage.app","apiKey":"AIzaSyBoi1Rf6W9Epc-SKBsQFgnEjh-qsnMxjUA","authDomain":"ionic-9b450.firebaseapp.com","messagingSenderId":"1037914900113","measurementId":"G-44T4FYRXFM"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideDatabase(() => getDatabase()),],
  bootstrap: [AppComponent],
})
export class AppModule {}
