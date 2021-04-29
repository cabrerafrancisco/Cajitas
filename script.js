const btnAgregarCaja = document.getElementById("btnAgregarCaja"); //Trae el evento click
const divContenedor = document.getElementById("contenedor"); //Trae el div contenedor
const input = document.getElementById("input-palabra"); //Trae lo que ingresamos en el input
const imagen = document.getElementById("input-link"); // Trae el link de la imagen

function reset(){
    input.value = '';
    imagen.value = '';
}

console.log(btnAgregarCaja);

btnAgregarCaja.addEventListener("click" , function(){
    //Creamos los Elementos
    const nuevaCaja = document.createElement("div");
    const nuevaImg = document.createElement("img");
    const nuevoP = document.createElement("p");
    //Tomo el valor del P y de la Imagen
    nuevaImg.setAttribute('src', imagen.value);
    nuevoP.textContent = input.value;
    //Creo nuevas clases
    nuevaCaja.classList.add("caja");
    nuevaImg.classList.add("imag");
    //Muestro la caja creada
    nuevaCaja.appendChild(nuevaImg); // Agrega la Img a la caja
    nuevaCaja.appendChild(nuevoP); // Agrega el P a la caja
    divContenedor.appendChild(nuevaCaja); // Agrega la caja al div
    //Reseteo los input
    reset(); //Es una funcion llamada arriba
});