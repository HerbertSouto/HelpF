import { Layers, GitBranch, ShieldCheck } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./animations/FadeIn";

const areas = [
  {
    icon: Layers,
    title: "Produto & Agile",
    description:
      "3 anos liderando squads ágeis com gestão de backlog técnico, definição de roadmap e entrega contínua orientada a valor.",
    tags: ["Scrum", "Kanban", "User Stories", "Roadmap"],
  },
  {
    icon: GitBranch,
    title: "Engenharia de Processos",
    description:
      "Modelagem AS-IS / TO-BE, eliminação de gargalos e desperdícios com aplicação de Lean Six Sigma e BPMN.",
    tags: ["Lean Six Sigma", "BPMN", "AS-IS/TO-BE", "Melhoria Contínua"],
  },
  {
    icon: ShieldCheck,
    title: "Risco & Compliance",
    description:
      "Identificação de vulnerabilidades sistêmicas, gestão de chargeback e segurança transacional em ambientes B2B e B2C.",
    tags: ["KYC", "LGPD", "Chargeback", "Auditoria"],
  },
];

export default function Areas() {
  return (
    <section id="atuacao" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest">
              Especialidades
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Áreas de Atuação
            </h2>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <StaggerItem key={area.title}>
                <div className="group border border-gray-100 rounded-2xl p-8 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors">
                    <Icon size={22} className="text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
