import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    this.card();
  }

  card(){
    //---------------------------- NavBar Animation -----------------------

//---------------------------- Section of Constants -------------------
const body :any= document.querySelector("body");
const firstDivFirstIcon:any= document.querySelector(".icons")!.firstElementChild; // log in icon
const secondDivFirstIcon:any= firstDivFirstIcon.nextElementSibling; //question icon
const headerDiv:any = document.querySelector(".headerDiv");
const NavBar :any= document.querySelector(".navBar");
const icons :any= document.querySelector(".icons");
const divFatherRed :any= document.createElement("div"); //FIRST FATHER  div for first icon " Do "
const divRedIconOne :any= document.createElement("div"); // first icon red
const divRedIconTwo :any= document.createElement("div"); //second icon red
//-----------------------------------------------------------------------
const divFatherRedTwo :any= document.createElement("div"); //SECOND FATHER div for second icon " ? "
const divInfFatherRedTwo :any= document.createElement("div"); // left container of icon three and four
const divInfTwoFatherRedTwo :any= document.createElement("div"); //right container of icon five and six
const divRedIconThree :any= document.createElement("div"); //third icon red
const divRedIconFour :any= document.createElement("div"); //fourth icon red
const divRedIconFive :any= document.createElement("div"); //fifth icon red
const divRedIconSix:any = document.createElement("div"); // sixth icon red
//------------------------------------------------------------------------
const divTest:any = document.createElement("div"); //div test of the first icon
const divTestTwo:any = document.createElement("div"); // div test of the second icon
const h3divRedOne:any = document.createElement("h3");
const h3divRedTwo:any = document.createElement("h3");
const h3divRedThree:any = document.createElement("h3");
const h3divRedFour:any = document.createElement("h3");
const h3divRedFive:any = document.createElement("h3");
const h3divRedSix:any = document.createElement("h3");
const h3HelpTopFather:any = document.createElement("h3");
const h3BottomRedFather:any = document.createElement("h3");
const divX:any = document.createElement("div");

//---------------------------- END Section of Constants -------------------
//Headerdiv style ------
headerDiv.style.minHeight = "40px";
//END headerDiv style ------
//---------------------------- Style of H3 of div one and two --------------
//--------------------------------------------------------------------------
h3divRedOne.textContent = "Accedi";
h3divRedOne.classList.add("h3RedDiv");

//--------------------------------------------------------------------------
h3divRedTwo.textContent = "Crea Account";
h3divRedTwo.classList.add("h3RedDiv");

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
h3divRedThree.textContent = "Verifica i dati di accesso a Origin";
h3divRedThree.classList.add("h3RedDiv");

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
h3divRedFour.textContent = "Come riscattare un codice";
h3divRedFour.classList.add("h3RedDiv");

//---------------------------------------------------------------------------
h3divRedFive.textContent = "Collega Origin al mio ID PSN";
h3divRedFive.classList.add("h3RedDiv");

//---------------------------------------------------------------------------

h3divRedSix.textContent = "Non riesco a giocare online";
h3divRedSix.classList.add("h3RedDiv");

//----------------------------------------------------------------------------

h3HelpTopFather.textContent = "Ti serve aiuto?";
h3HelpTopFather.classList.add("h3HelpTop");

h3BottomRedFather.innerHTML =
  'Non hai trovato ciò che cerchi? Vai su <a href ="" style="text-decoration:none; color:red">Aiuto EA</a>,<a href="" style="text-decoration:none; color:red"> Answers HQ </a>oder die <a href ="" style="text-decoration:none; color:red">Forum EA</a>.';
h3BottomRedFather.classList.add("h3BottomFather");

//--------------------- END Style of H3 of div one and two ---------------------

divTest.classList.add("divTestStyle");

divTestTwo.classList.add("divTestStyle");
//------------------------------------------------------------------------------

divInfFatherRedTwo.classList.add("divInFathersStyle");
divInfTwoFatherRedTwo.classList.add("divInFathersStyle");

//------------------------------------------------------------------------------

//---------------------------- Working on img svg ------------------------------

const svgXicon = document.createElement("img"); // x icon//
svgXicon.src = "../assets/other-icons/x.svg";

//---------------------------- First icons of first svg FIRST DIV --------------
const svgSignIn = document.createElement("img"); //sign in icon //
svgSignIn.src = "../assets/other-icons/eaglobalnav-iconsignin.svg";
svgSignIn.style.width = "36px";

const svgRegisterIcon = document.createElement("img"); //register icon //
svgRegisterIcon.src = "../assets/other-icons/eaglobalnav-iconregister.svg";
svgRegisterIcon.style.width = "36px";

//---------------------------- END First icons of first svg ---------------------

const verifyDataIconOrigin = document.createElement("img"); // Origin icon //
verifyDataIconOrigin.src =
  "../assets/other-icons/eaglobalnav-iconorigin.svg";
verifyDataIconOrigin.style.width = "36px";

const iconOriginCode = document.createElement("img"); // Origin code icon //
iconOriginCode.src = "../assets/other-icons/eaglobalnav-iconorigincode.svg";
iconOriginCode.style.width = "36px";

const originWarning = document.createElement("img"); //Warning icon //
originWarning.src = "../assets/other-icons/eaglobalnav-iconalert.svg";
originWarning.style.width = "36px";

const iconLinkOrigin = document.createElement("img"); // Links icon //
iconLinkOrigin.src = "../assets/other-icons/eaglobalnav-iconlink.svg";
iconLinkOrigin.style.width = "36px";

//---------------------------- END Working on img svg ----------------------------

divFatherRed.classList.add("divFatherRedStyle");

divFatherRedTwo.classList.add("divFatherTwoRedStyle");

divRedIconOne.classList.add("iconsStyleRed");

divRedIconTwo.classList.add("iconsStyleRed");

divRedIconThree.classList.add("iconsStyleRed");

divRedIconFour.classList.add("iconsStyleRed");

divRedIconFive.classList.add("iconsStyleRed");

divRedIconSix.classList.add("iconsStyleRed");

divX.classList.add("divXstyle");

//

//----------------------------  section of appendChilds ----------------------------

divRedIconOne.appendChild(svgSignIn);
divRedIconOne.appendChild(h3divRedOne);
divRedIconTwo.appendChild(svgRegisterIcon);
divRedIconTwo.appendChild(h3divRedTwo);
divRedIconThree.appendChild(verifyDataIconOrigin);
divRedIconFour.appendChild(iconOriginCode);
divRedIconFive.appendChild(iconLinkOrigin);
divRedIconSix.appendChild(originWarning);
divX.appendChild(svgXicon);

//---------------------------- END section of appendChilds --------------------------

function expanse() {
  // debugger;
  if (headerDiv.style.minHeight === "40px") {
    headerDiv.style.minHeight = "450px";
    headerDiv.style.alignItems = "unset";
    icons.style.marginTop = "10px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    headerDiv.appendChild(divTest);
    divTest.appendChild(divFatherRed);
    divFatherRed.appendChild(divRedIconOne);
    divFatherRed.appendChild(divRedIconTwo);
    icons.appendChild(divX);
    icons.style.zIndex = "3";
    // headerDiv.style.zIndex = "3";
    divFatherRed.style.opacity = "1";
    body.style.overflowY = "hidden";
    NavBar.style.position = "unset";
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
    setTimeout(() => {
      // NavBar.style.position = "fixed";
      headerDiv.removeChild(divTest);
    }, 300);
  }
}

function expanseTwo() {
  if (headerDiv.style.minHeight === "40px") {
    headerDiv.style.minHeight = "450px";
    headerDiv.style.alignItems = "unset";
    icons.style.marginTop = "10px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    headerDiv.appendChild(divTestTwo);
    icons.appendChild(divX);
    divTestTwo.appendChild(divFatherRedTwo);
    divFatherRedTwo.appendChild(h3HelpTopFather);
    divFatherRedTwo.appendChild(h3BottomRedFather);
    divFatherRedTwo.appendChild(divInfFatherRedTwo);
    divFatherRedTwo.appendChild(divInfTwoFatherRedTwo);
    divInfFatherRedTwo.appendChild(divRedIconThree);
    divInfFatherRedTwo.appendChild(divRedIconFour);
    divRedIconThree.appendChild(h3divRedThree);
    divRedIconFour.appendChild(h3divRedFour);
    divInfTwoFatherRedTwo.appendChild(divRedIconFive);
    divInfTwoFatherRedTwo.appendChild(divRedIconSix);
    divRedIconFive.appendChild(h3divRedFive);
    divRedIconSix.appendChild(h3divRedSix);
    icons.style.zIndex = "3";
    divFatherRedTwo.style.opacity = "1";
    body.style.overflowY = "hidden";
    NavBar.style.position = "unset";
    // } else if (headerDiv.style.minHeight === "450px") {
    //   firstDivFirstIcon.addEventListener("click", () => {
    //     console.log("ok funziona");
    //     headerDiv.style.minHeight = "450px";
    //     headerDiv.style.alignItems = "unset";
    //     icons.style.marginTop = "10px";
    //     headerDiv.style.transition = "ease-in-out 0.3s";
    //     headerDiv.appendChild(divTest);
    //     icons.appendChild(divX);
    //     divTest.appendChild(divFatherRed);
    //     divFatherRed.appendChild(divRedIconOne);
    //     divFatherRed.appendChild(divRedIconTwo);
    //     icons.style.zIndex = "3";
    //     // headerDiv.style.zIndex = "3";
    //     divFatherRed.style.opacity = "1";
    //     body.style.overflowY = "hidden";
    //     NavBar.style.position = "unset";
    //   });
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRedTwo.style.transition = "linear 0.3s";
    divFatherRedTwo.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
    setTimeout(() => {
      // NavBar.style.position = "fixed";
      headerDiv.removeChild(divTestTwo);
    }, 300);
  }
}
//---------------------------- AddEventListener -------------------------------------

//---------------------------- AddEventListener of the first icon -------------------

firstDivFirstIcon.addEventListener("click", expanse); // expanse eventListener first if else //

divRedIconOne.addEventListener("mouseover", () => {
  divRedIconOne.style.transform = "translateY(-6px)";
  divRedIconOne.style.transition = "all 150ms ease-out";
});
divRedIconOne.addEventListener("mouseout", () => {
  divRedIconOne.style.transform = "translateY(0)";
});

divRedIconTwo.addEventListener("mouseover", () => {
  divRedIconTwo.style.transform = "translateY(-6px)";
  divRedIconTwo.style.transition = "all 150ms ease-out";
});
divRedIconTwo.addEventListener("mouseout", () => {
  divRedIconTwo.style.transform = "translateY(0)";
});

divRedIconThree.addEventListener("mouseover", () => {
  divRedIconThree.style.transform = "translateY(-6px)";
  divRedIconThree.style.transition = "all 150ms ease-out";
});
divRedIconThree.addEventListener("mouseout", () => {
  divRedIconThree.style.transform = "translateY(0)";
});

divRedIconFour.addEventListener("mouseover", () => {
  divRedIconFour.style.transform = "translateY(-6px)";
  divRedIconFour.style.transition = "all 150ms ease-out";
});
divRedIconFour.addEventListener("mouseout", () => {
  divRedIconFour.style.transform = "translateY(0)";
});

divRedIconFive.addEventListener("mouseover", () => {
  divRedIconFive.style.transform = "translateY(-6px)";
  divRedIconFive.style.transition = "all 150ms ease-out";
});
divRedIconFive.addEventListener("mouseout", () => {
  divRedIconFive.style.transform = "translateY(0)";
});

divRedIconSix.addEventListener("mouseover", () => {
  divRedIconSix.style.transform = "translateY(-6px)";
  divRedIconSix.style.transition = "all 150ms ease-out";
});
divRedIconSix.addEventListener("mouseout", () => {
  divRedIconSix.style.transform = "translateY(0)";
});
//---------------------------- END AddEventListener of the first icon ----------------
//---------------------------- AddEventListener of the second icon -------------------

secondDivFirstIcon.addEventListener("click", expanseTwo); // expanse eventListener first if else //

//---------------------------- END AddEventListener of the second icon ---------------

//---------------------------- AddEventListener of the X icon ------------------------

divX.addEventListener("click", () => {
  // x icon eventListener second if //
  if (headerDiv.style.minHeight === "450px") {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    divFatherRedTwo.style.transition = "linear 0.3s";
    divFatherRedTwo.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
    setTimeout(() => {
      headerDiv.removeChild(divTestTwo);
    }, 300);
    setTimeout(() => {
      headerDiv.removeChild(divTest);
    }, 300);
  }
});
//----------------------------END AddEventListener of the X icon ---------------------
//--------------------------- Scroll Function -------------------------------------

function scrollDetect() {
  let lastScroll = 0;

  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      headerDiv.style.top = "-40px";
      NavBar.style.transition = "linear 0.3s";
      headerDiv.style.transition = "linear 0.3s";
      NavBar.style.width = "100%";
      NavBar.style.backgroundColor = "white";
      NavBar.style.position = "fixed";
      NavBar.style.top = "0";
    } else {
      lastScroll = currentScroll;
      NavBar.style.top = "40px";
      NavBar.style.zIndex = "2";
      headerDiv.style.position = "fixed";
      headerDiv.style.top = "0";
    }
  };
}

scrollDetect();
  }
}
