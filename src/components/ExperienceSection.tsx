import React from 'react';

const ExperienceSection: React.FC = () => (
  <section id="experience" className="section flex flex-col justify-center items-center min-h-screen bg-white">
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
  </section>
);

export default ExperienceSection;
