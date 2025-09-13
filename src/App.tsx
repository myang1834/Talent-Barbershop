import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>;
}