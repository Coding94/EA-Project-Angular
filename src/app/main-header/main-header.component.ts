import { Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {
  
  icons!:HTMLElement;
  headerDiv!:HTMLElement;
  body!:HTMLElement;
  userIconDiv!:HTMLElement;
  wrapperQuestion!:HTMLElement;
  prova:boolean = true;
  prova2:boolean = false;
  xIcon!:HTMLElement;
  transitionEvent!:Event;
  
  ngOnInit(): void {
   
 }


constructor(private elementRef:ElementRef, private renderer:Renderer2){
}


 ngAfterViewInit(){
  this.headerDiv = this.elementRef.nativeElement.querySelector('.headerDiv');
  this.icons = this.elementRef.nativeElement.querySelector('.icons');
  this.body = this.elementRef.nativeElement.querySelector('body');
  this.userIconDiv = this.elementRef.nativeElement.querySelector('.userIconCenter');
  this.wrapperQuestion = this.elementRef.nativeElement.querySelector('.wrapperQuestion');
  this.renderer.setStyle(this.headerDiv,'minHeight','40px');
  this.renderer.addClass(this.icons,'icons')
 };

 

 userIconClick(){
    if(this.headerDiv.style.minHeight === "40px"){
      this.renderer.setStyle(this.headerDiv,'minHeight',"450px");
      this.renderer.setStyle(this.headerDiv,'transition',"ease-in-out 0.3s");
      this.prova = false;
      // this.userIconClick2();
    } else if(this.headerDiv.style.minHeight === "450px" && this.prova === true){
      this.renderer.setStyle(this.headerDiv,'minHeight',"450px");
      this.renderer.setStyle(this.headerDiv,'transition',"ease-in-out 0.3s");
      // this.renderer.setStyle(this.wrapperQuestion,'transform','translateY(300px)')
      // this.renderer.setStyle(this.wrapperQuestion,'opacity','1');
      this.prova= false;
      this.prova2 = false;
    } else {
      this.renderer.setStyle(this.headerDiv,'minHeight',"40px");
      this.renderer.setStyle(this.headerDiv,'transition',"ease-in-out 0.3s");
      this.prova = true;
      this.prova2 = false;
    }
 }



 questionIconClick(){
    if(this.headerDiv.style.minHeight === "40px"){
      this.renderer.setStyle(this.headerDiv,'minHeight',"450px");
      this.renderer.setStyle(this.headerDiv,'transition',"ease-in-out 0.3s");
      this.prova2 = true;
      // this.questionIconClick2();
    } else if(this.headerDiv.style.minHeight === "450px" && this.prova2 === false){
      this.renderer.setStyle(this.headerDiv,'minHeight',"450px");
      this.renderer.setStyle(this.headerDiv,'transition',"ease-in-out 0.3s");
      this.prova2 = true;
      this.prova = true;
    } else {
      this.renderer.setStyle(this.headerDiv,'minHeight',"40px");
      this.renderer.setStyle(this.headerDiv,'transition',"ease-in-out 0.3s");
      this.prova = true;
      this.prova2 = false;
    }
 }

 
 xIconClick(){
  if(this.headerDiv.style.minHeight === "450px"){
    this.renderer.setStyle(this.headerDiv,'minHeight',"40px");
    this.prova= true;
    this.prova2 = false;
  }
 }

//  questionIconClick2(){
//   if(this.headerDiv.style.minHeight === "450px" && this.prova === false){
//     this.prova = true;
//     this.prova2 = true;
//   }
//  }

//  userIconClick2(){
//   if(this.headerDiv.style.minHeight === "450px" && this.prova2 === true){
//     this.prova = false;
//     this.prova2 = false;
//   }
//  }
}
