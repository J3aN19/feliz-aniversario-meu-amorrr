/* =========================================================
   CUMPLE-MEU AMOR ❤️
   ESCENA 1 — SCRIPT
   ========================================================= */


/* =========================================================
   ELEMENTOS
   ========================================================= */

const boton = document.querySelector(".boton-comenzar");
const transicion = document.querySelector(".transicion");


/* =========================================================
   CREAR ESTRELLAS DESTACADAS
   ========================================================= */

function crearEstrellas() {

    const escena = document.querySelector(".cumple");

    if (!escena) return;

    const posiciones = [

        [12, 16],
        [28, 8],
        [43, 15],
        [61, 10],
        [78, 17],
        [91, 9],

        [6, 35],
        [23, 31],
        [37, 39],
        [54, 34],
        [72, 37],
        [88, 32],

        [14, 49],
        [31, 52],
        [67, 48],
        [83, 53],

        [5, 68],
        [20, 74],
        [80, 69],
        [94, 75],

        [14, 88],
        [38, 91],
        [64, 87],
        [87, 92]

    ];


    posiciones.forEach(
        ([left, top], index) => {

            const estrella =
                document.createElement("span");

            estrella.className =
                "estrella-destacada";

            estrella.textContent =
                index % 4 === 0
                    ? "✦"
                    : "·";

            estrella.style.left =
                `${left}%`;

            estrella.style.top =
                `${top}%`;

            estrella.style.animationDelay =
                `${(index * 0.27).toFixed(2)}s`;

            escena.appendChild(estrella);

        }
    );

}


/* =========================================================
   CREAR CORAZONES FLOTANTES
   ========================================================= */

function crearCorazones() {

    const escena =
        document.querySelector(".cumple");

    if (!escena) return;

    const corazones = [

        ["♡", 18, 58, 0],
        ["♡", 83, 61, 1.5],
        ["♥", 9, 82, 2.5],
        ["♡", 91, 84, 3.5],
        ["♥", 28, 67, 4],
        ["♡", 73, 73, 5]

    ];


    corazones.forEach(
        ([simbolo, left, top, delay], index) => {

            const corazon =
                document.createElement("span");

            corazon.className =
                "corazon-flotante";

            corazon.textContent =
                simbolo;

            corazon.style.left =
                `${left}%`;

            corazon.style.top =
                `${top}%`;

            corazon.style.animationDelay =
                `${delay}s`;

            corazon.style.fontSize =
                `${9 + (index % 3) * 3}px`;

            escena.appendChild(corazon);

        }
    );

}


/* =========================================================
   ENTRADA SUAVE
   ========================================================= */

function iniciarEscena() {

    document.body.classList.add(
        "escena-lista"
    );

    crearEstrellas();

    crearCorazones();

}


/* =========================================================
   BOTÓN CONTINUAR — ESCENA 1 → ESCENA 2
   ========================================================= */

if (boton) {

    boton.addEventListener("click", () => {

        /* 🎵 INICIAR MÚSICA */
        const musica = document.getElementById("musicaCumple");

        if (musica) {
            musica.volume = 0.7;
            musica.play();
        }

        /* EVITAR DOBLES CLICS */
        boton.disabled = true;
        boton.style.pointerEvents = "none";

        /* EFECTO DE PRESIÓN */
        boton.style.transform =
            "translateX(-50%) scale(0.94)";

        setTimeout(() => {

            boton.style.transform =
                "translateX(-50%) scale(1)";

        }, 180);

        /* ACTIVAR TRANSICIÓN */
        if (transicion) {

            transicion.classList.add("activa");

        }

        /* ENTRAR A ESCENA 2 */
        setTimeout(() => {

            console.log("ESCENA 1 TERMINADA ❤️");

            const escena2 =
                document.getElementById("escena2");

            if (escena2) {

                escena2.classList.add("activa");

            }

        }, 1500);

    });

}


/* =========================================================
   INICIAR
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarEscena();


        /* ==========================================
           ACTIVAR BOTÓN DESPUÉS DE SU ANIMACIÓN
           ========================================== */

        setTimeout(
            () => {

                if (boton) {

                    boton.style.pointerEvents =
                        "auto";

                    boton.disabled =
                        false;

                }

            },
            11800
        );

    }
);


/* =========================================================
   🎁 REGALO SORPRESA — 25 TOQUES
   ========================================================= */

const botonSorpresa =
    document.getElementById("botonSorpresa");

const portal =
    document.getElementById("transicionSorpresa");

const regaloSorpresa =
    document.getElementById("regaloSorpresa");

const explosionRegalo =
    document.getElementById("explosionRegalo");

const sorpresaFinal =
    document.getElementById("sorpresaFinal");


let toquesRegalo = 0;

