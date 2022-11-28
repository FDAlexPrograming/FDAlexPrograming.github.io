
var i = 0;

function reset(container, clase) {
    container.forEach(item => item.classList.remove(clase));
}

function generateSlideIndicators() {
    let sliderImage = Array.from(document.querySelectorAll(".slider-image"));
    let content = document.querySelector(".animated-carousel");
    const container = document.createElement("div");
    container.className = "indicator";
    content.appendChild(container)
    sliderImage.forEach(image => {
        let indicator = document.createElement("p");
        indicator.textContent = sliderImage.indexOf(image) + 1;
        container.appendChild(indicator);
    })
}

function setActiveImage(index) {
    let content = document.querySelector(".animated-carousel");
    let sliderImage = Array.from(document.querySelectorAll(".slider-image"));
    const indicators = document.querySelectorAll('.indicator p');
    const sliderInfo = document.querySelector('.slider-info');
    sliderImage[index].classList.add('slider-image-active');
    reset(indicators, 'indicator-active');

    indicators[i].classList.add('indicator-active');
}

function setPosition(index) {
    let sliderImage = Array.from(document.querySelectorAll(".slider-image"));
    let slider = document.querySelector(".slider");
    let width = sliderImage[index].getBoundingClientRect().width;
    slider.style.transform = `translateX(-${width * index}px)`;
}

function moveImage() {
    let sliderImage = Array.from(document.querySelectorAll(".slider-image"));
    if (i === sliderImage.length) {
        i = 0; // Si el contador ya llego al ultimo item, lo manda al primer item.
    } else if (i == -1) {
        i = sliderImage.length - 1; // Si llego al primero lo manda hasta el ultimo.
    }
    reset(sliderImage, 'slider-image-active');
    setPosition(i);
    setActiveImage(i);
};

function moveImageRight() {
    i++;
    moveImage();
}

function moveImageLeft() {
    i--;
    moveImage();
}

