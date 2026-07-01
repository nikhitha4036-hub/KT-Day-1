import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="site-shell">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
