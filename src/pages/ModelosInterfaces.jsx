export default function ModelosInterfaces() {
  const models = [
    { name: 'Claude Opus 4.6', tag: 'El más inteligente', color: '#8B5CF6', desc: 'Modelo más avanzado y capaz. Ideal para tareas complejas de análisis, estrategia, redacción de alto nivel y razonamiento profundo.', use: 'Análisis estratégico, documentos complejos, investigación profunda', speed: 1, intel: 5, cost: 5 },
    { name: 'Claude Sonnet 4.6', tag: 'Balance perfecto', color: '#0EA5E9', desc: 'Equilibrio óptimo entre inteligencia y velocidad. Excelente para la mayoría de tareas de consultoría.', use: 'Uso diario, redacción, análisis, código, automatización', speed: 3, intel: 4, cost: 3 },
    { name: 'Claude Haiku 4.5', tag: 'El más rápido', color: '#10B981', desc: 'Modelo ultra-rápido y económico. Perfecto para clasificación, extracción de datos y automatizaciones en volumen.', use: 'Clasificación, extracción, respuestas rápidas, alto volumen', speed: 5, intel: 3, cost: 1 },
  ]
  const interfaces = [
    { name: 'Claude.ai', icon: '💬', desc: 'Interfaz web y móvil principal. Chat, proyectos, artefactos, Deep Research, integraciones.', for: 'Todos los consultores — uso diario' },
    { name: 'Claude Cowork', icon: '🖥️', desc: 'Agente de escritorio que trabaja con tus archivos y aplicaciones directamente.', for: 'Trabajo con documentos, presentaciones y análisis' },
    { name: 'Claude Code', icon: '⌨️', desc: 'Herramienta de terminal para coding agéntico. Ejecuta código, gestiona repos, crea archivos.', for: 'Consultores técnicos, automatización, desarrollo' },
    { name: 'Claude API', icon: '🔌', desc: 'Acceso programático para construir apps, automatizaciones y flujos personalizados.', for: 'Integraciones con Business Central, Power Automate' },
    { name: 'Managed Agents', icon: '🤖', desc: 'Agentes autónomos cloud-hosted para tareas de larga ejecución a escala.', for: 'Automatización enterprise, procesos recurrentes' },
  ]
  const Meter = ({ value, max = 5, color }) => (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: max }, (_, i) => (
        <div key={i} style={{ width: 14, height: 6, borderRadius: 3, background: i < value ? color : 'var(--border)' }} />
      ))}
    </div>
  )

  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Modelos & Interfaces</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 600, lineHeight: 1.6 }}>
        Claude tiene una familia de modelos con diferentes balances de inteligencia, velocidad y costo. Cada uno se accede a través de múltiples interfaces.
      </p>

      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>Familia de modelos</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {models.map((m, i) => (
          <div key={i} style={{ background: 'var(--card)', borderRadius: 14, padding: 28, border: '1px solid var(--border)', borderLeft: `4px solid ${m.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{m.name}</h4>
                  <span style={{ padding: '3px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: m.color, color: '#fff' }}>{m.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: '0 0 12px' }}>{m.desc}</p>
                <div style={{ fontSize: 12, color: 'var(--t2)' }}><span style={{ fontWeight: 700, color: 'var(--t1)' }}>Usar para: </span>{m.use}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 160 }}>
                <div><div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t2)', marginBottom: 4 }}>Inteligencia</div><Meter value={m.intel} color={m.color} /></div>
                <div><div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t2)', marginBottom: 4 }}>Velocidad</div><Meter value={m.speed} color={m.color} /></div>
                <div><div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t2)', marginBottom: 4 }}>Costo</div><Meter value={m.cost} color={m.color} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>Interfaces de acceso</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {interfaces.map((iface, i) => (
          <div key={i} style={{ background: 'var(--card)', borderRadius: 14, padding: 24, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>{iface.icon}</div>
            <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{iface.name}</h4>
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: '0 0 12px' }}>{iface.desc}</p>
            <div style={{ fontSize: 12 }}>
              <span style={{ fontWeight: 700 }}>Para: </span>
              <span style={{ color: 'var(--t2)' }}>{iface.for}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
