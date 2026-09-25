import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import PainelPage from './pages/PainelPage';
import SobrePage from './pages/SobrePage';
import './App.css';

/**
 * Shell da aplicação: Helmet + Router + Toaster + layout.
 * Estado global: Zustand (useOrganogramaStore) com persist localStorage.
 */
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Toaster position="top-right" richColors closeButton />
          <Navbar />
          <main id="conteudo-principal">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
              <Route path="/painel" element={<PainelPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route
                path="*"
                element={
                  <div className="empty-state">
                    <Banner />
                    <h2>Página não encontrada</h2>
                    <p>Use o menu para voltar ao organograma.</p>
                  </div>
                }
              />
            </Routes>
          </main>
          <Rodape />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
