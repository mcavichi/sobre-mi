// Accediendo al DOM
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

//Inicia el juego cuando se clickea el boton iniciar y pide al usuario ingrese su nombre.
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

//Se utiliza para ocultar los componentes de la pagina principal y mostrar los componentes de vizualizacion del juego.
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
    document.getElementById('botonReiniciar').style.display = "block";
}

//Evento del boton inicio
botonIniciar.addEventListener('click', iniciar);
//Evento mostrar y ocultar componentes
botonIniciar.addEventListener('click', mostrarOcultarElementos);
//Eventos que llama a las funciones piedra, papel o tijera
piedra.addEventListener('click', juegaPiedra);
papel.addEventListener('click', juegaPapel);
tijera.addEventListener('click', juegaTijera);

//Funcion que toma la jugada del usuario al clickear la imagen de la piedra, toma la jugada de la computadora y determina ganador.
function juegaPiedra() {
    piedra.style.transform = "rotate(-90deg)";
    piedra.style.transition = "transform 0.5s";
    setTimeout(function() {
        piedra.style.transform = "none";
    }, 500);
    jugadasParciales.style.display = "block";
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'piedra';
    // console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    // console.log(jugadaComputadora);
    let determinaGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
    // console.log(determinaGanador);
    resultadoFinal();
    return resultado.innerHTML = determinaGanador;
};


//Funcion que toma la jugada del usuario al clickear la imagen de la papel, toma la jugada de la computadora y determina ganador.
function juegaPapel() {
    papel.style.transform = "rotate(-90deg)";
    papel.style.transition = "transform 0.5s";
    setTimeout(function() {
        papel.style.transform = "none";
    }, 500);
    jugadasParciales.style.display = "block";
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'papel';
    // console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    // console.log(jugadaComputadora);
    let determinaGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
    // console.log(determinaGanador);
    resultadoFinal();
    return resultado.innerHTML = determinaGanador;
};

//Funcion que toma la jugada del usuario al clickear la imagen de la tijera, toma la jugada de la computadora y determina ganador.
function juegaTijera() {
    tijera.style.transform = "rotate(-90deg)";
    tijera.style.transition = "transform 0.5s";
    setTimeout(function() {
        tijera.style.transform = "none";
    }, 500);
    jugadasParciales.style.display = "block";
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'tijera';
    // console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    // console.log(jugadaComputadora);
    let determinaGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
    // console.log(determinaGanador);
    resultadoFinal();
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
            contadorUsuario.innerText = `${nombre}: ${puntajeUsuario}`
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

//Contador. Se inicializa los contadores que suma los puntos de la compu y del usuario de acuerdo a las jugadas de cada uno.
let puntajeUsuario = 0;
let puntajeComputadora = 0;


//Mensaje de ganador/perdedor
function resultadoFinal () {
    if(puntajeUsuario === 3 && puntajeComputadora < 3) {
        document.getElementById('resultadoFinal').innerHTML ='¡GANASTE!';
        Swal.fire({
            title: '¡GANASTE! BIEN JUGADO! ',
            width: 400,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/public/images/bg.jpg)'
        })
        noPermitirAvanzar()
    } else if (puntajeComputadora === 3 && puntajeUsuario < 3) {
        document.getElementById('resultadoFinal').innerHTML = '¡PERDISTE!';
        Swal.fire({
            title: '¡PERDISTE! INTENTALO DE NUEVO!',
            width: 400,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/public/images/bg.jpg)'
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

//Funcion reiniciar juego
function reiniciar() {
    window.location.reload();
}

//Funcion que no permite seguir jugando si alguno de los jugadores llego ya a las 3 victorias.
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


