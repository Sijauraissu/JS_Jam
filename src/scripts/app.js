"use strict"
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//BURGER MENU
//Création d'une constante pour stocker le burger menu
const burger = document.querySelector(".navigation__burger");
//Création d'une constante pour stocker la liste des liens
const navmenu = document.querySelector(".navigation__list");
//Lors de la détection du click sur le bouton burger : 
burger.addEventListener("click", () => {
    //Ajout de la classe activeNav sur le Burger Menu
    burger.classList.toggle("activeBurger");
    //Ajout de la classe activeNav sur la Navigation
    navmenu.classList.toggle("activeNav");
});
//Selection des liens de la Nav
document.querySelectorAll(".navigation__link").forEach((link) =>
    //Lors de la détection du click sur l'un des liens de la navigation: 
    link.addEventListener("click", () => {
        //Suppression de la classe Burger Menu lors du clic sur la croix du Burger Menu
        burger.classList.remove("activeBurger");
        //Suppression de la classe Burger Menu lors du clic sur un lien de la navigation
        navmenu.classList.remove("activeNav");
    })
);

var tabsearchs = [];
var tabneed = [];
var elementneed  = 0;
var step = 0;
// var elementstudy =0;
//Ajout des informations contenues dans le JSON
fetch("./assets/json/need.json")
    .then(
        (response) => {
            response.json().then((text) => {
            console.log(text);

            for (let i=0; i<text.need.length; i++){
                tabneed.push(text.need[i]);
                console.table(tabneed);
            }

            // for (let i=0; i<text.searchs.length; i++){
            //     tabsearchs.push(text.searchs[i]);
            //     console.table(tabsearchs);
            // }
            // elementstudy=tabsearchs;
            // study(tabsearchs);
            elementneed=tabneed;
            need(tabneed);
        })
    }
);

//
let before = document.getElementById("needleft");
let next = document.getElementById("needright");
var newtext = document.querySelectorAll(".needs__el");
var needimage = document.querySelector(".container__img");

function need(elementneed) {
    var out = [];
    var array = [];
    out.push(elementneed[step]);
    console.log(step);
  
    var array = [out[0].problem, out[0].description, out[0].who];
    var needimageright = [out[0].img];
    for (let i=0; i<array.length; i++){
        newtext[i].innerHTML = array[i];
    }
    needimage.style["background-image"] = needimageright;
}


next.addEventListener("click", function() {
    step++;
    if (step >= 5){
        step=0;
    }
    need(elementneed);
})

before.addEventListener("click", function() {
    step--;
    if (step < 0){
        step=4;
    }
    need(elementneed);
})





// Fonctionnalité
var fonctionnalitiesbutton = document.querySelectorAll(".fonctionnality__el");
var fonctionnalityarticle = document.querySelectorAll(".fonctionnality__article");
for(let i = 0; i<fonctionnalitiesbutton.length; i++){
    fonctionnalitiesbutton[i].addEventListener(("click"),(e)=>{
        console.log(i);

        for(let i = 0; i<fonctionnalitiesbutton.length; i++){
            fonctionnalitiesbutton[i].classList.remove("activefct");
            fonctionnalityarticle[i].classList.add("hidden");
        }

        fonctionnalitiesbutton[i].classList.add("activefct");
        fonctionnalityarticle[i].classList.remove("hidden");
    });
}

const navigation = document.querySelector(".navigation");

if (navigation) {
  const sections = document.querySelectorAll("section[id]");

  function activateNavLink(sectionId) {
    document.querySelectorAll(".navigation a").forEach(link => {
      link.classList.remove("activeNavLink");
    });

    const activeLink = document.querySelector(`.navigation a[href="#${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add("activeNavLink");
    }
  }

  function scrollHandler() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionTop = current.offsetTop - navigation.offsetHeight;
      const sectionBottom = sectionTop + current.offsetHeight;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        activateNavLink(sectionId);
      }
    });
  }

  function navClickHandler(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop - navigation.offsetHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  }

  document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", navClickHandler);
  });

  window.addEventListener("scroll", scrollHandler);
  scrollHandler(); // Call it initially to highlight the correct section on page load
}




// Récuperation de la date pour le copyright
let date = new Date();
let year = date.getFullYear();

let yr = document.querySelector("#year");
yr.innerHTML = " &#8212 " + year + " &#8212 ";

// GSAP pour l'animation de la bulle des liens
var linkanimation = document.querySelectorAll(".website__link");

linkanimation.forEach ((links)=>{
    let bubble = links.querySelector(".website__bubble");

    let timeline = gsap.timeline()
    timeline.pause();

    timeline.to(bubble,{ width: "calc(100% + 1.3em)", ease: "Elastic.easeOut(0.25)", duration: 0.4 },">")
    timeline.to(bubble,{ width: "2em", left: "calc(100% - 1.45em)", ease: "Elastic.easeOut(0.4)", duration: 0.6 },">")

    links.addEventListener("mouseenter", (e) => {
        timeline.play();
    })

    links.addEventListener("mouseleave", (e) => {
        timeline.reverse();
    })
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }

});






  