let regaloExplotando = false;


/* =========================================================
   BOTÓN SHI SHI SHI SORPRESA
   ========================================================= */

if (botonSorpresa) {

    botonSorpresa.addEventListener(
        "click",
        () => {

            console.log(
                "🎁 REGALO ACTIVADO"
            );


            /* ==========================================
               EFECTO DE PRESIÓN
               ========================================== */

            botonSorpresa.style.transform =
                "scale(.94)";


            setTimeout(() => {

                botonSorpresa.style.transform =
                    "scale(1)";

            }, 180);


            /* ==========================================
               REINICIAR REGALO
               ========================================== */

            toquesRegalo = 0;

            regaloExplotando = false;
                        /* ==========================================
               SI YA ESTÁ EXPLOTANDO
               ========================================== */

            if (regaloExplotando) {
                return;
            }


            /* ==========================================
               CONTAR TOQUE
               ========================================== */

            toquesRegalo++;


            console.log(
                "🎁 TOQUE:",
                toquesRegalo,
                "/ 25"
            );


            /* ==========================================
               PEQUEÑO EFECTO DEL REGALO
               ========================================== */

            if (regaloSorpresa) {

                regaloSorpresa.style.transform =
                    `scale(${1 + toquesRegalo * 0.008})`;

            }


            /* ==========================================
               DESTELLO DEL PORTAL
               ========================================== */

            if (
                toquesRegalo === 5 ||
                toquesRegalo === 10 ||
                toquesRegalo === 15 ||
                toquesRegalo === 20
            ) {

                if (portal) {

                    portal.classList.remove(
                        "pulso"
                    );

                    void portal.offsetWidth;

                    portal.classList.add(
                        "pulso"
                    );

                }

            }


            /* ==========================================
               LLEGAR A 25 TOQUES
               ========================================== */

            if (toquesRegalo >= 25) {

                regaloExplotando = true;


                console.log(
                    "💥 REGALO EXPLOTANDO"
                );


                /* ======================================
                   DESACTIVAR BOTÓN
                   ====================================== */

                botonSorpresa.disabled =
                    true;

                botonSorpresa.style.pointerEvents =
                    "none";


                /* ======================================
                   ACTIVAR PORTAL
                   ====================================== */

                if (portal) {

                    portal.classList.add(
                        "activa"
                    );

                }


                /* ======================================
                   EXPLOSIÓN
                   ====================================== */

                setTimeout(
                    () => {

                        if (explosionRegalo) {

                            explosionRegalo.classList.add(
                                "activa"
                            );

                        }

                    },
                    500
                );


                /* ======================================
                   OCULTAR REGALO
                   ====================================== */

                setTimeout(
                    () => {

                        if (regaloSorpresa) {

                            regaloSorpresa.classList.add(
                                "oculto"
                            );

                        }

                    },
                    900
                );


                /* ======================================
                   MOSTRAR SORPRESA FINAL
                   ====================================== */

                setTimeout(
                    () => {

                        if (sorpresaFinal) {

                            sorpresaFinal.classList.add(
                                "activa"
                            );

                        }

                    },
                    1800
                );

            }

        }
    );

}
/* =========================================================
   🌌 PORTAL — TRANSICIÓN SORPRESA
   ========================================================= */

if (portal) {

    portal.addEventListener(
        "animationend",
        () => {

            portal.classList.remove(
                "pulso"
            );

        }
    );

}


/* =========================================================
   🎁 CREAR PARTÍCULAS DEL REGALO
   ========================================================= */

function crearParticulasRegalo() {

    if (!explosionRegalo) {
        return;
    }


    const simbolos = [

        "❤️",
        "💗",
        "💖",
        "💕",
        "✨",
        "💫",
        "🌸"

    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.className =
            "particula-regalo";


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        const angulo =
            Math.random() *
            Math.PI *
            2;


        const distancia =
            80 +
            Math.random() *
            220;


        const x =
            Math.cos(
                angulo
            ) *
            distancia;


        const y =
            Math.sin(
                angulo
            ) *
            distancia;


        particula.style.setProperty(
            "--x",
            `${x}px`
        );


        particula.style.setProperty(
            "--y",
            `${y}px`
        );


        particula.style.setProperty(
            "--rotacion",
            `${-180 + Math.random() * 360}deg`
        );


        particula.style.setProperty(
            "--duracion",
            `${1.2 + Math.random() * 1.2}s`
        );


        particula.style.setProperty(
            "--retraso",
            `${Math.random() * .3}s`
        );


        explosionRegalo.appendChild(
            particula
        );

    }

}


/* =========================================================
   🎁 OBSERVAR EXPLOSIÓN
   ========================================================= */

