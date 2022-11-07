"use strict";

class CarouselNews extends Carousel {
    
    timerID;
    isMovingRight = true;

    constructor(cards,id) {
        super(id, "", cards);
        this.section.classList.remove("game-section");
        this.section.classList.add("news-game-section");
        this.timerID = setInterval(()=> { this.intervalScroll(8000) }, 5000) ;
    }

    intervalScroll(value) {
        setTimeout( ()=> {
            this.isMovingRight = !this.isMovingRight;
        }, 5000);
        if (this.isMovingRight) {
            this.scrollCarousel(value);
        } else {
            this.scrollCarousel(-1*value);
        }
    }
}

class WallpaperCard {
    img;

    constructor(img) {
        this.img = document.createElement("img");
        this.img.src = img;
        this.img.classList.add("card-wallpaper")
    }
}

class GameInfoCard {
    img;
    title;
    description;
    card;

    constructor(title, imageURI="", description="") {
        
        this.card = document.createElement("div");
        
        if (imageURI !=""){
            this.card.classList.add("game-info-card", "card-game");
            this.img = document.createElement("img");
            this.img.src = imageURI;
            this.img.classList.add("game-info-card-image");
            
            this.card.appendChild(this.img);
        }else{
            this.card.classList.add("featured");
        }
       
        
      
        this.description = document.createElement("p");
        this.description.textContent = description;
        this.description.classList.add("game-info-card-description");
        

        this.title = document.createElement("h5");
        this.title.textContent = title;
        this.title.classList.add("game-info-card-title");

        let infoBox = document.createElement("div");
        infoBox.classList.add("info-box");
        infoBox.appendChild(this.title);
        if (description !=""){
        infoBox.appendChild(this.description);
        }

        this.card.appendChild(infoBox);

    }
}

let wallpaperCards = [
    "./images/news/half-life11.png",
    "./images/news/half-life12.png",
    "./images/news/half-life1.png"
]

let gameInfoCards = [
    {
        "title": "G-Man",
        "imageURI": "./images/news/game11_4.png",
        "description": "Plays the role of a supervisor and businessman, keeping an eye on the player in the progress of the video game"
    },
    {
        "title": "Russel",
        "imageURI": "./images/news/game11_5.png",
        "description": "Is a prominent member of the Resistance who appears in Half-Life."
    },
    {
        "title": "Gordon Freeman",
        "imageURI": "./images/news/game11_1.png",
        "description": "Main protagonist of the Half-Life saga. He is a theoretical physicist who is forced to defend himself and the human race."
    },
    {
        "title": "Vortigaunt",
        "imageURI": "./images/news/game11.png",
        "description": "They come from the planet Xen, brought by G-Man since his planet was being invaded by the Combine."
    },
    {
        "title": "Alyx Vance",
        "imageURI": "./images/news/game11_2.png",
        "description": "she figures in The Resistance's battle against The Alliance which, along with Gordon Freeman, produced the start of The Uprising."
    },
    {
        "title": "Eli Vance",
        "imageURI": "./images/news/game11_6.png",
        "description": "Vance is a brilliant physicist and researcher, who apparently studied at Harvard."
    },
    {
        "title": "Headcrab",
        "imageURI": "./images/news/game11_3.png",
        "description": "The Headcrab is an alien parasite."
    }
]

let info = [{
    "title": "First-person shooter (FPS)",
},
{
    "title": "Puzzles",
},
{
    "title": "Multiplayer",
},
{
    "title": "Online PvP",
},
{
    "title": "Valve Anti-Cheat enabled",
},
{
    "title": " Single-player",
}

]

function card() {
   
    let main = document.getElementById("main-container");

    let infoCards = [];
    for (let c of info) {
        let card = new GameInfoCard(c.title, c.imageURI, c.description);
        infoCards.push(card.card);
    }
    let carousel2 = new CarouselNews(infoCards,"features");
    main.appendChild(carousel2.section);
}

function loadWallpaperCarousels() {
    // let cards = [];
    // for (let wallpaperCard of wallpaperCards) {
    //     let card = new WallpaperCard(wallpaperCard);
    //     cards.push(card.img);
    // }
    // let carousel = new CarouselNews(cards);
    let main = document.getElementById("main-container");
    // main.appendChild(carousel.section);

    let infoCards = [];
    for (let c of gameInfoCards) {
        let card = new GameInfoCard(c.title, c.imageURI, c.description);
        infoCards.push(card.card);
    }
    let carousel2 = new CarouselNews(infoCards);
    main.appendChild(carousel2.section);
}