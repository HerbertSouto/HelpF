import Image from "next/image";
import { Mail } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { AnimatedKPI } from "./animations/Counter";
import { DotGrid, FloatingShapes, SpinningRing } from "./decorations/Shapes";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const kpis = [
  { value: "12 anos", label: "de experiência" },
  { value: "-27%", label: "redução de TMO" },
  { value: "+35%", label: "ganho em processos" },
  { value: "+18%", label: "aumento de aprovação" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-50/80 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      {/* Abstract decorations */}
      <DotGrid className="absolute top-24 right-8 text-pink-400 pointer-events-none" cols={10} rows={7} />
      <FloatingShapes className="absolute bottom-8 left-0 text-pink-400 pointer-events-none opacity-70" />
      <SpinningRing className="absolute top-32 left-12 text-pink-300 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="space-y-3">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                  Ariane<br />
                  <span className="text-pink-500">Carvalho</span>
                </h1>
                <p className="text-lg text-gray-500 font-medium tracking-wide">
                  Product Owner · Gestão de Processos · Governança de Risco
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Transformando cenários complexos em jornadas eficientes, seguras e
                orientadas a dados.
              </p>
            </FadeIn>

            {/* KPIs */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {kpis.map((k) => (
                  <AnimatedKPI key={k.value} value={k.value} label={k.label} />
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/arianecmcarvalho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
                <a
                  href="mailto:mourinhaca@yahoo.com.br"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-pink-300 hover:text-pink-500 transition-colors"
                >
                  <Mail size={16} />
                  Enviar e-mail
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Photo */}
          <FadeIn delay={0.2} direction="left">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl" />
                <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/ariane.png"
                    alt="Ariane Carvalho"
                    fill
                    className="object-contain object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
