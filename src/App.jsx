import React from 'react';
import Navbar from './components/Navbar';
import Hero from './section/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between font-sans selection:bg-amber-400 selection:text-black">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}