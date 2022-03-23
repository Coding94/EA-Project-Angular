import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  nomeClasseAside!: any;
  beSubject!: BehaviorSubject<any>;
  constructor() {}

  openAside(p: any): Observable<any> {
    return (this.beSubject = new BehaviorSubject<any>(p));
  }
  closeAside(par: any) {
    this.nomeClasseAside = par;
  }
  getNameAside() {
    return this.beSubject;
  }
}
