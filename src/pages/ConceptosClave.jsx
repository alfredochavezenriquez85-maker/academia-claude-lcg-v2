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
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Conceptos Clave</h1>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 600, lineHeight: 1.6 }}>
        Vocabulario esencial para trabajar con Claude. Cada concepto incluye una definición y un tip práctico para aplicarlo en consultoría.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {CONCEPTS.map((c, i) => (
          <div key={i} style={{ background: 'var(--card)', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', background: 'none', border: 'none',
                padding: '18px 24px', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: open === i ? '#4CB882' : 'var(--border)',
                  transition: 'background 0.2s', flexShrink: 0,
                }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)' }}>{c.term}</span>
              </div>
              <span style={{
                fontSize: 18, color: 'var(--t2)',
                transition: 'transform 0.2s',
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}>▾</span>
            </button>
            {open === i && (
              <div style={{ padding: '0 24px 20px 44px' }}>
                <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 12px' }}>{c.def}</p>
                <div style={{
                  background: '#4CB88210', border: '1px solid #4CB88220',
                  borderRadius: 8, padding: '10px 16px',
                  fontSize: 13, color: '#358764', fontWeight: 600,
                }}>
                  💡 Tip LCG: {c.tip}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
