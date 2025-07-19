import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <nav className="bg-blue-900 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white flex items-center">
              🐧 Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-200 hover:text-white transition duration-300">Home</a>
              <a href="#about" className="text-blue-200 hover:text-white transition duration-300">About</a>
              <a href="#projects" className="text-blue-200 hover:text-white transition duration-300">Projects</a>
              <a href="#contact" className="text-blue-200 hover:text-white transition duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <a 
                  href="#home" 
                  className="text-blue-200 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-blue-200 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-blue-200 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-blue-200 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 pt-24 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-4xl md:text-6xl mb-4">🐧</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 px-4">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 px-4">Frontend Developer & UI/UX Enthusiast</p>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-200 px-4">As cool as a penguin in the Arctic! 🐧❄️</p>
          <button className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg text-sm md:text-base">
            View My Work 🐧
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-800 px-4">About Me 🐧</h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://via.placeholder.com/400x300/1e40af/ffffff?text=🐧" 
                alt="Profile" 
                className="rounded-lg shadow-lg border-4 border-blue-200 w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Hello, I'm [Your Name] 🐧</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                I'm a passionate frontend developer with experience in React, TypeScript, and modern web technologies. 
                Just like penguins are excellent swimmers, I'm great at diving deep into code! 🐧💻
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Frontend Development</h4>
                  <p className="text-xs md:text-sm text-gray-600">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">UI/UX Design</h4>
                  <p className="text-xs md:text-sm text-gray-600">Figma, Adobe XD, Prototyping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-800 px-4">My Projects 🐧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition duration-300">
              <img 
                src="https://via.placeholder.com/400x250/1e40af/ffffff?text=🐧+E-commerce" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">E-commerce Platform 🐧</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">A modern e-commerce platform built with React and Node.js</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition duration-300">
              <img 
                src="https://via.placeholder.com/400x250/1e40af/ffffff?text=🐧+Task+App" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Task Management App 🐧</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">A collaborative task management application with real-time updates</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">React</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Firebase</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition duration-300 md:col-span-2 lg:col-span-1">
              <img 
                src="https://via.placeholder.com/400x250/1e40af/ffffff?text=🐧+Weather" 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Weather Dashboard 🐧</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">A beautiful weather dashboard with location-based forecasts</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">React</span>
                  <span className="bg-orange-100 text-orange-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">OpenWeather API</span>
                  <span className="bg-teal-100 text-teal-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-blue-800 px-4">Get In Touch 🐧</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out! As friendly as a penguin! 🐧❤️
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-blue-800 text-sm md:text-base">Email</h3>
              <p className="text-gray-600 text-sm md:text-base">your.email@example.com</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold text-blue-800 text-sm md:text-base">Phone</h3>
              <p className="text-gray-600 text-sm md:text-base">+1 (555) 123-4567</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold text-blue-800 text-sm md:text-base">Location</h3>
              <p className="text-gray-600 text-sm md:text-base">San Francisco, CA</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-sm md:text-base">
            Send Message 🐧
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base">&copy; 2024 Your Name. All rights reserved. 🐧</p>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-3 md:mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300 text-sm md:text-base">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300 text-sm md:text-base">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300 text-sm md:text-base">Twitter</a>
          </div>
          <div className="mt-3 md:mt-4 text-blue-200 text-sm md:text-base">
            Made with ❤️ and 🐧
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
