import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-drop-up',
  templateUrl: './drop-up.component.html',
  styleUrls: ['./drop-up.component.css']
})
export class DropUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countryCode: string = "IT";
  countryCodeSelector(lang:string){
      this.countryCode = lang;       
  }

}
