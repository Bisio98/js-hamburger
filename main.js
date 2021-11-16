const hamburger = document.querySelector(".header-right > a");
const navMenu = document.querySelector(".hamburger-menu");
const navClose = document.querySelector(".hamburger-menu .close")

hamburger.addEventListener("click", function() {
    navMenu.classList.add("active");
});

navClose.addEventListener("click", function() {
    navMenu.classList.remove("active");
});