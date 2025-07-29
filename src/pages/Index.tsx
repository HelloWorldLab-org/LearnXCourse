
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Courses from '@/components/Courses';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Courses />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
