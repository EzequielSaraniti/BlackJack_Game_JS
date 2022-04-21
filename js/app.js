//Definimos el nombre del jugador
//const nombre = prompt("Bienvenido a la mesa de Blackjack, como es tu nombre?");

//document.getElementById('bienvenida').innerHTML = `<h2>Bienvenido ${nombre} al mejor Blackjack! Muchas suerte!</h2>`


let nombre = ""

const btnJugar = document.getElementById('jugar')
btnJugar.addEventListener('click', bienvenida)

function bienvenida() {
    nombre = document.getElementById('nombreUser').value
    //console.log(nombre)
    const bienvenidaHtml = document.getElementById('bienvenida').innerHTML = `<h2>Usuario: <b class="nombreUser">${nombre}</b></h2> <button>Logout</button>`
    const cargocredito = document.getElementById('alertaCredito').innerHTML = `<p>Carga crèdito para comenzar a jugar!</p>`

    //myDiv.className = "apareceContenido";
    document.getElementById("aparece").style.visibility = "visible"; // show
    document.getElementById("IngresoUser").style.display = "none"; // show



}
//alert(`Hola ${nombre}, te deseo mucha suerte, a jugar!!`);


let credito = 0;
let apuestaJugador = 0;
let manoUser = 0;
let manoCrupier = 0;
let cartasJugador = [];
let manosJugadas = [];


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


//cargoCredito();

const btnCargoCredito = document.getElementById('cargoCreditoBtn')
btnCargoCredito.addEventListener('click', cargoCredito)


function cargoCredito() {

    if (credito > 0) {
        alert(`Solo podrás cargar saldo cuando el mismo séa U$0.`);
    }

    //Cargamos crédito, si el usuario quiere usar String o numeros con comas, volverá al bucle
    while ((credito <= 0) | (credito != parseInt(credito))) {

        let creditoCarga = document.getElementById('cargoCredito').value

        credito = credito + parseInt(creditoCarga)

        if (credito != parseInt(credito)) {
            alert(`Ingresaste un valor inválido`);
            break
        } else
            document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
        document.getElementById("alertaCredito").style.display = "none"; // show
        document.getElementById("cargoCred").style.visibility = "hidden"; // show
        document.getElementById("apostarG").style.visibility = "visible"; // sho

    }
}

const btnApuestaJugador = document.getElementById('apuestaJugadorBtn')
btnApuestaJugador.addEventListener('click', apuesta)


