const navItems = document.getElementsByClassName("nav-item");
const logo = document.getElementsByClassName("logo")[0];
const navList = document.getElementsByClassName("nav-list")[0];
const menuVertical = document.querySelector("#menuVertical");

window.onscroll = () => {
    if (window.matchMedia("(min-width: 1200px)")) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            for (let item of navItems) {
                item.style.fontSize = '1rem';
            }
            menuVertical.style.transform = "translateX(-12rem)";
            logo.style.height = '60px';
            logo.style.marginLeft = '0px';
            navList.style.margin = '0px';
            navList.style.transition = "all 1s";
            logo.style.transition = "all 1s";
            menuVertical.style.transform = "translateX(-12rem)";
           
           
           
        } else {
            menuVertical.style.transform = "translateX(0)";
            for (let item of navItems) {
                item.style.fontSize = '1.5rem';
            }
            logo.style.height = '60px';
            logo.style.marginLeft = '100px';
           
           
        }
    }
    else if (window.matchMedia("(min-width: 550px)")){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            for (let item of navItems) {
                item.style.fontSize = '1rem';
            }
            logo.style.height = '40px';
            logo.style.marginLeft = '0px';
            navList.style.margin = '0px';
        } else {
            for (let item of navItems) {
                item.style.fontSize = '1.5rem';
            }
            logo.style.height = '60px';
            logo.style.paddingLeft = '0px';
            navList.style.marginLeft = '0px';
        }
    }
}