"use strict"

//BURGER MENU
//Création d'une constante pour stocker le burger menu
const burger = document.querySelector(".burger");
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