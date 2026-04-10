import { useNavigate } from 'react-router-dom'

export default function Inicio() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #000 0%, #111 40%, #1a1a1a 100%)',
        borderRadius: 20, padding: '56px 48px', color: '#fff',
        position: 'relative', overflow: 'hidden', marginBottom: 40,
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative' }}>
          <img src="/logo-light.png" alt="London Consulting Group" style={{ height: 40, objectFit: 'contain' }} />
          <h1 style={{ margin: 0, fontSize: 42, fontWeight: 800, lineHeight: 1.1, maxWidth: 600 }}>
            Academia de IA
            <br />
            <span style={{ color: '#00C853' }}>con Claude</span>
          </h1>
          <p style={{ fontSize: 17, opacity: 0.6, marginTop: 16, maxWidth: 520, lineHeight: 1.6 }}>
            Portal interno de capacitación para consultores y directores.
            Domina las herramientas de Anthropic y transforma la forma en que entregamos valor.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/que-es-claude')} style={{
              padding: '12px 28px', borderRadius: 10, border: 'none',
              background: '#00C853', color: '#fff', fontSize: 14, fontWeight: 700,
              cursor: 'pointer',
            }}>Empezar a aprender →</button>
            <button onClick={() => navigate('/capacitacion')} style={{
              padding: '12px 28px', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)', color: '#fff',
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>Ver plan de capacitación</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
        {[
          { n: '3', l: 'Modelos disponibles', s: 'Opus · Sonnet · Haiku', c: '#8B5CF6' },
          { n: '5', l: 'Interfaces de uso', s: 'Claude.ai · Cowork · Code · API · Managed Agents', c: '#0EA5E9' },
          { n: '10', l: 'Cursos oficiales', s: 'Anthropic Academy (gratuitos)', c: '#00C853' },
          { n: '12+', l: 'Casos de uso LCG', s: 'Diagnóstico → Implementación', c: '#F59E0B' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 14, padding: '24px 20px',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: s.c }}>{s.n}</div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>{s.l}</div>
            <div style={{ fontSize: 12, color: 'var(--t2)', marginTop: 4 }}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* Quick nav */}
      <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Explora el portal
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
        {[
          { label: 'Quiénes Somos', path: '/quienes-somos', icon: '◇' },
          { label: '¿Qué es Claude?', path: '/que-es-claude', icon: '◆' },
          { label: 'Modelos & Interfaces', path: '/modelos', icon: '▣' },
          { label: 'Conceptos Clave', path: '/conceptos', icon: '▧' },
          { label: 'Plan de Capacitación', path: '/capacitacion', icon: '▤' },
          { label: 'Certificaciones', path: '/certificaciones', icon: '◉' },
          { label: 'Managed Agents', path: '/managed-agents', icon: '◫' },
          { label: 'Casos de Uso LCG', path: '/casos-de-uso', icon: '◩' },
        ].map(n => (
          <button key={n.path} onClick={() => navigate(n.path)} style={{
            background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12,
            padding: '20px 24px', textAlign: 'left', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 14,
            transition: 'all 0.15s',
          }}>
            <span style={{ fontSize: 22, opacity: 0.5 }}>{n.icon}</span>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{n.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
