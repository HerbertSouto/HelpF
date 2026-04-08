import { AbstractRings, SpinningRing } from "./decorations/Shapes";

const testimonials = [
  {
    quote: "Visão de negócio apurada e maturidade na resolução de conflitos.",
    highlight: "Visão de negócio apurada",
  },
  {
    quote: "Comprometida com resultados de alto nível e colaboração entre times.",
    highlight: "resultados de alto nível",
  },
  {
    quote: "Especialista em transformar processos em soluções escaláveis e sustentáveis.",
    highlight: "transformar processos",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400/8 rounded-full blur-3xl pointer-events-none" />
      <AbstractRings className="absolute -top-20 -right-20 text-pink-500 pointer-events-none opacity-50" />
      <SpinningRing className="absolute bottom-8 left-12 text-pink-400 pointer-events-none opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest">
            Reputação
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            O que dizem sobre mim
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900/80 p-10 flex flex-col gap-6 hover:bg-gray-800/80 transition-colors duration-300"
            >
              <span className="text-7xl text-pink-500/30 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="text-gray-300 leading-relaxed text-[15px] -mt-4 flex-1">
                {t.quote}
              </p>
              <div className="h-px bg-gradient-to-r from-pink-500/40 to-transparent" />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          Feedbacks recebidos ao longo da trajetória profissional.
        </p>
      </div>
    </section>
  );
}
