import { motion } from 'framer-motion'
import { SKILLS } from '../constants/projects'

export function About() {
  return (
    <section id="sobre" className="min-h-screen flex flex-col justify-center py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Título Principal */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase text-center mb-20 tracking-tighter"
        >
          Sobre
        </motion.h3>

        {/* Bloco Superior: Ilustração + Texto */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          {/* Lado Esquerdo: Ilustração */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              {/* Brilho de fundo */}
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-colors duration-700" />
              
              {/* Ícone Animado/Ilustração */}
              <img 
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" 
                alt="Desenvolvedor trabalhando" 
                className="relative w-64 h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Lado Direito: Texto sobre você */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify">
              <p>
                Sou um desenvolvedor <span className="text-white font-bold">Full Stack</span> em formação, com foco sólido em tecnologias modernas como <span className="text-blue-400 font-medium text-xl italic">React e TypeScript</span>. Minha paixão é transformar ideias complexas em interfaces intuitivas, rápidas e visualmente impactantes.
              </p>
              <p>
                Atualmente, dedico meu tempo à construção de aplicações escaláveis, explorando o ecossistema do <span className="text-white">Front-end</span> e integrando serviços como <span className="text-purple-400">Firebase e APIs REST</span>. Busco constantemente as melhores práticas de Clean Code para entregar projetos de alto nível.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bloco Inferior: Habilidades (Pílulas) */}
        <div className="mt-10">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase text-center mb-12 tracking-tighter"
          >
            Habilidades
          </motion.h4>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-sm hover:border-blue-500 hover:text-white hover:bg-zinc-800/50 transition-all cursor-default shadow-lg group"
              >
                <span className="flex items-center gap-2 italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-purple-500 transition-colors" />
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}