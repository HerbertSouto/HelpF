"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AbstractRings, SpinningRing } from "./decorations/Shapes";

const testimonials = [
  {
    quote: "Uma profissional exemplar, focada em resultados e com entregas de alto nível. Tive o privilégio de trabalhar com a Ariane e aprender muito com a sua experiência.",
    name: "Gabriel Maldonado dos Santos",
    role: "Especialista de Processos e Projetos · Green Belt",
  },
  {
    quote: "A Ariane é uma profissional fora da curva, muito analítica, empática, propõe soluções de melhoria contínua e atua com excelência em equipe e áreas parceiras.",
    name: "Gláucia Cataldo Borges",
    role: "Product Owner · Banco PAN",
  },
  {
    quote: "Sou admiradora do seu trabalho, da sua visão de negócio apurada e ótimas competências técnicas. Muito engajada, comprometida, pró ativa e resiliente — vai contribuir de forma excelente onde estiver.",
    name: "Janaina Andrade Moreira",
    role: "Solutions Engineering · Serasa Experian",
  },
  {
    quote: "Primeiro em áreas diferentes, onde já se destacava como referência. Depois no mesmo time, onde demonstrou muita proatividade e criatividade no dia a dia. Anos de uma ótima parceria.",
    name: "Nathany Oliveira",
    role: "Process & Projects · Fraud Prevention",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const t = testimonials[current];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400/8 rounded-full blur-3xl pointer-events-none" />
      <AbstractRings className="absolute -top-20 -right-20 text-pink-500 pointer-events-none opacity-50" />
      <SpinningRing className="absolute bottom-8 left-12 text-pink-400 pointer-events-none opacity-40" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest">
            Reputação
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            O que dizem sobre mim
          </h2>
        </div>

        {/* Card */}
        <div className="relative min-h-52">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d * 50, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d * -50, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gray-900/80 rounded-2xl border border-white/5 p-10 flex flex-col gap-6"
            >
              <span className="text-6xl text-pink-500/30 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="text-gray-300 leading-relaxed text-[15px] -mt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                  <span className="text-pink-400 font-semibold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-pink-500"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
