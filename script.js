// ========================================
// SHEMILPIX
// Photography & Visual Media
// ========================================


// Make navigation links scroll smoothly

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

link.addEventListener("click", function (event) {

const target = document.querySelector(
this.getAttribute("href")
);

if (target) {

event.preventDefault();

target.scrollIntoView({
behavior: "smooth"
});

}

});

});


// Welcome message

document.addEventListener("DOMContentLoaded", function () {

console.log("Welcome to ShemilPix 📸");

});
