export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo Estilizado no Footer */}
        <div className="flex items-center gap-1 text-xl font-black tracking-tighter cursor-default group">
          <span className="text-blue-500 group-hover:text-purple-500 transition-colors duration-500">&lt;</span>
          <span className="text-white">CH.DEV</span>
          <span className="text-purple-500 group-hover:text-blue-500 transition-colors duration-500">
            <span className="mx-px opacity-50">/</span>&gt;
          </span>
        </div>

        {/* Copyright e Frase */}
        <div className="text-center md:text-right">
          <p className="text-zinc-500 text-sm font-medium">
            © 2026 Carlos Herik. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs mt-1 uppercase tracking-widest font-bold">
            Construído com React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}