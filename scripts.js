document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "#c47d53";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
  });
});

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}