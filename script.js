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

    boton.addEventListener(
    "click",
    () => {

        /* ============================================
           🎵 INICIAR MÚSICA
           ============================================ */

        const musica = document.getElementById("musicaCumple");

        if (musica) {
            musica.volume = 0.7;
            musica.play();
        }


        /*
        ============================================
        EVITAR DOBLES CLICS
        ============================================ */

            boton.disabled = true;

            boton.style.pointerEvents =
                "none";


            /* ==========================================
               EFECTO DE PRESIÓN
               ========================================== */

            boton.style.transform =
                "translateX(-50%) scale(0.94)";


            setTimeout(
                () => {

                    boton.style.transform =
                        "translateX(-50%) scale(1)";

                },
                180
            );


            /* ==========================================
               ACTIVAR TRANSICIÓN
               ========================================== */

            if (transicion) {

                transicion.classList.add(
                    "activa"
                );

            }


            /* ==========================================
               ENTRADA ESCENA 2
               ========================================== */

            setTimeout(
                () => {

                    console.log(
                        "ESCENA 1 TERMINADA ❤️"
                    );


                    const escena2 =
                        document.getElementById(
                            "escena2"
                        );


                    if (escena2) {

                        escena2.classList.add(
                            "activa"
                        );

                    }

                },
                1500
            );

        }
    );

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
               REACTIVAR REGALO
               ========================================== */

            if (regaloSorpresa) {

                regaloSorpresa.disabled =
                    false;

                regaloSorpresa.style.pointerEvents =
                    "auto";

            }


            /* ==========================================
               ACTIVAR PORTAL
               ========================================== */

            if (portal) {

                portal.classList.remove(
                    "explotando"
                );

                portal.classList.remove(
                    "pasar-fotos"
                );

                portal.classList.add(
                    "activa"
                );

            }


            /* ==========================================
               OCULTAR SORPRESA ANTERIOR
               ========================================== */

            if (sorpresaFinal) {

                sorpresaFinal.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}


/* =========================================================
   🎁 TOCAR REGALO
   ========================================================= */

if (regaloSorpresa) {

    regaloSorpresa.addEventListener(
        "click",
        () => {

            if (regaloExplotando) return;


            /* ==========================================
               SUMAR TOQUE
               ========================================== */

            toquesRegalo++;


            console.log(
                `🎁 TOQUE ${toquesRegalo}/25`
            );


            /* ==========================================
               OBTENER CAJA DEL REGALO
               ========================================== */

            const regalo =
                regaloSorpresa.querySelector(
                    ".regalo"
                );


            if (regalo) {

                /* ======================================
                   DETENER ANIMACIÓN NORMAL
                   ====================================== */

                regalo.style.animation =
                    "none";


                /* ======================================
                   INTENSIDAD
                   ====================================== */

                const progreso =
                    toquesRegalo / 25;


                const intensidad =
                    2 +
                    progreso * 12;


                /* ======================================
                   PRIMER MOVIMIENTO
                   ====================================== */

                const x1 =
                    (Math.random() - 0.5) *
                    intensidad;


                const y1 =
                    (Math.random() - 0.5) *
                    intensidad;


                const rotacion1 =
                    (Math.random() - 0.5) *
                    (4 + progreso * 18);


                regalo.style.transform =
                    `
                    translate(
                        ${x1}px,
                        ${y1}px
                    )
                    rotate(${rotacion1}deg)
                    scale(1.02)
                    `;


                /* ======================================
                   SEGUNDO MOVIMIENTO
                   ====================================== */

                setTimeout(() => {

                    if (regaloExplotando)
                        return;


                    const x2 =
                        (Math.random() - 0.5) *
                        intensidad;


                    const y2 =
                        (Math.random() - 0.5) *
                        intensidad;


                    const rotacion2 =
                        (Math.random() - 0.5) *
                        (4 + progreso * 18);


                    regalo.style.transform =
                        `
                        translate(
                            ${x2}px,
                            ${y2}px
                        )
                        rotate(${rotacion2}deg)
                        scale(1.01)
                        `;

                }, 90);


                /* ======================================
                   VOLVER AL CENTRO
                   ====================================== */

                setTimeout(() => {

                    if (regaloExplotando)
                        return;


                    regalo.style.transform =
                        "translate(0,0) rotate(0deg) scale(1)";


                    regalo.style.animation =
                        "regaloRespira 4s ease-in-out infinite";

                }, 260);

            }


            /* ==========================================
               ✨ CONFETI
               ========================================== */

            crearConfetiRegalo();


            /* ==========================================
               ✦ DESTELLO
               ========================================== */

            crearDestelloToque();


            /* ==========================================
               💥 TOQUE 25
               ========================================== */

            if (toquesRegalo >= 25) {

                explotarRegalo();

            }

        }
    );

}
/* =========================================================
   ✨ CONFETI DE CADA TOQUE
   ========================================================= */

