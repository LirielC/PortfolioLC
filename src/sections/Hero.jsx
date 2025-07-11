import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-start">
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 sm:px-8 sm:py-24 text-center md:text-left">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          <h1 className="text-display-1 font-extralight mb-8 text-white">
            Liriel Castro
          </h1>

          <h2 className="text-heading-2 mb-12 text-white/50 font-extralight">
            Desenvolvedora
          </h2>

          <p className="text-body-large text-white/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Estudante de Ciência da Computação na UERJ, criando experiências 
            digitais elegantes e funcionais que conectam inovação e simplicidade.
          </p>

          <div className="flex justify-center items-center mb-20">
            <button 
              onClick={scrollToAbout}
              className="bg-primary-700 hover:bg-primary-600 text-white font-medium px-8 py-4 rounded-md shadow transition-colors duration-200"
            >
              Ver Projetos
              <FaArrowDown className="inline ml-3 text-sm" />
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/lirielcastro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md bg-primary-800 hover:bg-primary-700 transition-colors duration-200 group"
            >
              <FaGithub className="text-xl text-white/50 group-hover:text-white/80 transition-colors duration-200" />
            </a>
            
            <a
              href="https://linkedin.com/in/lirielcastro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md bg-primary-800 hover:bg-primary-700 transition-colors duration-200 group"
            >
              <FaLinkedin className="text-xl text-white/50 group-hover:text-white/80 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicador removido para layout mais clean */}
    </section>
  )
}

export default Hero 