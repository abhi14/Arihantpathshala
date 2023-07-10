import { Injectable } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {
   user: any;


  constructor( public router: Router) { }

  getUserDetails(){
    const auth = getAuth();
     this.user  = auth.currentUser;
  }

  chkUser ()  {
    const localMob =localStorage.getItem('mobileNumber');
    return  localMob;
    
    
 }
 logout(){
   localStorage.removeItem('mobileNumber');
   this.router.navigate(['loginpage']);
 }
}
