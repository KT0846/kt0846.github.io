import React, { useState } from 'react';

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

const ProjectsSection: React.FC = () => {
  const [projectIdx, setProjectIdx] = useState(0);
  const prevProject = () => setProjectIdx((i) => (i === 0 ? projects.length - 1 : i - 1));
  const nextProject = () => setProjectIdx((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section id="projects" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
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
          {/* Responsive carousel: 1 card on mobile, 3 on md+ */}
          <div className="flex items-center justify-center w-full max-w-4xl overflow-hidden">
            <div className="flex w-full">
              {/* Mobile: only center card */}
              <div className="block md:hidden w-full">
                <div className="flex-1 mx-1 min-w-[16rem] max-w-xs h-auto bg-white rounded-3xl shadow-xl p-5 flex flex-col items-start border border-blue-100 transition-all duration-500 mx-auto">
                  <h3 className="text-lg font-bold text-gray-700 mb-3">{projects[projectIdx].title}</h3>
                  <p className="text-gray-700 mb-6 line-clamp-3">{projects[projectIdx].desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {projects[projectIdx].tags.map((tag) => (
                      <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Desktop: 3 cards (peek) */}
              <div className="hidden md:flex w-full">
                {[ -1, 0, 1 ].map((offset) => {
                  const idx = (projectIdx + offset + projects.length) % projects.length;
                  return (
                    <div
                      key={idx}
                      className="flex-1 mx-2 min-w-[22rem] max-w-lg h-auto bg-white rounded-3xl shadow-xl p-10 flex flex-col items-start border border-blue-100 transition-all duration-500"
                      style={{ opacity: 1 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-700 mb-3">{projects[idx].title}</h3>
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
            </div>
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
    </section>
  );
};

export default ProjectsSection;
