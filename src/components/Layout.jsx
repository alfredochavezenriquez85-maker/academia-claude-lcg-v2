import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  const mainRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0
  }, [location.pathname])

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <main ref={mainRef} style={{
        flex: 1,
        overflowY: 'auto',
        padding: '40px 48px 64px',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {children}
          <footer style={{
            marginTop: 56, paddingTop: 20,
            borderTop: '1px solid var(--border)',
            fontSize: 11, color: 'var(--t2)',
            textAlign: 'center', lineHeight: 1.6,
          }}>
            Academia Claude — London Consulting Group · Abril 2026<br />
            Portal interno de capacitación · Cursos y certificados propiedad de Anthropic
          </footer>
        </div>
      </main>
    </div>
  )
}
