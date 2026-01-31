
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Simple reveal animation trigger on mount/scroll
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

    // Apply reveal to sections or marked elements
    document.querySelectorAll('section, .reveal-element').forEach(el => {
      el.classList.add('reveal-element');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
