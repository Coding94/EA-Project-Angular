import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ea-blue-form-button',
  templateUrl: './blue-form-button.component.html',
  styleUrls: ['./blue-form-button.component.css']
})
export class BlueFormButtonComponent implements OnInit {
@Input() buttonLabel:string ='Button'
@Input() disable:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
