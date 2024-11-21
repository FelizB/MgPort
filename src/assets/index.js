/*==scrolling section active link====*/

document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.querySelector(".navbar");
  let menuIcon = document.querySelector("#menu-icon");
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
});

/*==scrolling section active link====*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  /*==sticky navbar====*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==remove menu icon navbar when click navbar link (scroll)====*/
  let menuIcon = document.querySelector("#menu-icon");

  let navbar = document.querySelector(".navbar");
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==dark light mode====*/
document.addEventListener("DOMContentLoaded", () => {
  let darkModeIcon = document.querySelector("#darkMode-icon");
  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
  };
});
