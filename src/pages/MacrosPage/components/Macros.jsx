export default function Macros({ title, text }) {
  function handleCopyTextOnClick(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(text);
  }

  return (
    <li className="macros__item" onClick={handleCopyTextOnClick}>
      <p className="macros__text">{title}</p>
      <button className="macros__button">
        <svg width="20" height="15" viewBox="0 0 50 50" fill="none">
          <circle cx="8" cy="25" r="6" fill="#222" />
          <circle cx="27" cy="25" r="6" fill="#222" />
          <circle cx="48" cy="25" r="6" fill="#222" />
        </svg>
      </button>
    </li>
  );
}
