import React from "react";
import Modal from "../../components/Modal/Modal.jsx";
import Macros from "./components/Macros.jsx";
import fruits from '../../utils/fruits.js';
import "./MacrosPage.css";

export default function MacrosPage() {
  const [info, setInfo] = React.useState(false);
  const [macros, setMacros] = React.useState([]);

  function handleButtonAdd() {
    setInfo(!info);
  }

  // Удаление элемента по его id
  function handleDeleteMacros(id) {
    setMacros((el) => macros.filter(el => el.id !== id));
  };

  // Записываем в macros все макросы из localStorage
  React.useEffect(() => {
    setMacros(fruits);
  }, []);

  return (
    <section className="macros">
      <Modal />
      <div className="macros-top">
        <h2 className="macros__title">Макросы</h2>
        <button className="macros__add">
          <svg width="30" height="30" viewBox="0 0 50 50" fill="none">
            <line
              x1="25"
              y1="13"
              x2="25"
              y2="37"
              stroke="#222"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="25"
              x2="37"
              y2="25"
              stroke="#222"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {!info ? (
        <div className="macros-empty">
          <h3 className="macros-empty__title">Похоже, здесь пока пусто…</h3>
          <p className="macros-empty__text">
            Пора добавить немного магии с первыми макросами! ✨
          </p>
          <button className="macros-empty__button" onClick={handleButtonAdd}>Сгенерировать макросы</button>
        </div>
      ) : (
        <ul className="macros__list">
          {macros.map(({id, title, text}) => <Macros key={id} title={title} text={text} id={id} handleDeleteMacros={handleDeleteMacros} />)}
        </ul>
      )}
    </section>
  );
}
