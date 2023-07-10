import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import * as firebase from 'firebase/compat';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

import {
  collection,
  doc,
  docData,
  DocumentReference,
  CollectionReference,
  Firestore,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  Query,
  DocumentData,
  collectionData,
  collectionChanges,
  docSnapshots,
  addDoc,
  getDocs

} from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { Userdata } from '../interface/userdata';
import { AppComponent } from '../app.component';
import { CheckUserService } from '../services/check-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  result : any;
  first: boolean = true;
  checkRegisterUser!: Observable<Userdata[]>;
  localMobile: string= "";
  appComp_login : AppComponent;
  checkService! : CheckUserService;
  private subscription!: Subscription;
  constructor(checkService : CheckUserService,appComp : AppComponent,private router: Router,private angularFireAuth: AngularFireAuth,private afs: Firestore) {
    console.log('login const');
    this.appComp_login = appComp;
    
     }
  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback');
     
    this.result = data;
    
    if(this.first){
      this.first = false;
    this.subscription = this.angularFireAuth.authState.subscribe((user): void => {
      //     console.log(user1);
      if (user !== null) {
        const phone = user.phoneNumber;
        const uid = user.uid;
            //const newUserOutsideNamespace = new DatabaseEntity.User("Jane");
           console.log(phone);
           console.log(uid);
           this.checkRegisteredUser(phone);
            }
            else{
              console.log("User Not Found on sucess login");
              this.angularFireAuth.signOut();
              this.appComp_login.updateLoggedInStatus(false);  
              //this.router.navigate(['']);
            }
        
           // this.router.navigate(['card']);
          }

        

    )}
    else{
      console.log("Worst Code");    
      this.angularFireAuth.signOut();
      this.appComp_login.updateLoggedInStatus(false);  
      this.router.navigate(['login']);
    }
  }
   
   

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  
  
  checkRegisteredUser(mobile: any){

    const q = query(collection(this.afs, "registered_user"), where("mobile", "==", mobile));
    this.checkRegisterUser = collectionData(q) as Observable<Userdata[]>;
  console.log("Mobile "+mobile);
  
    this.checkRegisterUser.forEach(user=> {
      console.log("Check Number "+ user[0]);
  
      this.localMobile = user[0]?.mobile ?? null;
      console.log("local "+this.localMobile);
      
  
      if(this.localMobile !== null || this.localMobile != undefined){
        console.log("Number found "+ this.localMobile);    
        this.appComp_login.updateLoggedInStatus(true);   
        this.router.navigate(['card']);
      } 
      else{
        
        this.router.navigate(['new-user']);
  
      }
    })
  
   
  
   }
}
