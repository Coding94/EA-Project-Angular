import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { RegisterService } from '../EAservices/register.service';

@Component({
  selector: 'ea-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  validity: boolean = false;
  userData!: any;
  constructor(private register: RegisterService) {}

  ngOnInit(): void {}
  onSubmit(x: any) {
    console.log(x);
  }
  onSubmit2(x: any) {
    this.register.getDataFromRegisterComponent(x);
  }
}
