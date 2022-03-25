import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../EAservices/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ea-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  completeUserData!: any;
  constructor(private register: RegisterService, private route: Router) {}

  ngOnInit(): void {}
  access(data: any) {
    this.completeUserData = this.register.userData;
    if (
      this.completeUserData.email !== data.email ||
      this.completeUserData.password !== data.password
    ) {
      alert('Nome utente o password inseriti non sono corretti');
    } else {
      this.route.navigate(['/home']);
      setTimeout(() => {
        this.register.sendDataBySubj(this.completeUserData);
      }, 100);
      alert('Benvenuto sul nostro sito');
    }
  }
}
