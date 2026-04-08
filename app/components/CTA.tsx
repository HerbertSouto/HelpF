import { Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-12 lg:p-16 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Vamos conversar?
            </h2>
            <p className="text-pink-100 text-lg max-w-md mx-auto leading-relaxed">
              Aberta a oportunidades em Produto, Processos e Governança. São Paulo, SP.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/arianecmcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-sm"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a
              href="mailto:mourinhaca@yahoo.com.br"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Mail size={16} />
              mourinhaca@yahoo.com.br
            </a>
            <a
              href="tel:+5511989639908"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone size={16} />
              (11) 98963-9908
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-pink-200 text-sm">
            <MapPin size={14} />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
