import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.cardAnim();
  }
  // cardAnim() {
  //   let divBgImg: any = document.querySelector('.bgImg');
  //   let btnTwo: any = document.querySelector('.bttn-two');

  //   divBgImg.addEventListener('mouseover', () => {
  //     divBgImg.firstElementChild.style.transform =
  //       'translateY(-200px) scale(1.3)';
  //     divBgImg.firstElementChild.style.transition = 'ease 0.5s';
  //     btnTwo.style.opacity = '1';
  //   });

  //   divBgImg.addEventListener('mouseout', () => {
  //     divBgImg.firstElementChild.style.transform = 'translateY(0px) scale(1.3)';
  //     divBgImg.firstElementChild.style.transition = 'ease 0.5s';
  //     btnTwo.style.opacity = '0';
  //   });

  //   const battlefieldCard: any = document.querySelectorAll('.battleFieldCard');

  //   for (let i = 0; i < battlefieldCard.length; i++) {
  //     const battlefieldLogo: any =
  //       document.querySelectorAll('.battleFieldLogo');
  //     const gradientColor: any = document.querySelectorAll('.gradientColor');

  //     battlefieldCard[i].addEventListener('mouseover', animCard);
  //     battlefieldCard[i].addEventListener('mouseout', disAnimCard);

  //     function animCard() {
  //       battlefieldLogo[i].style.transform = 'translateY(-60px)';
  //       battlefieldLogo[i].style.transition = 'all 300ms ease-out;';
  //       gradientColor[i].style.opacity = '1';
  //       gradientColor[i].style.color = 'white';
  //     }

  //     function disAnimCard() {
  //       battlefieldLogo[i].style.transform = 'translateY(0)';
  //       battlefieldLogo[i].style.transition = 'all 300ms ease-out;';
  //       gradientColor[i].style.opacity = '0';
  //     }
  //   }
  // }
}
