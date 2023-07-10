import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  focus: any;
  focus1: any;
  constructor(){
    const token = localStorage.getItem('token');
    console.log("Token "+token);
    
  }
  chkUser () {
   return  !!localStorage.getItem('token');
   
   
}
logout(){
  localStorage.removeItem('token');
}
}

