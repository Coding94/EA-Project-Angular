import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCardServiceService {

  constructor() { }

  changeCardEa(parametroPassato:number){
    return parametroPassato;
  }
 

}
