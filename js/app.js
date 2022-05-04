//Funciones del proyecto

//Iniciamos con el usuario guardado
if (localStorage.getItem("userLog") == "true") {
    nombre = localStorage.getItem("nombreUser")

    const bienvenidaHtml = document.getElementById('bienvenida').innerHTML = `<h2>Usuario: <b class="nombreUser">${nombre}</b></h2> <button onclick="logoutUser();">Logout</button>`
    const cargocredito = document.getElementById('alertaCredito').innerHTML = `<p>Carga crèdito para comenzar a jugar!</p>`

    document.getElementById("aparece").style.visibility = "visible"; // show
    document.getElementById("aparece").style.opacity = 1; // show
    document.getElementById("IngresoUser").style.display = "none"; // show
}

//Esta función es el logout del usuario
function logoutUser() {
    localStorage.removeItem("nombreUser")
    localStorage.removeItem("userLog")
    location.reload()
}

//Esta función es el "Login del juego"
function bienvenida() {
    nombre = document.getElementById('nombreUser').value
    userLog = true
    localStorage.setItem("nombreUser", nombre)
    localStorage.setItem("userLog", userLog)


    const bienvenidaHtml = document.getElementById('bienvenida').innerHTML = `<h2>Usuario: <b class="nombreUser">${nombre}</b></h2> <button onclick="logoutUser();">Logout</button>`
    const cargocredito = document.getElementById('alertaCredito').innerHTML = `<p>Carga crèdito para comenzar a jugar!</p>`

    document.getElementById("aparece").style.visibility = "visible"; // show
    document.getElementById("aparece").style.opacity = 1; // show
    document.getElementById("IngresoUser").style.display = "none"; // show

}



//Función para cargar saldo y comenzar a jugar
function cargoCredito() {

    //Cargamos crédito, si el usuario quiere usar String o numeros con comas, volverá al bucle
    while ((credito <= 0) | (credito != parseInt(credito))) {

        let creditoCarga = document.getElementById('cargoCredito').value



        if (isNaN(creditoCarga)) {
            //Si ingresaste un valor inválido, enviamos una alerta (En futuro se reemplazará con una librería)
            swal({
                title: "Valor ingresado inválido!",
                text: "Ingresa solo numeros Ej: 500!",
                icon: "warning",
                button: "Volver",
            });
            break
        } else

            credito = credito + parseInt(creditoCarga)
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
        document.getElementById("alertaCredito").style.display = "none"; // show
        document.getElementById("cargoCred").style.visibility = "hidden"; // show
        document.getElementById("apostarG").style.visibility = "visible"; // sho

    }
}




//Función para definir el monto apostado
function apuesta() {

    //Si tenemos menos de 20 cartas en el mazo, volvemos a crear un mazo nuevo.
    if (deck.length < 20) {
        deck = [];
        armoDeck();
    }

    //Si tenemos 0 saldo, enviamos una alerta (En futuro se reemplazará con una librería).
    if (credito <= 0) {
        swal({
            title: "No tienes saldo!",
            text: "A continuación podrás cargar saldo..",
            icon: "warning",
            button: "Aceptar",
        });

        document.getElementById("cargoCred").style.visibility = "visible"; // show
        document.getElementById("apostarG").style.visibility = "hidden"; // show

        return
    }

    apuestaJugadorInp = document.getElementById('apuestaJugador').value
    apuestaJugador = parseInt(apuestaJugadorInp)

    //Si no tenemos saldo para cubrir el monto apostado, enviamos una alerta (En futuro se reemplazará con una librería)
    if ((apuestaJugador > credito) | (apuestaJugador != parseInt(apuestaJugador))) {

        swal({
            title: "No tienes suficiente saldo!",
            text: "Apuesta el dinero que tienes, no empeñes tus cosas..",
            icon: "warning",
            button: "Volver",
        });

    } else {

        
        i = 1;
        manoUser = 0;
        manoCrupier = 0;
        cartasJugador = [];
        puntosJugador = [];
        cartasBanca = [];
        puntosBanca = [];
        coloresObtenidos = [];
        repartoInicialBanca();
        document.getElementById("apuestaJugador").style.visibility = "hidden"; // show
        document.getElementById("apuestaJugadorBtn").style.visibility = "hidden"; // show
        document.getElementById('puntosBanca').innerHTML = ""
    }
};

