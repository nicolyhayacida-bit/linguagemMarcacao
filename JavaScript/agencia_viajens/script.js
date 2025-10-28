//Menu hamburguer
const botaoHamburguer = document.querySelector('#btn-hamburguer');
const menuMobile = document.querySelector('#menu-mobile');

botaoHamburguer.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden");
})