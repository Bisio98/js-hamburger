const hamburger = document.querySelector(".header-right .fas");
const navMenu = document.querySelector(".hamburger-menu");
const navClose = document.querySelector(".hamburger-menu .close")

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navClose.addEventListener("click", function() {
    navClose.classList.toggle("active");
    navMenu.classList.toggle("active");
});