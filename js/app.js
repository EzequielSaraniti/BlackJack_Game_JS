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

    if (credito > 0) {
        //Si tu credito es "0", enviamos una alerta (En futuro se reemplazará con una librería)
        alert(`Solo podrás cargar saldo cuando el mismo séa U$0.`);
    }

    //Cargamos crédito, si el usuario quiere usar String o numeros con comas, volverá al bucle
    while ((credito <= 0) | (credito != parseInt(credito))) {

        let creditoCarga = document.getElementById('cargoCredito').value

        credito = credito + parseInt(creditoCarga)

        if (credito != parseInt(credito)) {
            //Si ingresaste un valor inválido, enviamos una alerta (En futuro se reemplazará con una librería)
            alert(`Ingresaste un valor inválido`);
            break
        } else
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
        alert("Te quedaste sin saldo, a continuación podrás cargar saldo.")

        document.getElementById("cargoCred").style.visibility = "visible"; // show
        document.getElementById("MensajeFinal").style.visibility = "hidden"; // show
        document.getElementById("apostarG").style.visibility = "hidden"; // show

        return
    }

    apuestaJugadorInp = document.getElementById('apuestaJugador').value
    apuestaJugador = parseInt(apuestaJugadorInp)

    //Si no tenemos saldo para cubrir el monto apostado, enviamos una alerta (En futuro se reemplazará con una librería)
    if ((apuestaJugador > credito) | (apuestaJugador != parseInt(apuestaJugador))) {

        alert("Apostaste mas dinero del que tienes o un valor incorrecto.. Vuelve a apostar")

    } else {

        i = 1;
        manoUser = 0;
        manoCrupier = 0;
        cartasJugador = [];
        puntosJugador = [];
        cartasBanca = [];
        puntosBanca = [];
        coloresObtenidos = [];
        repartoInicialUser();
        document.getElementById("apuestaJugador").style.visibility = "hidden"; // show
        document.getElementById("apuestaJugadorBtn").style.visibility = "hidden"; // show
        document.getElementById("MensajeFinal").style.visibility = "hidden"; // show
        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b></b>`
    }
};


//Función para entregar cartas al usuario de forma aleatoria
function repartoInicialUser() {

    let cartaRandom = Math.random() * deck.length;
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
    puntosJugador.sort( (a, b) => b - a )
    
    
    rutaCartaUser.innerHTML = "";
    let j = 0;
    cartasJugador.forEach(carta => {

        const dibujoCartaUser = document.createElement("div")
        dibujoCartaUser.classList.add("tamañoCarta")
        j = j + 1;
        
        if(i == j){
            dibujoCartaUser.innerHTML = `<div class="card efectoCarta ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`
        }else{
            dibujoCartaUser.innerHTML = `<div class="card ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`
            }
            

        // let creoCarta = document.getElementById('cartasPlayer').innerHTML = `<div class="card ${carta.color}" data-value="${carta.valor} ${carta.palo}">${carta.palo}</div>`

        rutaCartaUser.appendChild(dibujoCartaUser)

    });

    i = i += 1;


    
    manoUser = 0;

    for(let i = 0; i < puntosJugador.length; i++){

        //Si el jugador tiene un "A", puede vale 1 o 11, según los puntos que tiene el mismo.
        if(manoUser < 11 && puntosJugador[i] == 1){
        manoUser = manoUser += 11;

        }else{
            manoUser = manoUser += puntosJugador[i];
        }

    }

        // manoUser = parseInt(manoUser) + parseInt(puntosR);

    let puntosX = document.getElementById('puntosPlayer').innerHTML = `<b class="amarillo">${manoUser}</b>`
    // let cartax = document.getElementById('cartasPlayer').innerHTML = `<div class="card black" data-value="K ♠">♠</div>`


    //Quitamos del mazo la carta que obtubimos
    deck.splice(cartaRandom, 1)


    document.getElementById("pidoCarta").style.visibility = "visible"; // show
    document.getElementById("noPido").style.visibility = "visible"; // show



    if (manoUser > 21) {

        document.getElementById("MensajeFinal").style.visibility = "visible"; // show
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b class="rojo">Superaste los 21 puntos, PERDISTE: ${apuestaJugador} Dolares</b>`
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

do{
    //Bucle para entregar cartas al crupier, si este llega a +17 el bucle se termina
    let cartaRandom = Math.random() * deck.length;
    cartaRandom = Math.round(cartaRandom);

    let puntosR = 0;

    puntosR = parseInt(deck[cartaRandom].puntos)

    //pusheamos el objeto carta a un array
    cartasBanca.push(deck[cartaRandom])
    //pusheamos los puntos obtenidos a un array
    puntosBanca.push(deck[cartaRandom].puntos)
    //ordenamos array de mayor a menor
    puntosBanca.sort( (a, b) => b - a )
    
    manoCrupier = 0;

    for(let i = 0; i < puntosBanca.length; i++){

        //Si la banca tiene un "A", puede vale 1 o 11, según los puntos que tiene el mismo.
        if(manoCrupier < 11 && puntosBanca[i] == 1){
            manoCrupier = manoCrupier += 11;

        }else{
            manoCrupier = manoCrupier += puntosBanca[i];
        }

    }

    //Quitamos del mazo la carta que obtubimos
    deck.splice(cartaRandom, 1)

}while (manoCrupier <= 17)


if (manoCrupier >= 17){
    quienGana()
}

}

function quienGana(){

    //Condicional si el crupier gana
    if ((manoCrupier > manoUser) && (manoCrupier < 22)) {
        document.getElementById("MensajeFinal").style.visibility = "visible"; // show

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b class="rojo">El crupier obtuvo ${manoCrupier} puntos, la casa gana!! Perdiste ${apuestaJugador} Dolares</b>`

        credito = parseInt(credito) - parseInt(apuestaJugador)
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
    }

    //Condicional si tu ganas
    if ((manoCrupier < manoUser) | (manoCrupier > 21)) {
        document.getElementById("MensajeFinal").style.visibility = "visible"; // show

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b class="verde">El crupier obtuvo ${manoCrupier} puntos, tu ganas, felicidades ganaste ${apuestaJugador} Dolares!!!</b>`

        credito = parseInt(credito) + parseInt(apuestaJugador)
        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
    }

    //Condicional si empatas con el crupier
    if (manoCrupier == manoUser) {
        document.getElementById("MensajeFinal").style.visibility = "visible"; // show

        let puntosX = document.getElementById('puntosBanca').innerHTML = `<b>${manoCrupier}</b>`
        let Mensaje = document.getElementById('MensajeFinal').innerHTML = `<b>El crupier obtuvo ${manoCrupier} puntos, tenemos un empate, se devuele el monto de ${apuestaJugador} Dolares!!!</b>`

        document.getElementById('saldoUser').innerHTML = ` U$ ${credito}`
    }

    //Sacamos de la vista botones de pedir cartas y volvemos a habilitar las apuestas
    document.getElementById("pidoCarta").style.visibility = "hidden"; // show
    document.getElementById("noPido").style.visibility = "hidden"; // show
    document.getElementById("apuestaJugador").style.visibility = "visible"; // show
    document.getElementById("apuestaJugadorBtn").style.visibility = "visible"; // show

}