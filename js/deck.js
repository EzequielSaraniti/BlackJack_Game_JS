const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

class deckBuild{
    constructor(palo, valor, puntos, color){
        this.palo = palo
        this.valor = valor
        this.puntos = puntos
        if (palo == "♠" || palo == "♣"){
            this.color = "black"
        } else
        this.color = "red"
    }
}

function armoDeck(){
    SUITS.forEach(pal => {
        VALUES.forEach(valo =>{
            
            switch (valo){
            case "A":
                puntos = 1;
                break

            case "2":
                puntos = 2;
                break

            case "3":
                puntos = 3;
                break

            case "4":
                puntos = 4;
                break

            case "5":
                puntos = 5;
                break

            case "6":
                puntos = 6;
                break

            case "7":
                puntos = 7;
                break

            case "8":
                puntos = 8;
                break

            case "9":
                puntos = 9;
                break

            case "10":
                puntos = 10;
                break

            case "J":
                puntos = 10;
                break

            case "Q":
                puntos = 10;
                break

            case "K":
                puntos = 10;
                break
            }
            deck.push(new deckBuild(pal, valo, puntos))
        })
    });
}