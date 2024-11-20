/*==scrolling section active link====*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==scrolling section active link====*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

document.addEventListener("DOMContentLoaded", () => {
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offSet = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offSet && top < offSet + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });

    /*==sticky navbar====*/

    header.classList.toggle("sticky", window.scrollY > 100);

    /*==remove menu icon navbar when click navbar link (scroll)====*/
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

/*==Testimonial Swipper====*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==dark light mode====*/
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*== scroll reveal====*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper,.contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img img, .heading2", {
  origin: "left",
});
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
/*ScrollReveal().reveal(".resume-heading", {
  reset: true,
  origin: "top",
});*/

/*-------------resume-------------------*/
const resumeBtns = document.querySelectorAll(".resume-btn");
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

/*-------carousel slide-----------

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
let index = 0;
const maxIndex = 5;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
  if (index === 0) {
    arrowLeft.classList.add("disabled");
  } else {
    arrowLeft.classList.remove("disabled");
  }

  if (index === maxIndex) {
    arrowRight.classList.add("disabled");
  } else {
    arrowRight.classList.remove("disabled");
  }
};
// Right arrow event
arrowRight.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    activePortfolio();
  }
});

// Left arrow event
arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    activePortfolio();
  }
});
activePortfolio(); */
