import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Browse from './pages/Browse';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const AppRouter: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  return (
    <Router>
      <header className="backdrop-blur-lg bg-glass-strong sticky top-0 z-50 shadow-glass-deep">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Gramin Go
          </Link>
          <div className="space-x-4">
            <Link to="/browse" className="hover:underline">
              {t('browse')}
            </Link>
            <Link to="/about" className="hover:underline">
              {t('about')}
            </Link>
            <Link to="/contact" className="hover:underline">
              {t('contact')}
            </Link>
            <button
              onClick={toggleLang}
              className="ml-6 rounded-full border border-primary px-3 py-1 text-sm hover:bg-primary hover:text-white transition-colors"
            >
              {i18n.language.toUpperCase()}
            </button>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-background pt-4 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;