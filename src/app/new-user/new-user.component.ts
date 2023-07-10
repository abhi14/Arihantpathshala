import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
import { AppComponent } from '../app.component';
import { CheckUserService } from '../services/check-user.service';
import { getAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  mobileNumber!: string;
  appCompData! : AppComponent
  private subscription!: Subscription;

  constructor(private angularFireAuth: AngularFireAuth,appComp : AppComponent,private router: Router, private afs: Firestore,checkService : CheckUserService) {
    console.log("New User Page");
    this.appCompData= appComp

    console.log("new use onint");
   
    const auth = getAuth();
    const userData  = auth.currentUser;

    this.subscription = this.angularFireAuth.authState.subscribe((user): void => {
      if (user !== null) {        
         this.appCompData.updateLoggedInStatus(true);      
        }else{
         this.appCompData.updateLoggedInStatus(false);  
         this.router.navigate(['login']); 
        }
    })

      //     console.log(user1);
      

    
    // const navigation = this.router.getCurrentNavigation();

    // console.log(navigation);


    // const userDetail: { name: string, mobile: string, age: number } = {
    //   name: "Shaili",
    //   mobile: "+919930990164",
    //   age: 38
    // };

    // const registeredUserInst = collection(this.afs, 'registered_user');

    // addDoc(registeredUserInst,userDetail).then(()=> {
    //     console.log("Data saved");
    //    })

     //  this.router.navigate(['home']);
    
  }
 


}
