 import './sass/style.scss';

function menuToggle() {
  var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("open");
};
var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", menuToggle);
