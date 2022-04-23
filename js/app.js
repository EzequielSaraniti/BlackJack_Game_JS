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
        armoDeck()
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


        manoUser = 0;
        manoCrupier = 0;
        cartasJugador = [];
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

    //Bucle para entregar cartas al crupier, si este llega a +17 el bucle se termina
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

    } while (manoCrupier <= 17)


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