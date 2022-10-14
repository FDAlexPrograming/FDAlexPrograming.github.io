"use strict";

firstLoad();

let loadingPercentage = 0;
var loaderID;

function firstLoad() {
    let indicator = document.querySelector("#loader-percentage");
    indicator.textContent = "0%";
    loaderID = setInterval(()=> { increasePercentage(indicator); }, 50);
}

function increasePercentage(indicator) {
    indicator.textContent = `${loadingPercentage++}%`;
    if (loadingPercentage >= 100) {
        clearInterval(loaderID);
        indicator.classList.add("hidden");
        indicator.parentElement.classList.add("hidden");
        loadContent();
    }
}

class Card {
    title;
    imageURI;
    price;

    constructor(title, image, price) {
        this.title = title;
        this.imageURI = image;
        this.price = price;
        console.log(image);
    }

    getView() {
        return `<div class="card-game">
<!--                    <img src="isset/cart-icon.svg" class="cart-button" alt="add-to-cart image">-->
                    <img src="${this.imageURI}" alt="${this.title} image">
                    <div class="container">
                        <h3>${this.title}</h3>
                        <div class="buy">
                            <p class="price-text">${this.price === 0 ? "Free" : this.price}</p>
                            <button class="play">${this.price === 0 ? "Play" : "Buy"}</button>
                        </div>
                    </div>
                </div>`;
    }

}

class Carousel {

    id;
    cards;
    sectionTitle;
    wrapperScroll;
    h1;
    buttonLeft;
    buttonRight;
    scrollingWrapperCard;
    section;

    constructor(id, sectionTitle, cards) {
        this.id = id;
        console.log(this.id);
        this.sectionTitle = sectionTitle;
        this.cards = "";
        for (let card of cards) {
            this.cards += card.getView();
        }
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
        iconLeft.addEventListener('click', () => { this.scrollCarousel(-400)});
        iconRight.addEventListener('click', () => { this.scrollCarousel(400)});
        this.wrapperScroll = document.createElement("div");
        this.wrapperScroll.classList.add("wrapper-scroll");
        this.h1 = document.createElement("h1");
        this.h1.textContent = sectionTitle;
        this.scrollingWrapperCard = document.createElement("div");
        this.scrollingWrapperCard.classList.add("scrolling-wrapper-card");
        this.scrollingWrapperCard.appendChild(this.h1);
        this.scrollingWrapperCard.innerHTML = this.cards;
        this.section.appendChild(this.wrapperScroll);
        this.wrapperScroll.appendChild(this.scrollingWrapperCard);
        this.section.appendChild(btns);
    }

    getView() {

        return `<section>
                    <div class="wrapper-scroll">
                        <h1>${this.sectionTitle}</h1>
                        <div class="scrolling-wrapper-card" id="${this.id}">
                            ${this.cards}
                        </div>
                    </div>
                    <div class="btns">
                        <button onclick="scrollCarousel(${this.id})"><i class="fa-solid fa-chevron-left"></i></button>
                        <button><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </section>`;
    }

    scrollCarousel(value) {
        this.scrollingWrapperCard.scrollLeft += value;
    }
}

function scrollCarousel(id) {
    console.log(document.getElementById(id));
}

function loadContent() {
    let c = new Card("4-In-a-Row: Dragon Ball", "./images/game1.png", 39.99);
    let cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(c);
    }
    let car1 = new Carousel("car1", "Recommended for you", cards);
    let main = document.querySelector("#main-container");
    main.innerHTML += loadHeader();
    main.appendChild(car1.section);
    // main.innerHTML += car1.getView();
}

function loadHeader() {
    return `<header>
        <img src="isset/tpe-interfaces-logo-grey 1.svg" alt="">
        <nav class="nav">
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>News</li>
            </ul>
        </nav>
        <div class="cart-icon">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="menu-div">
            <a class="btn_menu"><i class="fas fa-bars"></i></a>
        </div>
        <nav class="menu">
            <ul class="navigation">
                <li ><h2>ALEX</h2></li> 
                <hr>
                <li ><a  href ="suscripcion.html"  class="pagina">My profile</li></a> 
                <li ><a  href ="tabla_posiciones.html"  class="pagina">Acount</li></a> 
                <li ><a  href ="entradas.html"  class="pagina">My game library</li></a> 
                <hr>
                <li ><a  href ="entradas.html"  class="pagina">Log out</li></a> 
                <hr>
                <ul>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram-square" ></i>
                    <i class="fab fa-twitter-square"></i>
                </ul>
            </ul>
        </nav>
    </header>
    <section>
        <img src="isset/background.jpg" alt="">
    </section>
    <div class="wrapper-scroll no-rell">
        <div class="scrolling-wrapper">
            <div class="card">
                <img src="isset/casual.png"Avatar" style="width:100%">
                <div class="container">
                <h2>Casual</h2>   
                </div>
            </div>
            <div class="card">
                <img src="isset/rol.png"Avatar" style="width:100%">
                <div class="container">
                <h2>Rol</h2>   
                </div>
            </div>
            <div class="card">
                <img src="isset/indie.png"Avatar" style="width:100%">
                <div class="container">
                <h2>Indie</h2>     
                </div>
            </div>
            <div class="card">
                <img src="isset/mult.png"Avatar" style="width:100%">
                <div class="container">
                <h2>Multiplayer</h2>   
                </div>
            </div>
        </div>
    </div>`;
}