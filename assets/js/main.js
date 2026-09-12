/*
  js/main.js
  JavaScript del portafolio.
  - Cambia entre tema claro y oscuro.
  - Persiste la preferencia en localStorage.
  - Inserta el año actual en el footer.
  - Cierra la navbar móvil después de elegir una sección.
*/

const THEME_KEY = "portfolio-theme";

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-bs-theme") ?? "light";
}

function updateThemeButton(button) {
  if (!button) return;
  const icon = document.querySelector("#themeIcon");
  const isDark = getCurrentTheme() === "dark";
  if (icon) icon.className = isDark ? "bi bi-moon-stars" : "bi bi-sun";
  button.setAttribute("aria-label", isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
}

function initializeThemeToggle() {
  const button = document.querySelector("#themeToggle");
  if (!button) return;

  updateThemeButton(button);

  button.addEventListener("click", () => {
    const next = getCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", next);
    localStorage.setItem(THEME_KEY, next);
    updateThemeButton(button);
  });
}

function updateCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function closeMobileNavigationAfterSelection() {
  const navbar = document.querySelector(".navbar-collapse");
  if (!navbar || typeof bootstrap === "undefined") return;

  navbar.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const instance = bootstrap.Collapse.getInstance(navbar);
      if (instance) instance.hide();
    });
  });
}

// Inicialización
initializeThemeToggle();
updateCurrentYear();
closeMobileNavigationAfterSelection();
