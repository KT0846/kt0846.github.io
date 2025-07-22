import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
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

  const [showFooter, setShowFooter] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contactRef.current) return;
      const rect = contactRef.current.getBoundingClientRect();
      // Show footer if any part of the contact section is in the viewport
      setShowFooter(rect.top < window.innerHeight && rect.bottom > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
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
      {/* Fullpage Sections */}
      {/* About Section */}
      <div id="about" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-extrabold mb-4" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Hello, I'm Laura YU</h3>
          <p className="text-base mb-8" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", color: '#222' }}>
            I'm a Data Scientist and Digital Consultant with 2 years of experience in the corporate world. I graduated two years ago and have been helping businesses make data-driven decisions ever since. Just like penguins thrive in teams, I love collaborating to solve complex problems with data, analytics, and technology! 🐧📈
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex-1 min-w-[200px]">
              <h4 className="font-semibold text-gray-700 text-base mb-2">Data Science</h4>
              <p className="text-sm text-gray-600">Python, Machine Learning, Data Visualization</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex-1 min-w-[200px]">
              <h4 className="font-semibold text-gray-700 text-base mb-2">Digital Consulting</h4>
              <p className="text-sm text-gray-600">Business Analytics, Digital Strategy, Communication</p>
            </div>
          </div>
        </div>
      </div>
      {/* Work Experience Section */}
      <div id="experience" className="section flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold tracking-tight mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Work Experience 💼</h2>
          <div className="flex flex-col gap-8">
            {/* ARUP Group Limited Full-Time Experience */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Assistant Digital Consultant / Assistant Data Scientist</h3>
              <p className="text-gray-700 mb-2">ARUP Group Limited, Hong Kong | Apr 2025 – Present (Assistant Digital Consultant), Jun 2025 – Apr 2025 (Assistant Data Scientist)</p>
              <ul className="list-disc list-inside text-gray-600 text-base mb-1 pl-4 text-left">
                <li>Developed and deployed data-driven solutions to solve business problems</li>
                <li>Collaborated with cross-functional teams to deliver digital transformation projects</li>
                <li>Utilized machine learning, analytics, and visualization to drive decision-making</li>
                <li>Communicated insights and recommendations to stakeholders</li>
              </ul>
            </div>
            {/* Grant Thornton China Internship */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Technology Consultant Intern</h3>
              <p className="text-gray-700 mb-2">Grant Thornton China, Beijing, China | Nov 2022 – Jan 2023</p>
              <ul className="list-disc list-inside text-gray-600 text-base mb-1 pl-4 text-left">
                <li>Conducted comprehensive risk assessment of company’s IT infrastructure, policies, and operations in the context of East 5.0 Chinese Bank Data Governance Guidelines and completed audit working papers</li>
                <li>Assisted the review of internal audit plans and related follow-ups, and performed the tests of data validation in SQL</li>
              </ul>
            </div>
            {/* SAIF Partners China Internship */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Summer Analyst Intern</h3>
              <p className="text-gray-700 mb-2">SAIF Partners China, Xiamen, China | Jul 2019 – Aug 2019</p>
              <ul className="list-disc list-inside text-gray-600 text-base mb-1 pl-4 text-left">
                <li>Performed Chinese heating household appliances industry analysis, identified target companies and proposed investment ideas and thesis to branch senior management, and drafted presentations for weekly meetings</li>
                <li>Assisted in-depth financial and operational due-diligence process on client company, analysed market trends, competition, and potential strategic partners using information obtained from multiple data sources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Education Section */}
      <div id="education" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold tracking-tight mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Education 🎓</h2>
          <div className="relative border-l-4 border-gray-300 ml-6">
            {/* UCL MSc */}
            <div className="mb-12 ml-8 flex flex-col gap-1 relative">
              <div className="absolute -left-6 top-1 w-5 h-5 bg-white border-4 border-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-500 font-semibold">2021 – 2022</span>
              <h3 className="text-xl font-bold mb-2 text-gray-700">University College London — MSc Computer Science</h3>
              <p className="text-gray-700">Grade: Merit | Member of UCL Chinese Students and Scholars Association (UCL CSSA)</p>
              <p className="text-gray-500 text-base mb-1">Core Modules: Software Engineering, Machine Learning, Artificial Intelligence, App Design, Database</p>
              <p className="text-gray-500 text-base">Summer Project: Learning Teddy Bear (Voice Assistant Development with IBM)</p>
            </div>
            {/* Liverpool BA */}
            <div className="ml-8 flex flex-col gap-1 relative">
              <div className="absolute -left-6 top-1 w-5 h-5 bg-white border-4 border-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-500 font-semibold">2017 – 2021</span>
              <h3 className="text-xl font-bold mb-2 text-gray-700">University of Liverpool — BA (Hons) Accounting and Finance</h3>
              <p className="text-gray-700">First Class with Honours; 3-year university scholarship as top academic performer in Management School</p>
              <p className="text-gray-500 text-base mb-1">Core Modules: Corporate Finance, Financial Reporting, Audit, Advanced Accounting, Economics, Econometrics</p>
              <p className="text-gray-500 text-base">Final-year project: UK online retail study – fundamental analysis, valuation, and stock recommendation of ASOS</p>
            </div>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div id="skills" className="section flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold tracking-tight mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Skills 🛠️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-3 text-gray-700">Programming</h3>
              <ul className="list-disc list-inside text-gray-700 text-base pl-4">
                <li>Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn)</li>
                <li>SQL</li>
                <li>JavaScript (React, Node.js)</li>
                <li>R</li>
              </ul>
            </div>
            {/* Data Science & Analytics */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-3 text-gray-700">Data Science & Analytics</h3>
              <ul className="list-disc list-inside text-gray-700 text-base pl-4">
                <li>Machine Learning & Predictive Modeling</li>
                <li>Data Visualization & Storytelling</li>
                <li>Statistical Analysis</li>
                <li>Data Cleaning & Preparation</li>
              </ul>
            </div>
            {/* Consulting & Business */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-3 text-gray-700">Consulting & Business</h3>
              <ul className="list-disc list-inside text-gray-700 text-base pl-4">
                <li>Digital Transformation</li>
                <li>Business Analytics</li>
                <li>Stakeholder Communication</li>
                <li>Project Management</li>
              </ul>
            </div>
            {/* Tools & Platforms */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-3 text-gray-700">Tools & Platforms</h3>
              <ul className="list-disc list-inside text-gray-700 text-base pl-4">
                <li>Tableau, Power BI</li>
                <li>Excel, Google Sheets</li>
                <li>Git & GitHub</li>
                <li>Cloud Platforms (AWS, GCP basics)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div id="projects" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold tracking-tight mb-10 text-center flex items-center justify-center gap-3" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>
            My Projects <span className="text-3xl align-middle">💡</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <button
              aria-label="Previous project"
              onClick={prevProject}
              className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 shadow transition disabled:opacity-50"
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
                    className="flex-1 mx-1 md:mx-2 min-w-[16rem] max-w-xs md:min-w-[22rem] md:max-w-lg h-auto md:h-[24rem] bg-white rounded-3xl shadow-xl p-5 md:p-10 flex flex-col items-start border border-blue-100 transition-all duration-500"
                    style={{ opacity: 1 }}
                  >
                    <h3 className="text-lg md:text-2xl font-bold text-gray-700 mb-3">{projects[idx].title}</h3>
                    <p className="text-gray-700 mb-6 line-clamp-3">{projects[idx].desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[idx].tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              aria-label="Next project"
              onClick={nextProject}
              className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 shadow transition disabled:opacity-50"
              disabled={projects.length <= 1}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${idx === projectIdx ? 'bg-gray-700' : 'bg-gray-300'}`}
                onClick={() => setProjectIdx(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Get In Touch Section */}
      <div id="contact" ref={contactRef} className="section flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-10" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out!
          </p>
          <div className="flex flex-row justify-center gap-4 md:gap-8 mb-8 overflow-x-auto">
            <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex-1 min-w-0 max-w-[220px] flex flex-col items-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-700 text-base mb-1">Email</h3>
              <p className="text-gray-700 text-xs md:text-base break-all">your.email@example.com</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex-1 min-w-0 max-w-[220px] flex flex-col items-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold text-gray-700 text-base mb-1">Location</h3>
              <p className="text-gray-700 text-xs md:text-base break-all">Hong Kong</p>
            </div>
            <a href="https://www.linkedin.com/in/laura-yu-679788172/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex-1 min-w-0 max-w-[220px] flex flex-col items-center transition hover:shadow-lg">
              <div className="text-2xl mb-2">in</div>
              <h3 className="font-semibold text-gray-700 text-base mb-1">LinkedIn</h3>
              <p className="text-gray-700 text-xs md:text-base break-all">laura-yu-679788172</p>
            </a>
            <a href="https://github.com/KT0846" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md flex-1 min-w-0 max-w-[220px] flex flex-col items-center transition hover:shadow-lg">
              <div className="text-2xl mb-2">🐙</div>
              <h3 className="font-semibold text-gray-700 text-base mb-1">GitHub</h3>
              <p className="text-gray-700 text-xs md:text-base break-all">KT0846</p>
            </a>
          </div>
          <button
            className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg shadow hover:bg-gray-900 transition mb-2"
            onClick={() => window.open('https://forms.gle/EqSyS5qZW9nFyqKc7', '_blank')}
          >
            Send Message
          </button>
        </div>
      </div>
      <footer className="w-full bg-white/80 backdrop-blur border-t border-blue-100 py-4 text-center shadow z-0">
        <p className="text-base text-gray-500">&copy; 2025 Laura YU. All rights reserved.</p>
      </footer>
      {/* Add smooth scroll behavior to the document - removed invalid <script> */}
    </>
  );
}

export default App;
