import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-square-effect-card',
  templateUrl: './square-effect-card.component.html',
  styleUrls: ['./square-effect-card.component.css'],
})
export class SquareEffectCardComponent implements OnInit {
  translateY: any;
  transitionmS: any;
  prova: any = false;
  opacita: any = 0.1;
  transizione: any = 'opacity 0.6s';

  constructor() {}

  ngOnInit(): void {}

  hoverFunction() {
    this.translateY = 'translateY(-60px)';
    this.transitionmS = 'all 300ms ease-out';
    this.prova = true;
    console.log(this.prova);
    this.opacita = '1';
    this.transizione = 'opacity 0.6s';
  }
  outFunction() {
    this.translateY = 'translateY(0)';
    this.transitionmS = 'all 300ms ease-out';
    this.prova = false;
    console.log(this.prova);
    this.opacita = '0';
    this.transizione = 'opacity 0.1ms';
  }
}
