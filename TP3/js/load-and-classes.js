

firstLoad();

let loadingPercentage = 0;
var loaderID;

function firstLoad() {
    document.getElementsByTagName("footer").item(0).classList.add("hidden");
    let indicator = document.querySelector("#loader-percentage");
    indicator.textContent = "0%";
    loaderID = setInterval(()=> { increasePercentage(indicator); }, 50);
}

function increasePercentage(indicator) {
    indicator.textContent = `${loadingPercentage++}%`;
    if (loadingPercentage >= 0) { //
        clearInterval(loaderID);
        indicator.classList.add("hidden");
        indicator.parentElement.classList.add("hidden");
        document.getElementsByTagName("footer").item(0).classList.remove("hidden");
        document.getElementsByTagName("header").item(0).classList.remove("hidden");
        loadContent();
        document.getElementsByClassName("news-btn-nav").item(0).addEventListener("click", loadNews);
        document.getElementsByClassName("home-btn-nav").item(0).addEventListener("click", loadContent);
        document.getElementsByClassName("logo").item(0).addEventListener("click", loadContent);
    }
}

let games = [
    {
        "title": "4-In-a-Row: Dragon Ball",
        "imageURI":   "./images/game/Rectangle21_3.png",
        "price": "0"
    },
    {
        "title": "Star Wars: Squadrons",
        "imageURI":   "./images/game1_1_2.png",
        "price": "$4.99"
    },
    {
        "title": "Horizon Chase Turbo",
        "imageURI": "./images/game1_1_3.png",
        "price": "0"
    },
    {
        "title": "Imp of the Sun",
        "imageURI": "./images/game1_1_4.png",
        "price": "0"
    },
    {
        "title": "Tunche",
        "imageURI": "./images/game1_1_5.png",
        "price": "$4.99"
    },
    {
        "title": "Cris Tales",
        "imageURI": "./images/game1_1_6.png",
        "price": "$4.99"
    },
    {
        "title": "The Eternal Cylinder",
        "imageURI": "./images/game1_1_7.png",
        "price": "$4.99"
    },
    {
        "title": "Tower Princess",
        "imageURI": "./images/game1_1_8.png",
        "price": "0"
    },
    {
        "title": "Giga Bash",
        "imageURI": "./images/game1_1_9.png",
        "price": "$4.99"
    },
    {
        "title": "Little Orpheus",
        "imageURI": "./images/game1_1_10.png",
        "price": "0"
    },
    {
        "title": "XIII",
        "imageURI": "./images/game1_1_11.png",
        "price": "$4.99"
    },
    {
        "title": "Fantasy Wars",
        "imageURI": "./images/game1_1_12.png",
        "price": "$4.99"
    },
    {
        "title": "Jack Move",
        "imageURI": "./images/game1_1_13.png",
        "price": "$4.99"
    },
    {
        "title": "Gift of Parthax",
        "imageURI": "./images/game1_1_14.png",
        "price": "$4.99"
    },
    {
        "title": "SteelRising",
        "imageURI": "./images/game1_1_15.png",
        "price": "$4.99"
    },
    {
        "title": "Kaichu: Kaiju Dating Sim",
        "imageURI": "./images/game1_1_16.png",
        "price": "$4.99"
    },
    {
        "title": "Train Sim World 3",
        "imageURI": "./images/game1_1_17.png",
        "price": "$4.99"
    },
    {
        "title": "WW1 Isonzo: Italian Front",
        "imageURI": "./images/game1_1_25.png",
        "price": "$4.99"
    },
    {
        "title": "Hazel Sky",
        "imageURI": "./images/game1_1_26.png",
        "price": "$4.99"
    }
]

class Card {
    title;
    imageURI;
    price;
    card;

