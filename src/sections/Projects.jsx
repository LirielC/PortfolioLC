import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gerenciamento de Biblioteca',
      description: 'Sistema completo em Java para gerenciamento de bibliotecas com vendas, empréstimos e integração Stripe.',
      tech: ['Java', 'Spring Boot', 'Spring', 'Vaadin', 'PostgreSQL', 'Stripe API'],
      github: 'https://github.com/LirielC/SistemaGerenciamentoBiblioteca',
      demo: 'https://sistema-biblioteca-zu8d.onrender.com/login',
      status: 'Completo',
      features: ['Gerenciamento de Vendas', 'Sistema de Empréstimos', 'Gestão de Clientes', 'Controle de Estoque'],
      image: 'assets/Sistb.png'
    },
    {
      id: 2,
      title: 'NetArchitect',
      description: 'Projeto acadêmico simulando uma consultoria especializada em redes. Site desenvolvido para demonstrar serviços de infraestrutura e soluções de rede.',
      tech: ['React', 'JavaScript', 'HTML/CSS', 'GitHub Pages'],
      github: 'https://github.com/LirielC/-NetArchitect-.github.io',
      demo: 'https://lirielc.github.io/-NetArchitect-.github.io/',
      status: 'Completo',
      features: ['Landing Page', 'Design Responsivo', 'Simulação Consultoria', 'Deploy GitHub Pages'],
      image: 'assets/netartitech.png'
    },
    {
      id: 3,
      title: 'ProCurriculum',
      description: 'Aplicação web moderna para criação de currículos profissionais com interface intuitiva.',
      tech: ['JavaScript', 'HTML/CSS', 'jsPDF'],
      github: 'https://github.com/LirielC/-ProCurriculum-.github.io',
      demo: 'https://lirielc.github.io/-ProCurriculum-.github.io/',
      status: 'Completo',
      features: ['Templates Modernos', 'Export PDF', 'Interface Responsiva'],
      image: 'assets/procurriculum.png'
  },
  {
    id: 4,
    title: 'Fake News Detector',
    description: 'Aplicação de machine learning para detecção de notícias falsas utilizando técnicas de NLP (Processamento de Linguagem Natural).',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'Pandas'],
    github: 'https://github.com/LirielC/FakeNewsDetector',
    demo: 'https://github.com/LirielC/FakeNewsDetector',
    status: 'Em desenvolvimento',
    features: ['Pré-processamento de Texto', 'Treinamento de Modelos', 'Avaliação de Precisão', 'Interface CLI'],
    image: 'assets/fakenews.png'
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 112px)' }}>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 sm:gap-12 px-2 sm:px-0">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-cyan-700 text-4xl font-bold drop-shadow-xl mr-4">
            <FaFolderOpen />
          </div>
          <h2 className="font-black text-3xl md:text-4xl text-cyan-900 tracking-tight drop-shadow text-center">Projetos</h2>
        </div>
        <p className="font-sans text-lg text-cyan-900/90 text-center mb-10 drop-shadow">
          Cada projeto representa uma jornada de aprendizado e inovação tecnológica.
        </p>
        {projects.map((project, idx) => (
          <div
              key={project.id}
            className={`flex flex-col md:flex-row bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl rounded-3xl overflow-hidden relative transition-all duration-700 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/70 to-transparent rounded-t-3xl pointer-events-none" />
            {/* Imagem */}
            <div className="w-full md:w-1/3 flex items-center justify-center p-4 sm:p-6">
              <img src={project.image} alt={project.title} className="w-full h-36 sm:h-44 object-contain rounded-2xl shadow-md bg-white/40" />
        </div>
            {/* Detalhes */}
            <div className="flex-1 flex flex-col justify-between p-4 sm:p-8 gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-black text-2xl text-cyan-900 drop-shadow">{project.title}</h3>
                  <span className="px-3 py-1 bg-white/60 text-cyan-900/80 text-xs font-semibold rounded-lg border border-white/70">{project.status}</span>
                </div>
                <p className="font-sans text-cyan-900/90 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/60 border border-white/40 text-cyan-900 font-semibold text-xs rounded-full shadow-sm backdrop-blur hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">{tech}</span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-cyan-900/70 text-sm mb-2 pl-2">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/90 text-white font-bold shadow hover:bg-cyan-600 hover:scale-105 transition-all duration-300">
                  <FaGithub /> Código
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/90 text-white font-bold shadow hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                  <FaExternalLinkAlt /> Demo
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}