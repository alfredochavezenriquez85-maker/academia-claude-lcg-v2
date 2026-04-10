const TRACKS = [
  {
    track: 'Track 1 — Fundamentos', color: '#2D6A4F', icon: '🧭', weeks: 'Semanas 1–2', required: true,
    courses: [
      { name: 'AI Fluency: Framework & Foundations', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', hrs: '~3h', desc: 'Marco 4D para colaborar con IA de forma efectiva, ética y segura.' },
      { name: 'Claude 101', url: 'https://anthropic.skilljar.com/claude-101', hrs: '~2h', desc: 'Primeros pasos: prompting, proyectos, artefactos, skills, Deep Research.' },
    ],
  },
  {
    track: 'Track 2 — Producto & Productividad', color: '#7B2CBF', icon: '⚡', weeks: 'Semanas 3–4', required: true,
    courses: [
      { name: 'Introduction to Claude Cowork', url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork', hrs: '~1.5h', desc: 'Task loop, plugins, skills, flujos de archivos e investigación.' },
      { name: 'Claude Code in Action', url: 'https://anthropic.skilljar.com/claude-code-in-action', hrs: '~3h', desc: 'Arquitectura de asistentes de código, contexto, comandos, MCP, GitHub.' },
      { name: 'Introduction to Agent Skills', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', hrs: '~1h', desc: 'Crear y compartir Skills reutilizables en Claude Code.' },
      { name: 'Introduction to Subagents', url: 'https://anthropic.skilljar.com/introduction-to-subagents', hrs: '~20min', desc: 'Sub-agentes para delegar tareas y gestionar contexto.' },
      { name: 'Building with the Claude API', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', hrs: '~8h', desc: 'El curso más completo: tool use, streaming, RAG, MCP, apps con Claude.' },
    ],
  },
  {
    track: 'Track 3 — Adopción Empresarial', color: '#B8860B', icon: '🏛️', weeks: 'Semanas 5–7', required: false,
    courses: [
      { name: 'Driving Enterprise Adoption of Claude', url: 'https://anthropic.skilljar.com/driving-enterprise-adoption-of-claude', hrs: '~2h', desc: 'Framework Activación → Aceleración → Expansión. Centros de Excelencia.' },
      { name: 'Enterprise Train-the-Trainer', url: 'https://anthropic.skilljar.com/enterprise-train-the-trainer', hrs: '~2h', desc: 'Facilitar demos, apoyar colegas, construir momentum interno.' },
    ],
  },
  {
    track: 'Track 4 — Certificación CCA', color: '#C2185B', icon: '🎖️', weeks: 'Mes 3+', required: false,
    courses: [
      { name: 'Claude Certified Architect — Foundations', url: 'https://claude.com/partners', hrs: 'Examen 120min', desc: 'Examen proctored: 60 preguntas. Requiere Claude Partner Network (gratuito).' },
    ],
  },
]

export default function PlanCapacitacion() {
  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Plan de Capacitación</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 600, lineHeight: 1.6 }}>
        Ruta de aprendizaje en 4 tracks con los cursos oficiales de Anthropic Academy. Todos gratuitos, con certificado de completitud.
      </p>

      {TRACKS.map((track, ti) => (
        <div key={ti} style={{ marginBottom: 28 }}>
          <div style={{
            background: track.color, borderRadius: '14px 14px 0 0',
            padding: '18px 24px', color: '#fff',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 24 }}>{track.icon}</span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800 }}>{track.track}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>{track.weeks}</div>
              </div>
            </div>
            <span style={{
              padding: '3px 12px', borderRadius: 20,
              fontSize: 11, fontWeight: 700,
              background: 'rgba(255,255,255,0.2)', color: '#fff',
            }}>
              {track.required ? 'Obligatorio' : 'Recomendado'}
            </span>
          </div>
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)', borderTop: 'none',
            borderRadius: '0 0 14px 14px',
          }}>
            {track.courses.map((c, ci) => (
              <div key={ci} style={{
                padding: '16px 24px',
                borderBottom: ci < track.courses.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: 16, flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{c.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, color: 'var(--t2)', fontWeight: 600 }}>{c.hrs}</span>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={{
                    padding: '6px 14px', borderRadius: 8,
                    background: track.color, color: '#fff',
                    fontSize: 12, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>Ir al curso ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
