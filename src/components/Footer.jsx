import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-12 min-h-[48px] px-2 sm:px-6 flex items-center justify-center sm:justify-start sm:pl-[272px] bg-white/30 backdrop-blur-xl border-t border-white/40 shadow z-50 text-cyan-900 text-sm rounded-t-2xl">
      <span className="font-semibold text-cyan-900/90">Desenvolvido por Liriel Castro • © {new Date().getFullYear()} - Portfólio</span>
    </footer>
  );
} 