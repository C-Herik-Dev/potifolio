import { useRef } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants/projects'
import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const width = carouselRef.current.clientWidth
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    })
  }

  // Agrupamento de 2 projetos por "página"
  const groupedProjects = []
  for (let i = 0; i < PROJECTS.length; i += 2) {
    groupedProjects.push(PROJECTS.slice(i, i + 2))
  }

  return (
    <motion.section 
      id="projetos" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center py-12 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-black uppercase tracking-tighter">
          Últimos <span className="text-blue-500">Projetos</span>
        </h3>
      </div>

      {/* Viewport do Carrossel */}
      <div 
        ref={carouselRef} 
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {groupedProjects.map((group, groupIndex) => (
          <div key={groupIndex} className="min-w-full snap-start px-4">
            {/* Div Organizadora: Limita a altura e agrupa os 2 projetos do zigue-zague */}
            <div className="flex flex-col gap-10 max-w-6xl mx-auto">
              {group.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Controles de Navegação */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => scroll('left')}
          className="px-8 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 text-sm font-bold hover:text-white hover:border-blue-500 transition-all"
        >
          ❮ Anterior
        </button>
        <button
          onClick={() => scroll('right')}
          className="px-8 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 text-sm font-bold hover:text-white hover:border-blue-500 transition-all"
        >
          Próximo ❯
        </button>
      </div>
    </motion.section>
  )
}