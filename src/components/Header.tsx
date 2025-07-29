import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 font-playfair">
              LearnXCourse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home', isLink: false },
              { name: 'About', id: 'about', isLink: false },
              { name: 'Services', id: 'services', isLink: false },
              { name: 'Projects', id: 'courses', isLink: true, to: '/info' },
              { name: 'Courses', id: 'projects', isLink: true, to: '/courses' },
              { name: 'Contact', id: 'contact', isLink: false }
            ].map((item) => (
              item.isLink ? (
                <Link
                  key={item.id}
                  to={item.to}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group font-inter"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group font-inter"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-xl shadow-lg animate-fade-in">
            <nav className="py-4 space-y-4">
              {[
                { name: 'Home', id: 'home', isLink: false },
                { name: 'About', id: 'about', isLink: false },
                { name: 'Services', id: 'services', isLink: false },
                { name: 'Courses', id: 'courses', isLink: true, to: '/info' },
                { name: 'Projects', id: 'projects', isLink: true, to: '/projects' },
                { name: 'Contact', id: 'contact', isLink: false }
              ].map((item) => (
                item.isLink ? (
                  <Link
                    key={item.id}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg mx-2 font-inter"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg mx-2 font-inter"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
