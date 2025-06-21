import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-glass backdrop-blur-xs py-6 mt-16">
      <div className="mx-auto max-w-7xl flex flex-col items-center space-y-4 text-center">
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/browse" className="hover:underline">
            Browse
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
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
        <p className="text-sm text-secondary">© {new Date().getFullYear()} Gramin Go</p>
      </div>
    </footer>
  );
};

export default Footer;