import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {

  icons!: HTMLElement;
  headerDiv!: HTMLElement;
  body!: HTMLElement;
  userIconDiv!: HTMLElement;
  wrapperQuestion!: HTMLElement;
  prova!: boolean;
  prova2!: boolean;
  xIcon!: HTMLElement;
  transitionEvent!: Event;
  window!: any;
  currentScroll: any = document.documentElement.scrollTop || document.body.scrollTop;
  lastScroll: any;


  ngOnInit(): void {

  }

  


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  ngAfterViewInit() {
    this.headerDiv = this.elementRef.nativeElement.querySelector('.headerDiv');
    this.icons = this.elementRef.nativeElement.querySelector('.icons');
    this.body = this.elementRef.nativeElement.querySelector('body');
    this.userIconDiv = this.elementRef.nativeElement.querySelector('.userIconCenter');
    this.wrapperQuestion = this.elementRef.nativeElement.querySelector('.wrapperQuestion');
    this.renderer.setStyle(this.headerDiv, 'minHeight', '40px');
    this.renderer.addClass(this.icons, 'icons')
  };



  userIconClick() {
    if (this.headerDiv.style.minHeight === "40px") {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
        this.prova = true;
      },100);
      // this.userIconClick2();
    } else if (this.headerDiv.style.minHeight === "450px" && this.prova2 === true) {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      // this.renderer.setStyle(this.wrapperQuestion,'transform','translateY(300px)')
      // this.renderer.setStyle(this.wrapperQuestion,'opacity','1');
      this.prova = true;
      this.prova2 = false;
    } else {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "40px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
         this.prova = false;
         this.prova2 = false;
      }, 100);
    }
  }



  questionIconClick() {
    if (this.headerDiv.style.minHeight === "40px") {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
        this.prova2 = true;
      }, 150);
      // this.questionIconClick2();
    } else if (this.headerDiv.style.minHeight === "450px" && this.prova === true) {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      this.prova2 = true;
      this.prova = false;
    } else {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "40px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
         this.prova = false;
         this.prova2 = false;
      }, 100);
    }
  }


  xIconClick() {
    if (this.headerDiv.style.minHeight === "450px") {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "40px");
      setTimeout(() => {
        this.prova = false;
        this.prova2 = false;
      }, 150);
      
    }
  }






}
