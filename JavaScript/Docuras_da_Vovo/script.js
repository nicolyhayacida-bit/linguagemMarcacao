// Menu hamburguer
const botaoHamburguer = document.querySelector('#btn-hamburguer');
const menuMobile = document.querySelector("#menu-mobile");

botaoHamburguer.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden");
})

// Selecionar os elementos
const gatilhoDropDownWeb = document.querySelector("#gatilho-dropdown-web");
const menuDropDownWeb = document.querySelector("#menu-dropdown-web");

// Mobile
const gatilhoDropDownMobile = document.querySelector("#gatilho-dropdown-mobile");
const menuDropDownMobile = document.querySelector("#menu-dropdown-mobile");

// Adicionar eventos de clique aos gatilhos
gatilhoDropDownWeb.addEventListener("click",(evento) =>{
    evento.stopPropagation(); //Impede que o elemento vaze
    menuDropDownWeb.classList.toggle("hidden");
    menuDropDownMobile.classList.add("hidden"); //Garantir que o menu feche
} )

//Menu Mobile
gatilhoDropDownMobile.addEventListener("click",(evento) =>{
    evento.stopPropagation(); //Impede que o elemento vaze
    menuDropDownMobile.classList.toggle("hidden");
    menuDropDownWeb.classList.add("hidden"); //Garantir que o menu feche
} )

// Movimentando o carrossel

// Selecionar os elementos
const containerSlides = document.querySelector("#carrossel-slides");
const todosSlides = document.querySelectorAll(".slide-carrossel");
const btnAnterior = document.querySelector("#btn-anterior");
const btnProximo = document.querySelector("#btn-proximo");

let slideAtual = 0;
const totalSlides = todosSlides.length;

//Função Principal
function atualizarCarrossel(){
    let valorTransform = `translateX(-${slideAtual * 100}%)`;
    containerSlides.style.transform = valorTransform;
}

btnAnterior.addEventListener("click", () => {
    slideAtual--;
    if(slideAtual < 0){
        slideAtual = todosSlides - 1;
    }
    atualizarCarrossel();
})

btnProximo.addEventListener("click", () =>{
    slideAtual++;
    if(slideAtual >= totalSlides){
        slideAtual = 0;
    }
    atualizarCarrossel();
})

//inicializando carrossel
atualizarCarrossel();