import React from 'react';

export default function MacrosMenu({text, menuOpened, setMenuOpened}) {
  
  function handleClickOnSide(evt) {
    console.log(evt.target)
    if(!evt.target.classList.contains('macros-menu__text') ) {
    }
  };

  React.useState(() => {
    document.addEventListener('click', handleClickOnSide);

    return () => {
      document.removeEventListener('click', handleClickOnSide);
    }
  }, []);

  return (
    <ul className={menuOpened ? "macros-menu macros-menu_active" : "macros-menu"}>
      <h2 className="macros-menu__text">text</h2>
    </ul>
  )
}

/*
меню открыто
нажимаю внутри меню - ничего не происходит
нажимаю не на меню - оно закрывается
*/ 