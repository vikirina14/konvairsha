// Scroll to Top Button
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTopBtn');
  btn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation observer
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// Анимация появления заголовка в шапке
window.addEventListener('DOMContentLoaded', () => {
  const headerContent = document.querySelector('.content');
  setTimeout(() => {
    headerContent.classList.add('visible');
  }, 200);
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".film-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Удаляем класс "active" у всех кнопок
      buttons.forEach(btn => btn.classList.remove("active"));
      // Добавляем класс "active" нажатой кнопке
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {
        const genres = card.getAttribute("data-genre").toLowerCase();
        if (filter === "all" || genres.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});