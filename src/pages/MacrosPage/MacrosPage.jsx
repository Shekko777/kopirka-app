import React from "react";
import Macros from "./components/Macros.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import "./MacrosPage.css";

export default function MacrosPage() {
  const [openedModal, setOpenedModal] = React.useState(false);

  function handleOpenedModal () {
    setOpenedModal(true);
  }

  function handleCloseModal () {
    setOpenedModal(false);
  }

  const macrosArr = [
    {
      title: "Какой-то первый макрос",
      text: "Какой-то первый копируемый текст",
      id: 1,
    },
    {
      title: "Второй макрос, уже по-лучше",
      text: "Скопировали второй текст",
      id: 2,
    },
    {
      title: "Макрос номер три, его я сделаю побольше чтобы просто потестить",
      text: "Тут я решил написать текста побольше чтобы просто его скопировать",
      id: 3,
    },
    {
      title: "Название для четвертого макроса",
      text: "Четвертый мелкий текст",
      id: 4,
    },
    {
      title: "Ну и ПЯТЫЙ для теста",
      text: "Скопировал пятый макрос",
      id: 5,
    },
  ];

  return (
    <section className="macros">
      <Modal opened={openedModal} handleCloseModal={handleCloseModal} />
      <div className="macros-top">
        <h2 className="macros__title">Макросы</h2>
        <button className="macros__add" onClick={handleOpenedModal}>
          <svg width="30" height="30" viewBox="0 0 50 50" fill="none">
            <line
              x1="25"
              y1="13"
              x2="25"
              y2="37"
              stroke="#222"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="13"
              y1="25"
              x2="37"
              y2="25"
              stroke="#222"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <ul className="macros__list">
        {macrosArr.map((el) => {
          return <Macros key={el.id} title={el.title} text={el.text} />;
        })}
      </ul>
    </section>
  );
}
