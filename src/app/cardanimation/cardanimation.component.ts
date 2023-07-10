import { Component,HostBinding  } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import { CheckUserService } from '../services/check-user.service';
import { getAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-cardanimation',
  templateUrl: './cardanimation.component.html',
  styleUrls: ['./cardanimation.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('1s ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ]),
    trigger('plusAnimation', [
      transition('* => *', [
        query('.plus-card', style({ opacity: 0, transform: 'translateY(-40px)' })),

        query('.plus-card', stagger('500ms', [
          animate('300ms 1.1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

      ])
    ])
  ]
})
export class CardanimationComponent {
  title = 'stagger-animation';
  cards = ['Card 1', 'Card 2'];
  index = 3;


  constructor(appComp : AppComponent,private router: Router) {
    console.log("Card Page");

    }

  deleteCard(i: number) {
    this.cards.splice(i, 1);
  }
  addCard(){
    this.cards.push('Card '+this.index++);
  }

  
}
