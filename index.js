import * as modulo from './modulo.js';

let name = new URLSearchParams(window.location.search).get("name");
let lastname = new URLSearchParams(window.location.search).get("lastname");
console.log(lastname)

const contenedorMenu = document.getElementById("conenedor-menu");
const contenedorFormulario = document.getElementById("contenedor-form");
const botonConfirmar = document.getElementById("btnConfirmar");
const formulario = document.getElementById("formulario");


botonConfirmar.addEventListener("click", function(event) {
    let nombre = formulario.elements[0].value;
    let apellido = formulario.elements[1].value;
    if (nombre.trim() !== "" && apellido.trim() !== "") {
        event.preventDefault();
        modulo.mostrarTodo(contenedorMenu, nombre, apellido);
        modulo.limpiarFormulario(contenedorFormulario);
        modulo.crearBienvenida(contenedorFormulario, nombre, apellido);
    } else {
        alert("Por favor llenar todos los campos para continuar");
    }
});