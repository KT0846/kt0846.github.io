import React from 'react';

const EducationSection: React.FC = () => (
  <section id="education" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
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
  </section>
);

export default EducationSection;
