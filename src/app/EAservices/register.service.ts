import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  mySubj = new Subject<any>();
  sendDataBySubj$: Observable<any> = this.mySubj.asObservable();

  constructor() {
    // this.sendDataBySubj$ = this.mySubj.asObservable();
  }
  userData!: any;

  getDataFromRegisterComponent(data: any) {
    this.userData = data;
    console.log(this.userData, 'from-service r1');
  }

  getDataFromRegisterTwoComponent(data: any) {
    this.userData = { ...this.userData, ...data };
    console.log(this.userData, 'from-service r2');
  }
  getUserData() {
    return this.userData;
  }

  sendDataBySubj(data: any) {
    this.mySubj.next(data);
  }
}
