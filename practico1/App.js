let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let resultado = document.getElementById("resultado");

function validarInput() {
    do {
        if (isNaN(parseInt(numero1.value)) || isNaN(parseInt(numero2.value))) {
            alert('Ingrese un valor en todos los campos!');
        }
        else break;
    } while (!isNaN);
};


function calcular() {
    let valor1 = numero1.value;
    let valor2 = numero2.value;
    let operador = operacion.value;

    validarInput();

    switch (operador) {
        case "suma":
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la suma.');
            } else {
                resultado.innerHTML = 'El resultado es ' + (Number(valor1) + Number(valor2));
            }
        break;
        case "resta":
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la resta.');
            } else {
            resultado.innerHTML = 'El resultado es ' + (Number(valor1) - Number(valor2));
            }
        break;
        case "multiplicacion":
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la multiplicacion.');
            } else {
            resultado.innerHTML = 'El resultado es ' + valor1 * valor2;
            }
        break;
        case "division":
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la division.');
            } else if (valor2 === '0') {
                alert('No se puede dividir por cero. Seleccione otro número.');
            } else {
                resultado.innerHTML = 'El resultado es ' + valor1 / valor2;    
            }
        break;
    }
};

document.getElementById("calcular").addEventListener("click", calcular);


