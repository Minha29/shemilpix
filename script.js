function toggleMenu() {

const nav = document.querySelector("nav");

nav.classList.toggle("active");

}


/* Close mobile menu when clicking a link */

document.querySelectorAll("nav a").forEach(function(link) {

link.addEventListener("click", function() {

document.querySelector("nav").classList.remove("active");

});

});

