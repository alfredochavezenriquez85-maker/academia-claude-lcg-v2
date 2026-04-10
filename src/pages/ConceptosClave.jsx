import { useState } from 'react'

const CONCEPTS = [
  { term: 'Prompt Engineering', def: 'El arte de formular instrucciones claras y estructuradas para obtener los mejores resultados de Claude. Incluye técnicas como few-shot examples, chain-of-thought, y uso de XML tags.', tip: 'Sé específico, da contexto, incluye ejemplos de lo que quieres y lo que no quieres.' },
  { term: 'Context Window', def: 'La cantidad de texto que Claude puede "ver" y procesar en una sola conversación. Claude tiene una de las ventanas de contexto más grandes del mercado (~200K tokens, equivalente a ~500 páginas).', tip: 'Aprovecha la ventana larga para análisis de documentos extensos sin fragmentar.' },
  { term: 'Artefactos (Artifacts)', def: 'Piezas de contenido que Claude genera y muestra de forma interactiva: código ejecutable, documentos, visualizaciones, presentaciones, diagramas. Se pueden iterar y descargar.', tip: 'Pide a Claude que cree artefactos cuando necesites algo visual o descargable.' },
  { term: 'Proyectos (Projects)', def: 'Espacios de trabajo en Claude.ai donde puedes agrupar conversaciones con instrucciones personalizadas (System Prompt) y archivos de referencia. Claude mantiene contexto del proyecto.', tip: 'Crea un proyecto por cliente o por iniciativa con instrucciones específicas del contexto.' },
  { term: 'Skills', def: 'Instrucciones en formato Markdown que Claude aplica automáticamente según el tipo de tarea. Son reutilizables y compartibles entre equipos. Disponibles en Claude Code, Cowork y API.', tip: 'Crea skills para tareas repetitivas: formatos de entregables, análisis estándar, etc.' },
  { term: 'MCP (Model Context Protocol)', def: 'Protocolo abierto que permite a Claude conectarse con herramientas y servicios externos (bases de datos, APIs, aplicaciones) de forma estandarizada y segura.', tip: 'MCP es el puente entre Claude y tus sistemas: SharePoint, Business Central, etc.' },
  { term: 'Deep Research', def: 'Modo de investigación profunda donde Claude realiza búsquedas exhaustivas en la web, sintetiza múltiples fuentes y genera reportes completos con citas.', tip: 'Úsalo para benchmarking, análisis de mercado, y due diligence antes de proyectos.' },
  { term: 'Agentic Workflows', def: 'Flujos de trabajo donde Claude actúa de forma autónoma: planifica pasos, ejecuta acciones, evalúa resultados y se auto-corrige. La base de Cowork, Code y Managed Agents.', tip: 'Empieza con tareas acotadas y ve ampliando el alcance conforme ganes confianza.' },
  { term: 'Tool Use / Function Calling', def: 'Capacidad de Claude para invocar herramientas externas (calculadoras, APIs, bases de datos) durante una conversación. Define la herramienta y Claude decide cuándo usarla.', tip: 'Clave para integraciones con Business Central y otros sistemas operativos.' },
  { term: 'RAG (Retrieval-Augmented Generation)', def: 'Técnica que combina la inteligencia de Claude con información recuperada de tus propios documentos y bases de datos. Permite respuestas fundamentadas en datos internos.', tip: 'Ideal para crear asistentes que respondan con base en la metodología LCG.' },
  { term: 'Managed Agents', def: 'Plataforma de Anthropic para desplegar agentes autónomos en infraestructura cloud administrada. El agente trabaja en un container seguro con persistencia, tools y monitoring incluido.', tip: 'Piensa en ellos como "empleados digitales" que ejecutan tareas complejas 24/7 sin supervisión constante.' },
]

export default function ConceptosClave() {
  const [open, setOpen] = useState(null)

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">Vocabulario esencial</div>
        <h1 className="page-hero__title">Conceptos Clave</h1>
        <p className="page-hero__desc">
          Vocabulario esencial para trabajar con Claude. Cada concepto incluye una definicion y un tip practico para aplicarlo en consultoria.
        </p>
      </div>

      {/* ACCORDION — section--white */}
      <div className="section section--white">
        <div className="section__tag">Glosario</div>
        <h2 className="section__title">Todos los conceptos</h2>
        <p className="section__desc">Haz clic en cada termino para ver su definicion y tip practico.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 720 }}>
          {CONCEPTS.map((c, i) => (
            <div key={i} style={{
              background: 'var(--card)', borderRadius: 14,
              border: '1px solid var(--border)', overflow: 'hidden',
              transition: 'box-shadow 0.2s',
              boxShadow: open === i ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '20px 24px', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: open === i ? '#00C853' : 'var(--border)',
                    transition: 'background 0.2s', flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--t1)' }}>{c.term}</span>
                </div>
                <span style={{
                  fontSize: 18, color: 'var(--t2)',
                  transition: 'transform 0.2s',
                  transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>&#9662;</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 24px 48px' }}>
                  <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, margin: '0 0 16px' }}>{c.def}</p>
                  <div style={{
                    background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
                    borderRadius: 10, padding: '14px 18px',
                    fontSize: 13, color: '#00A844', fontWeight: 600, lineHeight: 1.6,
                  }}>
                    Tip LCG: {c.tip}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
