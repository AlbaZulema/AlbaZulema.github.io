
window.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.querySelector('.carrusel-auto .carrusel');
  const leftBtn = document.querySelector('.carrusel-auto .arrow.left');
  const rightBtn = document.querySelector('.carrusel-auto .arrow.right');

  if (!carrusel) return;

  const slides = carrusel.querySelectorAll('img');
  const total = slides.length;
  let index = 0;

  const goToSlide = (i) => {
    const slideWidth = carrusel.clientWidth;
    carrusel.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
  };

  const autoSlide = () => {
    index = (index + 1) % total;
    goToSlide(index);
  };

  let interval = setInterval(autoSlide, 3000);

  rightBtn?.addEventListener('click', () => {
    index = (index + 1) % total;
    goToSlide(index);
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
  });

  leftBtn?.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    goToSlide(index);
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".menu a");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
          menu.classList.remove("open");
        }
      });
    });
  }
});