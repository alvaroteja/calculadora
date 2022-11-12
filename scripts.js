var operandoa;
var operandob;
var operacion;
var primerNumero = true;
var primeraOperacion = true;
var comaEnUso = false;

function init() {
    //variables
    var seleccion = document.getElementById("valorActual");
    var historial = document.getElementById("valorAnterior");
    var reset = document.getElementById("reset");
    var borr = document.getElementById("borr");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var cero = document.getElementById("0");
    var punto = document.getElementById("punto");

    //Eventos de click
    uno.onclick = function () {
        agregarNumero(1);
    };
    dos.onclick = function () {
        agregarNumero(2);
    };
    tres.onclick = function () {
        agregarNumero(3);
    };
    cuatro.onclick = function () {
        agregarNumero(4);
    };
    cinco.onclick = function () {
        agregarNumero(5);
    };
    seis.onclick = function () {
        agregarNumero(6);
    };
    siete.onclick = function () {
        agregarNumero(7);
    };
    ocho.onclick = function () {
        agregarNumero(8);
    };
    nueve.onclick = function () {
        agregarNumero(9);
    };
    cero.onclick = function () {
        agregarNumero(0);
    };
    punto.onclick = function () {
        if (!comaEnUso) {
            comaEnUso = true;
            if (seleccion.textContent != "") {
                agregarNumero(".");
            } else {
                agregarNumero("0.");
            }
        }
    };
    reset.onclick = function () {
        resetear();
    };
    borr.onclick = function () {
        borrar();
    };
    suma.onclick = function () {
        agregarOperacion("+");
    };
    resta.onclick = function () {
        agregarOperacion("-");
    };
    multiplicacion.onclick = function () {
        agregarOperacion("*");
    };
    division.onclick = function () {
        agregarOperacion("/");
    };
    igual.onclick = function () {
        historial.textContent += seleccion.textContent;
        operandob = seleccion.textContent;
        resolver();
    };

    //funciones
    function limpiar() {
        seleccion.textContent = "";
    }
    function resetear() {
        seleccion.textContent = "";
        historial.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
        primerNumero = true;
        comaEnUso = false;
        primeraOperacion = true;
    }
    function borrar() {
        seleccion.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
        comaEnUso = false;
    }

    function resolver() {
        var res = 0;
        res = evaluaArimetica(historial.textContent);
        primerNumero = true;
        comaEnUso = false;
        primeraOperacion = true;
        console.log(res);
        borrar();
        historial.textContent = res;
    }

    function agregarNumero(numero) {
        seleccion.textContent = seleccion.textContent + numero;
        primeraOperacion = true;
        if (primerNumero) {
            historial.textContent = "";
            primerNumero = false;
            primeraOperacion = true;
        }
    }
    function agregarOperacion(operacion) {
        if (primeraOperacion) {
            primeraOperacion = false;
            primerNumero = false;
            comaEnUso = false;
            operandoa = seleccion.textContent;
            historial.textContent += seleccion.textContent + operacion;
            limpiar();
        }
    }
    function evaluaArimetica(fn) {
        return new Function("return " + fn)();
    }
}
