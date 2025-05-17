
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Brand Name */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-forest-600 hover:text-forest-700 transition-colors"
        >
          <Leaf className="h-8 w-8 animate-leaf-sway" />
          <span className="text-2xl font-bold">Forestify</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-auto">
          <div className="flex space-x-8">
            <Link 
              to="/learn" 
              className={`nav-link ${isActive('/learn') ? 'active' : ''}`}
            >
              Learn
            </Link>
            <Link 
              to="/calculate" 
              className={`nav-link ${isActive('/calculate') ? 'active' : ''}`}
            >
              Calculate
            </Link>
            <Link 
              to="/donate" 
              className={`nav-link ${isActive('/donate') ? 'active' : ''}`}
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Credits Button */}
        <div className="hidden md:block">
          <Link to="/credits">
            <Button variant="outline" className="border-forest-500 text-forest-600 hover:bg-forest-50">
              Credits
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:hidden mt-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/learn" 
              className={`nav-link ${isActive('/learn') ? 'active' : ''} block py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/calculate" 
              className={`nav-link ${isActive('/calculate') ? 'active' : ''} block py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Calculate
            </Link>
            <Link 
              to="/donate" 
              className={`nav-link ${isActive('/donate') ? 'active' : ''} block py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link 
              to="/credits" 
              className="block py-2 text-forest-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Credits
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
