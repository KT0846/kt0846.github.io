import React from 'react';

const SkillsSection: React.FC = () => (
  <section id="skills" className="section flex flex-col justify-center items-center min-h-screen bg-white">
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
  </section>
);

export default SkillsSection;
