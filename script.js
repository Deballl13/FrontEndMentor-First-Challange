window.addEventListener('scroll', function() {
    let navigation = document.querySelector('nav');
    let windowPosition = window.scrollY > 10;
    navigation.classList.toggle('background', windowPosition);
});

const hamburgerMenu = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', function() {
    nav.classList.toggle('slide-menus');
});