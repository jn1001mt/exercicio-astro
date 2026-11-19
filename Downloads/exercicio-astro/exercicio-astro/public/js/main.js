// NORD — interações simples do site-base

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
const menuLinks = document.querySelectorAll(".main-nav a");
const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// A campanha promocional foi implementada depois da primeira versão.
// Observe o que acontece quando seu espaço não é reservado antes da exibição.
const homeMain = document.querySelector('.page-content');
if (homeMain && document.querySelector('.hero')) {
  setTimeout(() => {
    const announcement = document.createElement('div');
    announcement.className = 'campaign-announcement';
    announcement.innerHTML = '<div class="container">Oferta de boas-vindas: conheça os três perfis de torra <a href="/torras/">Ver torras</a></div>';
    homeMain.prepend(announcement);
  }, 1100);
}
const newsletter = document.querySelector('#newsletter-form');
newsletter?.addEventListener('submit', (event) => { event.preventDefault(); alert('Formulário demonstrativo: nenhuma informação foi enviada.'); });
