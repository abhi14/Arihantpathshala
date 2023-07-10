import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";



//const auth = getAuth();

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,    
    {
    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    recaptchaParameters: {
      type: 'image', // 'audio'
      size: 'invisible', // 'invisible' or 'compact'
      badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
    },
    defaultCountry: 'IN', // Set default country to the United Kingdom (+44).   
  }
  
  ]
 
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireAuthModule
    
  ],
  exports: [
    FirebaseUIModule,
    AngularFireModule,
    AngularFireAuthModule,
  ]
})
export class FirebaseAuthModule { }
