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
       URLpath:'../../../assets/Background-images/ea-play-drop.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Gioca a Mass Effect™ Legendary Edition con EA Play* Pro',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/ea-play-fifa.png',
       spanText:'Electronic Arts Inc.',
       date:'3-mag-2021',
       h5Text:"Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS",
       paragraphText:'FIFA 21 è ora disponibile in The Play List con EA Play.',
   },
   {
       URLpath:'../../../assets/Background-images/ea-play-drop.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/ea-game-pass-article.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/ea-play-drop.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/ea-play-drop.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    FIFA = [ 
    
      {
       URLpath:'../../../assets/Background-images/ea-birthday.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/fifa-22-mbappe.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/ea-squadra-generica.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/ea-pitchnotes.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/fifa-22-mbappe.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/ea-future-stars.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    apexLegends = [ 
    
      {
       URLpath:'../../../assets/Background-images/apex-legends-anniversary.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/apex-mobile-1.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/apex-mobile-2.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/apex-prime-1.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/apex-prime-2.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/apex-raynday.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    battlefield2042 = [ 
    
      {
       URLpath:'../../../assets/Background-images/battlefield-2042-first.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'AGGIORNAMENTO № 3.3 DI BATTLEFIELD 2042',
       paragraphText:"Ulteriori correzioni di errori, miglioramenti per l'esperienza di gioco e rinnovamento della tabella punti",
    },
    {
       URLpath:'../../../assets/Background-images/battlefield-2042-second.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'AGGIORNAMENTO № 3.1 DI BATTLEFIELD™ 2042',
       paragraphText:"Miglioramenti al bilanciamento dei veicoli, modifiche per le armi e ulteriori correzioni di bug",
   },
   {
       URLpath:'../../../assets/Background-images/battlefield-2042-third.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'AGGIORNAMENTO № 3 DI BATTLEFIELD™ 2042',
       paragraphText:"Correzione di ulteriori errori, modifiche al bilanciamento e miglioramenti per l'esperienza di gioco",
   },
    {
       URLpath:'../../../assets/Background-images/battlefield-2042-fourth.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Feedback di Battlefield - Mappe',
       paragraphText:"Le mappe di Battlefield 2042: feedback dei giocatori e aggiornamenti – Electronic Arts",
   },
    {
       URLpath:'../../../assets/Background-images/battlefield-2042-fifth.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Briefing Battlefield - Il viaggio verso la Stagione 1',
       paragraphText:'Un aggiornamento sul nostro impegno per Battlefield 2042',
   },
   {
       URLpath:'../../../assets/Background-images/battlefield-2042-sixth.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'AGGIORNAMENTO № 3.2 DI BATTLEFIELD 2042',
       paragraphText:"Correzione di ulteriori errori, modifiche al bilanciamento e miglioramenti per l'esperienza di gioco",
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
       URLpath:'../../../assets/Background-images/f1-first.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/f1-second.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/f1-third.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/f1-fourth.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/f1-fifth.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/f1-sixth.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
 
  
   ]

    insideEa= [ 
    
      {
       URLpath:'../../../assets/Background-images/ea-inside-ea.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
    },
    {
       URLpath:'../../../assets/Background-images/ea-fullcircle.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
   {
       URLpath:'../../../assets/Background-images/ea-powered-inclusion.jpg',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/ea-positive-play.png',
       spanText:'Electronic Arts Inc.',
       date:'1-gen-2022',
       h5Text:'Riflettore sui SimGuru: le interviste di FreePlay',
       paragraphText:'Rispondiamo alle tue domande mentre festeggiamo il nostro decimo compleanno',
   },
    {
       URLpath:'../../../assets/Background-images/ea-eacom.jpg',
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
