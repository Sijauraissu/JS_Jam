"use strict"
//Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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

//
var step = 0;
var element = 0;
let before = document.getElementById("needleft");
let next = document.getElementById("needright");
var tabneed = [];
var newtext = document.querySelectorAll(".needs__el");
var needimage = document.querySelector(".container__img");

function need(element) {
    var out = [];
    var array = [];
    out.push(element[step]);
    console.log(step);
  
    var array = [out[0].problem, out[0].description, out[0].who];
    var needimageright = [out[0].img];
    for (let i=0; i<array.length; i++){
        newtext[i].innerHTML = array[i];
    }
    needimage.style["background-image"] = needimageright;
}

fetch("./assets/json/need.json")
    .then(
        (response) => {
            response.json().then((text) => {
            console.log(text);

            for (let i=0; i<text.need.length; i++){
                tabneed.push(text.need[i]);
                console.table(tabneed);
            }
            element=tabneed;
            need(tabneed);

            next.addEventListener("click", function() {
                step++;
                if (step >= 5){
                    step=0;
                }
                need(element);
            })
            
            before.addEventListener("click", function() {
                step--;
                if (step < 0){
                    step=4;
                }
                need(element);
            })
        })
    }
);

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


// function fonctionnalities(element) {
//     var out = [];
//     var array = [];
//     out.push(element[step]);
//     console.log(step);
  
//     var array = [out[0].title, out[0].description];
//     for (let i=0; i<array.length; i++){
//         fonctionnalitiesel[i].innerHTML = array[i];
//     }
// }

// fetch("./assets/json/fonctionnalities.json")
//     .then(
//         (response) => {
//             response.json().then((text) => {
//             console.log(text);

//             for (let i=0; i<text.fonctionnalities.length; i++){
//                 tabfonctionnality.push(text.fonctionnalities[i]);
//                 console.table(tabfonctionnality);
//             }
//             element=tabfonctionnality;
//             fonctionnalities(tabfonctionnality);
//         })
//     }
// );