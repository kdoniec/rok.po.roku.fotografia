document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#c47d53";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    toggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

const images = Array.from(document.querySelectorAll(".gallery img"));
let currentIndex = 0;

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    currentIndex = images.findIndex(image => image.src === src);
    img.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage(index) {
    const img = document.getElementById("lightbox-img");
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        img.src = images[currentIndex].src;
    }
}

function nextImage(event) {
    event.stopPropagation();
    showImage((currentIndex + 1) % images.length);
}

function prevImage(event) {
    event.stopPropagation();
    showImage((currentIndex - 1 + images.length) % images.length);
}

document.addEventListener("keydown", function (e) {
    const lightbox = document.getElementById("lightbox");
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            nextImage(e);
        } else if (e.key === "ArrowLeft") {
            prevImage(e);
        } else if (e.key === "Escape") {
            closeLightbox();
        }
    }
});