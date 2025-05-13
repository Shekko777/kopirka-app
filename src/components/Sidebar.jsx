import './Sidebar.css';
import ThemeButton from './ThemeButton';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <header className="header">
        <h1 className="header__title"><span className="header__title-span">К</span>опирка</h1>
      </header>

      <ul className="sidebar__list">
        <li className="sidebar__item sidebar__item_active">Макросы</li>
        <li className="sidebar__item">Карточки</li>
        <li className="sidebar__item">Ссылки</li>
      </ul>

      <ThemeButton />
    </nav>
  )
}