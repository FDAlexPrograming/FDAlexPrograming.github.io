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
                    <label for="radio-facil">Jugar con 4 </label>
                    <input type="radio" name="dificultad" value="5" id="radio-moderada" />
                    <label for="radio-moderada">Jugar con 5 </label>
                    <input type="radio" name="dificultad" value="6" id="radio-dificil" />
                    <label for="radio-dificil">Jugar con 6 </label>
                    <input type="radio" name="dificultad" value="7" id="radio-epica" />
                    <label for="radio-epica">Jugar con 7 </label>
                </div>
                <div class="jugador-seleccion">
                    <input type="text" class="text-jugador" id="text-jugador1" name="text-jugador1" value="Jugador 1"
                        placeholder="Jugador 1" />
                    <div class="leftside">
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup1" checked value="goku">
                            <div class="radio-btns"> <img src="fichas/goku.png" />
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup1" disabled value="mayinbu">
                            <div class="radio-btns"> <img src="fichas/mayinbu.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup1" value="picoro">
                            <div class="radio-btns"> <img src="fichas/picoro.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup1" value="gohan">
                            <div class="radio-btns"> <img src="fichas/gohan.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup1" value="android 18">
                            <div class="radio-btns"> <img src="fichas/android 18.png">
                            </div>
                            </input>
                        </label>
                    </div>
                </div>

                <div class="jugador-seleccion">
                    <input type="text" class="text-jugador" id="text-jugador2" name="text-jugador2" value="Jugador 2"
                        placeholder="Jugador 2" />
                    <div class="leftside">
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup2" disabled value="goku">
                            <div class="radio-btns"> <img src="fichas/goku.png" />
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup2" checked value="mayinbu">
                            <div class="radio-btns"> <img src="fichas/mayinbu.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup2" value="picoro">
                            <div class="radio-btns"> <img src="fichas/picoro.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup2" value="gohan">
                            <div class="radio-btns"> <img src="fichas/gohan.png">
                            </div>
                            </input>
                        </label>
                        <label class="labelexpanded">
                            <input type="radio" name="targetgroup2" value="android 18">
                            <div class="radio-btns"> <img src="fichas/android 18.png">
                            </div>
                            </input>
                        </label>
                    </div>
                </div>
                <div>
                    <button class="item-btn btn-play" id="btn-play-start">Jugar</button>
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
            <button class="item-btn btn-play" id="btn-reiniciar">Reiniciar</button>
            <button class="item-btn item-btn-bajando" id="btn-game-out">Salir</button>
        </div>
        <div class="resultado-canvas">
        </div>
        <div id="output" style="position:absolute; padding:5px;"></div>
        <canvas id="canvas" class="canvas"></canvas>
    </div>





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
        iniciarPagina();



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
