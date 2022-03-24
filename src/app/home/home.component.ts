import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  observable!: BehaviorSubject<boolean>;
  noScrollClass!: boolean;
  darkBgDivClass!: any;
  ngOnInit() {
    // this.observable.subscribe((e: boolean) => {
    //   this.noScrollClass = e;
    // });
  }

  openAside(e: BehaviorSubject<boolean>) {
    this.observable = e;
    if (this.noScrollClass == true) {
      this.darkBgDivClass = 'darkBgDiv';
    }
  }
}
