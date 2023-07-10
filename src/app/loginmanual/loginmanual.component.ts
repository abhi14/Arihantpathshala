import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DigitOnlyModule } from '@uiowa/digit-only';
import { FormBuilder } from '@angular/forms';
import { FireserviceService } from '../fireservice.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-loginmanual',
  templateUrl: './loginmanual.component.html',
  styleUrls: ['./loginmanual.component.scss']
})
export class LoginmanualComponent implements OnInit {

  loginForm = this.formBuilder.group({
    mobile:[''],
    password:[''],    
  });

  loginUserData = {
  }
  userFound: boolean = false;
  userdata:any;
  userPass:any;
  mobileNo: any;
  pass: any;
  errorMessage!:string
  

  constructor(private _router: Router,private formBuilder:FormBuilder,private fire: FireserviceService) { }

  ngOnInit() {
  }

  loginUser () {
        localStorage.setItem('token', "abhijeettoken-14091983")
        this._router.navigate(['/dash'])
      
  }

  testFire(){
    const data = this.fire.testSer();

    console.log("Data value ",data);
    

    console.log('Form data is ', this.loginForm.value);
    const userInput = this.loginForm.value;
    const mobileInput = this.loginForm.value.mobile;

  
  }

  saveForm(){
    console.log('Form data is ', this.loginForm.value);
    const userInput = this.loginForm.value;
    const mobileInput = this.loginForm.value.mobile;
    const passwordInput = this.loginForm.value.password;
    this.fire.getUser(mobileInput).pipe(take(1)).subscribe(result => {
       console.log("user result  ",result);  
result.forEach(oo=> {

  console.log("oo",oo);
   this.pass = oo['password'];
  
 //const p =  oo.mobile;
});

       if(result!= null && result.length > 0){
         this.userFound=  true;
        this.userdata = result;
        this.userPass = passwordInput;
        //console.log(result.password);
        
       }
       else{
        this.userFound=  false;
       }

});

setTimeout(() => {
   this.mobileNo = mobileInput;  
   let localMobile:string = mobileInput as string;

  console.log("mobileInput",this.mobileNo);
  console.log("passwordInput",this.userPass);
  console.log("passwordInput",this.pass);

if(this.mobileNo != null && !this.userFound){
  this.fire.addUser(userInput);
  localStorage.setItem("mobileNumber",this.mobileNo);
  this._router.navigate(['devdarshan']);
 }
 else{
   console.log("user already exsist");
   //this._router.navigate(['devdarshan']);

   if(this.userPass === this.pass){
    
    console.log("localMobile ",localMobile);
    
     localStorage.setItem("mobileNumber", localMobile);
    this._router.navigate(['devdarshan']);  
   }else{  
    this.loginForm.reset();
    console.log("Wrong password");
    this.errorMessage = "Wrong password , Try Again";

   }   
 }
},1500);  
  }
  
}
