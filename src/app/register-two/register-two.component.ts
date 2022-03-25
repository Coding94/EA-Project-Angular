import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../EAservices/register.service';

@Component({
  selector: 'ea-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.css'],
})
export class RegisterTwoComponent implements OnInit {
  constructor(private register: RegisterService) {}

  ngOnInit(): void {}
  sendData(data: any) {
    this.register.getDataFromRegisterTwoComponent(data);
  }
}
