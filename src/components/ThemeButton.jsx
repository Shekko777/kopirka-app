import React from "react";

export default function ThemeButton() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(t => (t === "light" ? "dark" : "light"));
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
  };

  return (
    <button
      className="theme-toggle"
      aria-label="Переключить тему"
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 40,
        left: 0,
        right: 0,
        margin: "0px auto"
      }}
    >
      {theme === "light" ? (
        // Луна
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z"
            fill="#302762"
          />
        </svg>
      ) : (
        // Солнце
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" fill="#FFEB3B" />
          <g stroke="#FFEB3B" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      )}
    </button>
  );
}