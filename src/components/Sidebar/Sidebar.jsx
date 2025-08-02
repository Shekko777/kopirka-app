import React from 'react';
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [theme, setTheme] = React.useState("light"); // Состояние кнопки переключения темы

  // Логика переключения темы приложения
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
  };

  return (
    <aside className="sidebar">
      {/* Шапка всего приложения */}
      <header className="header">
        <h1 className="header__title">
          <span className="header__title-span">К</span>опирка
        </h1>
      </header>

      {/* Список ссылок */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__navlink nav__navlink_active" : "nav__navlink"
              }
            >
              🏠 Главная
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/macros"
              className={({ isActive }) =>
                isActive ? "nav__navlink nav__navlink_active" : "nav__navlink"
              }
            >
              📍 Макросы
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/cards"
              className={({ isActive }) =>
                isActive ? "nav__navlink nav__navlink_active" : "nav__navlink"
              }
            >
              📚 Карточки
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/links"
              className={({ isActive }) =>
                isActive ? "nav__navlink nav__navlink_active" : "nav__navlink"
              }
            >
              🔗 Ссылки
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Смена темы приложения */}
      <button
        className="sidebar__theme-toggle"
        aria-label="Переключить тему"
        onClick={toggleTheme}
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
    </aside>
  );
}
