import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } 
from '@angular/fire/app';
import { getAuth, provideAuth } 
from '@angular/fire/auth';
import { getFirestore, provideFirestore } 
from '@angular/fire/firestore';
import { getStorage, provideStorage } 
from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseAuthModule } from './firebase-auth/firebase-auth.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StotraComponent } from './stotra/stotra.component';
import { CardanimationComponent } from './cardanimation/cardanimation.component';
import { LoginmanualComponent } from './loginmanual/loginmanual.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DevdarshanComponent } from './devdarshan/devdarshan.component';
import { DarshancalandarComponent } from './darshancalandar/darshancalandar.component';
import { ArihantloginComponent } from './arihantlogin/arihantlogin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    LoginComponent,
    StotraComponent,
    CardanimationComponent,
    LoginmanualComponent,
    DashboardComponent,    
    DevdarshanComponent,
    DarshancalandarComponent,
    ArihantloginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    FirebaseAuthModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    DigitOnlyModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule, MatTabsModule ,MatSidenavModule ,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
