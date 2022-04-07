
//Definimos el nombre del jugador
//COMENTADO PARA PROBAR
const nombre = prompt("Bienvenido a la mesa de Blackjack, como es tu nombre?");

//COMENTADO PARA PROBAR
alert(`Hola ${nombre}, te deseo mucha suerte, a jugar!!`);

let credito = 0;
let apuestaJugador = 0;
let manoUser = 0;
let manoCrupier = 0;


// Creamos las cartas con objetos
// Color "Corazón"


const mazo = [
    {
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
    valor: 10,
    carta: "rey",
    color: "pica",
    imagen: "imagen"
}

]


//COMENTADO PARA PROBAR
cargoCredito();



function cargoCredito(){
//Cargamos crédito, si el usuario quiere usar String o numeros con comas, volverá al bucle
while ((credito <= 0) | (credito != parseInt(credito))) {

    credito = prompt("¿ Cuanto saldo quieres cargar ? Ej: 1000");

    if (credito != parseInt(credito)){
        alert(`Ingresaste un valor inválido`);
    }
    
    else
        alert(`Tu saldo es de: ${credito} Dolares`);

    apuesta();
        
}
}


function apuesta(){

    if (credito <= 0){
        alert("Te quedaste sin saldo, a continuación podrás cargar salgo.")
        cargoCredito()
    }

    do {
        apuestaJugador = parseInt(prompt("¿ Cuanto saldo quieres apostar ?"));
        

    } while ((apuestaJugador > credito) | (apuestaJugador != parseInt(apuestaJugador)))

    alert(`Tengo ${credito} en credito y ${apuestaJugador} es mi apuesta`)
    manoUser = 0;
    manoCrupier = 0;
    repartoInicialUser()
};



function repartoInicialUser(){

    let cartaRandom = Math.random()* 52;
    cartaRandom = Math.round(cartaRandom);

    let puntos = 0;

    puntos = puntos + mazo[cartaRandom].valor
    let colorC = mazo [cartaRandom].color

    manoUser = manoUser + puntos;

    alert(`Obtuviste un ${puntos} de ${colorC}, sumas ${manoUser}`)

    if (manoUser > 21){

        alert(`Superaste los 21 puntos, PERDISTE: ${apuestaJugador} Dolares`)
        credito = parseInt(credito) - parseInt(apuestaJugador)
        alert(`Tu saldo es de: ${credito} Dolares`);

        let seguirJugando = prompt("¿ Quieres seguir jugando ? (Y/n)")
        seguirJugando = seguirJugando.toLocaleLowerCase()
    
        if (seguirJugando == "y"){
            apuesta()
        }else if (seguirJugando == "n") {
            return
        }else {
            apuesta()
        }
    }

    if (manoUser < 22){
    pedirOtraCarta()
    }

}

function pedirOtraCarta(){
let pedirOtra = prompt("¿ Quieres pedir otra carta ? (Y/n)")
    pedirOtra = pedirOtra.toLocaleLowerCase()

if (pedirOtra == "y"){
    repartoInicialUser()
} else if (pedirOtra == "n") {
    repartoCrupier()
} else{
    repartoInicialUser()
}

}

function repartoCrupier(){

    do{

        let cartaRandom = Math.random()* 13;
        cartaRandom = Math.round(cartaRandom);

        switch(cartaRandom){

            case 0:
                if ((manoUser + 11) < 22){
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

    }while (manoCrupier < 17)


    if ((manoCrupier > manoUser) && (manoCrupier < 22)){
        alert(`El crupier obtuvo ${manoCrupier} puntos, la casa gana!! Perdiste ${apuestaJugador} Dolares!!`)
        credito = parseInt(credito) - parseInt(apuestaJugador)
        alert(`Tu saldo es de: ${credito} Dolares`);
    }

    if ((manoCrupier < manoUser) | (manoCrupier > 21)){
        alert(`El crupier obtuvo ${manoCrupier} puntos, tu ganas, felicidades ganaste ${apuestaJugador} Dolares!!!`)
        credito = parseInt(credito) + parseInt(apuestaJugador)
        alert(`Tu saldo es de: ${credito} Dolares`);
    }

    if (manoCrupier == manoUser){
        alert(`El crupier obtuvo ${manoCrupier} puntos, tenemos un empate, se devuele el monto de ${apuestaJugador} Dolares!!!`)
        alert(`Tu saldo es de: ${credito} Dolares`);
    }

    let seguirJugando = prompt("¿ Quieres seguir jugando ? (Y/n)")
    seguirJugando = seguirJugando.toLocaleLowerCase()

if (seguirJugando == "y"){
    apuesta()
} else if (seguirJugando == "n"){
    return
} else {
    apuesta()
}
}