function apuesta() {

    if (credito <= 0) {
        alert("Te quedaste sin saldo, a continuación podrás cargar saldo.")
        
        document.getElementById("cargoCred").style.visibility = "visible"; // show
        document.getElementById("MensajeFinal").style.visibility = "hidden"; // show
        document.getElementById("apostarG").style.visibility = "hidden"; // show

        return
    }

    apuestaJugadorInp = document.getElementById('apuestaJugador').value
    apuestaJugador = parseInt(apuestaJugadorInp)

    if ((apuestaJugador > credito) | (apuestaJugador != parseInt(apuestaJugador))) {
        alert("Apostaste mas dinero del que tienes o un valor incorrecto.. Vuelve a apostar")
    } else {


        //alert(`Tengo ${credito} en credito y ${apuestaJugador} es mi apuesta`)
        manoUser = 0;
        manoCrupier = 0;
        cartasJugador = [];
        coloresObtenidos = [];
        repartoInicialUser();
        document.getElementById("apuestaJugador").style.visibility = "hidden"; // show
        document.getElementById("apuestaJugadorBtn").style.visibility = "hidden"; // show
        document.getElementById("MensajeFinal").style.display = "hidden"; // show
        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b></b>`
    }
};



function repartoInicialUser() {

    let cartaRandom = Math.random() * 52;
    cartaRandom = Math.round(cartaRandom);

    let puntos = 0;

    puntos = puntos + mazo[cartaRandom].valor
    let colorC = mazo[cartaRandom].color

    if (puntos == 1 && manoUser + 11 < 22) {
        manoUser = manoUser + 11
    } else {
        manoUser = manoUser + puntos;
    }

    let puntosX = document.getElementById('puntosPlayer').innerHTML = `<b class="amarillo">${manoUser}</b>`
    let cartax = document.getElementById('cartasPlayer').innerHTML = `<b class="amarillo">${puntos} de ${colorC}</b>`

    document.getElementById("pidoCarta").style.visibility = "visible"; // show
    document.getElementById("noPido").style.visibility = "visible"; // show
    //alert(`Obtuviste un ${puntos} de ${colorC}, sumas ${manoUser}`)
    //cartasJugador.push(mazo[cartaRandom])
    //coloresObtenidos.push(colorC)


    // Colocamos un find para buscar el comodin en caso de obtenerlo, ganamos un x2 de la apuesta.
    //const findx = coloresObtenidos.find(function (comodin) {
    //return comodin == "comodin"
    //})

    // if (findx == "comodin") {
    //     alert(`Obtuviste el comodín, GANASTE: ${apuestaJugador * 2} Dolares`)
    //     credito = parseInt(credito) + (parseInt(apuestaJugador) * 2)
    //     alert(`Tu saldo es de: ${credito} Dolares`);
    //     manosJugadas.push("gane")
    //     return apuesta()
    // }
    // Colocamos un find para buscar el comodin en caso de obtenerlo, ganamos un x2 de la apuesta.


    if (manoUser > 21) {
        //Pusheamos la mano perdida
        //manosJugadas.push("perdi")

        document.getElementById("MensajeFinal").style.visibility = "visible"; // show
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b class="rojo">Superaste los 21 puntos, PERDISTE: ${apuestaJugador} Dolares</b>`
        //alert(`Superaste los 21 puntos, PERDISTE: ${apuestaJugador} Dolares`)
        //alert(`Pediste un total de ${cartasJugador.length} cartas!!!`)
        credito = parseInt(credito) - parseInt(apuestaJugador)
        //alert(`Tu saldo es de: ${credito} Dolares`);
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`

        // Agregamos filtrado de cartas, para saber cuantas manos perdimos
        //const manosPerdidas = manosJugadas.filter(function (mePase) {
        //return mePase == "perdi"
        //})
        //alert(`Llevas: ${manosPerdidas.length} manos perdidas`);
        // Agregamos filtrado de cartas, para saber cuantas manos perdimos
        document.getElementById("pidoCarta").style.visibility = "hidden"; // show
        document.getElementById("noPido").style.visibility = "hidden"; // show
        document.getElementById("apuestaJugador").style.visibility = "visible"; // show
        document.getElementById("apuestaJugadorBtn").style.visibility = "visible"; // show


        // let seguirJugando = prompt("¿ Quieres seguir jugando ? (Y/n)")
        // seguirJugando = seguirJugando.toLocaleLowerCase()

        // if (seguirJugando == "y") {
        //     apuesta()
        // } else if (seguirJugando == "n") {
        //     return
        // } else {
        //     apuesta()
        // }
    }

    //if (manoUser < 22) {
    //pedirOtraCarta()
    //}

}

const pedirCarta = document.getElementById('pidoCarta')
pedirCarta.addEventListener('click', repartoInicialUser)

const noPedir = document.getElementById('noPido')
noPedir.addEventListener('click', repartoCrupier)

//function pedirOtraCarta() {



//let pedirOtra = prompt("¿ Quieres pedir otra carta ? (Y/n)")
//pedirOtra = pedirOtra.toLocaleLowerCase()

// if (pedirOtra == "y") {
//     repartoInicialUser()
// } else if (pedirOtra == "n") {
//     repartoCrupier()
// } else {
//     repartoInicialUser()
// }

//}

function repartoCrupier() {

    do {

        let cartaRandom = Math.random() * 13;
        cartaRandom = Math.round(cartaRandom);

        switch (cartaRandom) {

            case 0:
                if ((manoCrupier + 11) < 22) {
                    puntos = 11
                    break
                }
                puntos = 1;
                break

            case 1:
                puntos = 1;
                break

            case 2:
                puntos = 2;
                break

            case 3:
                puntos = 3;
                break

            case 4:
                puntos = 4;
                break

            case 5:
                puntos = 5;
                break

            case 6:
                puntos = 6;
                break

            case 7:
                puntos = 7;
                break

            case 8:
                puntos = 8;
                break

            case 9:
                puntos = 9;
                break

            case 10:
                puntos = 10;
                break

            case 11:
                puntos = 10;
                break

            case 12:
                puntos = 10;
                break

            case 13:
                puntos = 10;
                break

        }

        manoCrupier = manoCrupier + puntos

    } while (manoCrupier < 17)


    if ((manoCrupier > manoUser) && (manoCrupier < 22)) {
        document.getElementById("MensajeFinal").style.visibility = "visible"; // show
        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b class="rojo">El crupier obtuvo ${manoCrupier} puntos, la casa gana!! Perdiste ${apuestaJugador} Dolares</b>`
        //alert(`El crupier obtuvo ${manoCrupier} puntos, la casa gana!! Perdiste ${apuestaJugador} Dolares!!`)
        //alert(`Pediste un total de ${cartasJugador.length} cartas!!!`)
        credito = parseInt(credito) - parseInt(apuestaJugador)
        //alert(`Tu saldo es de: ${credito} Dolares`);
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`

        //Pusheamos la mano.
        //manosJugadas.push("perdi")

        // Agregamos filtrado de cartas, para saber cuantas manos perdimos
        // const manosPerdidas = manosJugadas.filter(function (perdi) {
        //     return perdi == "perdi"
        // })
        // alert(`Llevas: ${manosPerdidas.length} manos perdidas!!`);
        // Agregamos filtrado de cartas, para saber cuantas manos perdimos
    }

    if ((manoCrupier < manoUser) | (manoCrupier > 21)) {
        document.getElementById("MensajeFinal").style.visibility = "visible"; // show
        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b class="verde">El crupier obtuvo ${manoCrupier} puntos, tu ganas, felicidades ganaste ${apuestaJugador} Dolares!!!</b>`
        //alert(`El crupier obtuvo ${manoCrupier} puntos, tu ganas, felicidades ganaste ${apuestaJugador} Dolares!!!`)
        //alert(`Pediste un total de ${cartasJugador.length} cartas!!!`)
        credito = parseInt(credito) + parseInt(apuestaJugador)
        //alert(`Tu saldo es de: ${credito} Dolares`);
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`

        //Pusheamos la mano.
        //manosJugadas.push("gane")

        // Agregamos filtrado de cartas, para saber cuantas manos ganamos
        // const manosGanadas = manosJugadas.filter(function (gane) {
        //     return gane == "gane"
        // })
        // alert(`Llevas: ${manosGanadas.length} manos ganadas!!`);
        // Agregamos filtrado de cartas, para saber cuantas manos ganamos
    }

    if (manoCrupier == manoUser) {
        document.getElementById("MensajeFinal").style.visibility = "visible"; // show
        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b>El crupier obtuvo ${manoCrupier} puntos, tenemos un empate, se devuele el monto de ${apuestaJugador} Dolares!!!</b>`
        //alert(`El crupier obtuvo ${manoCrupier} puntos, tenemos un empate, se devuele el monto de ${apuestaJugador} Dolares!!!`)
        //alert(`Pediste un total de ${cartasJugador.length} cartas!!!`)
        //alert(`Tu saldo es de: ${credito} Dolares`);
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`

        //Pusheamos la mano.
        //manosJugadas.push("empate")

        // Agregamos filtrado de cartas, para saber cuantas manos ganamos
        // const manosEmpatadas = manosJugadas.filter(function (empate) {
        //     return empate == "empate"
        // })
        // alert(`Llevas: ${manosEmpatadas.length} manos empatadas!!`);
        // Agregamos filtrado de cartas, para saber cuantas manos ganamos
    }

    document.getElementById("pidoCarta").style.visibility = "hidden"; // show
    document.getElementById("noPido").style.visibility = "hidden"; // show
    document.getElementById("apuestaJugador").style.visibility = "visible"; // show
    document.getElementById("apuestaJugadorBtn").style.visibility = "visible"; // show

    // let seguirJugando = prompt("¿ Quieres seguir jugando ? (Y/n)")
    // seguirJugando = seguirJugando.toLocaleLowerCase()

    // if (seguirJugando == "y") {
    //     apuesta()
    // } else if (seguirJugando == "n") {
    //     return
    // } else {
    //     apuesta()
    // }
}