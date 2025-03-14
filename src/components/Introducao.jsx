import React, { useEffect, useRef } from 'react'
import { FiArrowRight } from "react-icons/fi";

const Introducao = () => {
    const typingRef = useRef();

    useEffect(() => {
        console.log(typingRef.current)
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-typing');
            }
          },
          { threshold: 0.5 }
        );
    
        if (typingRef.current) {
          observer.observe(typingRef.current);
        }
    
        return () => observer.disconnect();
      }, []);
  return (
    <section className="min-h-screen flex items-center justify-center relative">
        <div className="section-container">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-accent font-mono">Olá, eu sou</h2>
            <h1 className="text-4xl mobile:text-2xl tablet:text-6xl font-bold inline-block">
              <div 
              ref={typingRef} 
              className="text-white w-auto overflow-hidden whitespace-nowrap border-r-4 border-accent">
                Rafael Bayer
              </div>
            </h1>
            <p className="text-foreground/70 max-w-xl text-lg">
            Desenvolvedor fullstack com experiência em React.js, PHP e MySQL, sempre com o foco em entregar soluções práticas que gerem resultados reais. Meu compromisso é construir sistemas que atendam às necessidades do negócio e ofereçam uma experiência de usuário impecável.
            </p>
            <button className="group flex items-center gap-2 text-accent hover:text-accent-hover transition-colors">
              Ver Projetos
              <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
      </section>
  )
}

export default Introducao