let body = document.getElementById('body');
let main = document.getElementById('main');
let header = document.getElementById('h1');
let txt = document.getElementById('txt')
let corDestaque = document.getElementById('corDestaque');
let codigo = document.getElementById('codigo');

function trocaCor(){
    let corAleatoria = "#" + Math.floor(Math.random()*16777216).toString(16).padStart(6, '0').toUpperCase();

    main.style.borderColor = corAleatoria;
    main.style.boxShadow = `0 0 15px ${corAleatoria}, inset 0 0 10px ${corAleatoria}`;   
    header.style.color = corAleatoria;
    txt.style.color = corAleatoria;
    corDestaque.style.backgroundColor = corAleatoria;
    
    codigo.innerText = `${corAleatoria}`;
}

body.addEventListener('click', trocaCor);