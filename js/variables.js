//Definimos variables globales del proyecto

let deck = [];
let nombre = ""
let credito = 0;
let apuestaJugador = 0;
let manoUser = 0;
let manoCrupier = 0;
let cartasJugador = [];
let cartasBanca = [];
let manosJugadas = [];
let userLog = false
let puntosJugador = [];
let puntosBanca = [];
let i = 1;
let archivo = ""
let data = []
const musicP = new Audio('../sound/musica.mp3');

//Variables que interactuan con el HTML
const btnJugar = document.getElementById('jugar')
const btnCargoCredito = document.getElementById('cargoCreditoBtn')
const btnApuestaJugador = document.getElementById('apuestaJugadorBtn')
const pedirCarta = document.getElementById('pidoCarta')
const noPedir = document.getElementById('noPido')
const loginUser = document.getElementById('logUser')
const rutaCartaUser = document.getElementById("cartasPlayer")
const rutaCartaBanca = document.getElementById("cartasBanca")
const listaMejores = document.querySelector("#listado")
let sapo = JSON.parse(localStorage.getItem("mejoresUser"))