function crearConfetiRegalo() {

    if (!portal) return;


    const cantidad = 25;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const confeti =
            document.createElement("span");


        confeti.className =
            "confeti-regalo";


        /* ==========================================
           SÍMBOLOS
           ========================================== */

        const simbolos = [
            "✦",
            "✧",
            "♥",
            "♡",
            "✶",
            "•"
        ];


        confeti.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        /* ==========================================
           POSICIÓN CERCA DEL REGALO
           ========================================== */

        const posicionX =
            (Math.random() - 0.5) *
            130;


        const posicionY =
            (Math.random() - 0.5) *
            100;


        confeti.style.left =
            `calc(50% + ${posicionX}px)`;


        confeti.style.top =
            `calc(50% + ${posicionY}px)`;


        /* ==========================================
           DIRECCIÓN
           ========================================== */

        const destinoX =
            (Math.random() - 0.5) *
            180;


        const destinoY =
            -(40 + Math.random() * 120);


        confeti.style.setProperty(
            "--confeti-x",
            `${destinoX}px`
        );


        confeti.style.setProperty(
            "--confeti-y",
            `${destinoY}px`
        );


        /* ==========================================
           ROTACIÓN
           ========================================== */

        confeti.style.setProperty(
            "--confeti-rotacion",
            `${Math.random() * 500 - 250}deg`
        );


        /* ==========================================
           TAMAÑO
           ========================================== */

        confeti.style.fontSize =
            `${12 + Math.random() * 14}px`;


        /* ==========================================
           PEQUEÑA VARIACIÓN
           ========================================== */

        confeti.style.animationDelay =
            `${Math.random() * 0.08}s`;


        /* ==========================================
           AGREGAR
           ========================================== */

        portal.appendChild(
            confeti
        );


        /* ==========================================
           ELIMINAR
           ========================================== */

        setTimeout(() => {

            confeti.remove();

        }, 1000);

    }

}


/* =========================================================
   ✨ DESTELLO DE CADA TOQUE
   ========================================================= */

function crearDestelloToque() {

    if (!portal) return;


    const destello =
        document.createElement("span");


    destello.className =
        "destello-toque";


    destello.textContent =
        "✦";


    destello.style.left =
        "50%";


    destello.style.top =
        "50%";


    portal.appendChild(
        destello
    );


    setTimeout(() => {

        destello.remove();

    }, 500);

}
/* =========================================================
   💥 EXPLOSIÓN FINAL DEL REGALO
   ========================================================= */

