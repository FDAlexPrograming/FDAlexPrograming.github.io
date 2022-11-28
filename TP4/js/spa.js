"use strict";


async function loadNews(){
    document.getElementById("main-container").innerHTML = `
    <h4 class="route">> News > </h4>
    <section class="wallpaper-section">
        <h3>Yes, it's finally here.. Trust me..</h3>
        <img class="background-wallpaper" src="./images/news/news2.png" alt="half life wallpaper">
        <div class="front-news-container">
            <img class="front-wallpaper" src="./images/news/news1.png" alt="half life wallpaper">
            <div class="news-front-price">
                <h1>PRE ORDER NOW</h1>
                <h2>$80.99</h2>
            </div>
        </div>
    </section>
    <section class="news-description">
        <h3>A little history...</h3>
        <div class="game-info-section-news-description">
            <p>Half-Life (stylized HλLF-LIFE) is a science fiction techno-thriller first-person shooter video game developed by Valve Corporation. This game was the company's debut and the first of what would later become the Half-Life series. The title, distributed by Sierra Studios, was released on November 19, 1998. A PlayStation 2 remake was also released on November 14, 2002. The plot of Half-Life takes place in a relatively modern, but unknown time.</p>
        </div>
    </section>
    
    <section class="animated-carousel">
        <div class="slider">
            <img data-info="asd"  class="slider-image" src="./images/news/half-life11.png">
            <img data-info="asd"  class="slider-image" src="./images/news/half-life12.png">
            <img data-info="asd"  class="slider-image" src="./images/news/half-life1.png">
        </div>
    </section>
        <div class="btns">
            <button data-action="left" class="btn-carousel btn btn-next" onclick="moveImageLeft()" ><i class="fa-solid fa-chevron-left"></i></button>
            <button data-action="right" class="btn-carousel btn btn-prev" onclick="moveImageRight()"><i class="fa-solid fa-chevron-right"></i></i></button>
        </div>

        <main class="game-coming">
        <section class="hero background-dark">
            <div class="prof1">
            </div>
            <div class="prof2">
            </div>
            <div class="prof3">
                <img src="../img/starfield/Starfield_logo.svg.png" alt="logo starfield">
            </div>
            <div class="call-to-action">
                <button><span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <a href=""><span>Resérvalo Ya</span></a>
                </button>
            </div>
            <div class="mouse-scroll"></div>
        </section>
        <section class="info-game-coming">
            <div class="left-section">
                <article id="hero-card-1" class="hero-card-content showContent">
                    <div id="hero-title-1" class="hero-card-title fade-in">
                        <p>vive tu aventura espacial</p>
                    </div>
                    <div class="hero-card-image">
                        <img id="hero-img-1" class="from-left slide-in" src="../img/starfield/coming/starfield_art_neon.jpg" alt="aventura espacial starfield">
                    </div>
                </article>
                <article id="hero-card-2" class="hero-card-content">
                    <div class="hero-card-title fade-in">
                        <p>embarcate en un viaje epico</p>
                    </div>
                    <div class="hero-card-image">
                        <img class="from-left slide-in" src="../img/starfield/coming/starfield_art_biome_exploration.jpg" alt="viaje epico starfield">
                    </div>   
                </article>
                <article id="hero-card-3" class="hero-card-content">
                    <div id="hero-title-3" class="hero-card-title fade-in">
                        <p>Explora Planetas y Forja Alianzas</p>
                    </div>
                    <div class="hero-card-image">
                        <img id="hero-img-3" class="from-left slide-in" src="../img/starfield/coming/starfield_art_street.jpg" alt="exploracion starfield">
                    </div>               
                </article>
            </div>
            <div class="right-section">
                <div id="hero-text-1" class="hero-text-content">
                    <p id="hero-paragraph-1" class="from-right slide-in showContent">Starfield es el primer universo nuevo en 25 años que crea Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4. En este juego de aventura de próxima generación ambientado entre las estrellas, podrás crear el personaje que desees y explorar con una libertad sin precedentes mientras te embarcas en un viaje épico para desentrañar el mayor misterio de la humanidad.</p>
                </div>
                <div id="hero-text-2" class="hero-text-content">
                    <p class="from-right slide-in">Corre el año 2330. La humanidad se ha aventurado más allá de nuestro sistema solar para asentarse en planetas nuevos y vivir como un pueblo espacial. Tras dejar atrás tus humildes inicios en la minería espacial, te unirás a Constelación, el último grupo de exploradores espaciales en busca de raros artefactos por toda la galaxia, y viajarás por la vasta extensión de los Sistemas Colonizados en el juego más grande y ambicioso de Bethesda Game Studios.</p>
                </div>
                <div id="hero-text-3" class="hero-text-content">
                    <p id="hero-paragraph-3" class="from-right slide-in">Explora los Sistemas Colonizados de Starfield.Descubre los nuevos detalles de la particular ambientación de Starfield y de las facciones que la pueblan. Desde las dos mayores facciones de los Sistemas Colonizados (las Colonias Unidas y el Colectivo Freestar) y los piratas de la Flota Carmesí, hasta los intrépidos exploradores de Constelación, con los que iniciaran su viaje en el vasto universo de Starfield.</p>
                </div>
            </div>        
        </section>
        <section id="positionGalery" class="characters-galery">
            <article class="characters">
                <h2 class="title slide-up">personajes</h2>
                <div class="box-all-characters">
                    <div class="container-characters">
                        <ul>
                            <li>
                                <div class="card"> 
                                    <div class="card-front">
                                        <img src="../img/starfield/personajes/9.jfif" alt="persoanje starfield">
                                    </div> 
                                    <div class="card-back">
                                        <h3>Lothem</h3>
                                        <img src="../img/starfield/personajes/9.jfif" alt="persoanje starfield">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card"> 
                                    <div class="card-front">
                                        <img src="../img/starfield/personajes/starfield-xbox.jpg" alt="persoanje starfield">
                                    </div> 
                                    <div class="card-back">
                                        <h3>Hank</h3>
                                        <img src="../img/starfield/personajes/starfield-xbox.jpg" alt="persoanje starfield">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card"> 
                                    <div class="card-front">
                                        <img src="../img/starfield/personajes/2kdQDCEVyeR7uEFmtDPLMo.jpg" alt="persoanje starfield">
                                    </div>
                                    <div class="card-back">
                                        <h3>Alfred</h3>
                                        <img src="../img/starfield/personajes/2kdQDCEVyeR7uEFmtDPLMo.jpg" alt="persoanje starfield">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card">
                                    <div class="card-front">
                                        <img src="../img/starfield/personajes/El-protagonista-de-Starfield-no-sera-un-personaje-con-voz.jpg" alt="persoanje starfield">
                                    </div>
                                    <div class="card-back">
                                        <h3>Michelle</h3>
                                        <img src="../img/starfield/personajes/El-protagonista-de-Starfield-no-sera-un-personaje-con-voz.jpg" alt="persoanje starfield">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                <div class="container-characters">
                    <ul>
                        <li>
                            <div class="card">
                                <div class="card-front">
                                    <img src="../img/starfield/personajes/starfield-character-creation.jpg" alt="persoanje starfield">
                                </div>
                                <div class="card-back">
                                    <h3>Rochelle</h3>
                                    <img src="../img/starfield/personajes/starfield-character-creation.jpg" alt="persoanje starfield">
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <div class="card-front">
                                    <img src="../img/starfield/personajes/Los-modelos-de-personajes-realistas-de-Starfield-se-destacan-en.jpg" alt="persoanje starfield">
                                </div>
                                <div class="card-back">
                                    <h3>Vicktor</h3>
                                    <img src="../img/starfield/personajes/Los-modelos-de-personajes-realistas-de-Starfield-se-destacan-en.jpg" alt="persoanje starfield">
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <div class="card-front">
                                    <img src="../img/starfield/personajes/starfield-journey-begins.jpg" alt="persoanje starfield">
                                </div>
                                <div class="card-back">
                                    <h3>Tom and Ed</h3>
                                    <img src="../img/starfield/personajes/starfield-journey-begins.jpg" alt="persoanje starfield">
                                </div>
                            </div>
                        </li>
                        <li> 
                            <div class="card">
                                <div class="card-front">
                                    <img src="../img/starfield/personajes/starfield-traits-best.jpg" alt="persoanje starfield">
                                </div> 
                                <div class="card-back">
                                    <h3>tyra</h3>
                                    <img src="../img/starfield/personajes/starfield-traits-best.jpg" alt="persoanje starfield">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </article>
            <article class="galery" id="galery">
                <h2 class="title slide-up">multimedia</h2>
                <div class="slide-up"><img src="../img/starfield/avance y jugabilidad/img1.jpg" alt="multimedia starfield"></div>
                <div class="slide-up">
                    <button class="button-left" id="button-galery-left"><i class="fas fa-angle-left"></i></button>
                    <ul class="slide">
                        <li><div><img src="../img/starfield/avance y jugabilidad/img1.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img2.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img3.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img4.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img5.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img6.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img7.jpg" alt="multimedia starfield"></div></li>
                        <li><div><img src="../img/starfield/avance y jugabilidad/img8.jpg" alt="multimedia starfield"></div></li>
                    </ul>
                    <button class="button-right" id="button-galery-right"><i class="fas fa-angle-right"></i></button>
                </div>
                <div class="pag-slide"></div>
            </article>
            <div class="spriteSheet-background">
                <div class="astronaut"></div>
            </div>
        </section>
        <section class="features">
            <article>
                <h2>informacion adicional</h2>
                <div>
                    <div>
                        <img src="../img/starfield/avance y jugabilidad/clasificacion.jpg" alt="clasificacion juego">
                    </div>
                    <div>      
                        <h3>clasificacion pendiente</h3>
                        <p>El contenido puede ser inapropiado para menores de edad. Para obtener información sobre la clasificación, consulta ESRB.org.</p>
                    </div>
              </div>
                <ul>
                    <li>
                        <h3>género</h3>
                        <p>aventura</p>
                    </li>
                    <li>
                        <h3>publicado por</h3>
                        <p>bethesda softworks</p>
                    </li>
                    <li>
                        <h3>características</h3>
                        <p>un solo jugador</p>
                    </li>
                    <li>
                        <h3>fecha de lanzamiento</h3>
                        <p>12/02/2023</p>
                    </li>
                    <li>
                        <h3>desarrollador</h3>
                        <p>bethesda game Studios</p>
                    </li>
                </ul>
            </article>
        </section>
        <section class="card-game">
            <div><img src="../img/starfield/starfield.jpeg" alt="starfield"></div>
            <div>
                <h2>starfield</h2>
                <p>12/02/2023 00:00 gmt-3</p>
                <div>
                    <button><a href="">reservar</a></button>
                </div>
            </div>
        </section>
    </main>
    
    <section class="news-game-section slideshow">
        <div class="wrapper-scroll">
            <div class="scrolling-wrapper-card">
                <div class="slide fade">
                    <img class="card-wallpaper" src="./images/news/half-life11.png" >   
                </div>
          
                <div class="slide fade">   
                    <img class="card-wallpaper" src="./images/news/half-life12.png">       
                </div>
          
                <div class="slide fade">
                    <img class="card-wallpaper" src="./images/news/half-life1.png" >    
                </div>
            </div>
        </div>
        <div class="btns">
            <button class="btn-carousel" onclick="plusSlides(-1)"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="btn-carousel" onclick="plusSlides(1)"><i class="fa-solid fa-chevron-right"></i></i></button>
        </div>
    </section>
    <div class="dot-style">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
   `;
    generateSlideIndicators();
    setActiveImage(i);
    showSlides(1);
    loadWallpaperCarousels();
    card();
    setInterval(()=> {plusSlides(1);}, 3000);

}

