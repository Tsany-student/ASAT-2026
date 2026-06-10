import React from 'react';
// 1. Impor gambar sudah benar di sini
import fotoProfil from '../assets/GW BANGET.jpg'; 

export default function Hero() {
  const fullName = "Tsany Al Fachrizy";
  const role = "Creative Front-End Developer";
  const description = "Membangun pengalaman digital yang interaktif, bersih, dan berorientasi pada pengguna. Berfokus pada modern UI/UX menggunakan ekosistem Tailwind CSS.";

  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="max-w-2xl mx-auto flex flex-col items-center space-y-8">
        
        <div className="relative w-48 h-48 bg-amber-400 p-1.5 shadow-xl shadow-amber-400/10 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%]">
          <img 
            src={fotoProfil} 
            alt={`Foto Profil Utama ${fullName}`} 
            className="w-full h-full object-cover rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%]"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {role}
          </p>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {fullName}
          </h1>
          
          <p className="text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed mx-auto">
            {description}
          </p>
        </div>

        <div className="pt-2">
          <button 
            type="button"
            className="inline-block bg-amber-400 text-black font-bold px-8 py-3.5 rounded-full hover:bg-amber-500 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-amber-400/20 active:translate-y-0"
          >
            Hubungi Saya
          </button>
        </div>

      </div>
    </main>
  );
}