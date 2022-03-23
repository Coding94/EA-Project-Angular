import { Component, Input, OnInit } from '@angular/core';
import {redWhiteCardInterface} from '../../interfaces/ea-white-card';

@Component({
  selector: 'ea-red-white-card',
  templateUrl: './red-white-card.component.html',
  styleUrls: ['./red-white-card.component.css']
})
export class RedWhiteCardComponent implements OnInit {
   
  @Input() card!:any;
  

  constructor() { }

  ngOnInit(): void {
  }
  
}
