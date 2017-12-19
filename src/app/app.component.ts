import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myHomeAnimation]='state' (click)="animateMe()">Hey Guys !</p>
  <h1 [class]="titleRed">Hey Guys !</h1>
  <h1 [class.titleBlue]="titleBlue">Hey Guys !</h1>
  <p>{{genderObject.location}}</p> 
  <ul>
    <li *ngFor="let arr of locationArr">{{arr}}</li>
    <li *ngIf="locationArr ;else other"> I am here! </li>
  </ul>
  <div *ngIf="myArr then other1 else other2"></div>
  <ng-template #other>I am not Here!</ng-template>
  <ng-template #other1>Truth</ng-template>
  <ng-template #other2>False</ng-template>
  <br/>
  <img src="{{ angularLogo}}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  <br/>
  <button [disabled]="buttonStatus">My Button </button>
  <button (mouseenter)="myEvent($event)">Event Button </button>
  <p>{{ carsList }}</p>
  `,
  styles: [`
  p {
    width:200px;
    margin: 100px auto;
    background:lightblue;
    text-align:cenetr;
    padding:20px;
    font-size:1.5em;
  }

  .titleRed {
    color:red;
  }

  .titleBlue
  {
    color:blue;
  }
  `],
  animations: [
    trigger('myHomeAnimation',[

      state('small',style({
        transform: 'scale(1)',
      })),

      state('large',style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large',animate('300ms ease-in',keyframes([
        style({opacity: 0 , transform: 'translateY(-75%)' , offset: 0}),
        style({opacity: 1 , transform: 'translateY(35px)' , offset: .5}),
        style({opacity: 1 , transform: 'translateY(0)' , offset: 1}),
      ]))),
    ]),
  ]
})
export class AppComponent {
  state: string = 'small'
  constructor(private homeService:HomeService){

  }

  animateMe(){
    this.state = (this.state === 'small' ? 'large': 'small');
  }


  carsList:string = '';
  ngOnInit(){
    console.log(this.homeService.cars);
    this.carsList = this.homeService.myData();
  }

  title = 'app';
  genderObject = {
    gender : 'Male',
    age : 33,
    location : 'USA'
  }
  locationArr = ['USA','Canada','England'];
  myArr = true;
  angularLogo = '/assets/images/angular.png';
  buttonStatus = false;

  myEvent(event){
    console.log(event);
  }

  titleRed = 'titleRed';
  titleBlue = true;

  
}
