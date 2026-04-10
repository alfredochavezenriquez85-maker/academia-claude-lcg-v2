import { NavLink } from 'react-router-dom'

const NAV_SECTIONS = [
  {
    label: 'General',
    items: [
      { to: '/', label: 'Inicio', icon: '◈' },
      { to: '/quienes-somos', label: 'Quiénes Somos', icon: '◇' },
      { to: '/que-es-claude', label: '¿Qué es Claude?', icon: '◆' },
      { to: '/modelos', label: 'Modelos & Interfaces', icon: '▣' },
    ],
  },
  {
    label: 'Interfaces en detalle',
    items: [
      { to: '/claude-chat', label: 'Claude.ai (Chat)', icon: '💬' },
      { to: '/claude-cowork', label: 'Claude Cowork', icon: '🖥' },
      { to: '/claude-code', label: 'Claude Code', icon: '⌨' },
      { to: '/claude-api', label: 'Claude API', icon: '🔌' },
      { to: '/managed-agents', label: 'Managed Agents', icon: '🤖' },
    ],
  },
  {
    label: 'Aprendizaje',
    items: [
      { to: '/conceptos', label: 'Conceptos Clave', icon: '▧' },
      { to: '/capacitacion', label: 'Plan de Capacitación', icon: '▤' },
      { to: '/certificaciones', label: 'Certificaciones', icon: '◉' },
      { to: '/casos-de-uso', label: 'Casos de Uso LCG', icon: '◩' },
    ],
  },
]

export default function Sidebar() {
  return (
    <nav style={{
      width: 'var(--sidebar-w)',
      minWidth: 'var(--sidebar-w)',
      background: 'var(--nav-bg)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 0',
      overflowY: 'auto',
      flexShrink: 0,
    }}>
      {/* Logo LCG */}
      <div style={{ padding: '0 18px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <img
          src={`${import.meta.env.BASE_URL}logo-light.png`}
          alt="London Consulting Group"
          style={{ width: '100%', maxWidth: 200, objectFit: 'contain' }}
        />
        <div style={{
          fontSize: 17,
          fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          color: '#fff',
          marginTop: 12,
        }}>
          Academia Claude
        </div>
      </div>

      {/* Navigation */}
      <div style={{ padding: '12px 12px', flex: 1 }}>
        {NAV_SECTIONS.map((section, si) => (
          <div key={si} style={{ marginBottom: 8 }}>
            <div style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              color: 'rgba(255,255,255,0.25)',
              padding: '10px 14px 6px',
            }}>
              {section.label}
            </div>
            {section.items.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '9px 14px',
                  marginBottom: 1,
                  borderRadius: 8,
                  fontSize: 12.5,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#00C853' : 'rgba(255,255,255,0.5)',
                  background: isActive ? 'rgba(0,200,83,0.1)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                })}
              >
                <span style={{ fontSize: 13, opacity: 0.6, width: 20, textAlign: 'center' }}>
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom link */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <a
          href="https://anthropic.skilljar.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            padding: '10px 14px',
            borderRadius: 8,
            background: 'rgba(0,200,83,0.1)',
            color: '#00C853',
            fontSize: 12,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Anthropic Academy ↗
        </a>
      </div>
    </nav>
  )
}
