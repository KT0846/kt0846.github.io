import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white/80 backdrop-blur shadow-none border-b border-blue-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>
            My Portfolio
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <a href="#about" className="hover:text-gray-700 transition text-base font-medium" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>About</a>
            <a href="#experience" className="hover:text-gray-700 transition text-base font-medium" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Work Experience</a>
            <a href="#education" className="hover:text-gray-700 transition text-base font-medium" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Education</a>
            <a href="#skills" className="hover:text-gray-700 transition text-base font-medium" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Skills</a>
            <a href="#projects" className="hover:text-gray-700 transition text-base font-medium" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Projects</a>
            <a href="#contact" className="hover:text-gray-700 transition text-base font-medium" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#2563eb] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-gray-700 transition text-base font-medium" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>About</a>
              <a href="#experience" className="hover:text-gray-700 transition text-base font-medium" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Work Experience</a>
              <a href="#education" className="hover:text-gray-700 transition text-base font-medium" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Education</a>
              <a href="#skills" className="hover:text-gray-700 transition text-base font-medium" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Skills</a>
              <a href="#projects" className="hover:text-gray-700 transition text-base font-medium" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Projects</a>
              <a href="#contact" className="hover:text-gray-700 transition text-base font-medium" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold', letterSpacing: '0.05em', color: '#111' }}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
