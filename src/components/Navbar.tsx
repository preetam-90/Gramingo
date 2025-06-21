import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';
import { t } from '../i18n';

const Navbar: React.FC = () => {
  const { locale, setLocale } = useLocale();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-glass backdrop-blur-md shadow-glass border-b border-white/20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-primary">
          Gramin <span className="text-secondary">Go</span>
        </Link>
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/listings" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
              {t(locale, 'browse')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-primary' : '')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-primary' : '')}>Contact</NavLink>
          </li>
        </ul>
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as any)}
          className="bg-transparent border border-white/30 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
        >
          <option value="en">EN</option>
          <option value="hi">हिन्दी</option>
        </select>
      </nav>
    </header>
  );
};

export default Navbar;