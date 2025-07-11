import { FaTools } from 'react-icons/fa';

const skills = [
  'React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Java', 'Go', 'Python', 'PostgreSQL', 'MySQL', 'API REST', 'Spring Boot', 'Git/GitHub', 'Figma'
];

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 112px)' }}>
      <div className="w-full max-w-xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl rounded-3xl px-10 py-14 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/70 to-transparent rounded-t-3xl pointer-events-none" />
        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-cyan-700 text-4xl font-bold mb-6 drop-shadow-xl">
          <FaTools />
        </div>
        <h2 className="font-black text-3xl md:text-4xl text-cyan-900 mb-2 tracking-tight drop-shadow text-center">Habilidades</h2>
        <p className="font-sans text-lg text-cyan-900/90 text-center mb-8 drop-shadow">
          Tecnologias e ferramentas que domino e utilizo no desenvolvimento de projetos.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-white/40 bg-white/60 text-cyan-900 font-semibold text-base shadow-sm backdrop-blur hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}