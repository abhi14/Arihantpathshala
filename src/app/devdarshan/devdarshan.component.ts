import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalendarOptions,DateSelectArg, EventApi, EventClickArg, EventInput } from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

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
import { Router } from '@angular/router';

@Component({
  selector: 'app-devdarshan',
  templateUrl: './devdarshan.component.html',
  styleUrls: ['./devdarshan.component.scss']
})
export class DevdarshanComponent implements OnInit{
  [x: string]: any;
 
  newObj: any;
  Events: any[] = [];
  empList: Array<EventMaster> = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',   
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: false,
    dayMaxEvents: true,
     select: this.handleDateSelect.bind(this),
     eventClick: this.handleDateClick.bind(this), 
     eventsSet: this.handleEvents.bind(this),
     events: this.Events,
     eventAdd: this.addEventfunc.bind(this),
    //dateClick: this.onDateClickAgain.bind(this),
   // events: this.handleFetchData.bind(this),
    plugins: [ 
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
     ] ,
     headerToolbar: {
      left: 'dayGridMonth',
      center: 'title',
      right: 'prev,next today'
    }
    };
  currentEvents: EventApi[] = [];
  onDateClick: any;
  calendarEvents: any;
  objData!: EventInput;
  tit='';
   evenMast: any[] =[];
  constructor(private changeDetector: ChangeDetectorRef,private fire: Firestore,private router: Router) {
  }

  addEventfunc(eventValue:any){

    console.log("add");
    
   console.log(this.newObj);
   
   const eventDatabase = collection(this.fire, 'devdarshan');
    
   addDoc(eventDatabase,this.newObj).then(()=> {
    console.log("Data saved");
   });
   setTimeout(() => {

   this.reloadComponent(true,'devdarshan');
   },2000);
  // this.router.navigate(['/dev'])
  // window.location.reload();
  //this.router.navigate['devdarshan'];
   
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   console.log("Current route I am on:",this.router.url);
   const url=self ? this.router.url :urlToNavigateTo;
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this.router.url}`)
     })
   })
 }

  ngOnInit() {

  const userMobileNumber = localStorage.getItem("mobileNumber");
 //setTimeout(() => {
  const q1 = query(collection(this.fire, "devdarshan"), where("mobile", "==", userMobileNumber));
  collectionData(q1).subscribe(result => {

    this.Events = result;
          this.calendarOptions.events = this.Events;
        });
      // result.forEach(valueD => {
      //  const titleVal = valueD['title'];
      //  this.tit = titleVal;
           
      //  const nameVal = valueD['name'];
      //  const startVal = valueD['start'];
      //  const localData ={
      //         title: titleVal,
      //         date: startVal
      //      };

      //      this.evenMast.push(localData);
      // })
    //   const customObj = new EventMaster();
    //   customObj.title = titleVal;
    //   customObj.date = startVal; 
    //   this.empList.push(customObj);


    //   //console.log(valueD['title']);
    //   const localData ={
    //      title: titleVal,
    //      date: startVal
    //   };
    //   const obj_1 =  { title: 'event 1', date: '2023-07-09' };
    //   const localData_1 ={
    //     title: 'aaaaaaaaa',
    //     date: '2023-07-05'
    //  };
// console.log(result);

// console.log(this.evenMast);

//     const arr =  [
//   { title: 'event 1', date: '2023-07-09' },
//   { title: 'event 2', date: '2023-07-15' },
//   { title: 'event 3', date: '2023-07-04' }
// ];

// console.log(arr);
   //  this.Events.push(arr);
      
      
     // this.Events.push(obj_1);
     // console.log(localData_1);
    //  console.log(numbers);
     //});

     //this.Events.push(this.evenMast);

    //}, 2200);
    // setTimeout(() => {
    //   console.log("calandar");
    //   console.log(this.evenMast);
    //   console.log("calandar_1");
    //   this.calendarOptions = {
    //     initialView: 'dayGridMonth',
    //     events: this.Events,
    //    // dateClick: this.onDateClick.bind(this),
    //   };
    // }, 3500);
  }

  onDateClickAgain(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }

  handleDateClickNew(arg:any) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'Arihant',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
  handleDateClick(arg:EventClickArg) {
    alert('date click! ' + arg.event.title)
  }


  // handleFetchData() {
  //   alert('date click! '  )
  //  this.calendarOptions.events =  [
  //     { title: 'event 1', date: '2023-07-09' },
  //     { title: 'event 2', date: '2023-07-15' },
  //     { title: 'event 3', date: '2023-07-04' }
  //   ];
  // }

  handleDateSelect(selectInfo: DateSelectArg) {


   // alert("abhijeet")
    const title = prompt('Please enter a new title for your event');
    const name = prompt('Your Name',"Enter Your Name");
    const calendarApi = selectInfo.view.calendar;
    let mobile = localStorage.getItem('mobileNumber');

    if(mobile == null){
      const mobileNumber = prompt('Your mobile Number');
      mobile = mobileNumber;
    }

    calendarApi.unselect(); // clear date selection
   
    if (title && name) {
      let num = Math.random;
      const objData = {       
        id: String(num),
        title,
        name,
        mobile,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }

      console.log(objData);

       this.newObj = objData;
     // this.evenMast = this.Events;


     // this.Events = [...this.evenMast, objData];
      
    // this.evenMast.push(objData);
   // this.Events = this.evenMast  ;
  //  this.calendarOptions.events = this.evenMast;
   /// console.log(this.evenMast);
    calendarApi.addEvent(objData);
    this.reloadComponent(true,'devdarshan');
   //  window.location.reload();
    // this.Events = objData;

   
    
    }
  }
      
    
    
  
  
  handleEvents(events: any) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}


export class EventMaster {
   title:any;
  date:any;
}