    constructor(title, image, price) {
        this.title = title;
        this.imageURI = image;
        this.price = price;
        this.card = document.createElement("div");
        this.card.classList.add("card-game");
        let img = document.createElement("img");
        img.classList.add("game-card-image");
        img.src=image;
        img.alt = `${this.title} image`;
        let container = document.createElement("div");
        container.classList.add("container");
        let h3 = document.createElement("h3");
        h3.textContent = title;
        let buy = document.createElement("div");
        buy.classList.add("buy");
        let priceText = document.createElement("p");
        priceText.classList.add("price-text");
        priceText.textContent = (price === "0" ? "Free" : price);
        let play = document.createElement("button");
        play.classList.add("play");
        play.textContent = (price === "0" ? "Play" : "Buy");
        // let cartIconContainer = document.createElement("div");
        // cartIconContainer.classList.add("cart-icon-container", "hidden");
        let cartIcon = document.createElement("img");
        // let checkText = document.createElement("p");
        // checkText.textContent = "Added to cart";
        // checkText.classList.add("hidden", "check-text");
        cartIcon.src="./isset/cart-icon.svg";
        cartIcon.classList.add("hidden", "add-to-cart-icon");
        cartIcon.addEventListener("click", () => {
            cartIcon.classList.add("added-to-cart");
            cartIcon.src="./images/check1.png";
            // checkText.classList.remove("hidden");
        });
        this.card.addEventListener("mouseenter", () => {
            cartIcon.classList.remove("hidden");
            // cartIconContainer.classList.remove("hidden")
        });
        this.card.addEventListener("mouseleave", () => {
            cartIcon.classList.add("hidden");
            // cartIconContainer.classList.add("cart-icon-container", "hidden");
        });

        // cartIconContainer.appendChild(cartIcon);
        // cartIconContainer.appendChild(checkText);
        buy.appendChild(priceText);
        buy.appendChild(play);
        container.appendChild(h3);
        container.appendChild(buy);
        this.card.appendChild(cartIcon);
        this.card.appendChild(img);
        this.card.appendChild(container);
    }

}

class Carousel {

    id;
    sectionTitle;
    wrapperScroll;
    h1;
    buttonLeft;
    buttonRight;
    scrollingWrapperCard;
    section;
    cards = [];

    constructor(id, sectionTitle, cards) {
        this.id = id;
        this.sectionTitle = sectionTitle;
        this.section = document.createElement("section");
        this.section.classList.add("game-section");
        this.buttonLeft = document.createElement("button");
        this.buttonRight = document.createElement("button");
        this.buttonRight.classList.add("btn-carousel");
        this.buttonLeft.classList.add("btn-carousel");
        let btns = document.createElement("div");
        btns.classList.add("btns");
        btns.appendChild(this.buttonLeft);
        btns.appendChild(this.buttonRight);
        let iconLeft = document.createElement("i");
        let iconRight = document.createElement("i");
        iconLeft.classList.add("fa-solid", "fa-chevron-left");
        iconRight.classList.add("fa-solid", "fa-chevron-right");
        this.buttonLeft.appendChild(iconLeft);
        this.buttonRight.appendChild(iconRight);
        this.buttonLeft.addEventListener('click', () => { this.scrollCarousel(-400)});
        this.buttonRight.addEventListener('click', () => { this.scrollCarousel(400)});
        this.wrapperScroll = document.createElement("div");
        if (id != "features"){

            this.wrapperScroll.classList.add("wrapper-scroll");
        }
        this.h1 = document.createElement("h1");
        this.h1.textContent = sectionTitle;
        this.scrollingWrapperCard = document.createElement("div");
        if (id != "features"){

            this.scrollingWrapperCard.classList.add("scrolling-wrapper-card");
        }else{
            this.scrollingWrapperCard.classList.add("features");
        }
        this.scrollingWrapperCard.appendChild(this.h1);
        // this.scrollingWrapperCard.innerHTML = this.cards;
        for (let card of cards) {
            this.scrollingWrapperCard.appendChild(card);
            this.cards.push(card);
        }
        this.section.appendChild(this.wrapperScroll);
        this.wrapperScroll.appendChild(this.scrollingWrapperCard);
        if (id != "features"){

            this.section.appendChild(btns);
        }
    }

    scrollCarousel(value) {
        this.scrollingWrapperCard.scrollLeft += value;
    }
}


