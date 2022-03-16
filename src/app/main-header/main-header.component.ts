import { Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {
  
 headerDiv!:HTMLElement;
 icons!:HTMLElement;
 navBar!:HTMLElement;
 body!:HTMLElement;
 mainIconDiv:HTMLElement= this.renderer.createElement('div'); // main icon div
 userIconDiv:HTMLElement= this.renderer.createElement('div'); // user 'Do' icon div
 questionIconDiv:HTMLElement= this.renderer.createElement('div'); // question '?' second icon div
 signInIconDiv:HTMLElement= this.renderer.createElement('div'); // main sign in icon div
 registerIconDiv:HTMLElement= this.renderer.createElement('div'); // main register icon div
 signIcon:HTMLElement | any= this.renderer.createElement("img"); // signIn icon//
 registerIcon:HTMLElement | any= this.renderer.createElement("img"); // register icon//
 verifyDataOriginIcon:HTMLElement | any= this.renderer.createElement("img"); // verifyData icon//
 originCodeIcon:HTMLElement | any= this.renderer.createElement("img"); // originCode icon//
 originWarningIcon:HTMLElement | any= this.renderer.createElement("img"); // originWarning icon//
 originLinkIcon:HTMLElement | any= this.renderer.createElement("img"); // originLink icon//
 xIcon:HTMLElement | any= this.renderer.createElement("img"); // register icon//

 //---------------H3 FOR ICONS-------------//
 //-------------FIRST H3 ICON OF FIRST DIV ------------//
 
 h3firstIcon:HTMLElement = document.createElement("h3");
 h3secondIcon:HTMLElement = document.createElement("h3");
 
 //-------------SECOND H3 ICON OF FIRST DIV ------------//
 h3thirdIcon:HTMLElement = document.createElement("h3");
 h3fourthIcon:HTMLElement = document.createElement("h3");
 h3fiveIcon:HTMLElement = document.createElement("h3");
 h3sixIcon:HTMLElement = document.createElement("h3");

 //--------------- END H3 FOR ICONS-------------//
  

 constructor(private elementRef:ElementRef, private renderer:Renderer2){
}


ngOnInit(): void {
}

ngAfterViewInit(){
  this.headerDiv = this.elementRef.nativeElement.querySelector('.headerDiv');
  this.icons = this.elementRef.nativeElement.querySelector('.icons');
  this.body = this.elementRef.nativeElement.querySelector('body');
  this.renderer.setStyle(this.headerDiv,'minHeight','40px');
  // this.renderer.setStyle(this.signIcon,'width','40px');
  // this.renderer.setStyle(this.registerIcon,'width','40px');
  this.renderer.addClass(this.mainIconDiv,'containerMain');
  this.renderer.addClass(this.userIconDiv,'centerDivIcons');
  this.renderer.addClass(this.xIcon,'divXstyle');
  this.renderer.addClass(this.signIcon,'allIconsStyle');
  this.renderer.addClass(this.registerIcon,'allIconsStyle');
  this.renderer.addClass(this.signInIconDiv,'divContainerSvg');
  this.renderer.addClass(this.registerIconDiv,'divContainerSvg2');
  this.signIcon.src = '../assets/other-icons/eaglobalnav-iconsignin.svg';
  this.registerIcon.src = '../assets/other-icons/eaglobalnav-iconregister.svg';
  this.verifyDataOriginIcon.src = '../assets/other-icons/eaglobalnav-iconorigin.svg';
  this.originCodeIcon.src = '../assets/other-icons/eaglobalnav-iconorigincode.svg';
  this.originWarningIcon.src= '../assets/other-icons/other-icons/eaglobalnav-iconalert.svg';
  this.originLinkIcon.src= '../assets/other-icons/eaglobalnav-iconlink.svg';
  this.xIcon.src = '../assets/other-icons/x.svg';
  //------------h3 style-------------//
  this.renderer.addClass(this.h3firstIcon,'h3AllIcons');
  this.renderer.addClass(this.h3secondIcon,'h3AllIcons');
  this.renderer.addClass(this.h3thirdIcon,'h3AllIcons');
  this.renderer.addClass(this.h3fourthIcon,'h3AllIcons');
  this.renderer.addClass(this.h3fiveIcon,'h3AllIcons');
  this.renderer.addClass(this.h3sixIcon,'h3AllIcons');
  //---------- h3 text content ---------//
  this.h3firstIcon.textContent ="Accedi";
  this.h3secondIcon.textContent ="Crea Account";
  this.h3thirdIcon.textContent ="Verifica i dati di accesso a Origin";
  this.h3fourthIcon.textContent ="Come riscattare un codice";
  this.h3fiveIcon.textContent ="Collega Origin al mio ID PSN";
  this.h3sixIcon.textContent ="Non riesco a giocare online";
}



openClickIconUser(){
  if(this.headerDiv.style.minHeight === "40px"){
    this.headerDiv.style.minHeight = "450px";
    this.headerDiv.style.alignItems = "unset";
    this.renderer.setStyle(this.headerDiv,'transition','ease-in-out 0.3s');
    this.icons.style.marginTop = "10px";
    this.renderer.setStyle(this.icons,'zIndex','3');
    this.renderer.appendChild(this.headerDiv,this.mainIconDiv);
    this.renderer.appendChild(this.mainIconDiv,this.userIconDiv);
    this.renderer.appendChild(this.headerDiv,this.xIcon);
    this.renderer.appendChild(this.userIconDiv,this.signInIconDiv);
    this.renderer.appendChild(this.userIconDiv,this.registerIconDiv);
    this.renderer.appendChild(this.signInIconDiv,this.signIcon);
    this.renderer.appendChild(this.signInIconDiv,this.h3firstIcon);
    this.renderer.appendChild(this.registerIconDiv,this.registerIcon);
    this.renderer.appendChild(this.registerIconDiv,this.h3secondIcon);
    // this.renderer.appendChild(this.userIconDiv,this.registerIcon);
    this.renderer.setStyle(this.mainIconDiv,'opacity','1');
    // this.renderer.setStyle(this.body,'oveflowY','hidden')
    // this.renderer.setStyle(this.navBar,'position','unset')
    this.iconUpiconDown();
  } else {
    this.headerDiv.style.minHeight = "40px";
    this.headerDiv.style.alignItems = "unset";
    this.renderer.setStyle(this.headerDiv,'transition','ease-in-out 0.3s');
    this.icons.style.marginTop = "10px";
    this.renderer.removeChild(this.mainIconDiv,this.userIconDiv);
    this.renderer.removeChild(this.headerDiv,this.xIcon);
    this.renderer.setStyle(this.mainIconDiv,'opacity','0');
    this.renderer.setStyle(this.mainIconDiv,'transition','linear 0.3s');
  }
 }

openClickIconQuestion(){
  if(this.headerDiv.style.minHeight === "40px"){
    this.headerDiv.style.minHeight = "450px";
    this.headerDiv.style.alignItems = "unset";
    this.renderer.setStyle(this.headerDiv,'transition','ease-in-out 0.3s');
    this.icons.style.marginTop = "10px";
    this.renderer.setStyle(this.icons,'zIndex','3');
    this.renderer.appendChild(this.headerDiv,this.mainIconDiv);
    this.renderer.appendChild(this.mainIconDiv,this.questionIconDiv);
    this.renderer.appendChild(this.headerDiv,this.xIcon);
    this.renderer.appendChild(this.userIconDiv,this.signInIconDiv);
    this.renderer.appendChild(this.userIconDiv,this.registerIconDiv);
    this.renderer.appendChild(this.signInIconDiv,this.signIcon);
    this.renderer.appendChild(this.signInIconDiv,this.h3firstIcon);
    this.renderer.appendChild(this.registerIconDiv,this.registerIcon);
    this.renderer.appendChild(this.registerIconDiv,this.h3secondIcon);
    // this.renderer.appendChild(this.userIconDiv,this.registerIcon);
    this.renderer.setStyle(this.mainIconDiv,'opacity','1');
    // this.renderer.setStyle(this.body,'oveflowY','hidden')
    // this.renderer.setStyle(this.navBar,'position','unset')
    this.iconUpiconDown();
  } else {
    this.headerDiv.style.minHeight = "40px";
    this.headerDiv.style.alignItems = "unset";
    this.renderer.setStyle(this.headerDiv,'transition','ease-in-out 0.3s');
    this.icons.style.marginTop = "10px";
    this.renderer.removeChild(this.mainIconDiv,this.userIconDiv);
    this.renderer.removeChild(this.headerDiv,this.xIcon);
    this.renderer.setStyle(this.mainIconDiv,'opacity','0');
    this.renderer.setStyle(this.mainIconDiv,'transition','linear 0.3s');
  }
 }

 iconUpiconDown(){
   //--------------SIGN IN ICON EVENT --------//
   this.renderer.listen(this.signInIconDiv,'mouseover',()=>{
     this.renderer.setStyle(this.signInIconDiv,'transform','translateY(-6px)');
     this.renderer.setStyle(this.signInIconDiv,'transition','all 150ms ease-out');
    })
    this.renderer.listen(this.signInIconDiv,'mouseout',()=>{
      this.renderer.setStyle(this.signInIconDiv,'transform','translateY(0)');
    })
    //--------------REGISTER ICON EVENT --------//
  this.renderer.listen(this.registerIconDiv,'mouseover',()=>{
    this.renderer.setStyle(this.registerIconDiv,'transform','translateY(-6px)');
 this.renderer.setStyle(this.registerIconDiv,'transition','all 150ms ease-out');
   })
  this.renderer.listen(this.registerIconDiv,'mouseout',()=>{
    this.renderer.setStyle(this.registerIconDiv,'transform','translateY(0)');
   })

   this.renderer.listen(this.xIcon,'click',()=>{
     if(this.headerDiv.style.minHeight === "450px"){
       this.headerDiv.style.minHeight = "40px";
    this.headerDiv.style.alignItems = "unset";
    this.renderer.setStyle(this.headerDiv,'transition','ease-in-out 0.3s');
    this.icons.style.marginTop = "10px";
    this.renderer.removeChild(this.mainIconDiv,this.userIconDiv);
    this.renderer.removeChild(this.headerDiv,this.xIcon);
    this.renderer.setStyle(this.mainIconDiv,'opacity','0');
    this.renderer.setStyle(this.mainIconDiv,'transition','linear 0.3s');
   }
     })
  }
}
