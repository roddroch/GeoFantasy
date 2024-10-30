function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/icon-hmgr.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/icon-close.png";
    }
}

function menuSelect() {
    let menuMobile = document.querySelector('.mobile-menu2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon2').src = "imgs/icon-hmgr.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon2').src = "imgs/icon-close.png";
    }
}

