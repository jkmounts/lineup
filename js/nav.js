const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav");

let menuOpen = false;

function openMenu() {
    if (menuOpen === false) {
        menu.style.display = 'flex';
        menuOpen = true;
    } else {
        menu.style.display = 'none';
        menuOpen = false;
    }
}

hamburger.addEventListener('click', openMenu);