

"use strict"

document.querySelector(".btn_menu").addEventListener("click", function (e) {
    document.querySelector(".navigation").classList.toggle("navigation_mobil");
    
});

const buttonRight = document.getElementById('btn');
const buttonLeft = document.getElementById('btn2');



buttonRight.onclick = function () {
    document.getElementById('content').scrollLeft += 400;
  };
  buttonLeft.onclick = function () {
    document.getElementById('content').scrollLeft -= 400;
  };
                    
            
        
      









