export default function ClaudeCowork() {
  const features = [
    {
      title: 'Task Loop autónomo',
      desc: 'Le asignas una carpeta, describes la tarea y Claude planifica y ejecuta pasos sin intervención constante. Reorganiza archivos, crea reportes desde notas, extrae datos de screenshots, genera presentaciones. Trabaja paso a paso, te muestra el plan y avanza.',
      tip: 'Apunta Cowork a la carpeta de un proyecto de cliente y pídele: "Revisa todas las notas de campo y genera un resumen ejecutivo de hallazgos por área".',
    },
    {
      title: 'Plugins y Connectors',
      desc: 'Se conecta con herramientas web y de escritorio. Connectors para Google Drive, Notion, Slack, y servicios web. Plugins de escritorio para interactuar con apps locales instaladas. Extensible vía MCP servers.',
      tip: 'Conecta Google Drive para que Cowork acceda directamente a los documentos compartidos del equipo sin descargar nada manualmente.',
    },
    {
      title: 'Browser Automation',
      desc: 'Cowork puede navegar la web via Chrome para buscar información, llenar formularios, extraer datos de páginas y completar flujos que requieren interacción web. Ve tu pantalla y opera el navegador.',
      tip: 'Pídele que investigue los últimos reportes financieros públicos de un prospecto y te genere un resumen de highlights.',
    },
    {
      title: 'Dispatch (iPhone)',
      desc: 'Asigna tareas a Cowork desde tu iPhone. Envías la instrucción desde el móvil, Cowork la recibe en tu computadora y ejecuta. Ideal para delegar tareas cuando estás en reuniones o en movimiento.',
      tip: 'Después de una reunión con el cliente, desde tu iPhone envía: "Procesa las notas de la reunión de hoy y genera el acta con acuerdos y responsables".',
    },
    {
      title: 'Trabajo con archivos locales',
      desc: 'Lee, crea, edita y organiza archivos en tu máquina directamente. Word, Excel, PDFs, imágenes, texto plano. No necesitas subir nada a una nube — trabaja con tu filesystem local.',
      tip: 'Apúntalo a una carpeta con exports de Business Central y pídele que consolide los datos en un solo reporte con tendencias por área.',
    },
    {
      title: 'Skills reutilizables',
      desc: 'Define instrucciones en formato Markdown que Cowork aplica automáticamente según el tipo de tarea. Por ejemplo: un skill para formato de reportes LCG, otro para análisis de entrevistas, otro para generar actas de reunión.',
      tip: 'Crea un skill "reporte-lcg" que defina: estructura del reporte, formato, secciones obligatorias, tono. Cowork lo aplicará en cada reporte automáticamente.',
    },
  ]

  const vs = [
    { feature: 'Requiere terminal/código', chat: 'No', cowork: 'No', code: 'Sí' },
    { feature: 'Trabaja con archivos locales', chat: 'No', cowork: 'Sí', code: 'Sí' },
    { feature: 'Navegación web autónoma', chat: 'No', cowork: 'Sí', code: 'No' },
    { feature: 'Task loop multi-paso', chat: 'No', cowork: 'Sí', code: 'Sí' },
    { feature: 'Push a GitHub', chat: 'No', cowork: 'No', code: 'Sí' },
    { feature: 'Ideal para no-developers', chat: 'Sí', cowork: 'Sí', code: 'No' },
    { feature: 'Disponible en móvil', chat: 'Sí', cowork: 'Dispatch', code: 'No' },
  ]

  const lcgUseCases = [
    { title: 'Generación masiva de documentos', desc: 'Apunta Cowork a la carpeta del proyecto con notas, datos y plantillas. Genera presentaciones, reportes ejecutivos, manuales de procedimientos — todo desde archivos locales sin abrir PowerPoint manualmente.' },
    { title: 'Consolidación de datos', desc: 'Múltiples exports de Excel/CSV de diferentes áreas del cliente. Cowork los consolida, cruza datos, identifica inconsistencias y genera un solo archivo con el análisis integrado.' },
    { title: 'Creación de entregables desde notas', desc: 'Después de sesiones de trabajo, tomas notas rápidas. Cowork las convierte en documentos estructurados: actas, minutas, resúmenes ejecutivos con formato profesional.' },
    { title: 'Organización de carpetas de proyecto', desc: 'Cowork puede reorganizar archivos, renombrar según convención, crear estructura de carpetas estándar LCG, y mover documentos a donde corresponde.' },
    { title: 'Investigación web para propuestas', desc: 'Browser automation para investigar el prospecto, su industria, competidores, noticias recientes. Genera un brief pre-propuesta con toda la información relevante.' },
    { title: 'Extracción de datos de screenshots', desc: 'Toma capturas de dashboards, reportes o sistemas del cliente. Cowork extrae los datos, los estructura y los pone en formato analizable.' },
  ]

  const resources = [
    { label: 'Página de producto', url: 'https://www.anthropic.com/product/claude-cowork', desc: 'Descripción oficial de Claude Cowork por Anthropic.', color: '#0EA5E9' },
    { label: 'Curso: Introduction to Claude Cowork', url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork', desc: 'Task loop, plugins, skills, flujos de archivos e investigación. ~1.5 horas.', color: '#00C853' },
    { label: 'Webinar: Future of AI at Work', url: 'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork', desc: 'Webinar oficial de Anthropic presentando Cowork y su visión del trabajo con IA.', color: '#8B5CF6' },
    { label: 'Tutorial DataCamp', url: 'https://www.datacamp.com/tutorial/claude-cowork-tutorial', desc: 'Tutorial práctico paso a paso de Claude Cowork por DataCamp.', color: '#F59E0B' },
    { label: 'Anuncio TechCrunch', url: 'https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/', desc: 'Artículo de TechCrunch sobre Cowork: "Claude Code sin el código".', color: '#EF4444' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Claude Cowork</h1>
      <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, background: '#0EA5E910', border: '1px solid #0EA5E930', color: '#0EA5E9', fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
        AGENTE DE ESCRITORIO · macOS + Windows · GA Abril 2026
      </div>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 680, lineHeight: 1.7 }}>
        Claude Cowork es un agente de escritorio que trabaja directamente con tus archivos y aplicaciones. No necesitas terminal ni saber programar. Le describes una tarea, le apuntas a una carpeta, y Claude planifica y ejecuta los pasos de forma autónoma. Puede reorganizar archivos, crear reportes desde notas, extraer datos de screenshots, generar presentaciones, navegar la web y más. Disponible en planes Pro ($20/mes), Team y Enterprise.
      </p>

      {/* Key differentiator */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius: 14, padding: 28,
        border: '1px solid #334155', color: '#fff', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 800 }}>La clave: trabajo con archivos locales sin código</h3>
        <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.7, margin: '0 0 16px' }}>
          Cowork es la herramienta ideal para consultores que no son técnicos. Mientras Claude Code requiere terminal y conocimientos de programación, Cowork trabaja visualmente con tu escritorio:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            'Le das una carpeta con archivos del proyecto → los lee, analiza y genera entregables',
            'Navega la web para investigar → extrae información y la estructura',
            'Trabaja con apps de escritorio → crea documentos, organiza archivos',
            'Recibe tareas desde tu iPhone vía Dispatch → ejecuta mientras estás en reunión',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, opacity: 0.8, lineHeight: 1.6 }}>
              <span style={{ color: '#0EA5E9', fontWeight: 700, flexShrink: 0 }}>→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Funcionalidades principales
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
        {features.map((f, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 14, padding: 28,
            border: '1px solid var(--border)', borderLeft: '4px solid #0EA5E9',
          }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{f.title}</h4>
            <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 14px' }}>{f.desc}</p>
            <div style={{
              background: '#0EA5E908', border: '1px solid #0EA5E920',
              borderRadius: 8, padding: '10px 16px',
              fontSize: 13, color: '#0077B6', fontWeight: 600, lineHeight: 1.6,
            }}>
              Tip LCG: {f.tip}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Chat vs. Cowork vs. Code — Comparativa
      </h3>
      <div style={{
        background: 'var(--card)', borderRadius: 14, border: '1px solid var(--border)',
        overflow: 'hidden', marginBottom: 36,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: '#f8f7f5', borderBottom: '2px solid var(--border)' }}>
              <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700 }}>Característica</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700 }}>Chat</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: '#0EA5E9' }}>Cowork</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700 }}>Code</th>
            </tr>
          </thead>
          <tbody>
            {vs.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < vs.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '12px 20px', color: 'var(--t2)' }}>{row.feature}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{row.chat}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, color: '#0EA5E9' }}>{row.cowork}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{row.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* LCG Use Cases */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Casos de uso para consultoría LCG
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14, marginBottom: 36 }}>
        {lcgUseCases.map((uc, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 12, padding: 22,
            border: '1px solid var(--border)',
          }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>{uc.title}</h4>
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: 0 }}>{uc.desc}</p>
          </div>
        ))}
      </div>

      {/* Resources */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Recursos y enlaces
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {resources.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--card)', borderRadius: 12, padding: '18px 24px',
            border: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 16, textDecoration: 'none',
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--t1)', marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{r.desc}</div>
            </div>
            <span style={{
              padding: '6px 14px', borderRadius: 8,
              background: r.color, color: '#fff',
              fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
            }}>Abrir ↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
