import { Component, OnInit, ɵisObservable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { getAuth, signOut } from "firebase/auth";


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
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Data, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Userdata } from './interface/userdata';
import { CheckUserService } from './services/check-user.service';

interface Item {
  name: string;
  age: number;
  avatar: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  checkRegisterUser!: Observable<Userdata[]>;
  localMobile: string= "";
  userData !: Observable<any>;

  userData_new: DocumentData[] | undefined;
  item!: Observable<Userdata[]>;
  result: any;
  isLoggedIn: boolean = false;
  private subscription!: Subscription;
  userMobile: any;
  comics: Array<any> = [];
  isActive = false;
  constructor(private httpclient: HttpClient, private router: Router, private afs: Firestore, private angularFireAuth: AngularFireAuth, public checkUser:CheckUserService) {

    const car: { type: string, model: string, year: number } = {
      type: "Toyota",
      model: "Corolla",
      year: 2009
    };

    const comicInst = collection(this.afs, 'users');
    //this.userMobile ="Sample Data User"
    // addDoc(comicInst,car).then(()=> {
    //   console.log("Data saved");
    // })

    //   console.log("Data saved");
    // })
    //console.log("Query value "+q);   
    //this.item$ = collectionData(comicInst);
    //console.log(this.item$);

    collectionData(comicInst).subscribe(valData => {


      // console.log(valData.data());   
      //    this.userData =  collectionData(comicInst); 
      //    console.log(this.userData.forEach(o=> o.name));   
    })


    const q1 = query(collection(this.afs, "users"), where("name", "==", "Expense"));
    collectionData(q1).subscribe(result => {
      //     this.comics = result;
      //     console.log("working ");
      //     console.log(this.comics);
    });

    const q = query(collection(this.afs, "users"), where("name", "==", "Expense"));
    this.item = collectionData(q) as Observable<Userdata[]>;
    //  this.item$ = collectionData<Item>(q);
    //console.log(res$);

  }

  ngOnInit(): void {
    
    this.httpclient.get<Userdata>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(val => {
        //    console.log(val);

      })

    // this.item = collectionData(
    //   collection(this.afs, "users")
    // ) as Observable<Userdata[]>;



    
    // this.httpclient.get('https://jsonplaceholder.typicode.com/todos/1')
    // .subscribe((val => this.userMobile = val));




  //   this.subscription = this.angularFireAuth.authState.subscribe((user1): void => {
  //     console.log(user1);
  //     if (user1 !== null) {
  //       this.userMobile = user1.phoneNumber;
  //       // this.userMobile = user1;
  //       console.log("mobile" + this.userMobile);

  //       this.isLoggedIn = !!user1;
  //       this.checkRegisteredUser(this.userMobile);


  //       //this.router.navigate(['new-user']);
  //     } else {
  //       this.userMobile = "";
  //       // this.userMobile = user1;
  //       this.isLoggedIn = false;
  //       this.router.navigate(['login']);
  //     }
  //   });
   }

updateLoggedInStatus(data: boolean){

  this.isLoggedIn = data;


}

//  checkRegisteredUser(mobile: string){

//   const q = query(collection(this.afs, "registered_user"), where("mobile", "==", mobile));
//   this.checkRegisterUser = collectionData(q) as Observable<Userdata[]>;
// console.log("Mobile "+mobile);

//   this.checkRegisterUser.forEach(user=> {
//     console.log("Check Number "+ user[0]);

//     this.localMobile = user[0]?.mobile ?? null;
//     console.log("local "+this.localMobile);
    

//     if(this.localMobile !== null || this.localMobile != undefined){
//       console.log("Number found "+ this.localMobile);
//       console.log("not");
//       this.router.navigate(['card']);
//     } 
//     else{
    

//     }
//   })

 

//  }

  logout() {
    this.angularFireAuth.signOut();
    this.isLoggedIn= false;
    this.router.navigate(['login']);
    
  }
  title = 'Arihant';
}