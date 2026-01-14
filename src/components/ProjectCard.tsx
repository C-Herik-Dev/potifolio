import { motion } from 'framer-motion'
import type { Project } from '../constants/projects'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between w-full min-h-87.5 gap-8`}
    >
      {/* Container da Imagem - Exatos 48% */}
      <div className="w-full lg:w-[48%] flex justify-center items-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-70 object-contain"
          />
        </motion.div>
      </div>

      {/* Container do Texto - Exatos 48% para manter simetria */}
      <div className={`w-full lg:w-[48%] flex flex-col justify-center ${isEven ? 'lg:items-start text-left' : 'lg:items-end lg:text-right'}`}>
        <h4 className="text-3xl font-bold text-white mb-3 tracking-tight">
          {project.title}
        </h4>
        
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 max-w-prose">
          {project.description}
        </p>

        <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
          {project.techs.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs font-bold hover:border-blue-500 transition-all"
          >
            <ExternalLink size={14} />
            Detalhes
          </a>
          
          <a 
            href={project.code} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg border border-zinc-800 text-zinc-500 text-xs font-bold hover:text-white transition-all"
          >
            <Github size={14} />
            Repositório
          </a>
        </div>
      </div>
    </motion.div>
  )
}