const navItems = document.getElementsByClassName("nav-item");
const logo = document.getElementsByClassName("logo")[0];
const navList = document.getElementsByClassName("nav-list")[0];

window.onscroll = () => {
    if (window.matchMedia("(min-width: 1200px)")) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            for (let item of navItems) {
                item.style.fontSize = '1rem';
            }
            logo.style.height = '60px';
            logo.style.paddingLeft = '0px';
            navList.style.padding = '0px';
        } else {
            for (let item of navItems) {
                item.style.fontSize = '1.5rem';
            }
            logo.style.height = '60px';
            logo.style.paddingLeft = '100px';
            navList.style.paddingLeft = '4rem';
        }
    }
    else if (window.matchMedia("(min-width: 550px)")){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            for (let item of navItems) {
                item.style.fontSize = '1rem';
            }
            logo.style.height = '40px';
            logo.style.paddingLeft = '0px';
            navList.style.padding = '0px';
        } else {
            for (let item of navItems) {
                item.style.fontSize = '1.5rem';
            }
            logo.style.height = '60px';
            logo.style.paddingLeft = '0px';
            navList.style.paddingLeft = '0px';
        }
    }
}