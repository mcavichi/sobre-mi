let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let resultado = document.getElementById("resultado");

function calcular() {
let valor1 = numero1.value;
let valor2 = numero2.value;
let operador = operacion.value;

switch (operador) {
    case "suma":
        resultado.innerHTML = 'El resultado es ' + (Number(valor1) + Number(valor2));
    break;
    case "resta":
        resultado.innerHTML = 'El resultado es ' + (Number(valor1) - Number(valor2));
    break;
    case "multiplicacion":
        resultado.innerHTML = 'El resultado es ' + valor1 * valor2;
    break;
    case "division":
        resultado.innerHTML = 'El resultado es ' + valor1 / valor2;
    break;
}
}

document.getElementById("calcular").addEventListener("click", calcular);
