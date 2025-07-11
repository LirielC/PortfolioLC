import React from 'react';
import { FaUser, FaTools, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { label: 'Sobre', icon: <FaUser />, href: '#about' },
  { label: 'Skills', icon: <FaTools />, href: '#skills' },
  { label: 'Projetos', icon: <FaFolderOpen />, href: '#projects' },
  { label: 'Contato', icon: <FaEnvelope />, href: '#contact' },
];

export default function Sidebar() {
  return (
    <aside className="hidden sm:flex flex-col justify-between fixed left-8 top-1/2 -translate-y-1/2 h-[80vh] w-64 bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 z-40">
      <div>
        <div className="text-2xl font-black mb-12 tracking-tight text-cyan-900/90 drop-shadow-lg text-center">PORTFOLIO</div>
        <nav>
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/40 bg-white/40 text-cyan-900 font-bold text-lg shadow-md backdrop-blur hover:bg-white/70 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span className="text-2xl drop-shadow-md">{item.icon}</span>
                  <span className="drop-shadow-md">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-xs text-cyan-900/60 text-center pt-10 drop-shadow">© {new Date().getFullYear()} Liriel Castro</div>
    </aside>
  );
} 