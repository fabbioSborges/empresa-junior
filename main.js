// DOM
// abre e fecha o menu quando clicar no icone
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

//quando clicar em um icone do menu esconder

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/*mudar o header da página quando scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

const swiper = new Swiper(".swiper-container", {
  slidesPreview: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  ` 
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #equipe header, #equipe .equipes,
  #contacts .text, #contacts .links`,
  { interval: 100 }
);