function explotarRegalo() {

    if (regaloExplotando) return;


    regaloExplotando = true;


    console.log(
        "💥 REGALO EXPLOTANDO"
    );


    /* ==========================================
       BLOQUEAR MÁS TOQUES
       ========================================== */

    if (regaloSorpresa) {

        regaloSorpresa.disabled =
            true;

        regaloSorpresa.style.pointerEvents =
            "none";

    }


    /* ==========================================
       ACTIVAR EXPLOSIÓN
       ========================================== */

    if (portal) {

        portal.classList.add(
            "explotando"
        );

    }


    /* ==========================================
       💥 GRAN EXPLOSIÓN
       ========================================== */

    crearExplosionRegalo();


    /* ==========================================
       ❤️ MOSTRAR "SOU EU"
       ========================================== */

    setTimeout(() => {

        if (sorpresaFinal) {

            sorpresaFinal.setAttribute(
                "aria-hidden",
                "false"
            );

        }

    }, 650);


    /* ==========================================
       ⏳ CONFIRMAR SORPRESA
       ========================================== */

    setTimeout(() => {

        console.log(
            "❤️ SORPRESA MOSTRADA"
        );

    }, 1200);


/* =========================================================
   🌌 TRANSICIÓN — SOU EU → NUESTROS MOMENTOS
   ========================================================= */

setTimeout(() => {

    /* ==========================================
       CREAR TRANSICIÓN
       ========================================== */

    let transicionFotos =
        document.getElementById(
            "transicionFotos"
        );


    if (!transicionFotos) {

        transicionFotos =
            document.createElement("div");

        transicionFotos.id =
            "transicionFotos";

        transicionFotos.innerHTML = `

            <div class="transicion-fotos-brillo"></div>

            <div class="transicion-fotos-texto">
                <span>❤️</span>
            </div>

        `;

        document.body.appendChild(
            transicionFotos
        );

    }


    /* ==========================================
       🌑 COMENZAR TRANSICIÓN
       ========================================== */

    transicionFotos.classList.add(
        "activa"
    );


    /* ==========================================
       🎁 OCULTAR SOU EU
       ========================================== */

    setTimeout(() => {

        const transicionSorpresa =
            document.getElementById(
                "transicionSorpresa"
            );

        if (transicionSorpresa) {

            transicionSorpresa.classList.remove(
                "activa"
            );

        }


        /* ======================================
           📸 ACTIVAR ESCENA 3
           ====================================== */

        if (escena3) {

            escena3.classList.add(
                "activa"
            );

        }

    }, 1800);


    /* ==========================================
       ✨ REVELAR FOTOS
       ========================================== */

    setTimeout(() => {

        transicionFotos.classList.remove(
            "activa"
        );

    }, 3300);


}, 5000);

}


/* =========================================================
   💥 CREAR GRAN EXPLOSIÓN
   ========================================================= */

function crearExplosionRegalo() {

    if (!portal) return;


    const cantidad = 70;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const particula =
            document.createElement("span");


        particula.className =
            "particula-regalo";


        /* ==========================================
           SÍMBOLOS
           ========================================== */

        const simbolos = [
            "♥",
            "♡",
            "✦",
            "✧",
            "✶",
            "•"
        ];


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        /* ==========================================
           CENTRO
           ========================================== */

        particula.style.left =
            "50%";

        particula.style.top =
            "50%";


        /* ==========================================
           DIRECCIÓN
           ========================================== */

        const angulo =
            Math.random() *
            Math.PI *
            2;


        const distancia =
            120 +
            Math.random() *
            320;


        const x =
            Math.cos(angulo) *
            distancia;


        const y =
            Math.sin(angulo) *
            distancia;


        /* ==========================================
           VARIABLES CSS
           ========================================== */

        particula.style.setProperty(
            "--explosion-x",
            `${x}px`
        );


        particula.style.setProperty(
            "--explosion-y",
            `${y}px`
        );


        particula.style.setProperty(
            "--explosion-rotacion",
            `${Math.random() * 720 - 360}deg`
        );


        /* ==========================================
           TAMAÑO
           ========================================== */

        particula.style.fontSize =
            `${12 + Math.random() * 25}px`;


        /* ==========================================
           RETRASO
           ========================================== */

        particula.style.animationDelay =
            `${Math.random() * 0.15}s`;


        /* ==========================================
           AGREGAR
           ========================================== */

        portal.appendChild(
            particula
        );


        /* ==========================================
           ELIMINAR
           ========================================== */

        setTimeout(() => {

            particula.remove();

        }, 1500);

    }

}
/* =========================================================
   📸 ESCENA 3 — FOTOS ❤️📸
   ========================================================= */

const escena3 =
    document.getElementById("escena3");

const fotoMomento =
    document.getElementById("fotoMomento");

const imagenMomento =
    document.getElementById("imagenMomento");

const textoMomento =
    document.getElementById("textoMomento");

const mensajeMomento =
    document.getElementById("mensajeMomento");

const indicadores =
    document.querySelectorAll(
        "#indicadorMomentos span"
    );


/* =========================================================
   📸 FOTOS + MENSAJES
   ========================================================= */

