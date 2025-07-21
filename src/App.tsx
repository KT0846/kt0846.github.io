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
              <a href="#education" className="text-blue-200 hover:text-white transition duration-300">Education</a>
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
                <a href="#home" className="text-blue-200 hover:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="text-blue-200 hover:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#education" className="text-blue-200 hover:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Education</a>
                <a href="#projects" className="text-blue-200 hover:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#contact" className="text-blue-200 hover:text-white transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
          <p className="text-lg md:text-xl mb-6 md:mb-8 px-4">Data Scientist & Digital Consultant</p>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-200 px-4">Solving business problems with data, code, and a bit of penguin magic! 🐧📊</p>
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
                I'm a Data Scientist and Digital Consultant with 2 years of experience in the corporate world. I graduated two years ago and have been helping businesses make data-driven decisions ever since. Just like penguins thrive in teams, I love collaborating to solve complex problems with data, analytics, and technology! 🐧📈
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Data Science</h4>
                  <p className="text-xs md:text-sm text-gray-600">Python, Machine Learning, Data Visualization</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Digital Consulting</h4>
                  <p className="text-xs md:text-sm text-gray-600">Business Analytics, Digital Strategy, Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-800 px-4">Education 🎓</h2>
          <div className="flex flex-col gap-6">
            {/* UCL MSc */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-blue-800">University College London — MSc Computer Science</h3>
                <p className="text-gray-700">Grade: Merit | Member of UCL Chinese Students and Scholars Association (UCL CSSA)</p>
                <p className="text-gray-500 text-sm mb-1">Core Modules: Software Engineering, Machine Learning, Artificial Intelligence, App Design, Database</p>
                <p className="text-gray-500 text-sm">Summer Project: Learning Teddy Bear (Voice Assistant Development with IBM)</p>
              </div>
            </div>
            {/* Liverpool BA */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-blue-800">University of Liverpool — BA (Hons) Accounting and Finance</h3>
                <p className="text-gray-700">First Class with Honours; 3-year university scholarship as top academic performer in Management School</p>
                <p className="text-gray-500 text-sm mb-1">Core Modules: Corporate Finance, Financial Reporting, Audit, Advanced Accounting, Economics, Econometrics</p>
                <p className="text-gray-500 text-sm">Final-year project: UK online retail study – fundamental analysis, valuation, and stock recommendation of ASOS</p>
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
                src="https://via.placeholder.com/400x250/1e40af/ffffff?text=🐧+Data+Science" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Customer Segmentation Analysis 🐧</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">Used clustering and machine learning to identify key customer segments for a major client.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Python</span>
                  <span className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Machine Learning</span>
                  <span className="bg-purple-100 text-purple-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Data Viz</span>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition duration-300">
              <img 
                src="https://via.placeholder.com/400x250/1e40af/ffffff?text=🐧+Consulting" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Digital Transformation Roadmap 🐧</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">Developed a digital strategy and analytics dashboard for a corporate client to drive business growth.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Consulting</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Strategy</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Dashboard</span>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition duration-300 md:col-span-2 lg:col-span-1">
              <img 
                src="https://via.placeholder.com/400x250/1e40af/ffffff?text=🐧+Analytics" 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Sales Forecasting Model 🐧</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">Built a predictive model to forecast sales and optimize inventory for a retail client.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Forecasting</span>
                  <span className="bg-orange-100 text-orange-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Python</span>
                  <span className="bg-teal-100 text-teal-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Business</span>
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
