export default function QueEsClaude() {
  const cards = [
    { title: 'Anthropic', desc: 'Empresa fundada en 2021 por ex-investigadores de OpenAI. Enfocada en seguridad de IA (AI Safety). Su modelo Claude se destaca por ser confiable, transparente y capaz de seguir instrucciones complejas.' },
    { title: 'Claude vs. otros LLMs', desc: 'Claude se diferencia por su ventana de contexto masiva (~200K tokens), su capacidad de seguir instrucciones precisas, su enfoque en seguridad, y sus interfaces especializadas (Cowork, Code, Managed Agents).' },
    { title: '¿Por qué Claude para consultoría?', desc: 'Ventana de contexto para analizar documentos extensos, artefactos para generar entregables, proyectos para mantener contexto por cliente, y capacidad agéntica para automatizar flujos de trabajo completos.' },
  ]

  const capabilities = [
    { icon: '📄', cap: 'Análisis de documentos', det: 'PDFs, Word, Excel, imágenes — procesa y sintetiza' },
    { icon: '✍️', cap: 'Generación de contenido', det: 'Reportes, propuestas, emails, presentaciones' },
    { icon: '🧠', cap: 'Razonamiento complejo', det: 'Análisis estratégico, financiero, operativo' },
    { icon: '💻', cap: 'Escritura de código', det: 'Python, JavaScript, SQL, Power Automate JSON' },
    { icon: '🔍', cap: 'Investigación profunda', det: 'Deep Research con síntesis de múltiples fuentes' },
    { icon: '🤖', cap: 'Ejecución autónoma', det: 'Cowork, Code y Managed Agents: tareas multi-paso' },
    { icon: '🖼️', cap: 'Multimodal', det: 'Procesa texto, imágenes, PDFs, diagramas, capturas' },
    { icon: '🔗', cap: 'Integraciones', det: 'Google Drive, Slack, MCP servers, APIs externas' },
  ]

  return (
    <div>
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">Ecosistema Claude</div>
        <h1 className="page-hero__title">¿Qué es Claude?</h1>
        <p className="page-hero__desc">
          Claude es el modelo de inteligencia artificial creado por Anthropic. Es un asistente de IA conversacional, capaz de razonar, analizar documentos, escribir código, generar contenido y ejecutar tareas complejas de forma autónoma.
        </p>
      </div>

      {/* Info Cards */}
      <div className="section section--cream">
        <div className="section__tag">Contexto</div>
        <h2 className="section__title">Conoce a Claude</h2>
        <p className="section__desc">
          El modelo de IA que está transformando la forma en que trabajamos en consultoría.
        </p>
        <div className="card-grid">
          {cards.map((c, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">{'0' + (i + 1)}</div>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="section section--white">
        <div className="section__tag">Funcionalidades</div>
        <h2 className="section__title">Capacidades principales</h2>
        <p className="section__desc">
          Lo que Claude puede hacer por los consultores de LCG en el día a día.
        </p>
        <div className="feature-grid">
          {capabilities.map((c, i) => (
            <div key={i} className="feature">
              <div className="feature__icon">{c.icon}</div>
              <div className="feature__title">{c.cap}</div>
              <div className="feature__desc">{c.det}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
