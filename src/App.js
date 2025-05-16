import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MainPage from './pages/MainPage/MainPage.jsx';
import MacrosPage from "./pages/MacrosPage/MacrosPage.jsx";
import CardsPage from './pages/CardsPage/CardsPage.jsx';
import LinksPage from './pages/LinksPage/LinksPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/macros" element={<MacrosPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
