import React from 'react';

export default function Navbar() {
  const brandLogo = { initial: "Tsany", accent: "AF" };

  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wider uppercase">
        {brandLogo.initial}<span className="text-amber-400">.</span>{brandLogo.accent}
      </div>
      
      <nav className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
        <a href="#home" className="hover:text-amber-400 transition-colors duration-200">Home</a>
        <a href="#projects" className="hover:text-amber-400 transition-colors duration-200">Projects</a>
        <a href="#contact" className="hover:text-amber-400 transition-colors duration-200">Contact</a>
      </nav>
    </header>
  );
}