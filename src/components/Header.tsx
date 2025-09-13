import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          Everett Barbershop
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Team', 'Contact'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </a>
                </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center py-4">
            {['Home', 'About', 'Services', 'Gallery', 'Team', 'Contact'].map(item => <li key={item} className="py-2">
                  <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                </li>)}
          </ul>
        </div>}
    </header>;
}