function loadContent() {
    let c = new Card("4-In-a-Row: Dragon Ball", "./images/game1.png", 39.99);
    let recommendedGames = [];
    let paidNews = [];
    let mostPlayed = [];
    for (let i = 0; i < 8; i++) {
        let card = new Card(games[i].title, games[i].imageURI, games[i].price);
        recommendedGames.push(card.card);
    }
    for (let i = 8; i < 16; i++) {
        let card = new Card(games[i].title, games[i].imageURI, games[i].price);
        paidNews.push(card.card);
    }
    for (let i = games.length-1; i > 0; i--) {
        let card = new Card(games[i].title, games[i].imageURI, games[i].price);
        mostPlayed.push(card.card);
    }
    let car1 = new Carousel("car1", "Recommended for you", recommendedGames);
    let car2 = new Carousel("car3", "Paid News", paidNews);
    let car3 = new Carousel("car2", "Most Played", mostPlayed);
    let main = document.querySelector("#main-container");
    main.innerHTML = "";
    main.innerHTML += loadHeader();
    main.appendChild(car1.section);
    main.appendChild(car2.section);
    main.appendChild(car3.section);
    for (let playButton of document.getElementsByClassName("play")) {
        playButton.addEventListener("click", loadGame);
    }
  
}

function loadHeader() {
    return `
   
    
    <section>
        <img src="isset/background.jpg" alt="">
    
    <div class="wrapper-scroll no-rell">
        <div class="scrolling-wrapper">
            <div class="card">
                <img src="isset/casual.png">
                <div class="container">
                <h2>Casual</h2>   
                </div>
            </div>
            <div class="card">
                <img src="isset/rol.png">
                <div class="container">
                <h2>Rol</h2>   
                </div>
            </div>
            <div class="card">
                <img src="isset/indie.png">
                <div class="container">
                <h2>Indie</h2>     
                </div>
            </div>
            <div class="card">
                <img src="isset/mult.png">
                <div class="container">
                <h2>Multiplayer</h2>   
                </div>
            </div>
        </div>
    </div>
</section>`;

}

document.querySelector(".btn_menu").addEventListener("click", function (e) {
    document.querySelector(".navigation").classList.toggle("navigation_mobil");

});
document.querySelector(".btn_sub_menu").addEventListener("click", function (e) {
    document.querySelector(".sub_menu_display").classList.toggle("sub_menu");

});





