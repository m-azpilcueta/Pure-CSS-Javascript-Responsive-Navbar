var hamburger = document.querySelector(".hamburger");
var primera = document.querySelector(".hamburger span:first-child");
var medio = document.querySelector(".hamburger span:nth-child(2)");
var last = document.querySelector(".hamburger span:last-child");
var mobileNav = document.querySelector(".mobile-nav");

var estado = 0;

hamburger.addEventListener("click", () => {
    if (estado == 0) {
        estado = 1;
        primera.style.animation = "mover-primera 500ms forwards";
        medio.style.animation = "bajar-opacidad 500ms forwards";
        last.style.animation = "mover-ultima 500ms forwards";
        mobileNav.style.animation = "slide-in 500ms forwards";
    } else {
        estado = 0;
        primera.style.animation = "bajar-primera 500ms forwards";
        medio.style.animation = "subir-opacidad 500ms forwards";
        last.style.animation = "bajar-ultima 500ms forwards";
        mobileNav.style.animation = "slide-out 500ms forwards";
    }
})