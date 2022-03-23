import { Injectable } from '@angular/core';
import { redWhiteCardInterface } from '@app/interfaces/ea-white-card';

@Injectable({
  providedIn: 'root'
})
export class WhiteCardServiceService {


  

  notizieEa = [ 
    
       {
        URLpath:'',
        spanText:'Electronic Arts Inc.',
        date:'8-mar-2022',
        h5Text:"Lavoriamo insieme per abbattere i pregiudizi. #BreaktheBias",
        paragraphText:"La Giornata internazionale della donna di quest'anno affronta il tema dei pregiudizi consci e inconsci e di come questi rendano difficile alle donne progredire in molti ambiti della loro vita.",
     },
     {
        URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
        spanText:'Electronic Arts Inc.',
        date:'4-mar-2022',
        h5Text:'Aggiornamento sui titoli di Electronic Arts in Russia e Bielorussia',
        paragraphText:'Uniti in solidarieta con il popolo ucraino',
    },
    {
        URLpath:'../../../assets/Background-images/thanks-to-coach.jpg',
        spanText:'Electronic Arts Inc.',
        date:'15-feb-2022',
        h5Text:'In memoria di Coach John Madden',
        paragraphText:"Il nostro caro amico John Madden è deceduto a fine dicembre. La sua scomparsa è stata una perdita enorme per la comunità del football americano, per l'intero mondo dello sport e per tutti noi di Electronic Arts.",
    },
     {
        URLpath:'../../../assets/Background-images/Star-wars-card.png',
        spanText:'Electronic Arts Inc.',
        date:'25-gen-2022',
        h5Text:'EA e Lucasfilm Games annunciano i nuovi titoli di Star Wars targati Respawn…',
        paragraphText:'I prossimi titoli includono il futuro gioco della serie Star Wars Jedi, un nuovo FPS di Star Wars diretto da Peter Hirschmann e un gioco di strategia frutto della collaborazione tra Respawn e Bit Reactor',
    },
     {
        URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
        spanText:'Electronic Arts Inc.',
        date:'15-dic-2021',
        h5Text:'I client di Origin ed EA Desktop non sono stati colpiti dalla vulnerabilità…',
        paragraphText:'Alla fine della scorsa settimana è stata resa nota una vulnerabilità estremamente grave nella sicurezza della popolare libreria di registrazione basata su Java "Log4j 2" (CVE-2021-44228, alias "Log4Shell").',
    },
    {
        URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
        spanText:'Electronic Arts Inc.',
        date:'1-gen-2022',
        h5Text:"Condividiamo il nostro Rapporto sull'impatto del 2021",
        paragraphText:"I nostri impegni e progressi nella diversità, la creazione di community più sane, la sostenibilità e molto altro.",
    },
  
   
    ]

    EaPlay = [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    FIFA = [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    apexLegends = [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    battlefield2042 = [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]
    theSims4= [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]
    formulaOne= [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    insideEa= [ 
    
      {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/bg-ea-card.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

   arrayPrincipale = [
    this.notizieEa,
    this.EaPlay,
    this.FIFA,
    this.apexLegends,
    this.battlefield2042,
    this.theSims4,
    this.formulaOne,
    this.insideEa
  ]
   
      
  constructor() { }

   sendArray(){
   return this.arrayPrincipale;
  }
}
