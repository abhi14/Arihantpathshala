import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-arihantlogin',
  templateUrl: './arihantlogin.component.html',
  styleUrls: ['./arihantlogin.component.scss']
})
export class ArihantloginComponent {
  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    dob:[''],
    gender:['']
  });
 
  saveForm(){
    console.log('Form data is ', this.profileForm.value);

    console.log(this.profileForm.value.firstName);
    
  }
 
}
