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
    setInterval(()=> {plusSlides(1);}, 3000);
}

let gameImages = [
    "./images/game/Rectangle21.png",
    "./images/game/Rectangle21_1.png",
    "./images/game/Rectangle21_2.png",
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

<section class="game-section">
    <img class="game-background-wallpaper" src="./images/game/Rectangle21_2.png" alt="Game wallpaper">
    <img class="game-front-image-1" src="./images/game/front-wallpaper.png">
    <button class="play game-play-button">Play</button>
</section>
<section class="game-section">
    <div class="game-info-carousel">
        <div class="info-box">
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

        `;

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
