import { createBrowserRouter, Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar.jsx"; // Боковая панель
import MainPage from './pages/MainPage/MainPage.jsx'; // Страница о продукте
import MacrosPage from "./pages/MacrosPage/MacrosPage.jsx"; // Страница макросов
import CardsPage from './pages/CardsPage/CardsPage.jsx'; // Страница с карточками
import LinksPage from './pages/LinksPage/LinksPage.jsx'; // Страница с пользовательскими ссылками

// Корневой элемент
function RootLayout() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

// Data Routes (если подзабуду - прочитать на сайте React Router)
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <MainPage />},
      {path: 'macros', element: <MacrosPage />},
      {path: 'cards', element: <CardsPage />},
      {path: 'links', element: <LinksPage />},
    ]
  }
])

export default router;