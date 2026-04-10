import { useState } from 'react'

const USE_CASES = [
  {
    area: 'Diagnóstico & Discovery', icon: '🔍', color: '#0EA5E9',
    cases: [
      { title: 'Análisis de entrevistas', desc: 'Subir transcripciones de entrevistas con stakeholders a un Proyecto de Claude. Pedir síntesis de hallazgos, patrones recurrentes y contradicciones entre entrevistados.' },
      { title: 'Benchmarking sectorial', desc: 'Usar Deep Research para investigar prácticas de mercado, KPIs de industria y posicionamiento competitivo antes de iniciar un diagnóstico.' },
      { title: 'Análisis de datos operativos', desc: 'Cargar exports de Business Central (CSV/Excel) y pedir a Claude que identifique tendencias, anomalías y áreas de oportunidad en indicadores clave.' },
    ],
  },
  {
    area: 'Diseño de Soluciones', icon: '✏️', color: '#8B5CF6',
    cases: [
      { title: 'Redacción de propuestas', desc: 'Crear un Proyecto con la metodología LCG y el contexto del cliente. Claude genera borradores de propuestas técnicas y económicas siguiendo el formato estándar.' },
      { title: 'Diseño de procesos', desc: 'Describir el proceso actual (AS-IS) y pedir a Claude que proponga el proceso mejorado (TO-BE) con diagramas de flujo en artefactos.' },
      { title: 'Modelado financiero', desc: 'Usar Claude Code para crear modelos de impacto financiero, simulaciones de escenarios y análisis de sensibilidad con código Python.' },
    ],
  },
  {
    area: 'Implementación & Entregables', icon: '📦', color: '#10B981',
    cases: [
      { title: 'Generación de entregables', desc: 'Claude Cowork para crear presentaciones, documentos Word, reportes ejecutivos y manuales de procedimientos directamente desde tus archivos locales.' },
      { title: 'Dashboards e indicadores', desc: 'Pedir artefactos interactivos (React/HTML) con visualizaciones de KPIs que el cliente pueda explorar antes de implementar en su BI.' },
      { title: 'Automatización con Power Automate', desc: 'Usar Claude Code para generar flujos de Power Automate (JSON), conectores y lógica de integración con Business Central y SharePoint.' },
    ],
  },
  {
    area: 'Gestión Interna LCG', icon: '⚙️', color: '#F59E0B',
    cases: [
      { title: 'Preparación de licitaciones', desc: 'Deep Research para investigar al prospecto, su industria y competidores. Generar análisis FODA y puntos de diferenciación para la propuesta.' },
      { title: 'Knowledge Management', desc: 'Crear un Proyecto con la base de conocimiento de LCG: metodologías, casos de éxito, plantillas. Claude se convierte en un asistente de conocimiento interno.' },
      { title: 'Capacitación interna', desc: 'Usar artefactos interactivos para crear materiales de capacitación, quizzes y simuladores para nuevos consultores.' },
    ],
  },
]

export default function CasosDeUso() {
  const [activeArea, setActiveArea] = useState(0)

  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Casos de Uso para LCG</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 600, lineHeight: 1.6 }}>
        Ejemplos concretos de cómo cada área de la práctica de consultoría puede aprovechar Claude.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {USE_CASES.map((uc, i) => (
          <button key={i} onClick={() => setActiveArea(i)} style={{
            padding: '10px 20px', borderRadius: 10,
            border: activeArea === i ? `2px solid ${uc.color}` : '1px solid var(--border)',
            background: activeArea === i ? `${uc.color}10` : 'var(--card)',
            cursor: 'pointer', fontSize: 13, fontWeight: 700,
            color: activeArea === i ? uc.color : 'var(--t2)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>{uc.icon}</span> {uc.area}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {USE_CASES[activeArea].cases.map((c, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 14, padding: 24,
            border: '1px solid var(--border)',
            borderLeft: `4px solid ${USE_CASES[activeArea].color}`,
          }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700 }}>{c.title}</h4>
            <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
