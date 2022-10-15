"use strict";

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
    if (loadingPercentage >= 100) {
        clearInterval(loaderID);
        indicator.classList.add("hidden");
        indicator.parentElement.classList.add("hidden");
        document.getElementsByTagName("footer").item(0).classList.remove("hidden");
        loadContent();
    }
}

let games = [
    {
        "title": "Star Wars: Squadrons",
        "imageURI": "./images/game1_1_2.png",
        "price": "0"
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

        buy.appendChild(priceText);
        buy.appendChild(play);
        container.appendChild(h3);
        container.appendChild(buy);
        this.card.appendChild(img);
        this.card.appendChild(container);
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
        this.sectionTitle = sectionTitle;
        // this.cards = "";
        // for (let card of cards) {
        //     // this.cards += card.getView();
        // }
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
        this.wrapperScroll.classList.add("wrapper-scroll");
        this.h1 = document.createElement("h1");
        this.h1.textContent = sectionTitle;
        this.scrollingWrapperCard = document.createElement("div");
        this.scrollingWrapperCard.classList.add("scrolling-wrapper-card");
        this.scrollingWrapperCard.appendChild(this.h1);
        // this.scrollingWrapperCard.innerHTML = this.cards;
        for (let card of cards) {
            this.scrollingWrapperCard.appendChild(card);
        }
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
    main.innerHTML += loadHeader();
    document.querySelector(".btn_menu").addEventListener("click", function (e) {
        document.querySelector(".navigation").classList.toggle("navigation_mobil");

    });
    document.querySelector(".btn_sub_menu").addEventListener("click", function (e) {
        document.querySelector(".sub_menu_display").classList.toggle("sub_menu");

    });
    main.appendChild(car1.section);
    main.appendChild(car2.section);
    main.appendChild(car3.section);
    // main.innerHTML += car1.getView();
}

function loadHeader() {
    return `<header>
        <img src="isset/tpe-interfaces-logo-grey 1.svg" alt="">
        <nav class="nav">
            <ul>
              
                <li><a>Home</a></li>
                <li> <a class="btn_sub_menu">Categories <i class="fa-solid fa-chevron-down"></i></a></li>
                <li> <a>News</a></li>
               
            </ul>
            <ul class="sub_menu_display">
                <li>Action</li>
                <li>Adventure</li>
                <li>Racing</li>
                <li>Sports</li>
                <li>Puzzle</li>
                <li>Platforms</li>
                <li>Simulation</li>
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
                <li >My profile</li> 
                <li >Acount</li>
                <li >My game library</li>
                <hr>
                <li >Log out</li>
                <hr>
                <ul>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                </ul>
            </ul>
        </nav>
    </header>
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