function repartoInicialBanca() {


    let cartaRandom = Math.random() * deck.length-1;
    cartaRandom = Math.round(cartaRandom);

    let puntosR = 0;

    //pusheamos el objeto carta a un array
    cartasBanca.push(deck[cartaRandom])
    //pusheamos los puntos obtenidos a un array
    puntosBanca.push(deck[cartaRandom].puntos)
    //ordenamos array de mayor a menor
    puntosBanca.sort((a, b) => b - a)




    rutaCartaBanca.innerHTML = "";

    cartasBanca.forEach(carta => {

        const dibujoCartaBanca = document.createElement("div")
        dibujoCartaBanca.classList.add("tamañoCarta")

        dibujoCartaBanca.innerHTML = `<div class="card animation-target2 ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`


        rutaCartaBanca.appendChild(dibujoCartaBanca)

    });

    const dibujoCartaBancaX = document.createElement("div")
    dibujoCartaBancaX.classList.add("card")
    dibujoCartaBancaX.classList.add("tamañoCartaX")
    dibujoCartaBancaX.classList.add("animation-target2")

    rutaCartaBanca.appendChild(dibujoCartaBancaX)

    manoCrupier = 0;

    

        //Si la banca tiene un "A", puede vale 1 o 11, según los puntos que tiene el mismo.

        //OPERADOR TERNARIO
        manoCrupier < 11 && puntosBanca[0] == 1 ? manoCrupier = manoCrupier += 11 : manoCrupier = manoCrupier += puntosBanca[0]

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`

    

    //Quitamos del mazo la carta que obtubimos
    deck.splice(cartaRandom, 1)
    repartoInicialUser();


}

//Función para entregar cartas al usuario de forma aleatoria
function repartoInicialUser() {

    let cartaRandom = Math.random() * deck.length-1;
    cartaRandom = Math.round(cartaRandom);

    let puntosR = 0;

    puntosR = parseInt(deck[cartaRandom].puntos)
    let paloC = deck[cartaRandom].palo
    let valorC = deck[cartaRandom].valor
    let colorC = deck[cartaRandom].color


    //pusheamos el objeto carta a un array
    cartasJugador.push(deck[cartaRandom])
    //pusheamos los puntos obtenidos a un array
    puntosJugador.push(deck[cartaRandom].puntos)
    //ordenamos array de mayor a menor
    puntosJugador.sort((a, b) => b - a)


    rutaCartaUser.innerHTML = "";
    let j = 0;
    cartasJugador.forEach(carta => {

        const dibujoCartaUser = document.createElement("div")
        dibujoCartaUser.classList.add("tamañoCarta")
        j++

        if (i == j) {
            dibujoCartaUser.innerHTML = `<div class="card animation-target ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`
        } else {
            dibujoCartaUser.innerHTML = `<div class="card ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`
        }


        // let creoCarta = document.getElementById('cartasPlayer').innerHTML = `<div class="card ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`

        rutaCartaUser.appendChild(dibujoCartaUser)

    });

    i++



    manoUser = 0;

    for (let i = 0; i < puntosJugador.length; i++) {

        //Si el jugador tiene un "A", puede vale 1 o 11, según los puntos que tiene el mismo.
        //OPERADOR TERNARIO
        manoUser < 11 && puntosJugador[i] == 1 ? manoUser = manoUser += 11 : manoUser = manoUser += puntosJugador[i];

    }

    // manoUser = parseInt(manoUser) + parseInt(puntosR);

    let puntosX = document.getElementById('puntosPlayer').innerHTML = `<b class="amarillo">${manoUser}</b>`
    // let cartax = document.getElementById('cartasPlayer').innerHTML = `<div class="card black" data-value="K ♠">♠</div>`


    //Quitamos del mazo la carta que obtubimos
    deck.splice(cartaRandom, 1)


    document.getElementById("pidoCarta").style.visibility = "visible"; // show
    document.getElementById("noPido").style.visibility = "visible"; // show



    if (manoUser > 21) {

        Toastify({
            text: `Superaste los 21 puntos, PERDISTE: ${apuestaJugador} Dolares`,
            className: "info",
            duration: 5000,
            position: "center", // `left`, `center` or `right`,
            style: {
                background: "linear-gradient(to right, #B80808, #BB6363)",
            }
        }).showToast();

        credito = parseInt(credito) - parseInt(apuestaJugador)
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`


        document.getElementById("pidoCarta").style.visibility = "hidden"; // show
        document.getElementById("noPido").style.visibility = "hidden"; // show
        document.getElementById("apuestaJugador").style.visibility = "visible"; // show
        document.getElementById("apuestaJugadorBtn").style.visibility = "visible"; // show

    }

}

//Cuando el usuario termina de pedir cartas, con esta función repartimos las cartas del crupier.
function repartoCrupier() {

        document.getElementById("pidoCarta").style.visibility = "hidden"; // show
        document.getElementById("noPido").style.visibility = "hidden"; // show
    
        //Bucle para entregar cartas al crupier, si este llega a +17 el bucle se termina
        let cartaRandom = Math.random() * deck.length-1;
        cartaRandom = Math.round(cartaRandom);

        let puntosR = 0;

        puntosR = parseInt(deck[cartaRandom].puntos)

        //pusheamos el objeto carta a un array
        cartasBanca.push(deck[cartaRandom])
        //pusheamos los puntos obtenidos a un array
        puntosBanca.push(deck[cartaRandom].puntos)
        //ordenamos array de mayor a menor
        puntosBanca.sort((a, b) => b - a)

        manoCrupier = 0;

        
        rutaCartaBanca.innerHTML = "";
        let j = 1;
        cartasBanca.forEach(carta => {

            const dibujoCartaBanca = document.createElement("div")
            dibujoCartaBanca.classList.add("tamañoCarta")

            if (cartasBanca.length == j && cartasBanca.length > 2) {
                dibujoCartaBanca.innerHTML = `<div class="card animation-target2 ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`
            } else {
                dibujoCartaBanca.innerHTML = `<div class="card ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`
            }


            rutaCartaBanca.appendChild(dibujoCartaBanca)
            j++
        });

        

        for (let i = 0; i < puntosBanca.length; i++) {

            //Si la banca tiene un "A", puede vale 1 o 11, según los puntos que tiene el mismo.
            //OPERADOR TERNARIO
            manoCrupier < 11 && puntosBanca[i] == 1 ? manoCrupier = manoCrupier += 11 : manoCrupier = manoCrupier += puntosBanca[i]
        }

        //Quitamos del mazo la carta que obtubimos
        deck.splice(cartaRandom, 1)

    
    let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`

    if (manoCrupier >= 17) {
        quienGana()
    } else{
        temporizadorDeRetraso()
    }

}

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(repartoCrupier, 1500);
}


function quienGana() {

    //Condicional si el crupier gana
    if ((manoCrupier > manoUser) && (manoCrupier < 22)) {

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`

        Toastify({
            text: `El crupier obtuvo ${manoCrupier} puntos, la casa gana!! Perdiste ${apuestaJugador} Dolares!`,
            className: "info",
            duration: 5000,
            position: "center", // `left`, `center` or `right`,
            style: {
            background: "linear-gradient(to right, #B80808, #BB6363)",
            }
        }).showToast();

        credito = parseInt(credito) - parseInt(apuestaJugador)
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
    }

    //Condicional si tu ganas
    if ((manoCrupier < manoUser) | (manoCrupier > 21)) {

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`

        Toastify({
            text: `El crupier obtuvo ${manoCrupier} puntos, tu ganas, felicidades ganaste ${apuestaJugador} Dolares!!!`,
            className: "info",
            duration: 5000,
            position: "center", // `left`, `center` or `right`,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();

        credito = parseInt(credito) + parseInt(apuestaJugador)
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
    }

    //Condicional si empatas con el crupier
    if (manoCrupier == manoUser) {

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`

        Toastify({
            text: `El crupier obtuvo ${manoCrupier} puntos, tenemos un empate, se devuele el monto de ${apuestaJugador} Dolares!!!`,
            className: "info",
            duration: 5000,
            position: "center", // `left`, `center` or `right`,
            style: {
                background: "linear-gradient(to right, #3F526E, #4A75B4)",
            }
        }).showToast();

        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
    }

    //Sacamos de la vista botones de pedir cartas y volvemos a habilitar las apuestas
    document.getElementById("apuestaJugador").style.visibility = "visible"; // show
    document.getElementById("apuestaJugadorBtn").style.visibility = "visible"; // show

}