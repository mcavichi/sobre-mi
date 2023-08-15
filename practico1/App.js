// Accediendo a los Id del Document.
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let resultado = document.getElementById("resultado");

// Validando ingreso de numeros en los input.
function validarInput() {
    do {
        if (isNaN(parseInt(numero1.value)) || isNaN(parseInt(numero2.value))) {
            alert('Ingrese un valor en todos los campos!');
        }
        else break;
    } while (!isNaN);
};

// Función que realiza los cálculos de las diferentes operación.
function calcular() {
    let valor1 = numero1.value;
    let valor2 = numero2.value;
    let operador = operacion.value;
    let extremoPositivo = 9999999999;
    let extremoNegativo = -9999999999;
    validarInput();
    switch (operador) {
        case "suma": 
            let suma = Number(valor1) + Number(valor2);
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la suma.'); 
            } else if (suma > extremoPositivo && suma.toString().length > 10) {
                alert('Error! El numero es muy grande!')
            } else if(suma < -extremoNegativo && suma.toString().length > 10) {
                alert('Error! El numero es muy chico!')
            } else {
                resultado.innerHTML = 'El resultado es ' + suma;
            }
        break;
        case "resta":
            let resta = Number(valor1) - Number(valor2);
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la resta.');
            } else if (resta > extremoPositivo && resta.toString().length > 10) {
                alert('Error! El numero es muy grande!')
            } else if(resta < extremoNegativo && resta.toString().length > 10) {
                alert('Error! El numero es muy chico!')
            } else {
            resultado.innerHTML = 'El resultado es ' + resta;
            }
        break;
        case "multiplicacion":
            let multiplicacion = valor1 * valor2;
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la multiplicacion.');
            } else if (multiplicacion > extremoPositivo && multiplicacion.toString().length > 10) {
                alert('Error! El numero es muy grande!')
            } else if(multiplicacion < extremoNegativo && multiplicacion.toString().length > 10) {
                alert('Error! El numero es muy chico!')
            } else {
            resultado.innerHTML = 'El resultado es ' + multiplicacion;
            }
        break;
        case "division":
            let division = valor1 / valor2;
            if((numero1.value.length === 0) || (numero2.value.length === 0)) {
                alert ('No se puede realizar la division.');
            } else if (valor2 === '0') {
                alert('No se puede dividir por cero. Seleccione otro número.');
            } else if (division > extremoPositivo && division.toString().length > 10) {
                alert('Error! El numero es muy grande!')
            } else if(division < extremoNegativo && division.toString().length > 10) {
                alert('Error! El numero es muy chico!')    
            } else {
                resultado.innerHTML = 'El resultado es ' + division;    
            }
        break;
    };
};

// Funcion que resetea el formulario.
function resetearFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("resultado").innerHTML = '';
};

//Eventos.
document.getElementById("calcular").addEventListener("click", calcular);
document.getElementById("reset").addEventListener('click', resetearFormulario);