let gameImages = [
    "./images/game/Rectangle21.png",
    "./images/game/Rectangle21_1.png",
    "./images/game/Rectangle21_2.png",
    "./images/game/Rectangle21_3.png",
    "./images/game/Rectangle21_3.png",

]



async function loadGame(){
    document.getElementById("main-container").innerHTML = `
        <div class="route-container route">
            <h4 onclick="loadContent()">> Home </h4>
            <h4 onclick="loadContent()">> Games </h4>
            <h4>> Tabletop </h4>
            <h4>> 4-In-a-Row: Dragon Ball > </h4>
        </div>
        <div class="game-title-container">
            <h1>4-In-a-Row: Dragon Ball</h1>
            <h3 class="community-hub-button">
                Community Hub
            </h3>
        </div>
        <div class="hero" id="div-hero-game">
        <section class="game-section game-section-container">
    <img class="game-background-wallpaper" src="./images/game/Rectangle21_2.png" alt="Game wallpaper">
    <img class="game-front-image-1" src="./images/game/front-wallpaper.png">
    <button class="play game-play-button" id="btn-play-cel">play</button>
</section>
</div>


        <div class="hero" id="div-hero-game">
        <!-- background image -->
     
        <div class="hero-title" id="hero-title-jugar">
            <h1 class="titles"4-In-a-Row: Dragon Ball</h1>
          
        </div>

        <div class="hero-title-play" id="hero-title-jugar-opciones">
            <h1 class="titles">4-In-a-Row: Dragon Ball</h1>
            <div class="div-btns-play">
                <div>
                    <input type="radio" name="dificultad" value="4" id="radio-facil" checked />
                    <label for="radio-facil">play with 4 </label>
                    <input type="radio" name="dificultad" value="5" id="radio-moderada" />
                    <label for="radio-moderada">play with 5 </label>
                    <input type="radio" name="dificultad" value="6" id="radio-dificil" />
                    <label for="radio-dificil">play with 6 </label>
                    <input type="radio" name="dificultad" value="7" id="radio-epica" />
                    <label for="radio-epica">play with 7 </label>
                </div>
                <div class="jugador-seleccion">
                    <input type="text" class="text-jugador" id="text-jugador1" name="text-jugador1" value="Player 1"
                        placeholder="Player 1" />
                    <div class="leftside">
                        <label class="labelexpanded">
                            <input type="radio" name="target1" checked value="goku">
                            <div class="radio-btns"> <img src="fichas/goku.png" />
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target1" disabled value="mayinbu">
                            <div class="radio-btns"> <img src="fichas/mayinbu.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target1" value="picoro">
                            <div class="radio-btns"> <img src="fichas/picoro.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target1" value="gohan">
                            <div class="radio-btns"> <img src="fichas/gohan.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target1" value="android 18">
                            <div class="radio-btns"> <img src="fichas/android 18.png">
                            </div>
                            </input>
                        </label>
                    </div>
                </div>

                <div class="jugador-seleccion">
                    <input type="text" class="text-jugador" id="text-jugador2" name="text-jugador2" value="Player 2"
                        placeholder="Player 2" />
                    <div class="leftside">
                        <label class="labelexpanded">
                            <input type="radio" name="target2" disabled value="goku">
                            <div class="radio-btns"> <img src="fichas/goku.png" />
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target2" checked value="mayinbu">
                            <div class="radio-btns"> <img src="fichas/mayinbu.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target2" value="picoro">
                            <div class="radio-btns"> <img src="fichas/picoro.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target2" value="gohan">
                            <div class="radio-btns"> <img src="fichas/gohan.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="target2" value="android 18">
                            <div class="radio-btns"> <img src="fichas/android 18.png">
                            </div>
                            </input>
                        </label>
                    </div>
                </div>
                <div>
                    <button class="item-btn btn-play" id="btn-play-start">Play</button>
                    <button class="item-btn item-btn-bajando" id="btn-play-cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <div class="content-canvas">
        <div class="turno-canvas">
        </div>
        <div class="timer-canvas"></div>
        <div class="btn-canvas">
            <button class="item-btn btn-play" id="btn-reiniciar">Restart</button>
            <button class="item-btn item-btn-bajando" id="btn-game-out">Exit</button>
        </div>
        <div class="resultado-canvas">
        </div>
        <div id="output" style="position:absolute; padding:5px;"></div>
        <canvas id="canvas" class="canvas"></canvas>
    </div>



<section class="game-section">
    <div class="game-info-carousel">
        <div class="info-box description-game">
            <p>Check out this totally cool game, very fun, very classic, best description ever. Don’t forget to leave a comment or review</p>
        </div>
    </div>
</section>

    <div class="review-title"><h1>Leave a Review..</h1></div>
<section class="review-box-section">
    <div class="form-section">
        <div class="comment-form-wrapper">
            <input type="text" class="comment-write-box">
            <div class="like-dislike-container">
                <img class="like-button" src="./images/game/thumbs-up.png">
                <img class="dislike-button" src="./images/game/thumbs-down.png">
            </div>
        </div>
        <button class="send-button" type="button">Send</button>
    </div>
</section>


<section class="review-coments">
    <div class="coments">
        <p><strong>JUANPAONE0097</strong>  • 2 month(s) ago.</P>
        <br>
        <p>holaa links MF de P2P caidos!</p>
        <br>
        <p class="report-coments">• Reply • Report</p>
    </div>

        <img class="like-button-coments" src="./images/game/thumbs-up.png">
        <img class="dislike-button-coments" src="./images/game/thumbs-down.png">

    <div class="coments">
        <p><strong>RIUHAYABUZA</strong>  • 4 month(s) ago.</P>
        <br>
        <p> cual es la diferencia entre versiones por que una dice p2p</p>
        <br>
        <p class="report-coments">• Reply • Report</p>
    </div>
    <img class="like-button-coments" src="./images/game/thumbs-up.png">
    <img class="dislike-button-coments" src="./images/game/thumbs-down.png">
    <div class="coments">
        <p><strong>NUMBERSIX</strong>  • 8 month(s) ago.</P>
        <br>
        <p>Los links de mediafire en la version P2P estan caidos al parecer</p>
        <br>
        <p class="report-coments">• Reply • Report</p>
    </div>
    <img class="like-button-coments" src="./images/game/thumbs-up.png">
    <img class="dislike-button-coments" src="./images/game/thumbs-down.png">
    <div class="coments response">
        <p><strong>KHRIZ -> NUMBERSIX</strong>  • 2 month(s) ago.</P>
        <br>
        <p>Actualizado!</p>
        <br>
        <p class="report-coments">• Reply • Report</p>
    </div>
    <img class="like-button-coments" src="./images/game/thumbs-up.png">
    <img class="dislike-button-coments" src="./images/game/thumbs-down.png">
    <div class="coments">
        <p><strong>RODMENTOR</strong>  • 2 month(s) ago.</P>
        <br>
        <p>falta el archivo 5!!</p>
        <br>
        <p class="report-coments">• Reply • Report</p>
    </div>
    <img class="like-button-coments" src="./images/game/thumbs-up.png">
    <img class="dislike-button-coments" src="./images/game/thumbs-down.png">
   
</section>  



        `;
    init();



    let cards = [];
    for (let img of gameImages) {
        cards.push(new WallpaperCard(img).img);
    }
    let gameInfo = new CarouselNews(cards);
    for (let card of gameInfo.cards) {
        card.classList.remove("card-wallpaper");
    }
    document.getElementsByClassName("game-info-carousel").item(0).appendChild(gameInfo.section);


}
