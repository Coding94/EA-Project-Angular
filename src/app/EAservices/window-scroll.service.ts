import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {
  
  x:any = false;
  constructor() { }
  
  getX(){
    return this.x;
  }

  changeX(){
    this.x = true;
  }
  changeY(){
    this.x= false;
  }
}
