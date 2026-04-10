export default function QueEsClaude() {
  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>¿Qué es Claude?</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 640, lineHeight: 1.6 }}>
        Claude es el modelo de inteligencia artificial creado por Anthropic. Es un asistente de IA conversacional, capaz de razonar, analizar documentos, escribir código, generar contenido y ejecutar tareas complejas de forma autónoma.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginBottom: 32 }}>
        {[
          { title: 'Anthropic', desc: 'Empresa fundada en 2021 por ex-investigadores de OpenAI. Enfocada en seguridad de IA (AI Safety). Su modelo Claude se destaca por ser confiable, transparente y capaz de seguir instrucciones complejas.', color: '#8B5CF6' },
          { title: 'Claude vs. otros LLMs', desc: 'Claude se diferencia por su ventana de contexto masiva (~200K tokens), su capacidad de seguir instrucciones precisas, su enfoque en seguridad, y sus interfaces especializadas (Cowork, Code, Managed Agents).', color: '#0EA5E9' },
          { title: '¿Por qué Claude para consultoría?', desc: 'Ventana de contexto para analizar documentos extensos, artefactos para generar entregables, proyectos para mantener contexto por cliente, y capacidad agéntica para automatizar flujos de trabajo completos.', color: '#4CB882' },
        ].map((c, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 14, padding: 28,
            border: '1px solid var(--border)', borderTop: `3px solid ${c.color}`,
          }}>
            <h3 style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 800 }}>{c.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>Capacidades principales</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        {[
          { cap: 'Análisis de documentos', det: 'PDFs, Word, Excel, imágenes — procesa y sintetiza' },
          { cap: 'Generación de contenido', det: 'Reportes, propuestas, emails, presentaciones' },
          { cap: 'Razonamiento complejo', det: 'Análisis estratégico, financiero, operativo' },
          { cap: 'Escritura de código', det: 'Python, JavaScript, SQL, Power Automate JSON' },
          { cap: 'Investigación profunda', det: 'Deep Research con síntesis de múltiples fuentes' },
          { cap: 'Ejecución autónoma', det: 'Cowork, Code y Managed Agents: tareas multi-paso' },
          { cap: 'Multimodal', det: 'Procesa texto, imágenes, PDFs, diagramas, capturas' },
          { cap: 'Integraciones', det: 'Google Drive, Slack, MCP servers, APIs externas' },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--card)', borderRadius: 10, padding: '16px 20px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{c.cap}</div>
            <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{c.det}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
