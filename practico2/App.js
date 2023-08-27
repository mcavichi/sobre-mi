let imagenPrincipalDelJuego = document.getElementById('imagenPrincipalDelJuego');
let reglas = document.getElementById('reglas');
let botonIniciar = document.getElementById('botonIniciar');
let eligeTuJugada = document.getElementById('eligeTuJugada');
let piedra = document.getElementById('piedra');
let papel = document.getElementById('papel');
let tijera = document.getElementById('tijera');
let jugadasParciales = document.getElementById('jugadasParciales');
let nombre = document.getElementById('nombre');
let contadorUsuario = document.getElementById('contadorUsuario');
let contadorComputadora = document.getElementById('contadorComputadora');
let usuario = document.getElementById('usuario');
let versus = document.getElementById('vs');
let footer = document.getElementById('footer');
let botonReiniciar = document.getElementById('botonReiniciar').addEventListener('click', reiniciar)
// let resultadoFinal = document.getElementById('resultadoFinal');

function iniciar() {
    Swal.fire({
        title: 'Ingrese su nombre:',
        input: 'text',
        inputPlaceholder: 'Escriba su nombre aquí',
        inputValidator: (value) => {
            if (!value) {
            return 'Debe ingresar un nombre válido';
            }
        },
        confirmButtonText: 'Aceptar',
    }).then((result) => {
        if (result.isConfirmed) {
            nombre = result.value;
            Swal.fire(
            '¡Hola ' + nombre + '!',
            'Bienvenido/a!',
            'success'
            )
        }
        contadorUsuario.innerHTML = `${nombre}:` + " 0";
    })
}

function mostrarOcultarElementos() {
    imagenPrincipalDelJuego.style.display = 'none';
    reglas.style.display = 'none';
    botonIniciar.style.display = 'none';
    eligeTuJugada.style.display = "block";
    piedra.style.display = "block";
    papel.style.display = "block";
    tijera.style.display = "block"; 
    contadorUsuario.style = "block";
    contadorComputadora.style.display = "block";
    versus.style.display = "block";
    // footer.style.display = "none";
    document.getElementById('botonReiniciar').style.display = "block";
}

botonIniciar.addEventListener('click', iniciar);
botonIniciar.addEventListener('click', mostrarOcultarElementos);

piedra.addEventListener('click', juegaPiedra);
papel.addEventListener('click', juegaPapel);
tijera.addEventListener('click', juegaTijera);

function juegaPiedra() {
    piedra.style.transform = "rotate(360deg)";
    piedra.style.transition = "transform 1s";
    jugadasParciales.style.display = "block";
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'piedra';
    console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    console.log(jugadaComputadora);
    let determinaGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
    console.log(determinaGanador);
    resultadoFinal();
    // reiniciar()
    return resultado.innerHTML = determinaGanador;
};


function juegaPapel() {
    papel.style.transform = "rotate(360deg)";
    papel.style.transition = "transform 1s";
    jugadasParciales.style.display = "block";
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'papel';
    console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    console.log(jugadaComputadora);
    let determinaGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
    console.log(determinaGanador);
    resultadoFinal();
    // reiniciar()
    return resultado.innerHTML = determinaGanador;
};


function juegaTijera() {
    tijera.style.transform = "rotate(360deg)";
    tijera.style.transition = "transform 1s";
    jugadasParciales.style.display = "block";
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'tijera';
    console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    console.log(jugadaComputadora);
    let determinaGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
    console.log(determinaGanador);
    resultadoFinal();
    // reiniciar()
    return resultado.innerHTML = determinaGanador;
};


// Funcion que determina un numero ramdon entre 1 y 3.
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

// Funcion que hace que la computadora elija aleatoriamente entre piedra, papel o tijera.
function obtenerJugadaComputadora() {
    let jugadaComputadora = getRandomInt();
    if (jugadaComputadora === 0) {
        jugadaComputadora = computadora.innerHTML = 'piedra';
        // console.log(jugadaComputadora)
        return 'piedra'
    } else if (jugadaComputadora === 1) {
        jugadaComputadora = computadora.innerHTML = 'papel';
        // console.log(jugadaComputadora)
        return 'papel'
    } else {
        jugadaComputadora = computadora.innerHTML = 'tijera';
        // console.log(jugadaComputadora)
        return 'tijera'
    }
};

// Determina el ganador entre usuario y computadora
function determinarGanador(jugadaUsuario, jugadaComputadora) {
    let resultado;
    if (((jugadaUsuario === 'piedra') && (jugadaComputadora === 'tijera')) || 
        ((jugadaUsuario === 'papel') && (jugadaComputadora === 'piedra')) ||
        ((jugadaUsuario === 'tijera') && (jugadaComputadora === 'papel'))) {
            puntajeUsuario+=1;
            contadorUsuario.innerText = `Usuario: ${puntajeUsuario}`
            return resultado = `${nombre} gana!`;
        } else if (((jugadaUsuario === 'piedra') && (jugadaComputadora === 'piedra')) || 
                ((jugadaUsuario === 'papel') && (jugadaComputadora === 'papel')) || 
                ((jugadaUsuario === 'tijera') && (jugadaComputadora === 'tijera'))) {
            return resultado = 'Empate!';
        } else {
            puntajeComputadora += 1;
            contadorComputadora.innerText = `Computadora: ${puntajeComputadora}`
            return resultado = 'La computadora gana!';
        }
};


let puntajeUsuario = 0;
let puntajeComputadora = 0;

function resultadoFinal () {
    if(puntajeUsuario === 3 && puntajeComputadora < 3) {
        document.getElementById('resultadoFinal').innerHTML ='¡GANASTE!';
        Swal.fire({
            title: '¡GANASTE! BIEN JUGADO! ',
            width: 400,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/public/images/bg.jpg)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/public/images/win.gif")
            center top
            no-repeat `
        })
        noPermitirAvanzar()
    } else if (puntajeComputadora === 3 && puntajeUsuario < 3) {
        document.getElementById('resultadoFinal').innerHTML = '¡PERDISTE!';
        Swal.fire({
            title: '¡PERDISTE! INTENTALO DE NUEVO!',
            width: 400,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/public/images/bg.jpg)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/public/images/lose.gif")
            center top
            no-repeat `
        })
        noPermitirAvanzar()
    }
};

// Amimaciones

// Obtén la referencia a la imagen
const imagen = document.getElementById('vs');

// Función para agregar y quitar la clase de animación
function toggleAnimation() {
    imagen.classList.toggle('animacion');
}

// Ejecuta la función de toggleAnimation cada 3 segundos
setInterval(toggleAnimation, 3000);

// function reiniciar() {
//     if(puntajeUsuario === 3 || puntajeComputadora === 3) {
//         setTimeout(function(){
//             window.location.reload();
//         }, 7000);
//     }
// }

function reiniciar() {
    window.location.reload();
}

function noPermitirAvanzar() {
    if(puntajeUsuario === 3 || puntajeComputadora === 3) {
        document.getElementById('eligeTuJugada').style.display = "none";
        document.getElementById('piedra').style.display = "none";
        document.getElementById('papel').style.display = "none";
        document.getElementById('tijera').style.display = "none";
        document.getElementById('jugadasParciales').style.display = "none";
        document.getElementById('jugadasParciales').style.display = "none";
        document.getElementById('resultado').style.display = "none";
        // imagenPrincipalDelJuego.style.display = 'block';
        if(puntajeUsuario === 3) {
            document.getElementById('win').style.display = 'block';
        } else {
            document.getElementById('lose').style.display = 'block';
        }
    }
}


