import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-glass backdrop-blur-md shadow-glass border-t border-white/20 text-sm">
    <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Gramin Go</h3>
        <p className="text-gray-700">© {new Date().getFullYear()} Gramin Go. All rights reserved.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Listings</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-primary"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary"><FaTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary"><FaInstagram /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;