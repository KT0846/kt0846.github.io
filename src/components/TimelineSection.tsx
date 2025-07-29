import React from 'react';

const TimelineSection: React.FC = () => {
  const educationData = [
    {
      period: '2021 – 2022',
      title: 'University College London',
      degree: 'MSc Computer Science',
      location: 'London, UK',
      subtitle: 'Grade: Merit | Member of UCL Chinese Students and Scholars Association (UCL CSSA)',
      icon: '🎓'
    },
    {
      period: '2017 – 2021',
      title: 'University of Liverpool',
      degree: 'BA (Hons) Accounting and Finance',
      location: 'Liverpool, UK',
      subtitle: 'First Class with Honours; 3-year university scholarship as top academic performer in Management School',
      icon: '🎓'
    }
  ];

  const workData = [
    {
      period: 'Apr 2025 – Present',
      title: 'ARUP Group Limited',
      position: 'Assistant Digital Consultant / Assistant Data Scientist',
      location: 'Hong Kong',
      subtitle: 'Apr 2025 – Present (Assistant Digital Consultant), Jun 2025 – Apr 2025 (Assistant Data Scientist)',
      icon: '💼'
    },
    {
      period: 'Nov 2022 – Jan 2023',
      title: 'Grant Thornton China',
      position: 'Technology Consultant Intern',
      location: 'Beijing, China',
      subtitle: '',
      icon: '💼'
    },
    {
      period: 'Jul 2019 – Aug 2019',
      title: 'SAIF Partners China',
      position: 'Summer Analyst Intern',
      location: 'Xiamen, China',
      subtitle: '',
      icon: '💼'
    }
  ];

  return (
    <section id="timeline" className="section flex flex-col justify-center items-center min-h-screen bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold tracking-tight mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Roadmap</h2>
        
        <div className="relative">
          {/* Curved Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-32 h-1 bg-gray-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-1 h-32 bg-gray-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-white border-4 border-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="text-sm font-bold">⭐</span>
          </div>

          {/* Education Section - Left Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline circle for education */}
                  <div className="absolute -right-6 top-4 w-6 h-6 bg-white border-4 border-green-400 rounded-full flex items-center justify-center text-xs font-bold">
                    {item.icon}
                  </div>
                  
                  {/* Education card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 border border-green-100 mr-8">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <span className="text-sm text-gray-500 font-semibold block mb-1">{item.period}</span>
                        <h3 className="text-xl font-bold mb-1 text-gray-700">{item.title}</h3>
                        <h4 className="text-lg font-semibold mb-2 text-green-600">{item.degree}</h4>
                      </div>
                    </div>
                    
                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-gray-700 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Experience Section - Right Side */}
            <div className="space-y-12 lg:mt-12">
              {workData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline circle for work */}
                  <div className="absolute -left-6 top-4 w-6 h-6 bg-white border-4 border-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                    {item.icon}
                  </div>
                  
                  {/* Work card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 border border-blue-100 ml-8">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <span className="text-sm text-gray-500 font-semibold block mb-1">{item.period}</span>
                        <h3 className="text-xl font-bold mb-1 text-gray-700">{item.title}</h3>
                        <h4 className="text-lg font-semibold mb-2 text-blue-600">{item.position}</h4>
                      </div>
                    </div>
                    
                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </div>
                    
                    {item.subtitle && <p className="text-gray-700 text-sm">{item.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection; 