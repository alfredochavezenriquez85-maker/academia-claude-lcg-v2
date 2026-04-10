import { useNavigate } from 'react-router-dom'

export default function ModelosInterfaces() {
  const navigate = useNavigate()

  const models = [
    { name: 'Claude Opus 4.6', tag: 'El más inteligente', desc: 'Modelo más avanzado y capaz. Ideal para tareas complejas de análisis, estrategia, redacción de alto nivel y razonamiento profundo.', use: 'Análisis estratégico, documentos complejos, investigación profunda', speed: 1, intel: 5, cost: 5 },
    { name: 'Claude Sonnet 4.6', tag: 'Balance perfecto', desc: 'Equilibrio óptimo entre inteligencia y velocidad. Excelente para la mayoría de tareas de consultoría.', use: 'Uso diario, redacción, análisis, código, automatización', speed: 3, intel: 4, cost: 3 },
    { name: 'Claude Haiku 4.5', tag: 'El más rápido', desc: 'Modelo ultra-rápido y económico. Perfecto para clasificación, extracción de datos y automatizaciones en volumen.', use: 'Clasificación, extracción, respuestas rápidas, alto volumen', speed: 5, intel: 3, cost: 1 },
  ]

  const interfaces = [
    { name: 'Claude.ai (Chat)', icon: '💬', path: '/claude-chat', desc: 'Interfaz web y móvil principal. Chat conversacional con proyectos, artefactos interactivos, Deep Research para investigación profunda con citas, integraciones con Google Drive, Slack y herramientas externas vía MCP.', for: 'Todos los consultores — uso diario' },
    { name: 'Claude Cowork', icon: '🖥️', path: '/claude-cowork', desc: 'Agente de escritorio (macOS y Windows) que trabaja directamente con tus archivos y aplicaciones. Task loop autónomo, browser automation, Dispatch desde iPhone. No requiere programar.', for: 'Trabajo con documentos, presentaciones y análisis' },
    { name: 'Claude Code', icon: '⌨️', path: '/claude-code', desc: 'CLI agéntico para coding y automatización. Lee codebases completos, edita archivos, ejecuta código, gestiona Git. Sub-agentes, Skills, MCP servers. El CLAUDE.md es el "cerebro del proyecto".', for: 'Consultores técnicos, automatización, entregables web' },
    { name: 'Claude API', icon: '🔌', path: '/claude-api', desc: 'Acceso programático completo. Messages API, Tool Use, streaming, prompt caching (-90% costo), batch processing (-50%), structured output JSON. SDKs en Python, TypeScript, Java, Go.', for: 'Integraciones con Business Central, Power Automate, apps' },
    { name: 'Managed Agents', icon: '🤖', path: '/managed-agents', desc: 'Agentes autónomos cloud-hosted. Define Agent + Environment + Session y Claude ejecuta tareas complejas de forma autónoma en infraestructura administrada por Anthropic. Beta pública abril 2026.', for: 'Automatización enterprise, procesos recurrentes 24/7' },
  ]

  const Meter = ({ value, max = 5 }) => (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          style={{
            width: 14,
            height: 6,
            borderRadius: 3,
            background: i < value ? 'var(--lcg-green)' : 'var(--border)',
          }}
        />
      ))}
    </div>
  )

  return (
    <div>
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">Ecosistema Claude</div>
        <h1 className="page-hero__title">Modelos & Interfaces</h1>
        <p className="page-hero__desc">
          Claude tiene una familia de modelos con diferentes balances de inteligencia, velocidad y costo. Cada uno se accede a través de múltiples interfaces especializadas.
        </p>
      </div>

      {/* Models */}
      <div className="section section--cream">
        <div className="section__tag">Modelos</div>
        <h2 className="section__title">Familia de modelos</h2>
        <p className="section__desc">
          Tres modelos diseñados para diferentes necesidades de consultoría.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {models.map((m, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <h3 className="card__title" style={{ marginBottom: 0 }}>{m.name}</h3>
                      <span style={{
                        padding: '4px 14px',
                        borderRadius: 20,
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: "'Manrope', sans-serif",
                        background: 'var(--lcg-green)',
                        color: '#fff',
                      }}>
                        {m.tag}
                      </span>
                    </div>
                    <p className="card__desc" style={{ margin: '0 0 12px' }}>{m.desc}</p>
                    <div style={{ fontSize: 13, color: 'var(--t2)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--t1)' }}>Usar para: </span>{m.use}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 160 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Manrope', sans-serif", color: 'var(--t2)', marginBottom: 4 }}>Inteligencia</div>
                      <Meter value={m.intel} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Manrope', sans-serif", color: 'var(--t2)', marginBottom: 4 }}>Velocidad</div>
                      <Meter value={m.speed} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Manrope', sans-serif", color: 'var(--t2)', marginBottom: 4 }}>Costo</div>
                      <Meter value={m.cost} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interfaces */}
      <div className="section section--cream">
        <div className="section__tag">Interfaces</div>
        <h2 className="section__title">Interfaces de acceso</h2>
        <p className="section__desc">
          Haz clic en cada interfaz para ver el detalle completo: funcionalidades, tips para LCG, casos de uso y recursos de aprendizaje.
        </p>
        <div className="card-grid">
          {interfaces.map((iface, i) => (
            <div
              key={i}
              className="card"
              onClick={() => navigate(iface.path)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(iface.path)}
            >
              <div className="card__body">
                <div style={{ fontSize: 32, marginBottom: 14 }}>{iface.icon}</div>
                <div className="card__tag">{iface.name}</div>
                <h3 className="card__title">{iface.name}</h3>
                <p className="card__desc">{iface.desc}</p>
                <div style={{ fontSize: 13, margin: '12px 0 16px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--t1)' }}>Para: </span>
                  <span style={{ color: 'var(--t2)' }}>{iface.for}</span>
                </div>
                <span className="btn btn--primary" style={{ fontSize: 12, padding: '8px 20px' }}>
                  Ver detalle →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
