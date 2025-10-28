function ponto1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    //pt1 = pt1 + 1;
    pt1++;
    placar.innerHTML = pt1;
}
function ponto2(){
    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML);
    //pt2 = pt2 + 2;
    pt2++;
    placar.innerHTML = pt2;
}
function ponto00(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    pt1 = pt1 - pt1;
    placar.innerHTML = pt1;
}

// Basquete:

function pontobasquete1(ponto){
    var placar = document.querySelector("#pt3")
    var pontoTela = Number(placar.innerHTML)
    pontoTela = pontoTela + ponto
    placar.innerHTML = pontoTela
}

function pontobasquete2(ponto){
    var placar = document.querySelector("#pt4")
    var pontoTela = Number(placar.innerHTML)
    pontoTela = pontoTela + ponto
    placar.innerHTML = pontoTela
}