if (explosionRegalo) {

    const observadorExplosion =
        new MutationObserver(
            () => {

                if (
                    explosionRegalo.classList.contains(
                        "activa"
                    ) &&
                    !explosionRegalo.dataset.creada
                ) {

                    explosionRegalo.dataset.creada =
                        "true";


                    crearParticulasRegalo();

                }

            }
        );


    observadorExplosion.observe(
        explosionRegalo,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

}


/* =========================================================
   💕 MENSAJE FINAL
   ========================================================= */

function mostrarMensajeFinal() {

    const mensaje =
        document.getElementById(
            "mensajeFinal"
        );


    if (!mensaje) {
        return;
    }


    mensaje.classList.add(
        "activo"
    );

}


/* =========================================================
   OBSERVAR SORPRESA FINAL
   ========================================================= */

if (sorpresaFinal) {

    const observadorFinal =
        new MutationObserver(
            () => {

                if (
                    sorpresaFinal.classList.contains(
                        "activa"
                    )
                ) {

                    setTimeout(
                        () => {

                            mostrarMensajeFinal();

                        },
                        1200
                    );

                }

            }
        );


    observadorFinal.observe(
        sorpresaFinal,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

}
/* =========================================================
   📸 ESCENA 3 — MOMENTOS
   ========================================================= */

const escena3 =
    document.getElementById(
        "escena3"
    );


/* =========================================================
   ELEMENTOS DE MOMENTOS
   ========================================================= */

const momentos =
    document.querySelectorAll(
        ".momento"
    );


let momentoActual = 0;


/* =========================================================
   INICIAR MOMENTOS
   ========================================================= */

function iniciarMomentos() {

    if (!momentos.length) {
        return;
    }


    momentoActual = 0;


    momentos.forEach(
        (momento, index) => {

            momento.classList.remove(
                "activo"
            );


            if (index === 0) {

                momento.classList.add(
                    "activo"
                );

            }

        }
    );


    console.log(
        "📸 MOMENTOS INICIADOS"
    );

}


/* =========================================================
   SIGUIENTE MOMENTO
   ========================================================= */

function siguienteMomento() {

    if (!momentos.length) {
        return;
    }


    if (
        momentoActual <
        momentos.length - 1
    ) {

        momentos[
            momentoActual
        ].classList.remove(
            "activo"
        );


        momentoActual++;


        momentos[
            momentoActual
        ].classList.add(
            "activo"
        );


        console.log(
            "📸 MOMENTO:",
            momentoActual + 1,
            "/",
            momentos.length
        );

    }

}


/* =========================================================
   MOMENTO ANTERIOR
   ========================================================= */

function momentoAnterior() {

    if (!momentos.length) {
        return;
    }


    if (
        momentoActual > 0
    ) {

        momentos[
            momentoActual
        ].classList.remove(
            "activo"
        );


        momentoActual--;


        momentos[
            momentoActual
        ].classList.add(
            "activo"
        );


        console.log(
            "📸 MOMENTO:",
            momentoActual + 1,
            "/",
            momentos.length
        );

    }

}


/* =========================================================
   CLIC EN MOMENTOS
   ========================================================= */

momentos.forEach(
    (momento) => {

        momento.addEventListener(
            "click",
            () => {

                siguienteMomento();

            }
        );

    }
);


/* =========================================================
   TECLADO
   ========================================================= */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            !escena3 ||
            !escena3.classList.contains(
                "activa"
            )
        ) {

            return;

        }


        if (
            evento.key ===
            "ArrowRight"
        ) {

            siguienteMomento();

        }


        if (
            evento.key ===
            "ArrowLeft"
        ) {

            momentoAnterior();

        }

    }
);


/* =========================================================
   👀 OBSERVAR CUÁNDO ENTRA ESCENA 3
   ========================================================= */

