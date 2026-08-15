// assets/js/main.js

const THEME_STORAGE_KEY = "topocheck-theme";

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
const siteHeader = document.querySelector(".site-header");

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const themeButton = document.querySelector(".theme-toggle");

  if (!themeButton) {
    return;
  }

  const darkModeEnabled = theme === "dark";

  themeButton.setAttribute(
    "aria-label",
    darkModeEnabled
      ? "Hellen Modus aktivieren"
      : "Dunklen Modus aktivieren"
  );

  themeButton.setAttribute(
    "title",
    darkModeEnabled
      ? "Heller Modus"
      : "Dunkler Modus"
  );

  themeButton.setAttribute(
    "aria-pressed",
    String(darkModeEnabled)
  );
}

function createThemeButton() {
  if (!siteHeader || document.querySelector(".theme-toggle")) {
    return;
  }

  const themeButton = document.createElement("button");

  themeButton.className = "theme-toggle";
  themeButton.type = "button";

  themeButton.innerHTML = `
        <svg class="moon-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 14.2A8.3 8.3 0 0 1 9.8 3.5
                     8.6 3.9 7.5 4.6 6.6 5.5
                     a8.3 8.3 0 0 0 11.9 11.9
                     c.9-.9 1.6-2 2-3.2Z">
            </path>
        </svg>

        <svg class="sun-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.42 1.42"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
    `;

  siteHeader.appendChild(themeButton);

  themeButton.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme || getPreferredTheme();

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  });
}

createThemeButton();
applyTheme(getPreferredTheme());

menuButton?.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(open)
  );
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (localStorage.getItem(THEME_STORAGE_KEY)) {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  });

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});