const momentos = [

    {
        foto: "foto/foto1.png",
        mensaje:
            "Cada momento contigo es muito especial. ❤️✨"
    },

    {
        foto: "foto/foto2.png",
        mensaje:
            "Mismo cuando estamos lejos... 🥺"
    },

    {
        foto: "foto/foto3.png",
        mensaje:
            "Com você, todo es más divertido. 😂❤️"
    },

    {
        foto: "foto/foto4.png",
        mensaje:
            "Y mismo lejos... 🥺"
    },

    {
        foto: "foto/foto5.png",
        mensaje:
            "Você consegue estar muitooo perto de mim. ❤️"
    },

    {
        foto: "foto/foto6.png",
        mensaje:
            "Eu espero continuar teniendo estos recuerdos por el momento, para que después, cuando vivamos juntos, lembremos de los días de las videollamadas. 🥹❤️"
    }

];


/* =========================================================
   📦 PRECARGAR TODAS LAS FOTOS
   ========================================================= */

function precargarFotos() {

    momentos.forEach(
        (momento) => {

            const imagen =
                new Image();

            imagen.src =
                momento.foto;

        }
    );

}


precargarFotos();


/* =========================================================
   📍 MOMENTO ACTUAL
   ========================================================= */

let momentoActual = 0;


/* =========================================================
   📸 MOSTRAR MOMENTO
   ========================================================= */

function mostrarMomento(indice) {

    if (!momentos[indice]) return;

    const momento =
        momentos[indice];


    if (
        !imagenMomento ||
        !fotoMomento
    ) {

        return;

    }


    /* ==========================================
       ✨ SALIDA
       ========================================== */

    fotoMomento.classList.remove(
        "apareciendo"
    );

    fotoMomento.classList.add(
        "cambiando"
    );


    /* ==========================================
       📝 CAMBIAR CONTENIDO
       ========================================== */

    setTimeout(() => {

        imagenMomento.src =
            momento.foto;


        if (mensajeMomento) {

            mensajeMomento.textContent =
                momento.mensaje;

        }


        /* ======================================
           ✦ INDICADOR
           ====================================== */

        indicadores.forEach(
            (indicador, i) => {

                indicador.classList.toggle(
                    "activo",
                    i === indice
                );

            }
        );


        /* ======================================
           ✨ ENTRADA
           ====================================== */

        fotoMomento.classList.remove(
            "cambiando"
        );

        void fotoMomento.offsetWidth;

        fotoMomento.classList.add(
            "apareciendo"
        );


    }, 280);

}

/* =========================================================
   📸 INICIAR LOS MOMENTOS
   ========================================================= */

function iniciarMomentos() {

    console.log(
        "📸 INICIANDO NUESTROS MOMENTOS"
    );

    momentoActual = 0;


    /* ==========================================
       FOTO 1
       ========================================== */

    if (imagenMomento) {

        imagenMomento.src =
            momentos[0].foto;

    }


    /* ==========================================
       MENSAJE 1
       ========================================== */

    if (mensajeMomento) {

        mensajeMomento.textContent =
            momentos[0].mensaje;

    }


    /* ==========================================
       INDICADOR
       ========================================== */

    indicadores.forEach(
        (indicador, i) => {

            indicador.classList.toggle(
                "activo",
                i === 0
            );

        }
    );


    /* ==========================================
       ANIMACIÓN INICIAL
       ========================================== */

    if (fotoMomento) {

        fotoMomento.classList.remove(
            "cambiando"
        );

        fotoMomento.classList.add(
            "apareciendo"
        );

    }


    /* ==========================================
       CAMBIAR CADA 5 SEGUNDOS
       ========================================== */

    const intervaloMomentos =
        setInterval(() => {

            momentoActual++;


            /* ======================================
               ❤️ TERMINARON LOS 6 MOMENTOS
               ====================================== */

            if (
                momentoActual >=
                momentos.length
            ) {

                clearInterval(
                    intervaloMomentos
                );

                console.log(
                    "❤️ TERMINARON LOS 6 MOMENTOS"
                );


                    /* ==================================
                    🖤 PASAR A LOS MENSAJES FINALES
                    ================================== */

                    setTimeout(() => {

                        iniciarMensajesFinales();

                    }, 1000);


                    return;

                }


                /* ======================================
                📸 SIGUIENTE FOTO
                ====================================== */

                mostrarMomento(
                    momentoActual
                );


            }, 5000);

    }

 /* =========================================================
   🖤 MENSAJE FINAL — SE VA LLENANDO
   ========================================================= */

