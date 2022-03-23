import { Component,Input,OnInit} from '@angular/core';
import { WhiteCardServiceService } from '@app/EAservices/white-card-service.service';
import {redWhiteCardInterface} from '../../app/interfaces/ea-white-card';
@Component({
  selector: 'ea-latest-news-cards',
  templateUrl: './latest-news-cards.component.html',
  styleUrls: ['./latest-news-cards.component.css']
})
export class LatestNewsCardsComponent implements OnInit {
  @Input() receivedDataFromFather:number = 0;
  
  arrayData:any;
  notizieEaArray:any;
  clickFunction:any;
  
  constructor(private arrayCards:WhiteCardServiceService) { }

  ngOnInit(): void {
    this.arrayData = this.arrayCards.sendArray();
    this.notizieEaArray = this.arrayData[0];
    // this.sendStringa.emit(this.proviamola);
  }
  
  ngOnChanges():void {
    this.notizieEaArray = this.arrayData[this.receivedDataFromFather];
  }

  // changeArray(n:number){
  //   this.notizieEaArray = this.arrayData[n];
  // }
}
