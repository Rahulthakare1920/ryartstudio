// ===== Page Loader =====
function hidePageLoader() {
    const loader = document.getElementById("pageLoader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 300);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hidePageLoader);
} else {
    hidePageLoader();
}

// ===== Mobile Hamburger Menu =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navMenu");
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// ===== Hero Slider =====
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}

// ===== Gallery Lightbox =====
const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;
if (lightbox) {
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });
    function showImage() {
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
    }
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    });
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    });
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % images.length;
                showImage();
            }
            if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage();
            }
            if (e.key === "Escape") {
                lightbox.style.display = "none";
            }
        }
    });
}
