import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';


@Component({
  selector: 'ea-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validity:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(x:Form){
    
  }
}
