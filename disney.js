import * as modulo from './modulo.js';
let plataforma = "Disney+";
let name = new URLSearchParams(window.location.search).get("name");
let lastname = new URLSearchParams(window.location.search).get("lastname");
let contenedorBienvenida = document.getElementById("contenedor-bienvenida");
let contenedorTarjetas = document.getElementById("contenedor-tarjetas");
let contenedorNav = document.getElementById("crear-nav");

modulo.crearNav(contenedorNav, name, lastname);
modulo.crearBienvenida(contenedorBienvenida, name, lastname);
modulo.generarTarjetas(plataforma, contenedorTarjetas);