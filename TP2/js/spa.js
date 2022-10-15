"use strict";


async function loadNews(){
    try {
        await fetch('./pages/news.html').then(response =>{
            response.text().then(text => {
                document.getElementById('main-container').innerHTML = text;
            })
        })
    }
    catch (error){
        console.log(error)
    }
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