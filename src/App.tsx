import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projects = [
    {
      title: 'Customer Segmentation Analysis 🐧',
      desc: 'Used clustering and machine learning to identify key customer segments for a major client.',
      tags: ['Python', 'Machine Learning', 'Data Viz'],
    },
    {
      title: 'Digital Transformation Roadmap 🐧',
      desc: 'Developed a digital strategy and analytics dashboard for a corporate client to drive business growth.',
      tags: ['Consulting', 'Strategy', 'Dashboard'],
    },
    {
      title: 'Sales Forecasting Model 🐧',
      desc: 'Built a predictive model to forecast sales and optimize inventory for a retail client.',
      tags: ['Forecasting', 'Python', 'Business'],
    },
    {
      title: 'Baby Concentration Tracker App Development 🐧',
      desc: 'Collaboratively coded a mobile app using Node.js, React Native and MySQL that allows users to monitor a baby’s mental development through playing slideshows with images and providing a visualisation of the baby’s progress. Implemented a comprehensive testing strategy for unit, integration and stress testing using jest and K6.',
      tags: ['Node.js', 'React Native', 'MySQL', 'Jest', 'K6'],
    },
    {
      title: 'Online Auction Website Development 🐧',
      desc: 'Led a team of 4 to develop an online auction site using a MAMP stack that allows users to buy and sell items and provides users with recommendations through collaborative filtering.',
      tags: ['MAMP', 'Team Leadership', 'Collaborative Filtering'],
    },
  ];
  const [projectIdx, setProjectIdx] = useState(0);
  const prevProject = () => setProjectIdx((i) => (i === 0 ? projects.length - 1 : i - 1));
  const nextProject = () => setProjectIdx((i) => (i === projects.length - 1 ? 0 : i + 1));

  // Carousel logic for 3-card display
  const getProject = (offset: number) => {
    const idx = (projectIdx + offset + projects.length) % projects.length;
    return projects[idx];
  };

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
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Hello, I'm Laura YU 🐧</h3>
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

      {/* Work Experience Section */}
      <section id="experience" className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-800 px-4">Work Experience 💼</h2>
          <div className="flex flex-col gap-6">
            {/* ARUP Group Limited Full-Time Experience */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-blue-800">Assistant Digital Consultant / Assistant Data Scientist</h3>
                <p className="text-gray-700 mb-1">ARUP Group Limited, Hong Kong | Apr 2025 – Present (Assistant Digital Consultant), Jun 2025 – Apr 2025 (Assistant Data Scientist)</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-1">
                  <li>Developed and deployed data-driven solutions to solve business problems</li>
                  <li>Collaborated with cross-functional teams to deliver digital transformation projects</li>
                  <li>Utilized machine learning, analytics, and visualization to drive decision-making</li>
                  <li>Communicated insights and recommendations to stakeholders</li>
                </ul>
              </div>
            </div>
            {/* Grant Thornton China Internship */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-blue-800">Technology Consultant Intern</h3>
                <p className="text-gray-700 mb-1">Grant Thornton China, Beijing, China | Nov 2022 – Jan 2023</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-1">
                  <li>Conducted comprehensive risk assessment of company’s IT infrastructure, policies, and operations in the context of East 5.0 Chinese Bank Data Governance Guidelines and completed audit working papers</li>
                  <li>Assisted the review of internal audit plans and related follow-ups, and performed the tests of data validation in SQL</li>
                </ul>
              </div>
            </div>
            {/* SAIF Partners China Internship */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-blue-800">Summer Analyst Intern</h3>
                <p className="text-gray-700 mb-1">SAIF Partners China, Xiamen, China | Jul 2019 – Aug 2019</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-1">
                  <li>Performed Chinese heating household appliances industry analysis, identified target companies and proposed investment ideas and thesis to branch senior management, and drafted presentations for weekly meetings</li>
                  <li>Assisted in-depth financial and operational due-diligence process on client company, analysed market trends, competition, and potential strategic partners using information obtained from multiple data sources</li>
                </ul>
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
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <button
              aria-label="Previous project"
              onClick={prevProject}
              className="rounded-full bg-blue-200 hover:bg-blue-300 text-blue-800 p-3 shadow transition disabled:opacity-50"
              disabled={projects.length <= 1}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="flex items-center justify-center w-full max-w-4xl overflow-hidden">
              {[ -1, 0, 1 ].map((offset) => {
                const idx = (projectIdx + offset + projects.length) % projects.length;
                return (
                  <div
                    key={idx}
                    className="flex-1 mx-1 md:mx-2 min-w-[22rem] max-w-lg h-[22rem] md:h-[20rem] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-blue-100 transition-all duration-500"
                    style={{ opacity: 1 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">{projects[idx].title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{projects[idx].desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[idx].tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              aria-label="Next project"
              onClick={nextProject}
              className="rounded-full bg-blue-200 hover:bg-blue-300 text-blue-800 p-3 shadow transition disabled:opacity-50"
              disabled={projects.length <= 1}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === projectIdx ? 'bg-blue-800' : 'bg-blue-200'}`}
                onClick={() => setProjectIdx(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
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
              <p className="text-gray-600 text-sm md:text-base">Hong Kong</p>
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
          <p className="text-sm md:text-base">&copy; 2025 Laura YU. All rights reserved. 🐧</p>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-3 md:mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300 text-sm md:text-base">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300 text-sm md:text-base">GitHub</a>
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
