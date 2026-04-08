import { AbstractRings, DotGrid } from "./decorations/Shapes";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/4" />
      <AbstractRings className="absolute -bottom-16 -left-16 text-pink-400 pointer-events-none" />
      <DotGrid className="absolute top-8 right-16 text-pink-300 pointer-events-none" cols={6} rows={4} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest">
              Sobre mim
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Organizo o caos operacional com dados, processo e estratégia.
            </h2>
          </div>

          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              Sou especialista com <strong className="text-gray-900">12 anos de trajetória</strong> no
              ecossistema de Prevenção à Fraude, Qualidade e Gestão Estratégica.
            </p>
            <p>
              Minha atuação une a visão de negócio de uma{" "}
              <strong className="text-gray-900">Product Owner</strong> à disciplina técnica do{" "}
              <strong className="text-gray-900">Lean Six Sigma (Green Belt)</strong>. Sou reconhecida
              pela capacidade de redesenhar fluxos operacionais que equilibram proteção de receita,
              conformidade e experiência do usuário.
            </p>
            <p>
              Minha entrega é pautada por{" "}
              <span className="text-pink-500 font-medium">resiliência</span>,{" "}
              <span className="text-pink-500 font-medium">eficiência operacional</span> e{" "}
              <span className="text-pink-500 font-medium">compromisso com ROI</span>.
            </p>
            <blockquote className="border-l-2 border-pink-400 pl-4 text-gray-500 italic">
              "Minha gestão não é baseada em achismos, mas em evidências."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

