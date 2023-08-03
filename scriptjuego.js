let imagenDrop = document.querySelector("#imagen1");
let cajadDrop = document.querySelector("#caja1");

imagenDrop.addEventListener('dragstart',inicioTraslado);
imagenDrop.addEventListener('dragend',finalTraslado);

function inicioTraslado(evento) {
    evento.dataTransfer.setData ('Text',imagenDrop);
};

function finalTraslado(evento) {
    let imagen=evento.target;
    imagen.style.visibility="hidden";
};

destino.addEventListener('drop',soltarElemento);

function soltarElemento(evento){ 
    let dataimagenDrop = evento.dataTransfer.getData('Text');
    destino.innerHTML=`<img id="#imagen1" src="${dataimagenDrop}"/>`
};

function prevenirDefault(evento) {
    evento.preventDefault()
};

iniciar()