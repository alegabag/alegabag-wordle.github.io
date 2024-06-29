let intentos = 6;
let diccionario = ["COLOR", "PLATA", "LENTE", "DECIR", "ATLAS", "COMER", "GIRAR", "CORRE", "MADRE", "PADRE", "GUIAR", "PLATO", "MIEDO", "POBRE", "MILES", "TETRA", "GOLPE"];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar); 

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1");
        return;
    }

    if (INTENTO.length !== 5) {
        alert("Debe ingresar solo palabras con 5 letras");
        return
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79B851";
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#F3C237";
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#A4AEC4";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if(intentos === 0) {
        terminar("<h1>PERDISTE!😖</h1>");
    }
}

const input = document.getElementById("guess-input");
const valor = input.value;

function leerIntento() {
    let intento = document.getElementById("guess-input")
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true; 
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}