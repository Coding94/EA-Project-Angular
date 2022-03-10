import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ea-transparent-btn',
  templateUrl: './transparent-btn.component.html',
  styleUrls: ['./transparent-btn.component.css']
})
export class TransparentBtnComponent implements OnInit {
  
  @Input() rename!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
