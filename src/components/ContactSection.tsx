import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="section flex flex-col justify-center items-center min-h-screen bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight mb-10" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#111' }}>Get In Touch</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm always interested in new opportunities and exciting projects.
        Feel free to reach out!
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 overflow-x-auto items-center">
        <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md w-full max-w-xs mx-auto flex flex-col items-center">
          <div className="text-2xl mb-2">📧</div>
          <h3 className="font-semibold text-gray-700 text-base mb-1">Email</h3>
          <p className="text-gray-700 text-xs md:text-base break-all">your.email@example.com</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md w-full max-w-xs mx-auto flex flex-col items-center">
          <div className="text-2xl mb-2">📍</div>
          <h3 className="font-semibold text-gray-700 text-base mb-1">Location</h3>
          <p className="text-gray-700 text-xs md:text-base break-all">Hong Kong</p>
        </div>
        <a href="https://www.linkedin.com/in/laura-yu-679788172/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md w-full max-w-xs mx-auto flex flex-col items-center transition hover:shadow-lg">
          <div className="text-2xl mb-2">in</div>
          <h3 className="font-semibold text-gray-700 text-base mb-1">LinkedIn</h3>
          <p className="text-gray-700 text-xs md:text-base break-all">laura-yu-679788172</p>
        </a>
        <a href="https://github.com/KT0846" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-3xl border border-blue-100 shadow-md w-full max-w-xs mx-auto flex flex-col items-center transition hover:shadow-lg">
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
  </section>
);

export default ContactSection;
