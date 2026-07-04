import React, { useState, useEffect } from 'react'
import { Sparkles, Code2, ArrowRight } from 'lucide-react'
import logoImg from '../assets/logo.png'

export const TestVersionWelcome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Exibir uma vez por sessão do navegador (até fechar a aba/janela)
    const hasSeen = sessionStorage.getItem('domestre.welcome_seen')
    if (!hasSeen) {
      // Pequeno delay para a animação ficar mais fluída após o carregamento inicial
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('domestre.welcome_seen', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 w-screen h-screen z-[100] grid place-items-center p-4 bg-black/70">
      <div 
        className="relative w-full max-w-[440px] min-h-[440px] bg-card border border-border/50 rounded-[32px] shadow-2xl overflow-hidden animate-fade-in-up m-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Highlight border top effect */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>

        {/* Header Graphic Area */}
        <div className="relative h-32 bg-gradient-to-br from-brand-navy to-blue-950 flex shrink-0 items-center justify-center rounded-t-[32px]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-brand-red/40 to-transparent rounded-full"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-brand-gold/30 to-transparent rounded-full"></div>
          
          {/* Logo Overlapping */}
          <div className="absolute -bottom-12 bg-card p-3.5 rounded-full border border-border/50 shadow-lg flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-brand-navy/5 to-transparent rounded-full"></div>
            <img src={logoImg} alt="Logo" className="h-16 w-16 object-contain relative z-10 drop-shadow-md" />
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 pt-16 pb-8 text-center flex-1 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-black uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles size={14} />
              <span>Versão Beta</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 font-display tracking-tight text-foreground">
              Bem-vindo ao <span className="bg-gradient-to-r from-brand-red to-brand-gold bg-clip-text text-transparent">Sistema!</span>
            </h2>
            
            <p className="text-muted-foreground text-sm leading-relaxed px-2">
              Esta é uma demonstração antecipada. Sinta-se livre para explorar as funcionalidades, testar os fluxos e, como é uma versão de testes, enviar feedbacks ou relatar possíveis bugs!
            </p>
          </div>

          <div className="space-y-5 mt-8">
            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground uppercase tracking-wider font-bold">
              <Code2 size={14} className="text-brand-navy" />
              <span>Desenvolvido por: Kauã Felipe & Bruno Arantes</span>
            </div>
            
            <button 
              onClick={handleClose}
              className="group w-full h-14 bg-brand-navy text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-navy/90 shadow-[0_8px_20px_-8px_rgba(40,20,105,0.5)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] active:translate-y-0 cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2 text-[15px]">
                Começar a Explorar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
