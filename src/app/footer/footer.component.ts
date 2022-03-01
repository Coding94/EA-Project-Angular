import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
}