if (escena3) {

    const observadorEscena3 =
        new MutationObserver(
            () => {

                if (
                    escena3.classList.contains(
                        "activa"
                    ) &&
                    !escena3.dataset.momentosIniciados
                ) {

                    escena3.dataset.momentosIniciados =
                        "true";


                    console.log(
                        "📸 ESCENA 3 INICIADA"
                    );


                    iniciarMomentos();

                }

            }
        );


    observadorEscena3.observe(
        escena3,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

}   

/* =========================================================
   💖 CORAZONES FINALES
   ========================================================= */

function iniciarCorazonesFinales() {

    console.log(
        "❤️ INICIANDO LLUVIA DE CORAZONES"
    );


    const corazones =
        document.getElementById(
            "corazones"
        );


    if (!corazones) {
        return;
    }


    const tipos = [

        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💓",
        "💞"

    ];


    const cantidad = 180;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const corazon =
            document.createElement(
                "span"
            );


        corazon.className =
            "corazon-final";


        corazon.textContent =
            tipos[
                Math.floor(
                    Math.random() *
                    tipos.length
                )
            ];


        /* POSICIÓN INICIAL */

        corazon.style.setProperty(
            "--inicio-x",
            `${Math.random() * 100}%`
        );


        corazon.style.setProperty(
            "--inicio-y",
            `${Math.random() * 120}px`
        );


        /* TAMAÑO */

        corazon.style.setProperty(
            "--tamanio",
            `${0.55 + Math.random() * 1.45}`
        );


        /* MOVIMIENTO HORIZONTAL */

        const x1 =
            -35 +
            Math.random() * 70;

        const x2 =
            -70 +
            Math.random() * 140;

        const x3 =
            -110 +
            Math.random() * 220;

        const x4 =
            -140 +
            Math.random() * 280;

        const x5 =
            -180 +
            Math.random() * 360;


        corazon.style.setProperty(
            "--x1",
            `${x1}px`
        );

        corazon.style.setProperty(
            "--x2",
            `${x2}px`
        );

        corazon.style.setProperty(
            "--x3",
            `${x3}px`
        );

        corazon.style.setProperty(
            "--x4",
            `${x4}px`
        );

        corazon.style.setProperty(
            "--x5",
            `${x5}px`
        );


        /* ROTACIÓN */

        corazon.style.setProperty(
            "--rotacion-inicial",
            `${-12 + Math.random() * 24}deg`
        );

        corazon.style.setProperty(
            "--rotacion-1",
            `${-20 + Math.random() * 40}deg`
        );

        corazon.style.setProperty(
            "--rotacion-2",
            `${-25 + Math.random() * 50}deg`
        );

        corazon.style.setProperty(
            "--rotacion-3",
            `${-30 + Math.random() * 60}deg`
        );

        corazon.style.setProperty(
            "--rotacion-4",
            `${-35 + Math.random() * 70}deg`
        );

        corazon.style.setProperty(
            "--rotacion-final",
            `${-45 + Math.random() * 90}deg`
        );


        /* OPACIDAD */

        corazon.style.setProperty(
            "--opacidad",
            `${0.55 + Math.random() * 0.4}`
        );


        /* VELOCIDAD */

        corazon.style.setProperty(
            "--duracion",
            `${10 + Math.random() * 9}s`
        );


        /* RETRASO */

        corazon.style.setProperty(
            "--retraso",
            `${Math.random() * 4}s`
        );


        corazones.appendChild(
            corazon
        );

    }


    console.log(
        "❤️ 180 CORAZONES NATURALES CREADOS"
    );

}


/* =========================================================
   💕 ACTIVAR CORAZONES AL FINAL
   ========================================================= */

function activarFinal() {

    const mensajeFinal =
        document.querySelector(
            ".mensaje-final"
        );


    if (!mensajeFinal) {
        return;
    }


    mensajeFinal.classList.add(
        "activo"
    );


    setTimeout(
        () => {

            iniciarCorazonesFinales();

        },
        800
    );

}


/* =========================================================
   OBSERVAR MENSAJE FINAL
   ========================================================= */

const mensajeFinal =
    document.querySelector(
        ".mensaje-final"
    );


if (mensajeFinal) {

    const observadorMensajeFinal =
        new MutationObserver(
            () => {

                if (
                    mensajeFinal.classList.contains(
                        "activo"
                    ) &&
                    !mensajeFinal.dataset.corazonesIniciados
                ) {

                    mensajeFinal.dataset.corazonesIniciados =
                        "true";


                    activarFinal();

                }

            }
        );


    observadorMensajeFinal.observe(
        mensajeFinal,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

}

/* =========================================================
   🔄 SEGURIDAD — EVITAR DUPLICAR ELEMENTOS
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        console.log(
            "❤️ PÁGINA COMPLETAMENTE CARGADA"
        );

    }
);


/* =========================================================
   🎂 CONTROL FINAL DE ESCENA
   ========================================================= */

const escenaFinal =
    document.getElementById(
        "escenaFinal"
    );


if (escenaFinal) {

    const observadorEscenaFinal =
        new MutationObserver(
            () => {

                if (
                    escenaFinal.classList.contains(
                        "activa"
                    )
                ) {

                    console.log(
                        "🎂 ESCENA FINAL ACTIVA"
                    );

                }

            }
        );


    observadorEscenaFinal.observe(
        escenaFinal,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

}


/* =========================================================
   🛡️ EVITAR DOBLE EJECUCIÓN DE LA ESCENA 3
   ========================================================= */

if (
    !window.__cumpleScriptInicializado
) {

    window.__cumpleScriptInicializado =
        true;


    console.log(
        "❤️ CUMPLE-MEU AMOR — SCRIPT LISTO"
    );

}