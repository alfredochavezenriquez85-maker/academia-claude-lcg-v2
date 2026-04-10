import { useNavigate } from 'react-router-dom'

export default function Inicio() {
  const navigate = useNavigate()

  return (
    <div>
      {/* HERO */}
      <div className="hero">
        <div className="hero__content">
          <div className="hero__tag">London Consulting Group</div>
          <h1 className="hero__title">
            Academia de IA<br />con Claude
          </h1>
          <p className="hero__desc">
            Portal interno de capacitacion para consultores y directores.
            Domina las herramientas de Anthropic y transforma la forma en que entregamos valor.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn--primary" onClick={() => navigate('/que-es-claude')}>
              Empezar a aprender
            </button>
            <button className="btn btn--outline" onClick={() => navigate('/modelos')}>
              Ver interfaces
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="section section--dark">
        <div className="stats-row">
          {[
            { n: '3', l: 'Modelos disponibles', s: 'Opus \u00B7 Sonnet \u00B7 Haiku' },
            { n: '5', l: 'Interfaces de uso', s: 'Chat \u00B7 Cowork \u00B7 Code \u00B7 API \u00B7 Agents' },
            { n: '10', l: 'Cursos oficiales', s: 'Anthropic Academy (gratuitos)' },
            { n: '12+', l: 'Casos de uso LCG', s: 'Diagnostico \u2192 Implementacion' },
          ].map((s, i) => (
            <div key={i} className="stat">
              <div className="stat__number">{s.n}</div>
              <div className="stat__label" style={{ color: '#fff' }}>{s.l}</div>
              <div className="stat__sub" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERFACES - Matour card grid */}
      <div className="section section--cream">
        <div className="section__tag">Ecosistema Claude</div>
        <h2 className="section__title">Descubre las Interfaces</h2>
        <p className="section__desc">
          Cinco herramientas especializadas para cada etapa de tu trabajo como consultor.
        </p>

        <div className="card-grid">
          {[
            { tag: 'Chat', title: 'Claude.ai', desc: 'Interfaz web y movil. Chat conversacional con proyectos, artefactos, Deep Research e integraciones.', path: '/claude-chat' },
            { tag: 'Desktop', title: 'Claude Cowork', desc: 'Agente de escritorio que trabaja con tus archivos y aplicaciones. Task loop autonomo sin terminal.', path: '/claude-cowork' },
            { tag: 'CLI', title: 'Claude Code', desc: 'Herramienta de linea de comandos para coding agentico. Lee codebases, edita archivos, push a GitHub.', path: '/claude-code' },
            { tag: 'Developer', title: 'Claude API', desc: 'Acceso programatico completo. Messages API, Tool Use, streaming, batch processing y SDKs.', path: '/claude-api' },
            { tag: 'Cloud', title: 'Managed Agents', desc: 'APIs para construir y desplegar agentes autonomos en infraestructura cloud de Anthropic.', path: '/managed-agents' },
          ].map((c, i) => (
            <div key={i} className="card" style={{ cursor: 'pointer' }} onClick={() => navigate(c.path)}>
              <div className="card__body">
                <div className="card__tag">{c.tag}</div>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 700, color: 'var(--lcg-green)' }}>
                  Explorar &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASO REAL DESTACADO */}
      <div className="section section--dark">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="section__tag">Caso Real LCG</div>
            <h2 className="section__title" style={{ color: '#fff' }}>
              Prediagnostico con Claude Code
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
              Fer Sanchez y Fray procesaron entrevistas de una financiera usando Claude Code.
              El resultado: analisis cruzado con datos, modelos de madurez por pilar Lean,
              hallazgos priorizados y entregables HTML interactivos — sin PowerPoint manual.
            </p>
            <blockquote style={{
              borderLeft: '3px solid var(--lcg-green)',
              paddingLeft: 20, fontStyle: 'italic',
              color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.6,
            }}>
              "Nosotros nos estamos convirtiendo en editores, no en espectadores.
              Tenemos que revisar la informacion, agregar nuestro conocimiento e intuicion
              que ninguna IA tiene hoy."
              <div style={{ fontStyle: 'normal', fontWeight: 700, marginTop: 8, color: 'var(--lcg-green)', fontSize: 13 }}>
                — Jaime Restrepo
              </div>
            </blockquote>
          </div>
          <div style={{
            background: '#111', borderRadius: 16, padding: 40,
            border: '1px solid #333',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--lcg-green)', marginBottom: 20, letterSpacing: 2, textTransform: 'uppercase' }}>
              Proceso
            </div>
            {[
              'Crear CLAUDE.md como "cerebro del proyecto"',
              'Subir transcripts de entrevistas',
              'Procesamiento automatico por Claude Code',
              'Documentos HTML interactivos por entrevista',
              'Iteracion con correcciones hasta quedar bien',
              'Push a GitHub como pagina web compartible',
            ].map((step, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '12px 0',
                borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <span style={{
                  minWidth: 28, height: 28, borderRadius: '50%',
                  background: 'rgba(0,200,83,0.1)', color: 'var(--lcg-green)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800,
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, paddingTop: 4 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXPLORA */}
      <div className="section section--white">
        <div className="section__tag">Aprendizaje</div>
        <h2 className="section__title">Explora el Portal</h2>
        <p className="section__desc">
          Navega por todos los modulos de capacitacion disponibles.
        </p>

        <div className="feature-grid">
          {[
            { icon: '\u25C6', label: 'Que es Claude', desc: 'Conoce el modelo de IA de Anthropic y por que lo elegimos.', path: '/que-es-claude' },
            { icon: '\u25A3', label: 'Modelos & Interfaces', desc: 'Opus, Sonnet, Haiku y las 5 interfaces del ecosistema.', path: '/modelos' },
            { icon: '\u25A7', label: 'Conceptos Clave', desc: 'Tokens, context window, system prompts y mas.', path: '/conceptos' },
            { icon: '\uD83D\uDCAC', label: 'Claude.ai (Chat)', desc: 'Interfaz web con proyectos, artefactos y Deep Research.', path: '/claude-chat' },
            { icon: '\uD83D\uDDA5', label: 'Claude Cowork', desc: 'Agente de escritorio para no-developers.', path: '/claude-cowork' },
            { icon: '\u2328', label: 'Claude Code', desc: 'CLI para coding agentico y automatizacion.', path: '/claude-code' },
            { icon: '\uD83D\uDD0C', label: 'Claude API', desc: 'Acceso programatico y SDKs.', path: '/claude-api' },
            { icon: '\uD83E\uDD16', label: 'Managed Agents', desc: 'Agentes autonomos en la nube.', path: '/managed-agents' },
          ].map((n, i) => (
            <div key={i} className="feature" style={{ cursor: 'pointer' }} onClick={() => navigate(n.path)}>
              <div className="feature__icon">{n.icon}</div>
              <div className="feature__title">{n.label}</div>
              <div className="feature__desc">{n.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="section__tag" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Comienza hoy</div>
        <h2 className="section__title" style={{ color: '#fff', maxWidth: 500, margin: '0 auto 16px' }}>
          Certifícate en Anthropic Academy
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Cursos gratuitos con certificado oficial. Desde Claude 101 hasta Managed Agents.
        </p>
        <a
          href="https://anthropic.skilljar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Ir a Anthropic Academy
        </a>
      </div>
    </div>
  )
}
