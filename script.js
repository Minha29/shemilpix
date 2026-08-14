// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(event) {

const target = document.querySelector(this.getAttribute("href"));

if (target) {
event.preventDefault();

target.scrollIntoView({
behavior: "smooth"
});
}

});

});


// Fade-in animation when sections appear

const sections = document.querySelectorAll(
".gallery-section, .video-section, .about-section, .contact-section"
);

const observer = new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

},
{
threshold: 0.15
}
);


sections.forEach(section => {
observer.observe(section);
});
