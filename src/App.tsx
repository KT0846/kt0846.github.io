import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
