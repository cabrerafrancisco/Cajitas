const btnAgregarCaja = document.getElementById("btnAgregarCaja"); //Trae el evento click
const divContenedor = document.getElementById("contenedor"); //Trae el div contenedor
const input = document.getElementById("input-palabra"); //Trae lo que ingresamos en el input

console.log(btnAgregarCaja);

function reset(){
    input.value = '';
}

btnAgregarCaja.addEventListener("click" , function(){
    const nuevaCaja = document.createElement("div");
    const nuevoP = document.createElement("p");
    
    nuevoP.textContent = input.value;

    nuevaCaja.classList.add("caja");

    nuevaCaja.appendChild(nuevoP);
    divContenedor.appendChild(nuevaCaja);
    reset();
});