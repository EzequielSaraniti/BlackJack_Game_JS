//Definimos variables globales del proyecto

let nombre = ""
let credito = 0;
let apuestaJugador = 0;
let manoUser = 0;
let manoCrupier = 0;
let cartasJugador = [];
let manosJugadas = [];

//Variables que interactuan con el HTML
const btnJugar = document.getElementById('jugar')
const btnCargoCredito = document.getElementById('cargoCreditoBtn')
const btnApuestaJugador = document.getElementById('apuestaJugadorBtn')
const pedirCarta = document.getElementById('pidoCarta')
const noPedir = document.getElementById('noPido')



// Creamos Mazo de cartas con un ARRAY y Objetos dentro

// Color "Corazón"
const mazo = [{
    valor: 1,
    carta: "uno",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 2,
    carta: "dos",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 3,
    carta: "tres",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 4,
    carta: "cuatro",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 5,
    carta: "cinco",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 6,
    carta: "seis",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 7,
    carta: "siete",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 8,
    carta: "ocho",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 9,
    carta: "nueve",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "diez",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "jota",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "reina",
    color: "corazon",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "rey",
    color: "corazon",
    imagen: "imagen"
},

// Color Diamante

{
    valor: 1,
    carta: "uno",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 2,
    carta: "dos",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 3,
    carta: "tres",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 4,
    carta: "cuatro",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 5,
    carta: "cinco",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 6,
    carta: "seis",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 7,
    carta: "siete",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 8,
    carta: "ocho",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 9,
    carta: "nueve",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "diez",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "jota",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "reina",
    color: "diamante",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "rey",
    color: "diamante",
    imagen: "imagen"
},

// Color Trebol

{
    valor: 1,
    carta: "uno",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 2,
    carta: "dos",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 3,
    carta: "tres",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 4,
    carta: "cuatro",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 5,
    carta: "cinco",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 6,
    carta: "seis",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 7,
    carta: "siete",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 8,
    carta: "ocho",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 9,
    carta: "nueve",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "diez",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "jota",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "reina",
    color: "trebol",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "rey",
    color: "trebol",
    imagen: "imagen"
},


//Color pica

{
    valor: 1,
    carta: "uno",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 2,
    carta: "dos",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 3,
    carta: "tres",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 4,
    carta: "cuatro",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 5,
    carta: "cinco",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 6,
    carta: "seis",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 7,
    carta: "siete",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 8,
    carta: "ocho",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 9,
    carta: "nueve",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "diez",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "jota",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 10,
    carta: "reina",
    color: "pica",
    imagen: "imagen"
},

{
    valor: 1,
    carta: "rey",
    color: "pica",
    imagen: "imagen"
}

]