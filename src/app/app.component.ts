import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EA-Project-Angular';

  observable!: BehaviorSubject<boolean>;
  noScrollClass!: boolean;
  darkBgDivClass!: any;
  ngOnInit() {
    this.observable.subscribe((e: boolean) => {
      this.noScrollClass = e;
    });
  }

  openAside(e: BehaviorSubject<boolean>) {
    this.observable = e;
    if (this.noScrollClass == true) {
      this.darkBgDivClass = 'darkBgDiv';
    }
  }
}
