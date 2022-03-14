import { Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {
  
 headerDiv:any;
 icons:any;
 
 constructor(private elementRef:ElementRef){
}


ngOnInit(): void {
  
}

ngAfterViewInit(){
  this.headerDiv = this.elementRef.nativeElement.querySelector('.headerDiv');
  this.icons = this.elementRef.nativeElement.querySelector('.icons');
}



openClickIcon(){
  if(this.headerDiv.style.minHeight === "40px"){
     this.headerDiv.style.minHeight = "450px";
    this.headerDiv.style.alignItems = "unset";
    this.headerDiv.style.transition = "ease-in-out 0.3s";
    this.icons.style.marginTop = "10px";
  } else {
    this.closeClickIcon();
  }
    // headerDiv.appendChild(divTest);
    // icons.appendChild(divX);
    // divTest.appendChild(divFatherRed);
    // divFatherRed.appendChild(divRedIconOne);
    // divFatherRed.appendChild(divRedIconTwo);
    // icons.style.zIndex = "3";
 }


closeClickIcon(){
    this.headerDiv.style.minHeight = "40px";
    this.headerDiv.style.alignItems = "unset";
    this.headerDiv.style.transition = "ease-in-out 0.3s";
    this.icons.style.marginTop = "10px";
    // headerDiv.appendChild(divTest);
    // icons.appendChild(divX);
    // divTest.appendChild(divFatherRed);
    // divFatherRed.appendChild(divRedIconOne);
    // divFatherRed.appendChild(divRedIconTwo);
    // icons.style.zIndex = "3";
 }


}
