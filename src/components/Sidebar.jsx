import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: '◈' },
  { to: '/quienes-somos', label: 'Quiénes Somos', icon: '◇' },
  { to: '/que-es-claude', label: '¿Qué es Claude?', icon: '◆' },
  { to: '/modelos', label: 'Modelos & Interfaces', icon: '▣' },
  { to: '/conceptos', label: 'Conceptos Clave', icon: '▧' },
  { to: '/capacitacion', label: 'Plan de Capacitación', icon: '▤' },
  { to: '/certificaciones', label: 'Certificaciones', icon: '◉' },
  { to: '/managed-agents', label: 'Managed Agents', icon: '◫' },
  { to: '/casos-de-uso', label: 'Casos de Uso LCG', icon: '◩' },
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
      <div style={{ padding: '16px 12px', flex: 1 }}>
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              width: '100%',
              padding: '10px 14px',
              marginBottom: 2,
              borderRadius: 8,
              fontSize: 13,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? '#00C853' : 'rgba(255,255,255,0.5)',
              background: isActive ? 'rgba(0,200,83,0.1)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.15s',
            })}          >
            <span style={{ fontSize: 14, opacity: 0.6, width: 20, textAlign: 'center' }}>
              {item.icon}
            </span>
            {item.label}
          </NavLink>
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
