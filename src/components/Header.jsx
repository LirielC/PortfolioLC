import React from 'react';
import { FaUser, FaTools, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const sectionIcons = {
  about: <FaUser className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
  skills: <FaTools className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
  projects: <FaFolderOpen className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
  contact: <FaEnvelope className="text-cyan-700 text-xl md:text-2xl drop-shadow" />,
};

export default function Header({ title, section, children }) {
  return (
    <header className="fixed top-0 left-0 w-full h-16 min-h-[64px] flex items-center justify-center sm:justify-start px-2 sm:pl-[272px] bg-white/30 backdrop-blur-xl border-b border-white/40 shadow z-50">
      <div className="flex items-center gap-4">
        {sectionIcons[section]}
        <h1 className="text-xl md:text-2xl font-bold text-cyan-900 drop-shadow text-center tracking-tight">
          {title}
        </h1>
      </div>
      {children && <div className="ml-4 text-cyan-900/80 text-base font-light drop-shadow text-center">{children}</div>}
    </header>
  );
} 