import React from 'react';
import MacrosMenu from "./MacrosMenu";

export default function Macros({ title, text }) {
  const [menuActive, setMenuActive] = React.useState(false);

  // Копирование текста
  function handleCopyText(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(text);
  }

  function handleClickOnMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <li className="macros__item" onClick={handleCopyText}>
      {menuActive ? <MacrosMenu text={text} /> : null}
      <p className="macros__text">{title}</p>
      <button className="macros__button" onClick={handleClickOnMenu}>
        <svg width="20" height="15" viewBox="0 0 50 50" fill="none">
          <circle cx="8" cy="25" r="6" fill="#222" />
          <circle cx="27" cy="25" r="6" fill="#222" />
          <circle cx="48" cy="25" r="6" fill="#222" />
        </svg>
      </button>
    </li>
  );
}
