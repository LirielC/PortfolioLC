import { FaUser } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 112px)' }}>
      <div className="w-full max-w-xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl rounded-3xl px-10 py-14 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/70 to-transparent rounded-t-3xl pointer-events-none" />
        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-cyan-700 text-4xl font-bold mb-6 drop-shadow-xl">
          <FaUser />
        </div>
        <h2 className="font-black text-3xl md:text-4xl text-cyan-900 mb-2 tracking-tight drop-shadow text-center">Liriel Castro</h2>
        <span className="text-cyan-900/80 text-lg font-semibold mb-6 drop-shadow text-center">Estudante de Ciência da Computação</span>
        <p className="font-sans text-lg text-cyan-900/90 text-center leading-relaxed mb-8 drop-shadow">
          Apaixonada por criar soluções digitais que unem funcionalidade e design elegante. Busco oportunidades para crescer como desenvolvedora e contribuir para projetos inovadores.
                </p>
        <ul className="w-full flex flex-col gap-3 mb-8">
          <li className="flex items-center gap-2 text-cyan-900/80 font-sans text-base"><span className="text-cyan-700">•</span> 3+ anos de estudo em Ciência da Computação</li>
          <li className="flex items-center gap-2 text-cyan-900/80 font-sans text-base"><span className="text-cyan-700">•</span> 10+ projetos pessoais desenvolvidos</li>
          <li className="flex items-center gap-2 text-cyan-900/80 font-sans text-base"><span className="text-cyan-700">•</span> Foco em desenvolvimento web e tecnologias emergentes</li>
        </ul>
        <span className="text-cyan-900/60 text-base font-light text-center drop-shadow">“Programação é minha arte digital.”</span>
      </div>
    </section>
  );
}