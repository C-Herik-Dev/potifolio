import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título com a paleta de cores do projeto */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Vamos tirar sua ideia <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              do papel?
            </span>
          </h2>
          <p className="text-zinc-500 font-medium">
            Estou disponível para novos projetos e colaborações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Lado Esquerdo: Links Sociais (Baseado na Ref: 8) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <a href="https://linkedin.com/in/seu-usuario" target="_blank" className="flex items-center gap-4 text-zinc-400 hover:text-blue-500 transition-all group">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/50">
                  <Linkedin size={24} />
                </div>
                <span className="text-lg font-medium tracking-tight">linkedin.com/in/carlos-herik</span>
              </a>

              <a href="https://github.com/seu-usuario" target="_blank" className="flex items-center gap-4 text-zinc-400 hover:text-purple-500 transition-all group">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500/50">
                  <Github size={24} />
                </div>
                <span className="text-lg font-medium tracking-tight">github.com/C-Herik-Dev</span>
              </a>

              <div className="flex items-center gap-4 text-zinc-400 group">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-white/20">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium tracking-tight">carlosherik.dev@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário (Baseado na Ref: 8) */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <input type="text" placeholder="Assunto" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            <textarea placeholder="Sua mensagem..." rows={4} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
            
            <button className="flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-white hover:scale-[1.02] transition-all">
              Enviar mensagem
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}