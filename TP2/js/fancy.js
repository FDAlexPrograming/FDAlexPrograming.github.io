window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName("header")[0].style.fontSize = "30px";
    } else {
        document.getElementsByTagName("header")[0].style.fontSize = "90px";
    }
}