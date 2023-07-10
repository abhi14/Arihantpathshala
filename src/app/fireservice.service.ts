import { Injectable } from '@angular/core';

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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
 

  constructor( private fire: Firestore) { }

  testSer(){
    console.log("service work!!!");
    let  books =  [];
    const usersInst = collection(this.fire, 'registered_user');
    const q = query(collection(this.fire, "registered_user"), where("mobile", "==", "9769988117"));
    getDocs(q).then(snapshot =>{
   //   console.log(snapshot.docs);
      let books: { id: string; }[] = [];
      snapshot.docs.forEach(doc => {
       books.push({ ...doc.data(), id: doc.id })
     })
    console.log(books)
    })
  // .then(snapshot => {
  //   // console.log(snapshot.docs)
  //   let books: { id: string; }[] = [];
  //   snapshot.docs.forEach(doc => {
  //     books.push({ ...doc.data(), id: doc.id })
  //   })
  //   console.log(books)
  //   return books;
  // })
  }

  getUser(mobile:any){
    console.log("mobile",mobile);
    
    const q = query(collection(this.fire, "registered_user"), where("mobile", "==", mobile));
    
    return collectionData(q);
}

addUser(userData:any){

  const usersInst = collection(this.fire, 'registered_user');

  addDoc(usersInst,userData).then(()=> {
       console.log("Data saved");
     })
}
}