function iniciarMensajesFinales() {

    console.log(
        "🖤 INICIANDO MENSAJE FINAL"
    );


    /* =====================================================
       ❤️ MENSAJES
       ===================================================== */

    const mensajes = [

        `Feliz Cumpleaños, Meu Amor ❤️`,

        `Hoy es un día muy especial porque es el día en que naciste, “mi amor de mi vida”.`,

        `Estoy un poco triste por no estar ahí contigo personalmente, pero vas a ver que ya no faltará mucho para que acabe esta distancia.`,

        `Quiero poder verte de una vez para pasar el tiempo juntos y, cuando se pueda, conversar sobre todo lo que hemos pasado. Pero quiero hacerte recordar que vamos a conseguirlo juntos, que vamos a mejorar los dos mutuamente, ayudándonos.`,

        `Sabes que eu te amoooooooooooooo muitoooooooooooooo. Ya estás vieja, shiiiiiii, y yo sigo joven como siempre, kkkkk. 😂❤️`,

        `Pero bueno, amor, espero que la pases bien con tu familia y, obviamente, conmigo, né.`,

        `Intenta no comer mucho dulce, hein. “Estoy observándote, bonita”. 👀❤️`,

        `En serio, te extraño demasiado. La distancia es muy difícil para mí. Todos los días pienso en você.`,

        `Sinceramente, por eso me reprocho mucho no poder hacerme millonario rápido, porque si lo hago lento, será mucho más tiempo el que tenga que estar lejos de ti.`,

        `Estoy muy ansioso por poder verte en persona y también tengo nervios, porque será como la primera vez que te vi, kkkkk. Voy a estar muy avergonzado.`,

        `Y no olvidemos que también vamos a tener una experiencia nueva, que sería viajar juntos.`,

        `Siempre veía videos en TikTok y soñaba con poder hacerlo contigo, y ahora saber que ya falta poco me tiene muy ansioso.`,

        `Va a ser el primero de muchos viajes más, te lo prometo, amor.`,

        `Vamos a conocer el mundo entero. ❤️`,

        `Y no olvides que el próximo año, en tu cumpleaños, voy a estar contigo personalmente. ❤️`

    ];


    /* =====================================================
       🖤 CREAR PANTALLA FINAL
       ===================================================== */

    let transicion =
        document.getElementById(
            "transicionMensajes"
        );


    if (!transicion) {

        transicion =
            document.createElement("div");

        transicion.id =
            "transicionMensajes";

        transicion.innerHTML = `

            <div class="mensajes-finales-scroll">

                <div class="mensajes-finales-lista"></div>

                <div
                    class="corazones-finales"
                    aria-hidden="true">
                </div>

            </div>

        `;

        document.body.appendChild(
            transicion
        );

    }


    const lista =
        transicion.querySelector(
            ".mensajes-finales-lista"
        );

    const corazones =
        transicion.querySelector(
            ".corazones-finales"
        );


    /* =====================================================
       🧹 LIMPIAR
       ===================================================== */

    lista.innerHTML = "";
    corazones.innerHTML = "";


    /* =====================================================
       🌑 ACTIVAR NEGRO
       ===================================================== */

    transicion.classList.add(
        "activa"
    );


    /* =====================================================
       ✍️ AGREGAR PÁRRAFOS
       ===================================================== */

    let indice = 0;


    function agregarSiguienteMensaje() {

        /* ================================================
           ❤️ TERMINARON LOS 15
           ================================================ */

        if (
            indice >=
            mensajes.length
        ) {

            console.log(
                "❤️ TERMINARON TODOS LOS MENSAJES"
            );


            /* ============================================
               ❤️ EMPEZAR CORAZONES
               ============================================ */

            iniciarCorazonesFinales();

            return;

        }


        /* ================================================
           CREAR PÁRRAFO
           ================================================ */

        const parrafo =
            document.createElement("p");


        parrafo.className =
            "parrafo-final";


        if (
            indice === 0
        ) {

            parrafo.classList.add(
                "parrafo-principal"
            );

        }


        if (
            indice ===
            mensajes.length - 1
        ) {

            parrafo.classList.add(
                "parrafo-final-ultimo"
            );

        }


        parrafo.textContent =
            mensajes[indice];


        lista.appendChild(
            parrafo
        );


        /* ================================================
           ✨ APARECER
           ================================================ */

        requestAnimationFrame(() => {

            parrafo.classList.add(
                "visible"
            );

        });


        indice++;



        /* =====================================================
   ⏱️ TIEMPO DE CADA PÁRRAFO
   ===================================================== */

const tiemposMensajes = [

    4500,  // 1
    5000,  // 2
    5500,  // 3
    7500,  // 4
    6000,  // 5
    4500,  // 6
    5000,  // 7
    5000,  // 8
    6500,  // 9
    7000,  // 10
    5000,  // 11
    6000,  // 12
    4500,  // 13
    4000,  // 14
    7000   // 15
];


setTimeout(
    agregarSiguienteMensaje,
    tiemposMensajes[indice - 1]
);

}
/* =====================================================
   ❤️ CORAZONES
   ===================================================== */

function iniciarCorazonesFinales() {

    console.log(
        "❤️ INICIANDO LLUVIA DE CORAZONES"
    );


    const tipos = [

        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💓",
        "💞"

    ];


    const cantidad =
        180;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const corazon =
            document.createElement("span");


        corazon.className =
            "corazon-final";


        corazon.textContent =
            tipos[
                Math.floor(
                    Math.random() *
                    tipos.length
                )
            ];


        /* =================================================
           🌬️ POSICIÓN INICIAL
           ================================================= */

        corazon.style.setProperty(
            "--inicio-x",
            `${Math.random() * 100}%`
        );


        /* =================================================
           📍 ALTURA INICIAL
           ================================================= */

        corazon.style.setProperty(
            "--inicio-y",
            `${Math.random() * 120}px`
        );


        /* =================================================
           💕 TAMAÑO
           ================================================= */

        corazon.style.setProperty(
            "--tamanio",
            `${0.55 + Math.random() * 1.45}`
        );


        /* =================================================
           🌬️ MOVIMIENTO HORIZONTAL
           ================================================= */

        const x1 =
            -35 + Math.random() * 70;

        const x2 =
            -70 + Math.random() * 140;

        const x3 =
            -110 + Math.random() * 220;

        const x4 =
            -140 + Math.random() * 280;

        const x5 =
            -180 + Math.random() * 360;


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


        /* =================================================
           🔄 ROTACIÓN NATURAL
           ================================================= */

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


        /* =================================================
           ✨ OPACIDAD
           ================================================= */

        corazon.style.setProperty(
            "--opacidad",
            `${0.55 + Math.random() * 0.4}`
        );


        /* =================================================
           ⏱️ VELOCIDAD
           ================================================= */

        corazon.style.setProperty(
            "--duracion",
            `${10 + Math.random() * 9}s`
        );


        /* =================================================
           🕐 RETRASO
           ================================================= */

        corazon.style.setProperty(
            "--retraso",
            `${Math.random() * 4}s`
        );


        /* =================================================
           ❤️ AGREGAR
           ================================================= */

        corazones.appendChild(
            corazon
        );

    }


    console.log(
        "❤️ 180 CORAZONES NATURALES CREADOS"
    );

}


/* =====================================================
   🚀 EMPEZAR
   ================================================= */

setTimeout(() => {

    agregarSiguienteMensaje();

}, 1000);

}

/* =========================================================
   👀 OBSERVAR CUÁNDO ENTRA LA ESCENA 3
   ========================================================= */

if (escena3) {

    const observadorEscena3 =
        new MutationObserver(() => {

            if (
                escena3.classList.contains("activa") &&
                !escena3.dataset.momentosIniciados
            ) {

                escena3.dataset.momentosIniciados =
                    "true";

                console.log(
                    "📸 ESCENA 3 INICIADA"
                );

                iniciarMomentos();

            }

        });


    observadorEscena3.observe(
        escena3,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );

}

