import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Property', path: '/property' },
  { name: 'Agent', path: '/agent' },
];

const primaryButtonClass =
  "bg-[#34A264] text-white font-bold font-montserrat py-2 px-4 rounded-md shadow-md transition duration-300";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 🧠 Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClasses = (path) => {
    const base = `transition duration-200 ${
      isScrolled ? "text-gray-800 hover:text-[#34A264]" : "text-white hover:text-[#34A264]"
    }`;
    const active = isScrolled
      ? "text-[#34A264] font-medium border-b-2 border-[#34A264]"
      : "text-[#34A264] font-medium border-b-2 border-[#34A264]";
    return `${base} ${location.pathname === path ? active : ""}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full md:px-16 px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div
          className={`text-2xl font-normal font-montserrat transition duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          LOGO
        </div>

        {/* -------------------- Desktop Menu -------------------- */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex font-light font-montserrat space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <button className={primaryButtonClass}>Contact us</button>
        </div>

        {/* -------------------- Mobile Menu Icon -------------------- */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* -------------------- Mobile Dropdown -------------------- */}
      <div
        className={`md:hidden absolute right-0 w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-4 pb-6 space-y-2 font-montserrat text-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-[#34A264]"
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-4">
            <button
              className={`${primaryButtonClass} w-full`}
              onClick={toggleMenu}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
