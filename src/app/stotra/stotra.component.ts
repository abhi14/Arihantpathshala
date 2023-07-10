import { style, transition, trigger,query, stagger, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-stotra',
  templateUrl: './stotra.component.html',
  styleUrls: ['./stotra.component.scss'],
  animations:[

trigger('listAnimation',[

  transition('* => *',[

    query(':enter',style({opacity:0}),{optional:true}),

    query(':enter',  stagger('300ms', [
        animate('1s ease-in', keyframes([
          style({opacity:0, transform:'translateY(-75px)', offset:0}),
          style({opacity:.5, transform:'translateY(35px)', offset:0.3}),
          style({opacity:1, transform:'translateY(0px)', offset:1}),
        ]))
      ]))
    ])
])
  ]
})
export class StotraComponent {
  items: string[];

  
  constructor(appComp : AppComponent){
    this.items = ['Abhijeet','Abhisha','Suman','Shaili','Narendra'];
  
    appComp.updateLoggedInStatus(true);

  }
}
