"use strict"

var contador = 0;
var contadorNumeros = 1;
var calculos = 0;
var numero = parseInt(prompt("Ingrese hasta que números primos desea verificar:"));

while (isNaN(numero)) {
    var numero = parseInt(prompt("No es un número, ingrese un número:"));
}

for (var numeroActual = 2; numeroActual <= numero; numeroActual++) {
    for (var numeroDivisor = 2; numeroDivisor < numeroActual; numeroDivisor++) {
        calculos++
        if (numeroActual % numeroDivisor == 0) {
            contador++
            break
        }
    }
    if (contador == 0) {
        document.write(`${contadorNumeros++}. ${numeroActual}<p>`);
    }
    contador = 0;
    numeroDivisor = 0;
}

document.write(`N° de Calculos: ${calculos}`);