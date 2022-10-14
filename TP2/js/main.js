

"use strict"

document.querySelector(".btn_menu").addEventListener("click", function (e) {
    document.querySelector(".navigation").classList.toggle("navigation_mobil");
    
});

const buttonRight = document.getElementById('btn');
const buttonLeft = document.getElementById('btn2');
const buttonRight2 = document.getElementById('btn3');
const buttonLeft2 = document.getElementById('btn4');
const buttonRight3 = document.getElementById('btn5');
const buttonLeft3 = document.getElementById('btn6');



buttonRight.onclick = function () {
    document.getElementById('content').scrollLeft += 400;
  };
  buttonLeft.onclick = function () {
    document.getElementById('content').scrollLeft -= 400;
  };

  buttonRight2.onclick = function () {
    document.getElementById('content2').scrollLeft += 400;
  };
  buttonLeft2.onclick = function () {
    document.getElementById('content2').scrollLeft -= 400;
  };

  buttonRight3.onclick = function () {
    document.getElementById('content3').scrollLeft += 400;
  };
  buttonLeft3.onclick = function () {
    document.getElementById('content3').scrollLeft -= 400;
  };
                    
            
        
      









