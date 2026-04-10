export default function ManagedAgents() {
  const resources = [
    { label: 'Documentación oficial', url: 'https://platform.claude.com/docs/en/managed-agents/overview', desc: 'Referencia completa del API, configuración de agentes, entornos y sesiones.' },
    { label: 'Quickstart', url: 'https://platform.claude.com/docs/en/managed-agents/quickstart', desc: 'Guía paso a paso para crear tu primer agente autónomo en minutos.' },
    { label: 'Engineering Blog', url: 'https://www.anthropic.com/engineering/managed-agents', desc: 'Artículo técnico de Anthropic sobre la arquitectura y diseño de Managed Agents.' },
    { label: 'Agent SDK', url: 'https://platform.claude.com/docs/en/agent-sdk/overview', desc: 'SDK para construir agentes propios con las mismas herramientas de Claude Code.' },
    { label: 'Agent Skills (DeepLearning.AI)', url: 'https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/', desc: 'Curso gratuito con Andrew Ng sobre Agent Skills: crear, compartir y desplegar skills reutilizables.' },
    { label: 'Computer Use (DeepLearning.AI)', url: 'https://learn.deeplearning.ai/courses/building-toward-computer-use-with-anthropic/', desc: 'Curso sobre Computer Use: agentes que interactúan con interfaces de computadora.' },
    { label: 'Agent Skills (Anthropic Academy)', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', desc: 'Curso oficial de Anthropic sobre crear y configurar Agent Skills en Claude Code.' },
    { label: 'Agent SDK en GitHub', url: 'https://github.com/anthropics/claude-code', desc: 'Repositorio open source del Claude Agent SDK.' },
  ]

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero__tag">Beta publica -- Abril 2026</div>
        <h1 className="page-hero__title">Claude Managed Agents</h1>
        <p className="page-hero__desc">
          Plataforma de Anthropic para construir y desplegar agentes de IA autonomos en infraestructura cloud administrada. Define el agente, configura el entorno, y deja que Claude ejecute tareas complejas de forma autonoma.
        </p>
      </div>

      {/* 3 INTRO CARDS — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Fundamentos</div>
        <h2 className="section__title">Que son los Managed Agents</h2>
        <p className="section__desc">Tres perspectivas para entender esta nueva plataforma de Anthropic.</p>
        <div className="card-grid">
          {[
            {
              title: 'Que son?',
              desc: 'APIs composables para construir agentes cloud-hosted. En vez de construir tu propio loop de agente, tool execution y runtime, obtienes un entorno totalmente administrado donde Claude puede leer archivos, ejecutar comandos, navegar la web y correr código de forma segura.',
            },
            {
              title: 'Como funcionan?',
              desc: 'Defines un Agent (modelo, system prompt, tools, MCP servers, skills) -> configuras un Environment (container con paquetes, red, archivos) -> lanzas una Session donde Claude trabaja de forma autónoma. Todo via API con streaming de eventos en tiempo real.',
            },
            {
              title: 'Para que sirven?',
              desc: 'Tareas de larga ejecución que requieren múltiples tool calls, infraestructura cloud segura, sesiones stateful con persistencia de archivos, y orquestación multi-agente. Ideal para automatización a escala en producción.',
            },
          ].map((c, i) => (
            <div key={i} className="card" style={{ borderTop: '3px solid var(--lcg-green)' }}>
              <div className="card__body">
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAPABILITIES — section--white */}
      <div className="section section--white">
        <div className="section__tag">Capacidades</div>
        <h2 className="section__title">Capacidades principales</h2>
        <p className="section__desc">Todo lo que puedes hacer con Managed Agents en produccion.</p>
        <div className="feature-grid">
          {[
            { cap: 'Sandboxed Execution', det: 'Containers seguros con paquetes pre-instalados (Python, Node, Go) y reglas de red configurables.' },
            { cap: 'Persistent Memory', det: 'Agentes retienen contexto entre interacciones. Filesystem y conversación persisten entre sesiones.' },
            { cap: 'Multi-Agent Coordination', det: 'Un agente puede crear sub-agentes especializados para tareas complejas (research preview).' },
            { cap: 'Built-in Tools', det: 'File I/O, bash execution, web browsing, code execution — todo incluido en el runtime.' },
            { cap: 'Event Streaming', det: 'Recibe eventos en tiempo real: mensajes del agente, tool calls, resultados, y estado de la sesión.' },
            { cap: 'Governance & Monitoring', det: 'Permisos scoped, identity management, session tracing, y troubleshooting desde la Console.' },
          ].map((c, i) => (
            <div key={i} className="feature">
              <div className="feature__icon" style={{ fontSize: 16, fontWeight: 800, color: 'var(--lcg-green)' }}>{i + 1}</div>
              <div className="feature__title">{c.cap}</div>
              <div className="feature__desc">{c.det}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Pricing</div>
        <h2 className="section__title">Modelo de precios</h2>
        <p className="section__desc">Pricing transparente basado en uso: tokens + runtime + busquedas web.</p>
        <div className="stats-row">
          <div>
            <div className="stat__label" style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, marginBottom: 8 }}>Tokens</div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Pricing estandar del API de Claude por modelo</div>
          </div>
          <div>
            <div className="stat__label" style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, marginBottom: 8 }}>Runtime</div>
            <div className="stat__number">$0.08</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>por session-hour (solo tiempo activo)</div>
          </div>
          <div>
            <div className="stat__label" style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, marginBottom: 8 }}>Web Search</div>
            <div className="stat__number">$10</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>por 1,000 busquedas web</div>
          </div>
        </div>
      </div>

      {/* LCG RELEVANCE — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Para LCG</div>
        <h2 className="section__title">Relevancia para LCG</h2>
        <p className="section__desc">Como Managed Agents puede transformar las operaciones de consultoria.</p>
        <div style={{
          background: 'var(--card)', borderRadius: 16, padding: 32,
          border: '1px solid var(--border)',
          borderLeft: '4px solid var(--lcg-green)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Automatizar procesos de back-office que hoy son manuales: generación de reportes, consolidación de datos, envío de notificaciones.',
              'Crear agentes que ejecuten análisis recurrentes sobre datos de Business Central sin intervención humana.',
              'Construir agentes de investigación que monitoreen tendencias de mercado para clientes de forma continua.',
              'Orquestar flujos multi-paso complejos: desde el análisis de datos hasta la generación y distribución de entregables.',
              'Ofrecer como servicio a clientes: agentes personalizados para sus operaciones específicas.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--t2)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--lcg-green)', fontWeight: 700, flexShrink: 0, fontSize: 16 }}>&#8594;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPANIES USING IT — section--white */}
      <div className="section section--white">
        <div className="section__tag">Adopcion</div>
        <h2 className="section__title">Empresas usando Managed Agents</h2>
        <p className="section__desc">Companias que ya integran Managed Agents en produccion.</p>
        <div className="card-grid" style={{ maxWidth: 700 }}>
          {[
            { name: 'Notion', use: 'Automatización de workflows internos y procesamiento de documentos.' },
            { name: 'Asana', use: 'Task automation y generación de reportes de proyecto.' },
            { name: 'Sentry', use: 'Root cause analysis automatizado: el agente escribe el fix y abre un PR.' },
            { name: 'Rakuten', use: 'Procesamiento de datos y automatización de operaciones a escala.' },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">En produccion</div>
                <h4 className="card__title" style={{ fontSize: 18 }}>{c.name}</h4>
                <p className="card__desc">{c.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESOURCES — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title">Recursos de aprendizaje</h2>
        <p className="section__desc">Documentacion, cursos y herramientas para comenzar con Managed Agents.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '20px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 16, textDecoration: 'none',
            }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{r.desc}</div>
              </div>
              <span className="btn btn--primary" style={{ padding: '8px 18px', fontSize: 12, flexShrink: 0 }}>
                Abrir
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
