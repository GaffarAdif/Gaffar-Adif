// script.js
const sections = document.querySelectorAll(".scroll-section");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.querySelector(".animate-me").classList.add("animate");
        } else {
            section.querySelector(".animate-me").classList.remove("animate");
        }
    });
});
