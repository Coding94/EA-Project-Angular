import {
  ApplicationRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { WindowScrollService } from '@app/EAservices/window-scroll.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LayoutService } from '../shared/layout.service';
import { RegisterComponent } from '../register/register.component';
import { RegisterService } from '../EAservices/register.service';

@Component({
  selector: 'ea-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private servLayout: LayoutService,
    private windowScroll: WindowScrollService,
    private register: RegisterService,
    private ref: ApplicationRef
  ) {}
  controlCompleteUserData!: boolean;
  completeUserData: any;

  @Input() controlVar!: boolean;

  @Output() openAside = new EventEmitter<BehaviorSubject<boolean>>();

  @Input() x!: any;
  control$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.navAnim();
    this.openAside.emit(this.control$);
    this.x = this.windowScroll.getX();
    this.register.sendDataBySubj$.subscribe(
      (data) => (
        (this.completeUserData = data), console.log(this.completeUserData)
      )
    );
  }
  ngOnChanges() {
    this.completeUserData;
  }

  openAsideDiv() {
    this.control$.next(true);
    // this.servLayout.openAside('asideDivOnClick');
    document.body.style.overflow = 'hidden';
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('darkBgDiv');
  }

  navAnim() {
    let childrenOfDivLinks: any = document.querySelector('.divLinks')!.children;
    let giochiList = [
      'ESPLORA I GIOCHI',
      'Ultimi giochi',
      'Prossimamente',
      'EA SPORTS',
      'Giochi gratuiti',
      'Libreria dei giochi',
      'PIATTAFORME',
      'PC',
      'Playstation 5',
      'Xbox Series X',
      'Nintendo Switch',
      'Cellulari',
    ];
    let altreEsperienzeList = [
      'EA Play',
      'Origin',
      'Competizioni videoludiche',
      'Diretta di EA Play',
    ];
    let informazioniList = [
      'Societa',
      'EA Studi',
      'La nostra tecnologia',
      'EA Partners',
      'Notizie',
      'Inside EA',
    ];
    let impegniList = [
      'Gioco positivo',
      'Diversità e inclusione',
      'Sensibilizzazione della comunità',
      'Persone e cultura',
      'Ambiente',
    ];
    let risorseList = [
      'Aiuto',
      'Forum',
      'Lavora con noi',
      'Filtro famiglia',
      'Accessibilita',
      'Stampa',
      'Investitori',
      'Test di gioco',
    ];
    let listsNavBar = [
      giochiList,
      altreEsperienzeList,
      informazioniList,
      impegniList,
      risorseList,
    ];
    for (let i = 0; i < childrenOfDivLinks.length; i++) {
      let curtain = document.createElement('div');

      curtain.classList.add('curtainEA');
      if (childrenOfDivLinks[i].children.length == 1) {
        childrenOfDivLinks[i].appendChild(curtain);
      }
      childrenOfDivLinks[i].addEventListener('mouseover', () => {
        curtain.style.opacity = '1';
        curtain.style.transform = 'scaleY(1)';
        curtain.style.transformOrigin = 'top';
        curtain.style.position = 'absolute';
        curtain.style.top = '45px';
        curtain.style.right = '-200px';
        curtain.style.zIndex = '9';
        curtain.style.display = 'flex';
        curtain.style.justifyContent = 'center';
        curtain.style.alignItems = 'center';
        curtain.style.backgroundColor = 'white';
        curtain.style.gap = '50px';
        curtain.style.color = 'black';
        curtain.style.padding = '0 50px';
        curtain.style.borderRadius = '5px';

        if ([...childrenOfDivLinks].indexOf(childrenOfDivLinks[i]) == 0) {
          curtain.style.paddingTop = '40px';
          curtain.style.paddingBottom = '40px';
          // debugger;
          if (curtain.children.length < 1) {
            curtain.style.flexDirection = 'row';
            // curtain.style.gap = "50px";
            let divCurtainContentLeft: any = document.createElement('div');
            divCurtainContentLeft.height = 'max-content';
            divCurtainContentLeft.width = 'max-content';
            divCurtainContentLeft.marginLeft = '100px';
            let divCurtainContentRight: any = document.createElement('div');
            divCurtainContentRight.height = 'max-content';
            divCurtainContentRight.width = 'max-content';

            listsNavBar[i].forEach((el) => {
              if (listsNavBar[i].indexOf(el) < 6) {
                let divContent: any = document.createElement('div');
                divContent.textContent = el;
                divContent.style.padding = '10px 0';

                if (listsNavBar[i].indexOf(el) == 0) {
                  divContent.style.fontWeight = '900';
                  divContent.style.borderBottom = '2px solid lightgrey';
                  divContent.style.marginBottom = '20px';
                }

                divContent.onmouseover = () => {
                  divContent.style.color = 'red';
                  divContent.onmouseout = () => {
                    divContent.style.color = 'black';
                  };
                };
                divContent.marginLeft = '50px';
                divCurtainContentLeft.appendChild(divContent);
                curtain.appendChild(divCurtainContentLeft);
                divCurtainContentLeft.style.display = 'flex';
                divCurtainContentLeft.style.flexDirection = 'column';
              } else {
                let divContent = document.createElement('div');
                divContent.textContent = el;
                divContent.onmouseover = () => {
                  divContent.style.color = 'red';
                  divContent.onmouseout = () => {
                    divContent.style.color = 'black';
                  };
                };
                divCurtainContentRight.appendChild(divContent);
                curtain.appendChild(divCurtainContentRight);
                divCurtainContentRight.style.display = 'flex';
                divCurtainContentRight.style.flexDirection = 'column';
                divContent.style.padding = '10px 0';

                if (listsNavBar[i].indexOf(el) == 6) {
                  divContent.style.fontWeight = '900';
                  divContent.style.borderBottom = '2px solid lightgrey';
                  divContent.style.marginBottom = '20px';
                }
              }
            });
          }
        } else {
          curtain.style.flexDirection = 'column';
          curtain.style.gap = '0';
          curtain.style.right = '-50px';
          if (curtain.children.length < 1) {
            listsNavBar[i].forEach((el) => {
              let divCurtain = document.createElement('div');
              divCurtain.textContent = el;
              divCurtain.style.padding = '10px 0';
              divCurtain.onmouseover = () => {
                divCurtain.style.color = 'red';
                divCurtain.onmouseout = () => {
                  divCurtain.style.color = 'black';
                };
              };
              curtain.appendChild(divCurtain);
            });
          }
        }

        let imgs =
          childrenOfDivLinks[i].lastElementChild.previousElementSibling;
        // console.log(imgs);

        imgs.style.transform = 'rotateX(180deg)';
        imgs.style.transition = 'linear 0.4s';
        imgs.style.fill = '#ff6161';
        childrenOfDivLinks[i].style.cursor = 'pointer';
        childrenOfDivLinks[i].style.color = '#ff6161';
        childrenOfDivLinks[i].style.position = 'relative';
      });

      childrenOfDivLinks[i].addEventListener('mouseout', () => {
        // debugger;
        let imgs = childrenOfDivLinks[i].lastChild.previousElementSibling;

        imgs.style.transform = 'rotateX(0deg)';
        imgs.style.transition = 'linear 0.4s';
        childrenOfDivLinks[i].style.color = 'black';
        imgs.style.fill = 'unset';

        // curtain.style.height = "0";
        curtain.style.transition = 'ease .2s';
        curtain.style.transform = 'scaleY(0)';
        // curtain.style.opacity = "0";
        // curtain.children.style.opacity = "0";
        // curtain.children.style.zIndex = "-3";
      });
    }
  }
}
