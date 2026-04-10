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
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Claude Managed Agents</h1>
      <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, background: '#0EA5E910', border: '1px solid #0EA5E930', color: '#0EA5E9', fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
        BETA PÚBLICA · Abril 2026
      </div>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 640, lineHeight: 1.6 }}>
        Managed Agents es la plataforma de Anthropic para construir y desplegar agentes de IA autónomos en infraestructura cloud administrada. Define el agente, configura el entorno, y deja que Claude ejecute tareas complejas de forma autónoma.
      </p>

      {/* What are they */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 36 }}>
        {[
          {
            title: '¿Qué son?',
            icon: '🤖',
            desc: 'APIs composables para construir agentes cloud-hosted. En vez de construir tu propio loop de agente, tool execution y runtime, obtienes un entorno totalmente administrado donde Claude puede leer archivos, ejecutar comandos, navegar la web y correr código de forma segura.',
          },
          {
            title: '¿Cómo funcionan?',
            icon: '⚙️',
            desc: 'Defines un Agent (modelo, system prompt, tools, MCP servers, skills) → configuras un Environment (container con paquetes, red, archivos) → lanzas una Session donde Claude trabaja de forma autónoma. Todo via API con streaming de eventos en tiempo real.',
          },
          {
            title: '¿Para qué sirven?',
            icon: '🎯',
            desc: 'Tareas de larga ejecución que requieren múltiples tool calls, infraestructura cloud segura, sesiones stateful con persistencia de archivos, y orquestación multi-agente. Ideal para automatización a escala en producción.',
          },
        ].map((c, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 14, padding: 28,
            border: '1px solid var(--border)',
            borderTop: '3px solid #0EA5E9',
          }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
            <h3 style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 800 }}>{c.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Key capabilities */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Capacidades principales
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 36 }}>
        {[
          { cap: 'Sandboxed Execution', det: 'Containers seguros con paquetes pre-instalados (Python, Node, Go) y reglas de red configurables.' },
          { cap: 'Persistent Memory', det: 'Agentes retienen contexto entre interacciones. Filesystem y conversación persisten entre sesiones.' },
          { cap: 'Multi-Agent Coordination', det: 'Un agente puede crear sub-agentes especializados para tareas complejas (research preview).' },
          { cap: 'Built-in Tools', det: 'File I/O, bash execution, web browsing, code execution — todo incluido en el runtime.' },
          { cap: 'Event Streaming', det: 'Recibe eventos en tiempo real: mensajes del agente, tool calls, resultados, y estado de la sesión.' },
          { cap: 'Governance & Monitoring', det: 'Permisos scoped, identity management, session tracing, y troubleshooting desde la Console.' },
        ].map((c, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 10, padding: '16px 20px',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{c.cap}</div>
            <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{c.det}</div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius: 14, padding: 28,
        border: '1px solid #334155', color: '#fff', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 800 }}>💰 Pricing</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Tokens</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>Pricing estándar del API de Claude por modelo</div>
          </div>
          <div>
            <div style={{ fontSize: 11, opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Runtime</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0EA5E9' }}>$0.08</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>por session-hour (solo tiempo activo)</div>
          </div>
          <div>
            <div style={{ fontSize: 11, opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Web Search</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0EA5E9' }}>$10</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>por 1,000 búsquedas web</div>
          </div>
        </div>
      </div>

      {/* Relevancia para LCG */}
      <div style={{
        background: 'var(--card)', borderRadius: 14, padding: 28,
        border: '1px solid var(--border)', marginBottom: 36,
        borderLeft: '4px solid #00C853',
      }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 800 }}>🏢 Relevancia para LCG</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Automatizar procesos de back-office que hoy son manuales: generación de reportes, consolidación de datos, envío de notificaciones.',
            'Crear agentes que ejecuten análisis recurrentes sobre datos de Business Central sin intervención humana.',
            'Construir agentes de investigación que monitoreen tendencias de mercado para clientes de forma continua.',
            'Orquestar flujos multi-paso complejos: desde el análisis de datos hasta la generación y distribución de entregables.',
            'Ofrecer como servicio a clientes: agentes personalizados para sus operaciones específicas.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--t2)', lineHeight: 1.6 }}>
              <span style={{ color: '#00C853', fontWeight: 700, flexShrink: 0 }}>→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Who is using it */}
      <div style={{
        background: 'var(--card)', borderRadius: 14, padding: 28,
        border: '1px solid var(--border)', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 800 }}>🌍 Empresas usando Managed Agents</h3>
        <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.6, margin: 0 }}>
          Notion, Asana, Sentry y Rakuten ya están integrando Managed Agents en producción para automatizar coding, task automation y document processing. Sentry, por ejemplo, usa Managed Agents para que un agente escriba el fix y abra un PR automáticamente a partir del root cause analysis.
        </p>
      </div>

      {/* Learning resources */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Recursos de aprendizaje
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {resources.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--card)', borderRadius: 12, padding: '18px 24px',
            border: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 16, transition: 'all 0.15s', textDecoration: 'none',
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--t1)', marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{r.desc}</div>
            </div>
            <span style={{
              padding: '6px 14px', borderRadius: 8,
              background: '#0EA5E9', color: '#fff',
              fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
            }}>Abrir ↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
