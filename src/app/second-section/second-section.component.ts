import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  receivedNumberFromList!:number;
  constructor() { }

  ngOnInit(): void {
  }
   receivedNumber(numeroRicevuto:number){
     this.receivedNumberFromList = numeroRicevuto;
     console.log(this.receivedNumberFromList);
   }
}
