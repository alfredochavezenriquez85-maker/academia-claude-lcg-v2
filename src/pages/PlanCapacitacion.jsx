const TRACKS = [
  {
    track: 'Track 1 — Fundamentos', icon: '🧭', weeks: 'Semanas 1–2', required: true,
    courses: [
      { name: 'AI Fluency: Framework & Foundations', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', hrs: '~3h', desc: 'Marco 4D para colaborar con IA de forma efectiva, ética y segura.' },
      { name: 'Claude 101', url: 'https://anthropic.skilljar.com/claude-101', hrs: '~2h', desc: 'Primeros pasos: prompting, proyectos, artefactos, skills, Deep Research.' },
    ],
  },
  {
    track: 'Track 2 — Producto & Productividad', icon: '⚡', weeks: 'Semanas 3–4', required: true,
    courses: [
      { name: 'Introduction to Claude Cowork', url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork', hrs: '~1.5h', desc: 'Task loop, plugins, skills, flujos de archivos e investigación.' },
      { name: 'Claude Code in Action', url: 'https://anthropic.skilljar.com/claude-code-in-action', hrs: '~3h', desc: 'Arquitectura de asistentes de código, contexto, comandos, MCP, GitHub.' },
      { name: 'Introduction to Agent Skills', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', hrs: '~1h', desc: 'Crear y compartir Skills reutilizables en Claude Code.' },
      { name: 'Introduction to Subagents', url: 'https://anthropic.skilljar.com/introduction-to-subagents', hrs: '~20min', desc: 'Sub-agentes para delegar tareas y gestionar contexto.' },
      { name: 'Building with the Claude API', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', hrs: '~8h', desc: 'El curso más completo: tool use, streaming, RAG, MCP, apps con Claude.' },
    ],
  },
  {
    track: 'Track 3 — Adopción Empresarial', icon: '🏛️', weeks: 'Semanas 5–7', required: false,
    courses: [
      { name: 'Driving Enterprise Adoption of Claude', url: 'https://anthropic.skilljar.com/driving-enterprise-adoption-of-claude', hrs: '~2h', desc: 'Framework Activación → Aceleración → Expansión. Centros de Excelencia.' },
      { name: 'Enterprise Train-the-Trainer', url: 'https://anthropic.skilljar.com/enterprise-train-the-trainer', hrs: '~2h', desc: 'Facilitar demos, apoyar colegas, construir momentum interno.' },
    ],
  },
  {
    track: 'Track 4 — Certificación CCA', icon: '🎖️', weeks: 'Mes 3+', required: false,
    courses: [
      { name: 'Claude Certified Architect — Foundations', url: 'https://claude.com/partners', hrs: 'Examen 120min', desc: 'Examen proctored: 60 preguntas. Requiere Claude Partner Network (gratuito).' },
    ],
  },
]

export default function PlanCapacitacion() {
  return (
    <div>
      {/* ===== PAGE HERO ===== */}
      <div
        className="page-hero"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="page-hero__tag">Anthropic Academy · Cursos Gratuitos con Certificado</div>
        <h1 className="page-hero__title">Plan de Capacitacion</h1>
        <p className="page-hero__desc">
          Ruta de aprendizaje en 4 tracks con los cursos oficiales de Anthropic Academy. Todos gratuitos, con certificado de completitud. Desde fundamentos de IA hasta certificacion profesional.
        </p>
      </div>

      {TRACKS.map((track, ti) => (
        <section key={ti} className={`section ${ti % 2 === 0 ? 'section--white' : 'section--cream'}`}>
          {/* Track header bar */}
          <div style={{
            background: 'var(--lcg-green)', borderRadius: 14,
            padding: '20px 28px', color: '#fff',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 26 }}>{track.icon}</span>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>{track.track}</div>
                <div style={{ fontSize: 13, opacity: 0.8 }}>{track.weeks}</div>
              </div>
            </div>
            <span style={{
              padding: '5px 16px', borderRadius: 20,
              fontSize: 12, fontWeight: 700,
              background: 'rgba(255,255,255,0.25)', color: '#fff',
            }}>
              {track.required ? 'Obligatorio' : 'Recomendado'}
            </span>
          </div>

          {/* Course rows */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 14,
          }}>
            {track.courses.map((c, ci) => (
              <div key={ci} style={{
                padding: '20px 28px',
                borderBottom: ci < track.courses.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: 16, flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>{c.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                  <span style={{ fontSize: 13, color: 'var(--t2)', fontWeight: 600 }}>{c.hrs}</span>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={{
                    padding: '8px 18px', borderRadius: 8,
                    background: 'var(--lcg-green)', color: '#fff',
                    fontSize: 13, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>Ir al curso ↗</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
