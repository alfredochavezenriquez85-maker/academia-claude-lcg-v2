export default function QuienesSomos() {
  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Quiénes Somos</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 600, lineHeight: 1.6 }}>
        London Consulting Group es una firma de consultoría con presencia en Latinoamérica, enfocada en generar resultados tangibles y sostenibles en las operaciones de nuestros clientes.
      </p>

      <div style={{ background: 'var(--card)', borderRadius: 16, padding: 32, border: '1px solid var(--border)', marginBottom: 24 }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700 }}>¿Por qué IA en LCG?</h3>
        <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>
          La inteligencia artificial no reemplaza la consultoría — la potencia. Nuestro objetivo es que cada consultor de LCG domine las herramientas de Claude para diagnosticar más rápido, diseñar soluciones más robustas y entregar resultados con mayor impacto. Este programa de capacitación es el primer paso hacia una práctica de consultoría aumentada por IA.
        </p>
      </div>

      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Audiencia de este programa
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {[
          {
            role: 'Consultores', icon: '👤',
            desc: 'Equipo de consultoría que trabaja directamente con clientes en diagnóstico, diseño e implementación de soluciones.',
            tracks: 'Tracks 1, 2 y opcionalmente 4',
            goal: 'Usar Claude como copiloto diario en todas las fases de un proyecto de consultoría.',
          },
          {
            role: 'Directores', icon: '👔',
            desc: 'Liderazgo de práctica y dirección de operaciones. Definen rumbo estratégico y priorizan iniciativas de alto impacto.',
            tracks: 'Tracks 1, 2, 3 y opcionalmente 4',
            goal: 'Liderar la adopción de IA en la firma y con clientes. Establecer governance y Centros de Excelencia.',
          },
        ].map((r, i) => (
          <div key={i} style={{ background: 'var(--card)', borderRadius: 14, padding: 28, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>{r.icon}</div>
            <h4 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 800 }}>{r.role}</h4>
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: '0 0 12px' }}>{r.desc}</p>
            <div style={{ fontSize: 12, marginBottom: 8 }}>
              <span style={{ fontWeight: 700 }}>Ruta: </span>
              <span style={{ color: 'var(--t2)' }}>{r.tracks}</span>
            </div>
            <div style={{ fontSize: 12 }}>
              <span style={{ fontWeight: 700 }}>Objetivo: </span>
              <span style={{ color: 'var(--t2)' }}>{r.goal}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
