// Pedir al usuario que introduzca dos números
var numeroInicial = parseInt(prompt("Introduce el primer número:"));
var numeroFinal = parseInt(prompt("Introduce el segundo número:"));

// Verificar si la entrada del usuario es válida
if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
    console.log("Por favor, introduce números válidos.");
} else {
    // Asegurarse de que numeroInicial sea menor que numeroFinal
    if (numeroInicial > numeroFinal) {
        var temp = numeroInicial;
        numeroInicial = numeroFinal;
        numeroFinal = temp;
    }

    // Mostrar todos los números entre numeroInicial y numeroFinal
    console.log("Números entre " + numeroInicial + " y " + numeroFinal + ":");

    for (var i = numeroInicial; i <= numeroFinal; i++) {
        console.log(i);
    }
}