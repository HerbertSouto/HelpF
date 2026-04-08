import { FadeIn, Stagger, StaggerItem } from "./animations/FadeIn";

const projects = [
  {
    number: "01",
    title: "Projeto FID — Automação & Aprovação",
    problem:
      "Alta fricção no TMO e baixas taxas de conversão em processos críticos de aprovação.",
    solution:
      "Liderança na automação da lógica de decisão, redução de intervenção manual e redesenho do fluxo operacional com foco em eficiência.",
    results: [
      { value: "-27%", label: "redução no TMO" },
      { value: "+18%", label: "taxa de aprovação" },
    ],
  },
  {
    number: "02",
    title: "Governança & Segurança Sistêmica",
    problem:
      "Brechas em processos de aprovação gerando alto índice de retrabalho e vulnerabilidades sistêmicas.",
    solution:
      "Implementação de checkpoints automatizados e nova camada de validação sistêmica, com mapeamento completo dos pontos de falha.",
    results: [
      { value: "+5%", label: "aumento de conversão" },
      { value: "CEO", label: "reconhecimento direto" },
    ],
  },
  {
    number: "03",
    title: "Modernização KYC & Compliance",
    problem:
      "Fluxos regulatórios obsoletos, baixa aderência das equipes e risco de não-conformidade.",
    solution:
      "Reestruturação completa dos POPs e automação da jornada de onboarding com foco em conformidade regulatória e experiência do usuário.",
    results: [
      { value: "-35%", label: "tempo de execução" },
      { value: "100%", label: "conformidade alcançada" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest">
              Cases
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Projetos de Destaque
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Problemas reais, soluções estruturadas, resultados mensuráveis.
            </p>
          </div>
        </FadeIn>

        <Stagger className="space-y-6">
          {projects.map((p) => (
            <StaggerItem key={p.number}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-pink-100 hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Number */}
                  <div className="lg:col-span-1 bg-pink-500 flex items-center justify-center p-6 lg:p-0">
                    <span className="text-white/60 font-bold text-2xl lg:text-3xl">{p.number}</span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{p.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Desafio
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{p.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Solução
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{p.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-100 p-8 flex flex-row lg:flex-col justify-around lg:justify-center gap-6">
                    {p.results.map((r) => (
                      <div key={r.label} className="text-center lg:text-left">
                        <div className="text-2xl font-bold text-pink-500">{r.value}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
