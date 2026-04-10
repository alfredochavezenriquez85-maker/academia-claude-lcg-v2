import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio' },
  { to: '/que-es-claude', label: 'Claude' },
  { to: '/modelos', label: 'Modelos' },
  { to: '/claude-chat', label: 'Chat' },
  { to: '/claude-cowork', label: 'Cowork' },
  { to: '/claude-code', label: 'Code' },
  { to: '/claude-api', label: 'API' },
  { to: '/managed-agents', label: 'Agents' },
  { to: '/conceptos', label: 'Conceptos' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo">
          <img
            src={`${import.meta.env.BASE_URL}logo-light.png`}
            alt="London Consulting Group"
          />
        </NavLink>

        <nav className="header__nav">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="header__menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? '\u2715' : '\u2630'}
        </button>
      </header>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="https://anthropic.skilljar.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 16, color: 'var(--lcg-green)' }}
        >
          Anthropic Academy
        </a>
      </nav>
    </>
  )
}
