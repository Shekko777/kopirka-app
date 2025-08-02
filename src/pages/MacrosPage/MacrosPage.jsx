import React from "react";
import Modal from "../../components/Modal/Modal.jsx";
import Macros from "./components/Macros.jsx";
import "./MacrosPage.css";

export default function MacrosPage() {
  const [info, setInfo] = React.useState(false);

  function handleButtonAdd() {
    setInfo(!info);
  }

  const fruits = [
    { id: 1, title: "Яблоко", text: "Яблоко сочное, вкусное и полезное для здоровья." },
    { id: 2, title: "Банан", text: "Банан сладкий, богат калием и удобен для перекуса." },
    { id: 3, title: "Груша", text: "Груша мягкая, обладает приятным ароматом и сладостью." },
    { id: 4, title: "Персик", text: "Персик сочный, с бархатистой кожурой и нежной мякотью." },
    { id: 5, title: "Апельсин", text: "Апельсин кисло-сладкий, содержит много витамина C." },
    { id: 6, title: "Киви", text: "Киви зеленый внутри, кисло-сладкий и витаминный фрукт." },
    { id: 7, title: "Виноград", text: "Виноград мелкий, сладкий, бывает зеленый или фиолетовый." },
    { id: 8, title: "Арбуз", text: "Арбуз большой, сочный, отлично утоляет жажду летом." },
    { id: 9, title: "Ананас", text: "Ананас тропический фрукт с ярким сладким вкусом." },
    { id: 10, title: "Слива", text: "Слива мягкая, сладкая и подходит для варенья." }
  ];

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
          {fruits.map(({id, title, text}) => <Macros key={id} title={title} text={text} />)}
        </ul>
      )}
    </section>
  );
}
