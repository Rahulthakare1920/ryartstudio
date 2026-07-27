const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menu.classList.toggle("open");

});
