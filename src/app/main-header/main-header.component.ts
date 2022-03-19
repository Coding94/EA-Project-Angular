import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {

  icons!: HTMLElement;
  headerDiv!: HTMLElement;
  userIconDiv!: HTMLElement;
  wrapperQuestion!: HTMLElement;
  userRender!: boolean;
  questionRender!: boolean;
  xIcon!: HTMLElement;


  ngOnInit(): void {

  }

  


  constructor(private elementRef: ElementRef, private renderer: Renderer2){
  }


  ngAfterViewInit() {
    this.headerDiv = this.elementRef.nativeElement.querySelector('.headerDiv');
    this.icons = this.elementRef.nativeElement.querySelector('.icons');
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
        this.userRender = true;
      },120);
      // this.userIconClick2();
    } else if (this.headerDiv.style.minHeight === "450px" && this.questionRender === true) {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      // this.renderer.setStyle(this.wrapperQuestion,'transform','translateY(300px)')
      // this.renderer.setStyle(this.wrapperQuestion,'opacity','1');
      this.userRender = true;
      this.questionRender = false;
    } else {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "40px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
         this.userRender = false;
         this.questionRender = false;
      }, 150);
    }
  }


  questionIconClick() {
    if (this.headerDiv.style.minHeight === "40px") {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
        this.questionRender = true;
      }, 160);
      // this.questionIconClick2();
    } else if (this.headerDiv.style.minHeight === "450px" && this.userRender === true) {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "450px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      this.questionRender = true;
      this.userRender = false;
    } else {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "40px");
      this.renderer.setStyle(this.headerDiv, 'transition', "ease-in-out 0.3s");
      setTimeout(() => {
         this.userRender = false;
         this.questionRender = false;
      }, 150);
    }
  }


  xIconClick() {
    if (this.headerDiv.style.minHeight === "450px") {
      this.renderer.setStyle(this.headerDiv, 'minHeight', "40px");
      setTimeout(() => {
        this.userRender = false;
        this.questionRender = false;
      }, 150);
    }
  }

}
