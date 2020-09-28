const header = document.querySelector(".main__header");
const navigationBar = document.querySelector('.navigation');
const mobileBar = document.querySelector('.mobile__navigation');
const navItems = document.querySelectorAll('.navigation>.navbar__item');
const subMenus = document.querySelectorAll('.navbar__subMenu');
const hamburgerMenu = document.querySelector('.mobile__menu__bar');
const searchBtn = document.querySelector('.nav__search');
const searchBar = document.querySelector('.searchBar');

const positionTop = header.offsetHeight;
let count = 0;

// set the position of the navigation bar
if (positionTop !== 0) {
    mobileBar.setAttribute('style', `top: ${positionTop}px`);
}

// function when we want stretch the navigation bar 
const stretchNavbar = () => {
    subMenus.forEach(menu => menu.setAttribute('style', 'margin-top: 1em'));
    navigationBar.classList.add('pt-1');
    navigationBar.setAttribute('style', 'font-size: 14px');
    header.setAttribute('style', 'height: 64px');
    navItems.forEach(item => item.classList.add('pb-1'));
};

//reset the properties to default if the page y offset is at 0
const resetNavbar = () => {
    header.setAttribute('style', 'height: 120px');
    subMenus.forEach(menu => menu.setAttribute('style', 'margin-top: 3em'));
    navigationBar.classList.remove('pt-1');
    navigationBar.setAttribute('style', 'font-size: 16px');
    navItems.forEach(item => item.classList.remove('pb-1'));
}

// function on scroll 
const scrollFunction = () => {
    if (window.innerWidth > 1300) {
        if (window.pageYOffset > 0) {
            stretchNavbar();
        } else
            resetNavbar();
    }
}

// function for put the position of the mobile navigation bar 
const stretchFunction = () => {
    if (window.innerWidth <= 1300 && count === 0) {
        mobileBar.setAttribute('style', `top: ${header.offsetHeight}px`);
        count = 1;
    }
};


window.addEventListener('resize', stretchFunction);
window.addEventListener('scroll', scrollFunction);
hamburgerMenu.addEventListener('click', () => {
    mobileBar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('show');
    navigationBar.setAttribute('style', 'display: none');
});