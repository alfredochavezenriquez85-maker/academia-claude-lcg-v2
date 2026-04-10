export default function Certificaciones() {
  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Certificaciones Oficiales</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 640, lineHeight: 1.6 }}>
        Anthropic ofrece certificados de completitud por cada curso y la certificación técnica formal CCA.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginBottom: 36 }}>
        <div style={{ background: 'var(--card)', borderRadius: 14, padding: 28, border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>📜</div>
          <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 800 }}>Certificados de Completitud</h3>
          <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 16px' }}>
            Cada curso de Anthropic Academy otorga un certificado oficial al completar lecciones y evaluación final. Se agregan a LinkedIn.
          </p>
          <div style={{ fontSize: 13 }}>
            <div style={{ marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Costo:</span> <span style={{ color: 'var(--t2)' }}>Gratuito</span></div>
            <div style={{ marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Formato:</span> <span style={{ color: 'var(--t2)' }}>Self-paced, online</span></div>
            <div><span style={{ fontWeight: 700 }}>Plataforma:</span> <span style={{ color: 'var(--t2)' }}>anthropic.skilljar.com</span></div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1A1A1A, #2D2D2D)', borderRadius: 14, padding: 28, border: '1px solid #333', color: '#fff' }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🎖️</div>
          <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 800 }}>Claude Certified Architect (CCA)</h3>
          <p style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.7, margin: '0 0 16px' }}>
            Primera certificación técnica formal de Anthropic. Examen proctored de 60 preguntas en 120 minutos.
          </p>
          <div style={{ fontSize: 13, opacity: 0.8 }}>
            <div style={{ marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Costo:</span> $99 USD (gratis para primeros 5,000 partners)</div>
            <div style={{ marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Requisito:</span> Unirse al Claude Partner Network</div>
            <div style={{ marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Formato:</span> Proctored, cerrado, sin IA</div>
            <div><span style={{ fontWeight: 700 }}>Próximas:</span> Seller, Developer, Advanced Architect (2026)</div>
          </div>
          <a href="https://claude.com/partners" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', marginTop: 16, padding: '10px 24px', borderRadius: 8,
            background: '#C2185B', color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>Unirse al Partner Network ↗</a>
        </div>
      </div>

      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Dominios del examen CCA Foundations
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { domain: 'Agentic Architecture', pct: 25, desc: 'Diseño de flujos agénticos, orquestación de tareas, patrones de autonomía' },
          { domain: 'Claude Code & Configuration', pct: 20, desc: 'Configuración de entornos, CLAUDE.md, hooks, comandos personalizados' },
          { domain: 'MCP Integration', pct: 20, desc: 'Servidores MCP, schemas de herramientas, autenticación, seguridad' },
          { domain: 'Prompt Engineering', pct: 20, desc: 'Técnicas avanzadas de prompting, structured output, evaluaciones' },
          { domain: 'Context Management', pct: 15, desc: 'Token budgeting, RAG, caching, coherencia en conversaciones largas' },
        ].map((d, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 10, padding: '16px 20px',
            border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10,
              background: '#C2185B15', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, fontWeight: 800, color: '#C2185B', flexShrink: 0,
            }}>{d.pct}%</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{d.domain}</div>
              <div style={{ fontSize: 12, color: 'var(--t2)' }}>{d.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
