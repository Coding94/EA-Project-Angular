import { Component, Input, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LayoutService } from '../shared/layout.service';

@Component({
  selector: 'ea-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css'],
})
export class AsideMenuComponent implements OnInit {
  constructor(private servLayout: LayoutService) {}

  asideDiv: any;
  darkDiv: any;
  nomeClasseAside: any;
  @Input() observable!: BehaviorSubject<boolean>;
  
  ngOnInit(): void {
    this.observable.subscribe((control) => {
      if (control) {
        this.nomeClasseAside = 'asideDivOnClick';
      }
    });
    this.servLayout.getNameAside().subscribe((e) => (this.nomeClasseAside = e));
  }

  closeAsideDiv() {
    console.log('click sulla x');
    this.nomeClasseAside = '';
    document.body.style.overflow = 'visible';
    this.observable.next(false);
    let div = document.querySelector('.darkBgDiv');
    div!.remove();
  }
}

// this.darkDiv = document.createElement('div');
// document.body.appendChild(this.darkDiv);

// openAsideDiv() {
//   this.asideDiv = document.querySelector('.asideDiv');
//   console.log(this.asideDiv);
//   this.asideDiv?.classList.add('asideDivOnClick');
//   this.darkDiv.classList.add('darkBgDiv');
// }
