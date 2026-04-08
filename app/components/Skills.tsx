import { FadeIn, Stagger, StaggerItem } from "./animations/FadeIn";

const categories = [
  {
    title: "Métricas & OKRs",
    skills: ["Estruturação de KPIs", "Desdobramento de metas", "Gestão orientada a dados", "OKRs"],
  },
  {
    title: "Ferramental Técnico",
    skills: ["Lean Six Sigma Green Belt", "BPMN", "Visio", "Azure DevOps", "Excel Avançado"],
  },
  {
    title: "Produto & Agile",
    skills: ["Scrum", "Kanban", "User Stories", "Critérios de aceite", "Roadmap", "Backlog"],
  },
  {
    title: "Risco & Compliance",
    skills: ["KYC", "LGPD", "Auditoria 2ª linha", "Chargeback", "Conformidade regulatória"],
  },
  {
    title: "Stakeholders & Gestão",
    skills: ["Liderança por influência", "Comunicação assertiva", "Gestão multidisciplinar"],
  },
  {
    title: "Governança",
    skills: ["POPs técnicos", "Processos E2E", "Melhoria contínua", "Cultura data-driven"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50/70 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/4" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-rose-50/60 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest">
              Competências
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Diferenciais Técnicos
            </h2>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {categories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1.5 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
