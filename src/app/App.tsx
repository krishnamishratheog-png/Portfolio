import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AIChatSection } from './components/AIChatSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { BackgroundAnimation } from './components/BackgroundAnimation';

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0a0a1a] text-white font-['Inter',sans-serif] relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AIChatSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-gray-400">
        <div className="container mx-auto px-4">
          <p>© 2026 Ekansh Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
