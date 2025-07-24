import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
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
  </section>
);

export default AboutSection;
