import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutMarz } from './pages/AboutMarz';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Principles } from './pages/Principles';
import { Privacy } from './pages/Privacy';
import { SouqOne } from './pages/SouqOne';
import { SouqOneStudio } from './pages/SouqOneStudio';
import { Terms } from './pages/Terms';
import { Ethics } from './pages/Ethics';
import { ThankYou } from './pages/ThankYou';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMarz />} />
          <Route path="/souqone" element={<SouqOne />} />
          <Route path="/studio" element={<SouqOneStudio />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
