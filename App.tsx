
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Research from './components/Research.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIAssistant from './components/AIAssistant.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section, .reveal-element').forEach(el => {
      el.classList.add('reveal-element');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Research />
      <Contact />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
