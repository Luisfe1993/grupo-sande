import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Handshake,
  Clock,
  CheckCircle2,
  Lock,
  Phone,
} from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import RevealOnScroll from "@/components/RevealOnScroll";
import GrowthContactForm from "./GrowthContactForm";

export const metadata: Metadata = {
  title: "Crecimiento — Únase al Grupo Sande",
  description:
    "¿Es dueño de una empresa industrial en Chile? Conozca cómo unirse a un grupo familiar con más de 90 años de trayectoria.",
};

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function CrecimientoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const isEn = lang === "en";

  const steps = [
    {
      num: "01",
      title: isEn ? "Conversation" : "Conversación",
      desc: isEn
        ? "A confidential, no-obligation meeting to understand your company, your goals, and explore mutual fit."
        : "Una reunión confidencial y sin compromiso para entender su empresa, sus objetivos, y explorar el encaje mutuo.",
      icon: Handshake,
    },
    {
      num: "02",
      title: isEn ? "Evaluation" : "Evaluación",
      desc: isEn
        ? "Joint analysis of the business, operations, team, and growth opportunities with full confidentiality."
        : "Análisis conjunto del negocio, operaciones, equipo y oportunidades de crecimiento bajo total confidencialidad.",
      icon: TrendingUp,
    },
    {
      num: "03",
      title: isEn ? "Proposal" : "Propuesta",
      desc: isEn
        ? "A clear, fair proposal aligned with the value you've built. Transparent terms, no hidden clauses."
        : "Una propuesta clara y justa, alineada al valor que usted ha construido. Términos transparentes, sin cláusulas ocultas.",
      icon: CheckCircle2,
    },
    {
      num: "04",
      title: isEn ? "Integration" : "Integración",
      desc: isEn
        ? "Gradual integration preserving your brand, team, and culture. Access to Grupo Sande's infrastructure and network."
        : "Integración gradual preservando su marca, equipo y cultura. Acceso a la infraestructura y red comercial del Grupo Sande.",
      icon: Building2,
    },
  ];

  const criteria = [
    {
      title: isEn ? "Sector" : "Sector",
      desc: isEn
        ? "Industrial tools, fasteners, machinery, automation, industrial services, or related sectors."
        : "Herramientas industriales, fijaciones, maquinaria, automatización, servicios industriales o sectores afines.",
    },
    {
      title: isEn ? "Geography" : "Geografía",
      desc: isEn
        ? "Companies based in Chile with operations in any region."
        : "Empresas con base en Chile, con operaciones en cualquier región.",
    },
    {
      title: isEn ? "Stage" : "Etapa",
      desc: isEn
        ? "Established businesses with proven track record. We value history and relationships over pure financials."
        : "Negocios establecidos con historial demostrable. Valoramos la trayectoria y las relaciones por sobre los números.",
    },
    {
      title: isEn ? "Founder" : "Fundador",
      desc: isEn
        ? "Founders looking for succession, growth partners, or a permanent home for their legacy."
        : "Fundadores que buscan sucesión, socios de crecimiento o un hogar permanente para su legado.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: isEn ? "We Preserve Your Legacy" : "Preservamos Su Legado",
      desc: isEn
        ? "Your brand, your team, your culture. We don't strip companies — we grow them."
        : "Su marca, su equipo, su cultura. No desarmamos empresas — las hacemos crecer.",
    },
    {
      icon: Clock,
      title: isEn ? "Long-Term Vision" : "Visión de Largo Plazo",
      desc: isEn
        ? "We're a 4th-generation family group. We think in decades, not quarterly earnings."
        : "Somos un grupo familiar en 4ª generación. Pensamos en décadas, no en resultados trimestrales.",
    },
    {
      icon: Users,
      title: isEn ? "Operational Autonomy" : "Autonomía Operacional",
      desc: isEn
        ? "Each company maintains its own management, identity, and decision-making. We provide support, not control."
        : "Cada empresa mantiene su propia gestión, identidad y toma de decisiones. Brindamos apoyo, no control.",
    },
    {
      icon: TrendingUp,
      title: isEn ? "Shared Infrastructure" : "Infraestructura Compartida",
      desc: isEn
        ? "Access to 8 branches nationwide, logistics, procurement power, and a commercial network serving 6+ industries."
        : "Acceso a 8 sucursales a nivel nacional, logística, poder de compra y una red comercial en 6+ industrias.",
    },
  ];

  const stories = [
    {
      company: "Tecbolt S.A. — Fijaciones Mamut",
      color: "border-red-500",
      before: isEn
        ? "A fastener manufacturer with quality products but limited distribution."
        : "Un fabricante de fijaciones con productos de calidad pero distribución limitada.",
      after: isEn
        ? "Today: 5,000+ SKUs, ISO 9001 certified for 20 years, national distribution through Sande's 8 branches, market leader in high-strength fasteners."
        : "Hoy: 5.000+ SKUs, certificada ISO 9001 por 20 años, distribución nacional a través de las 8 sucursales de Sande, líder del mercado en fijaciones de alta resistencia.",
    },
    {
      company: "Sandiman S.A.",
      color: "border-emerald-500",
      before: isEn
        ? "A specialized lifting services company serving local projects."
        : "Una empresa de servicios de levante especializada en proyectos locales.",
      after: isEn
        ? "Today: Chile's largest synchronized lifting capacity (40,000+ tons), expanded into automation, nanobubble technology, and agriculture. Offices in Santiago and Antofagasta."
        : "Hoy: Mayor capacidad de levante sincrónico de Chile (40.000+ toneladas), expandida a automatización, tecnología de nanoburbujas y agricultura. Oficinas en Santiago y Antofagasta.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-8">
            <Lock className="h-4 w-4" />
            {isEn ? "Confidential" : "Confidencial"}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            {isEn
              ? "Own an Industrial Company in Chile?"
              : "¿Es Dueño de una Empresa Industrial en Chile?"}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
            {isEn
              ? "Let's grow it together."
              : "Hagámosla crecer juntos."}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {isEn
              ? "Grupo Sande is a 4th-generation Chilean family group looking for established industrial companies to join our platform. We preserve your brand, empower your team, and invest for the long term."
              : "Grupo Sande es un grupo familiar chileno en 4ª generación que busca empresas industriales establecidas para integrarse a nuestra plataforma. Preservamos su marca, potenciamos su equipo e invertimos a largo plazo."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              {isEn ? "Start a Confidential Conversation" : "Iniciar Conversación Confidencial"}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+56224767000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              +56 2 2476 7000
            </a>
          </div>
        </div>
      </section>

      {/* Why Grupo Sande */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isEn ? "Why Join Grupo Sande?" : "¿Por Qué Unirse a Grupo Sande?"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isEn
                  ? "We're not a private equity fund. We're a family of industrial companies that has been growing together for over 90 years."
                  : "No somos un fondo de inversión. Somos una familia de empresas industriales que ha crecido junta por más de 90 años."}
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={((i % 2) + 1) as 1 | 2}>
                <div className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <v.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Stories */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isEn ? "Growth Stories" : "Historias de Crecimiento"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isEn
                  ? "Companies that joined our group and grew with us."
                  : "Empresas que se integraron al grupo y crecieron con nosotros."}
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((s) => (
              <RevealOnScroll key={s.company}>
                <div className={`bg-white rounded-xl border-l-4 ${s.color} p-8`}>
                  <h3 className="font-bold text-gray-900 text-lg mb-4">{s.company}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {isEn ? "Before" : "Antes"}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">{s.before}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                        {isEn ? "After joining the group" : "Tras unirse al grupo"}
                      </span>
                      <p className="text-sm text-gray-900 font-medium mt-1">{s.after}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isEn ? "How It Works" : "Cómo Funciona"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isEn
                  ? "A straightforward, respectful process designed around your timeline."
                  : "Un proceso directo y respetuoso, diseñado a su ritmo."}
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={((i % 4) + 1) as 1 | 2 | 3}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">
                {isEn ? "What We Look For" : "Qué Buscamos"}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isEn
                  ? "We're selective because we invest for the long term."
                  : "Somos selectivos porque invertimos a largo plazo."}
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {criteria.map((c) => (
              <div key={c.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Contact Form */}
      <section id="contacto" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 mb-4">
                <Lock className="h-3 w-3" />
                {isEn ? "100% Confidential" : "100% Confidencial"}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isEn
                  ? "Start a Confidential Conversation"
                  : "Inicie una Conversación Confidencial"}
              </h2>
              <p className="text-gray-600">
                {isEn
                  ? "This information is treated with absolute discretion. Only the Grupo Sande board will receive your inquiry."
                  : "Esta información se trata con absoluta discreción. Solo el directorio de Grupo Sande recibirá su consulta."}
              </p>
            </div>
          </RevealOnScroll>
          <GrowthContactForm locale={lang} />
        </div>
      </section>
    </>
  );
}
