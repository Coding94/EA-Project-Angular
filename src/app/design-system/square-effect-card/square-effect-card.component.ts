import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-square-effect-card',
  templateUrl: './square-effect-card.component.html',
  styleUrls: ['./square-effect-card.component.css'],
})
export class SquareEffectCardComponent implements OnInit {
  translateY: string = '';
  transitionmS: string = '';
  opacita: number = 0;

  constructor() {}

  ngOnInit(): void {}

  hoverFunction() {
    this.translateY = 'translateY(-60px)';
    this.transitionmS = 'all 300ms ease-out';
    this.opacita = 0.9;
  }
  outFunction() {
    this.translateY = 'translateY(0)';
    this.transitionmS = 'all 300ms ease-out';
    this.opacita = 0;
  }
}