function iniciarPagina() {

    const TIEMPO_DE_JUEGO = 300;
    const CANVAS_WIDTH = 725;
    const CANVAS_HEIGHT = 607;
    const CANVAS_IMG_BACKGROUND = "goku.png";
    const CANVAS_IMG_BOX = "nube.png";

    let imageFondo = new Image();
    let imagenFicha1 = new Image();
    let imagenFicha2 = new Image();
    let imagenBox = new Image();
    imagenBox.src = CANVAS_IMG_BOX;
    let dificultad;
    let columnas;
    let filas;
    let turno_jugador_1 = true;
    let nombre1;
    let ficha1;
    let nombre2;
    let ficha2;

    let fin_del_juego = false;

    let timer = TIEMPO_DE_JUEGO;
    let timerId;

    let arreglo_fichas_j1 = [];
    let ficha_j1_seleccionada = null;

    let arreglo_fichas_j2 = [];
    let ficha_j2_seleccionada = null;

    let matriz_box = [];
    let boxSeleccionado = null;


    imageFondo.src = CANVAS_IMG_BACKGROUND;

    //Controla que no se pueda seleccionar la misma ficha
    let ff11 = document.getElementsByName('targetgroup1');
    ff11.forEach(f => f.addEventListener("click", () => {
        let ff22 = document.getElementsByName('targetgroup2');
        for (let f22 of ff22) {
            f22.disabled = false;
            if (f22.value === f.value) {
                f22.disabled = true;
            }
        }
    }));

    let ff22 = document.getElementsByName('targetgroup2');
    ff22.forEach(f => f.addEventListener("click", () => {
        let ff11 = document.getElementsByName('targetgroup1');
        for (let f11 of ff11) {
            f11.disabled = false;
            if (f11.value === f.value) {
                f11.disabled = true;
            }
        }
    }));

    let divHeroGame = document.querySelector("#div-hero-game");
    divHeroGame.style.display = 'block';

    let contentCanvas = document.querySelector(".content-canvas");
    contentCanvas.style.display = 'none';

    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext('2d');
    canvas.style.display = 'none';

    let heroTitleJugar = document.querySelector("#hero-title-jugar");
    heroTitleJugar.style.display = 'block';

    let heroTitleJugarOpciones = document.querySelector("#hero-title-jugar-opciones");
    heroTitleJugarOpciones.style.display = 'none';

    let btnPlay = document.querySelector("#btn-play-cel");
    btnPlay.addEventListener("click", function (event) {
        heroTitleJugar.style.display = 'none';
        heroTitleJugarOpciones.style.display = 'block';
    });

    let btnCancel = document.querySelector("#btn-play-cancel");
    btnCancel.addEventListener("click", function (event) {
        heroTitleJugar.style.display = 'block';
        heroTitleJugarOpciones.style.display = 'none';
    });

    //Boton salir del juego
    let btnGameOut = document.querySelector("#btn-game-out");
    btnGameOut.addEventListener("click", function (event) {
        divHeroGame.style.display = 'block';
        contentCanvas.style.display = 'none';
        canvas.style.display = 'none';
        heroTitleJugar.style.display = 'block';
        heroTitleJugarOpciones.style.display = 'none';
        initVariables();
    });

    //Resultado final del juego. Ya sea porque haya un ganador o se haya terminado el tiempo de juego.
    let resultadoCanvas = document.querySelector(".resultado-canvas");

    //Muestro a quien le toca jugar en el turno actual. Al inicio jugador de la izquierda por defecto
    let turnoCanvas = document.querySelector(".turno-canvas");

    //Boton reiniciar juego. Reinicia la partida
    let btnReiniciar = document.querySelector("#btn-reiniciar");
    btnReiniciar.addEventListener("click", function () {
        initVariables();
    });

    //Inicializa variables al reiniciar o salir del juego.
    function initVariables() {
        resultadoCanvas.style.display = 'none';
        turno_jugador_1 = true;
        turnoCanvas.innerHTML = 'Juega ' + nombre1;
        arreglo_fichas_j1 = [];
        arreglo_fichas_j2 = [];
        matriz_box = [];
        ficha_j1_seleccionada = null;
        ficha_j2_seleccionada = null;
        boxSeleccionado = null;
        fin_del_juego = false;
        inicioX = 0;
        inicioY = 0;
        canvasDraw();
        timer = TIEMPO_DE_JUEGO;
        clearTimeout(timerId);
        decreaseTimer();
    }

    //Se inicia el juego. Boton jugar.
    let btnPlayStart = document.querySelector("#btn-play-start");
    btnPlayStart.addEventListener("click", function () {
        //Display solo canvas
        heroTitleJugar.style.display = 'none';
        heroTitleJugarOpciones.style.display = 'none';
        divHeroGame.style.display = 'none';
        contentCanvas.style.display = 'block';
        canvas.style.display = 'block';

        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        //Ayuda para ver por donde esta el mouse
        //Descomentar para ver coordenadas actaules del mouse
        /*
        var output = document.getElementById("output");
        canvas.addEventListener("mousemove", function (evt) {
            var mousePos = getMousePos(evt);
            marcarCoords(output, mousePos.x, mousePos.y)
        }, false);
        canvas.addEventListener("mouseout", function (evt) {
            limpiarCoords(output);
        }, false);
        */

        //Opciones seleccionadas
        //Dificultad
        let dificultades = document.getElementsByName('dificultad');
        for (let d of dificultades) {
            if (d.checked) {
                dificultad = Number(d.value);
                columnas = dificultad + 2;
                filas = dificultad + 1;
            }
        }

        //Jugador 1
        //Nombre
        nombre1 = document.getElementById('text-jugador1').value;
        if (!nombre1) nombre1 = 'Jugador 1';
        //Ficha
        let fichas1 = document.getElementsByName('targetgroup1');
        for (let ficha of fichas1) {
            if (ficha.checked) {
                ficha1 = ficha.value;
            }
        }

        imagenFicha1.src = "./fichas/" + ficha1 + ".png";

        //Jugador 2
        //Nombre
        nombre2 = document.getElementById('text-jugador2').value;
        if (!nombre2) nombre2 = 'Jugador 2';
        //Ficha
        let fichas2 = document.getElementsByName('targetgroup2');
        for (let ficha of fichas2) {
            if (ficha.checked) {
                ficha2 = ficha.value;
            }
        }

        imagenFicha2.src = "./fichas/" + ficha2 + ".png";

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        initVariables();
    });

    //Funcion llamada para dibujar la pantalla al inicio de juego
    function canvasDraw() {
        //Para dibujar el fondo
        ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);

        let total_fichas = ((filas * columnas) / 2) + 1;
        for (let i = 0; i < total_fichas; i++) {
            let f1 = new canvas_ficha(
                nombre1,
                'f1' + i + 1,
                ctx,
                30,
                400 - (i * 5),
                imagenFicha1,);
            f1.draw();
            if (i === total_fichas - 1) {
                f1.setHabilitada(true);
            }
            arreglo_fichas_j1[i] = f1;
        }

        for (let i = 0; i < total_fichas; i++) {
            let f2 = new canvas_ficha(
                nombre2,
                'f2' + i + 1,
                ctx,
                690,
                400 - (i * 5),
                imagenFicha2,);
            f2.draw();
            if (i === total_fichas - 1) {
                f2.setHabilitada(true);
            }
            arreglo_fichas_j2[i] = f2;
        }

        let xInit;
        let yInit;
        switch (dificultad) {
            case 4:
                xInit = 180;
                yInit = 150;
                break;
            case 5:
                xInit = 155;
                yInit = 125;
                break;
            case 6:
                xInit = 125;
                yInit = 100;
                break;
            case 7:
                xInit = 100;
                yInit = 75;
                break;
        }

        for (let col = columnas; col >= 0; col--) {
            matriz_box[col] = [];
            for (let fil = filas; fil >= 0; fil--) {
                let b = new canvas_box(
                    "",
                    ctx,
                    xInit + (col * 54),
                    yInit + (fil * 54),
                    imagenBox,
                    52,
                    52, `rgba(${0},${200},${200},${200})`);
                b.draw();
                matriz_box[col][fil] = b;
            }
        }

    }

    //Eventos del mouse sobre el canvas
    //Solo se puede sacar la primer fichas, las demas estan deshabilitadas. 
    //Click del mouse sostenido
    //Accion de hacer click 
    canvas.addEventListener('mousedown', function (event) {
        if (!fin_del_juego) {
            let mousePos = getMousePos(event);
            if (turno_jugador_1) {
                for (let i = 0; i < arreglo_fichas_j1.length; i++) {
                    let x = mousePos.x;
                    let y = mousePos.y;
                    let dx = Math.abs(x - arreglo_fichas_j1[i].getPosCanvasX());
                    let dy = Math.abs(y - arreglo_fichas_j1[i].getPosCanvasY());
                    let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    if (distancia <= arreglo_fichas_j1[i].getRadio() && arreglo_fichas_j1[i].isHabilitada()) {
                        ficha_j1_seleccionada = arreglo_fichas_j1[i];
                        inicioX = arreglo_fichas_j1[i].getPosCanvasX();
                        inicioY = arreglo_fichas_j1[i].getPosCanvasY();
                        break;
                    }
                }
            } else {//Juega jugador dos.
                for (let i = 0; i < arreglo_fichas_j2.length; i++) {
                    let x = mousePos.x;
                    let y = mousePos.y;
                    let dx = Math.abs(x - arreglo_fichas_j2[i].getPosCanvasX());
                    let dy = Math.abs(y - arreglo_fichas_j2[i].getPosCanvasY());
                    let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    if (distancia <= arreglo_fichas_j2[i].getRadio() && arreglo_fichas_j2[i].isHabilitada()) {
                        ficha_j2_seleccionada = arreglo_fichas_j2[i];
                        inicioX = arreglo_fichas_j2[i].getPosCanvasX();
                        inicioY = arreglo_fichas_j2[i].getPosCanvasY();
                        break;
                    }
                }
            }
        }
    });

    //Movimiento del mouse con el click apretado
    canvas.addEventListener('mousemove', function (event) {
        let mousePos = getMousePos(event);
        if (turno_jugador_1) {
            if (ficha_j1_seleccionada != null) {
                ficha_j1_seleccionada.setPosicionCanvas(
                    mousePos.x,
                    mousePos.y
                )
            }
        } else {
            if (ficha_j2_seleccionada != null) {
                ficha_j2_seleccionada.setPosicionCanvas(
                    mousePos.x,
                    mousePos.y
                )
            }
        }
        canvasActualizar();
    });

    //Click del mouse levanta
    canvas.addEventListener('mouseup', function (event) {
        let validarPosX = -1;
        let validarPosY = -1;
        if (ficha_j1_seleccionada != null || ficha_j2_seleccionada != null) {
            let mousePos = getMousePos(event);
            for (let i = columnas; i >= 0 && !boxSeleccionado; i--) {
                //Solo se puede insertar una ficha desde arriba, por eso no recorre por filas
                //para validar que se haya soltada una ficha dentro del tablero.
                //Por eso se comenta el for por filas y se agrega let j = 0, para que recorra
                //solo la primer fila.
                //for (let j = filas; j >= 0 && !boxSeleccionado; j--) {
                let j = 0;
                if (matriz_box[i][j].getPosCanvasX() < mousePos.x
                    && !matriz_box[i][j].isOcupado()
                    && (matriz_box[i][j].getLadoX() + matriz_box[i][j].getPosCanvasX() > mousePos.x)
                    && matriz_box[i][j].getPosCanvasY() < mousePos.y
                    && (matriz_box[i][j].getLadoY() + matriz_box[i][j].getPosCanvasY() > mousePos.y)
                ) {//Si se suelta la ficha en un box
                    for (let fil = filas; fil >= 0 && !boxSeleccionado; fil--) {
                        if (!matriz_box[i][fil].isOcupado()) {
                            matriz_box[i][fil].setOcupado(true);
                            if (ficha_j1_seleccionada != null) {
                                matriz_box[i][fil].setJugador(ficha_j1_seleccionada.getJugador());
                            } else {
                                if (ficha_j2_seleccionada != null) {
                                    matriz_box[i][fil].setJugador(ficha_j2_seleccionada.getJugador());
                                }
                            }
                            boxSeleccionado = matriz_box[i][fil];
                            validarPosX = i;
                            validarPosY = fil;
                        }
                    }
                }
                //}
            }
        }
        if (turno_jugador_1 && ficha_j1_seleccionada != null) {
            for (let y = 0; y < arreglo_fichas_j1.length; y++) {
                if (ficha_j1_seleccionada.getId() === arreglo_fichas_j1[y].getId()) {
                    if (boxSeleccionado != null) {
                        let posNueva = {
                            x: boxSeleccionado.getPosCanvasX() + (boxSeleccionado.getLadoX() / 2),
                            y: boxSeleccionado.getPosCanvasY() - 1 + ((boxSeleccionado.getLadoY() - arreglo_fichas_j1[y].getRadio()))
                        }//Si hay que colocar la ficha

                        //Valida si hya un ganador
                        validarJugada(boxSeleccionado.getJugador(), validarPosX, validarPosY);

                        arreglo_fichas_j1[y].setHabilitada(false);
                        arreglo_fichas_j1[y].setPosicionFinal(posNueva.x, posNueva.y);
                        //Habilita la siguinte ficha
                        arreglo_fichas_j1[y - 1].setHabilitada(true);
                        //Si coloca la ficha cambia de turno
                        turno_jugador_1 = !turno_jugador_1;
                        turnoCanvas.innerHTML = 'Juega ' + nombre2;

                    } else {
                        //Vuelve al origen
                        if (boxSeleccionado == null
                            && ficha_j1_seleccionada.getId() === arreglo_fichas_j1[y].getId()) {
                            arreglo_fichas_j1[y].setPosicionInicial();
                        }
                    }
                    break;
                }
            }
            ficha_j1_seleccionada = null;
        } else {
            if (!turno_jugador_1 && ficha_j2_seleccionada != null) {
                for (let y = 0; y < arreglo_fichas_j2.length; y++) {
                    if (ficha_j2_seleccionada.getId() === arreglo_fichas_j2[y].getId()) {
                        if (boxSeleccionado != null) {
                            let posNueva = {
                                x: boxSeleccionado.getPosCanvasX() + (boxSeleccionado.getLadoX() / 2),
                                y: boxSeleccionado.getPosCanvasY() - 1 + ((boxSeleccionado.getLadoY() - arreglo_fichas_j2[y].getRadio()))
                            }
                            validarJugada(boxSeleccionado.getJugador(), validarPosX, validarPosY);
                            arreglo_fichas_j2[y].setHabilitada(false);
                            arreglo_fichas_j2[y].setPosicionFinal(posNueva.x, posNueva.y);
                            arreglo_fichas_j2[y - 1].setHabilitada(true);
                            turno_jugador_1 = !turno_jugador_1;
                            turnoCanvas.innerHTML = 'Juega ' + nombre1;
                        } else {
                            if (boxSeleccionado == null
                                && ficha_j2_seleccionada.getId() === arreglo_fichas_j2[y].getId()) {
                                arreglo_fichas_j2[y].setPosicionInicial();
                            }
                        }
                        break;
                    }
                }
                ficha_j2_seleccionada = null;
            }
        }
        boxSeleccionado = null;
        canvasActualizar();
    });

    //Luego de insertar una ficha valida si hay un ganador.
    function validarJugada(jugador, cInicial, fInicial) {
        let contador = 0;
        //Valido por columnad desde una posicion inicial hacia la izq y luego hacia la derecha
        for (let col = cInicial; col >= 0 && !fin_del_juego; col--) {
            if (matriz_box[col][fInicial].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }
        for (let col = cInicial + 1; col <= columnas && !fin_del_juego; col++) {
            if (matriz_box[col][fInicial].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }

        //Valido por filas hacia abajo y luego hacia arriba
        contador = 0;
        for (let fil = fInicial; fil >= 0 && !fin_del_juego; fil--) {
            if (matriz_box[cInicial][fil].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }
        for (let fil = fInicial + 1; fil <= filas && !fin_del_juego; fil++) {
            if (matriz_box[cInicial][fil].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }

        //Valido en diagonal 1
        contador = 0;
        let cDiagonal = cInicial;
        let fDiagonal = fInicial;
        while (cDiagonal <= columnas && fDiagonal >= 0 && !fin_del_juego) {
            if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
                cDiagonal++;
                fDiagonal--;
            } else {
                break;
            }
        }

        cDiagonal = cInicial - 1;
        fDiagonal = fInicial + 1;
        while (cDiagonal >= 0 && fDiagonal <= filas && !fin_del_juego) {
            if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
                cDiagonal--;
                fDiagonal++;
            } else {
                break;
            }
        }

        //Valido en diagonal 2
        contador = 0;
        cDiagonal = cInicial;
        fDiagonal = fInicial;
        while (cDiagonal >= 0 && fDiagonal >= 0 && !fin_del_juego) {
            if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
                cDiagonal--;
                fDiagonal--;
            } else {
                break;
            }
        }
        cDiagonal = cInicial + 1;
        fDiagonal = fInicial + 1;
        while (cDiagonal <= columnas && fDiagonal <= filas && !fin_del_juego) {
            if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                contador++;
                if (contador == dificultad) {
                    finalizarJuego(jugador);
                }
                cDiagonal++;
                fDiagonal++;
            } else {
                break;
            }
        }
    }

    //Acciones finales del juego.
    function finalizarJuego(jugador) {
        clearTimeout(timerId);
        resultadoCanvas.style.display = 'flex';
        resultadoCanvas.innerHTML = 'Ganó ' + jugador;
        fin_del_juego = true;
    }

    //Actualiza el canvas
    function canvasActualizar() {
        //Fondo
        ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);

        //Tablero
        for (let i = columnas; i >= 0; i--) {
            for (let j = filas; j >= 0; j--) {
                matriz_box[i][j].draw();
            }
        }

        //Fichas del jugador 1
        for (let i = 0; i < arreglo_fichas_j1.length; i++) {
            arreglo_fichas_j1[i].draw();
        }

        //Fichas del jugador 2
        for (let i = 0; i < arreglo_fichas_j2.length; i++) {
            arreglo_fichas_j2[i].draw();
        }
    }

    //Funcion encargada de controlar el tiempo de partida
    function decreaseTimer() {
        if (timer > 0) {
            timerId = setTimeout(decreaseTimer, 1000);
            timer--;
            let minutes = Math.floor(timer / 60);
            let segundos = timer % 60;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            segundos = segundos < 10 ? "0" + segundos : segundos;
            document.querySelector(".timer-canvas").innerHTML = minutes + ' : ' + segundos;
        }

        if (timer === 0) {
            clearTimeout(timerId);
            resultadoCanvas.style.display = 'flex';
            resultadoCanvas.innerHTML = 'Empate';
            fin_del_juego = true;
        }
    }

    //Detectar posicion del mouse
    function getMousePos(event) {
        let ClientRect = canvas.getBoundingClientRect();
        return { //objeto
            x: Math.round(event.clientX - ClientRect.left),
            y: Math.round(event.clientY - ClientRect.top)
        }
    }

}

