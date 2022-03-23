import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.battleTextAnim();
  }
  battleTextAnim() {
    let divBgImg: any = document.querySelector('.bgImg');
    let btnTwo: any = document.querySelector('.bttn-two');

    divBgImg.addEventListener('mouseover', () => {
      divBgImg.firstElementChild.style.transform =
        'translateY(-200px) scale(1.3)';
      divBgImg.firstElementChild.style.transition = 'ease 0.5s';
      btnTwo.style.opacity = '1';
    });

    divBgImg.addEventListener('mouseout', () => {
      divBgImg.firstElementChild.style.transform = 'translateY(0px) scale(1.3)';
      divBgImg.firstElementChild.style.transition = 'ease 0.5s';
      btnTwo.style.opacity = '0';
    });
  }
}
