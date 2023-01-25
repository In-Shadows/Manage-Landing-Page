const mobileMenuBtn = document.querySelector(".mobile-menu__icon");
const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

const form = document.querySelector(".form");
const email = document.querySelector(".form__input");
const invalidText = document.querySelector(".form__invalid-text");

const testimonialsContainer = document.querySelector(".testimonials");
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let currentActiveTestimonial = 1;

// TOGGLING MOBILE MENU
mobileMenuBtn.addEventListener("click", function (e) {
  if (!mobileMenu.classList.contains("active")) {
    mobileMenu.classList.add("active");
    mobileMenuIcon.src = "images/icon-close.svg";
    overlay.classList.add("active");
  } else {
    mobileMenu.classList.remove("active");
    mobileMenuIcon.src = "images/icon-hamburger.svg";
    overlay.classList.remove("active");
  }
});

// FORM VALIDATION
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value.includes("@")) {
    email.value = "";
    email.blur();
    invalidText.classList.add("hidden");
    alert("Your email has successfully been registered for future updates");
  } else {
    invalidText.classList.remove("hidden");
    email.focus();
  }
});

// PREVENTING DEFAULT BEHAVIOUR OF ALL ANCHOR ELEMENTS
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (e) => e.preventDefault());
});

// SLIDER
function activateDot(dotNum) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
    if (dot.dataset.num === dotNum) {
      dot.classList.add("active");
    }
  });
}

function changeActiveDot() {
  testimonials.forEach((testimonial) => {
    const coords = testimonial.getBoundingClientRect();

    if (
      coords.left < window.innerWidth / 2 &&
      coords.right > window.innerWidth / 2
    ) {
      activateDot(testimonial.dataset.num);
    }
  });
}

testimonialsContainer.addEventListener("scroll", changeActiveDot);
