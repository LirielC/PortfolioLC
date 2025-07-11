import React from 'react';

export default function MainContent({ children }) {
  return (
    <main className="min-h-screen transition-all duration-300 pt-16 pb-12 sm:pl-[272px] px-4 flex flex-col items-center justify-center relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Fundo realista"
          className="w-full h-full object-cover object-center blur-md brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-blue-100 to-purple-100 opacity-70" />
      </div>
      {children}
    </main>
  );
} 