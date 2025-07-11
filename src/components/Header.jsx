import React from 'react';
import { FaUser, FaTools, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const sectionIcons = {
  about: <FaUser className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
  skills: <FaTools className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
  projects: <FaFolderOpen className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
  contact: <FaEnvelope className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
};

export default function Header({ title, section, children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navItems = [
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 min-h-[64px] flex items-center justify-center sm:justify-start px-2 sm:pl-[272px] bg-white/30 backdrop-blur-xl border-b border-white/40 shadow z-50">
      {/* Menu mobile */}
      <div className="flex items-center gap-4 w-full max-w-5xl mx-auto justify-between">
        <div className="flex items-center gap-4">
          {sectionIcons[section]}
          <h1 className="text-xl md:text-2xl font-bold text-cyan-900 drop-shadow text-center tracking-tight">
            {title}
          </h1>
        </div>
        {/* Botão hambúrguer só no mobile */}
        <button
          className="sm:hidden p-2 rounded-lg bg-white/40 border border-white/30 text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      {/* Menu dropdown mobile */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-white/30 shadow z-50 animate-fade-in">
          <nav className="flex flex-col divide-y divide-cyan-100">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-cyan-900 text-lg font-semibold py-4 px-6 text-left hover:bg-cyan-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
      {children && <div className="ml-4 text-cyan-900/80 text-base font-light drop-shadow text-center">{children}</div>}
    </header>
  );
} 