// burger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", burgerClick);
function burgerClick() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}

// projekt knapper
const buttons = document.querySelectorAll(".cta");
const projects = document.querySelectorAll(".project");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // fjern active fra alle
    buttons.forEach((btn) => btn.classList.remove("active"));
    projects.forEach((project) => project.classList.remove("active"));

    // aktivér valgt
    button.classList.add("active");
    const target = button.dataset.target;
    document.getElementById(target).classList.add("active");
  });
});

// billede slider
document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("aktiv"));
    slides[i].classList.add("aktiv");
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
});

