import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ea-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Output() sendNumber = new EventEmitter<number>();
  clickCard!:any;
  nuovissima!:any;
  styleColor:number = 0;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  clickOne(parametroNumber:number) {
    this.sendNumber.emit(parametroNumber);
    this.styleColor = parametroNumber;
  }
}
