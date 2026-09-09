"use client";

type Theme = "light" | "dark";

function activeTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  function toggleTheme() {
    const nextTheme: Theme = activeTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("wrg-theme", nextTheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "dark" ? "#101315" : "#f7f7f4");
  }

  return (
    <button
      aria-label="Toggle light and dark mode"
      className="theme-toggle"
      onClick={toggleTheme}
      title="Toggle light and dark mode"
      type="button"
    >
      <svg aria-hidden="true" className="theme-icon theme-icon-moon" viewBox="0 0 24 24">
        <path d="M19.5 14.7A7.8 7.8 0 0 1 9.3 4.5 7.9 7.9 0 1 0 19.5 14.7Z" />
      </svg>
      <svg aria-hidden="true" className="theme-icon theme-icon-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M18.7 5.3l-1.55 1.55M6.85 17.15 5.3 18.7" />
      </svg>
      <span aria-hidden="true" className="theme-toggle-label">
        <span className="theme-label-dark">Dark</span>
        <span className="theme-label-light">Light</span>
      </span>
    </button>
  );
}
