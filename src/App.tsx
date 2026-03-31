// import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHub } from './components/GitHub';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <div className="absolute md:fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] dark:opacity-[0.08]" />
          <div className="hidden md:block absolute left-[8%] top-[4%] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="hidden md:block absolute right-[6%] top-[18%] h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="hidden md:block absolute left-[42%] bottom-[8%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <Navbar />
        <Hero />        
        <Skills />
        <Projects />      
        <GitHub />
        <About />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;