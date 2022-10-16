"use strict";


async function loadNews(){
    // try {
    //     await fetch('./pages/news.html').then(response =>{
    //         response.text().then(text => {
    //             document.getElementById('main-container').innerHTML = text;
    //         })
    //     })
    // }
    // catch (error){
    //     console.log(error)
    // }
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

async function loadGame(){
    try {
        await fetch('./pages/game.html').then(response =>{
            response.text().then(text => {
                document.getElementById('main-container').innerHTML = text;
            })
        })
    }
    catch (error){
        console.log(error)
    }
}