import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import ThemeButton from '../ThemeButton/ThemeButton';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <header className="header">
        <h1 className="header__title"><span className="header__title-span">К</span>опирка</h1>
      </header>

      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/" className={({isActive}) => isActive ? 'sidebar__navlink sidebar__navlink_active' : 'sidebar__navlink'}>
            <svg viewBox="0 0 50 50" width="35" height="35" fill="none">
              <rect x="10" y="13" width="30" height="17" rx="2" fill="#f7f7fa" stroke="#222" stroke-width="2"/>
              <rect x="10" y="29" width="30" height="4" rx="1.5" fill="#e0e0e0" stroke="#222" stroke-width="1"/>
              <rect x="21" y="33" width="8" height="3" rx="1" fill="#cfcfd1" stroke="#222" stroke-width="1"/>
              <polygon points="17,38 33,38 30,43 20,43" fill="#bebebe" stroke="#222" stroke-width="1"/>
              <rect x="13" y="16" width="10" height="3" rx="1.5" fill="#fff" fill-opacity="0.45"/>
            </svg>
            Главная  
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/macros" className={({isActive}) => isActive ? 'sidebar__navlink sidebar__navlink_active' : 'sidebar__navlink'}>
            <svg viewBox="0 0 50 50" width="35" height="35" fill="none">
              <polygon points="12,31 38,31 36,36 14,36" fill="#e4c8b4" />
              <rect x="12" y="23" width="26" height="8" rx="2" fill="#fbc280" stroke="#222" stroke-width="2" />
              <polygon points="14,17 36,17 35,25 15,25" fill="#9fd2fc" stroke="#222" stroke-width="2"/>
              <rect x="16" y="11" width="18" height="6" rx="1.5" fill="#d1efa6" stroke="#222" stroke-width="2"/>
              <rect x="17" y="12" width="8" height="2" rx="1" fill="#fff" fill-opacity="0.6"/>
            </svg>
            Макросы
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/cards" className={({isActive}) => isActive ? 'sidebar__navlink sidebar__navlink_active' : 'sidebar__navlink'}>
            <svg viewBox="0 0 50 50" width="35" height="35" fill="none">
            <polygon points="12,37 38,37 36,41 14,41" fill="#d1dcdb"/>
            <rect x="12" y="13" width="26" height="24" rx="3" fill="#f9fbe7" stroke="#222" stroke-width="2" transform="skewY(5)"/>
            <line x1="16" y1="20" x2="34" y2="20" stroke="#bdbdbd" stroke-width="1.5" />
            <line x1="16" y1="26" x2="34" y2="26" stroke="#bdbdbd" stroke-width="1.5" />
            <line x1="16" y1="32" x2="28" y2="32" stroke="#bdbdbd" stroke-width="1.5" />
            <rect x="16" y="16" width="8" height="2" rx="1" fill="#fff" fill-opacity="0.6"/>
          </svg>
          Карточки
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/links" className={({isActive}) => isActive ? 'sidebar__navlink sidebar__navlink_active' : 'sidebar__navlink'}>
            <svg width="35" height="35" viewBox="0 0 50 50" fill="none">
            <ellipse cx="18" cy="28" rx="8" ry="3.5" fill="#f7fcff" stroke="#222" stroke-width="2"/>
            <ellipse cx="32" cy="22" rx="8" ry="3.5" fill="#e7ffe2" stroke="#222" stroke-width="2"/>
            <rect x="20" y="24" width="10" height="6" rx="3" fill="#d3e8f1"/>
            <rect x="21" y="23" width="8" height="4" rx="2" fill="#fff" stroke="#222" stroke-width="1"/>
            <ellipse cx="21" cy="27" rx="2.3" ry="0.5" fill="#fff" fill-opacity="0.7"/>
            <ellipse cx="36" cy="22" rx="2.3" ry="0.5" fill="#fff" fill-opacity="0.5"/>
          </svg>
          Ссылки
          </NavLink>
        </li>
      </ul>

      <ThemeButton />
    </nav>
  )
}