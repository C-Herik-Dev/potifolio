import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="flex items-center gap-1 text-xl font-black tracking-tighter cursor-default group">
            <span>
              &lt;
            </span>
            <span className="bg-linear-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">CH.DEV</span>
            <span>
              <span>/</span>
              &gt;
            </span>
          </h1>
          <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  )
}

export default App