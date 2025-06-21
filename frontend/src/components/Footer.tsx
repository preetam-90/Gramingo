import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-glass-strong backdrop-blur-lg py-6 mt-16 shadow-glass-deep">
      <div className="mx-auto max-w-7xl flex flex-col items-center space-y-4 text-center">
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            {t('home')}
          </Link>
          <Link to="/browse" className="hover:underline">
            {t('browse')}
          </Link>
          <Link to="/about" className="hover:underline">
            {t('about')}
          </Link>
          <Link to="/contact" className="hover:underline">
            {t('contact')}
          </Link>
        </nav>
        <div className="space-x-4">
          <a href="#" aria-label="Twitter" className="hover:text-primary">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-primary">
            <i className="fab fa-facebook" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <p className="text-sm text-secondary">{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;