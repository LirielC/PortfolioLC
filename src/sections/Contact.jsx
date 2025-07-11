import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
    value: 'lirielcastror@gmail.com',
    href: 'mailto:lirielcastror@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localização',
      value: 'Rio de Janeiro, RJ',
      href: '#'
    }
];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/LirielC'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lirielcastro/'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
    href: 'mailto:lirielcastror@gmail.com'
    }
];

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 112px)' }}>
      <div className="w-full max-w-xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl rounded-3xl px-10 py-14 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/70 to-transparent rounded-t-3xl pointer-events-none" />
        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-cyan-700 text-4xl font-bold mb-6 drop-shadow-xl">
          <FaEnvelope />
        </div>
        <h2 className="font-black text-3xl md:text-4xl text-cyan-900 mb-6 tracking-tight drop-shadow text-center">Contato</h2>
        <p className="font-sans text-lg text-cyan-900/90 text-center mb-8 drop-shadow">
          Entre em contato comigo através dos canais abaixo.
        </p>
        <div className="w-full flex flex-col gap-6 mb-8">
          {contactInfo.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
              className="flex items-center gap-5 px-6 py-4 rounded-xl border border-white/40 bg-white/60 text-cyan-900 shadow hover:bg-white/80 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur"
                  >
              <item.icon className="text-cyan-500 text-2xl drop-shadow-md" />
                    <div>
                <div className="text-sm text-cyan-700 font-semibold">{item.label}</div>
                <div className="text-base font-sans">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
        <div className="flex gap-6 mt-2">
          {socialLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/40 bg-white/60 text-cyan-600 shadow hover:bg-white/80 hover:shadow-lg hover:text-cyan-800 hover:scale-110 transition-all duration-300 backdrop-blur"
                  >
              <link.icon className="text-2xl" />
                  </a>
                ))}
        </div>
      </div>
    </section>
  );
}