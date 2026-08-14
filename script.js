// =================================
// SMOOTH SCROLLING
// =================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(event) {

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


// =================================
// FULLSCREEN PHOTO VIEWER
// =================================

const photos = document.querySelectorAll(".photo-item img");

const photoViewer = document.getElementById("photoViewer");

const viewerImage = document.getElementById("viewerImage");

const closeViewer = document.getElementById("closeViewer");


photos.forEach(photo => {

photo.addEventListener("click", function() {

viewerImage.src = this.src;

photoViewer.classList.add("active");

document.body.style.overflow = "hidden";

});

});


closeViewer.addEventListener("click", function() {

photoViewer.classList.remove("active");

document.body.style.overflow = "";

});


photoViewer.addEventListener("click", function(event) {

if (event.target === photoViewer) {

photoViewer.classList.remove("active");

document.body.style.overflow = "";

}

});


// =================================
// ESC KEY TO CLOSE
// =================================

document.addEventListener("keydown", function(event) {

if (event.key === "Escape") {

photoViewer.classList.remove("active");

document.body.style.overflow = "";

}

});




