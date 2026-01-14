import { motion } from 'framer-motion'
import { Linkedin, Github, MessageCircle, Mail, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 relative overflow-hidden">
      {/* Efeito de luz de fundo para "aquecer" a seção */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl space-y-8"
      >
        {/* Tag Superior com degradê */}
        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold tracking-[0.3em] uppercase text-sm">
          Desenvolvimento Web
        </span>

        {/* Headline com Destaque em Gradiente */}
        <p className="text-zinc-400 text-xl md:text-5xl font-black max-w-3xl mx-auto leading-[1.1] tracking-tighter">
          CONSTRUINDO INTERFACES <br />
          <span className="text-white italic">DE ALTO NÍVEL</span> COM <br />
          <span className="bg-linear-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            REACT & TYPESCRIPT
          </span>.
        </p>

        {/* Nome e Cargo com toque de cor */}
        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-white">
            Carlos Herik <span className="text-blue-500">/</span> <span className="text-zinc-500">Front-end Developer</span>
          </h1>
        </div>

        {/* Redes Sociais com Hovers Coloridos */}
        <div className="flex justify-center gap-8 py-2">
          <a href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-110">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com" target="_blank" className="text-zinc-400 hover:text-purple-500 transition-all hover:scale-110">
            <Github size={22} />
          </a>
          <a href="https://wa.me/seunumeroaqui" target="_blank" className="text-zinc-400 hover:text-green-500 transition-all hover:scale-110">
            <MessageCircle size={22} />
          </a>
          <a href="mailto:email@exemplo.com" className="text-zinc-400 hover:text-red-400 transition-all hover:scale-110">
            <Mail size={22} />
          </a>
        </div>

        {/* Botão Meus Projetos com Brilho Suave */}
        <div className="pt-8">
          <a 
            href="#projetos"
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold hover:border-blue-500/50 transition-all group overflow-hidden shadow-2xl shadow-blue-500/10"
          >
            
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="relative z-10">Meus Projetos</span>
            <ChevronDown size={20} className="relative z-10 group-hover:translate-y-1 transition-transform text-blue-400" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}