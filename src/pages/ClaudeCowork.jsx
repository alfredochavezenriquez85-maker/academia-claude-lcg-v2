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
    { label: 'Página de producto', url: 'https://www.anthropic.com/product/claude-cowork', desc: 'Descripción oficial de Claude Cowork por Anthropic.' },
    { label: 'Curso: Introduction to Claude Cowork', url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork', desc: 'Task loop, plugins, skills, flujos de archivos e investigación. ~1.5 horas.' },
    { label: 'Webinar: Future of AI at Work', url: 'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork', desc: 'Webinar oficial de Anthropic presentando Cowork y su visión del trabajo con IA.' },
    { label: 'Tutorial DataCamp', url: 'https://www.datacamp.com/tutorial/claude-cowork-tutorial', desc: 'Tutorial práctico paso a paso de Claude Cowork por DataCamp.' },
    { label: 'Anuncio TechCrunch', url: 'https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/', desc: 'Artículo de TechCrunch sobre Cowork: "Claude Code sin el código".' },
  ]

  return (
    <div>
      {/* ===== PAGE HERO ===== */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">AGENTE DE ESCRITORIO · macOS + Windows · GA Abril 2026</div>
        <h1 className="page-hero__title">Claude Cowork</h1>
        <p className="page-hero__desc">
          Claude Cowork es un agente de escritorio que trabaja directamente con tus archivos y aplicaciones. No necesitas terminal ni saber programar. Le describes una tarea, le apuntas a una carpeta, y Claude planifica y ejecuta los pasos de forma autónoma. Disponible en planes Pro ($20/mes), Team y Enterprise.
        </p>
      </div>

      {/* ===== Key Differentiator — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Diferenciador clave</div>
        <h2 className="section__title">Trabajo con archivos locales sin código</h2>
        <p className="section__desc">
          Cowork es la herramienta ideal para consultores que no son técnicos. Mientras Claude Code requiere terminal y conocimientos de programación, Cowork trabaja visualmente con tu escritorio.
        </p>
        <div style={{
          background: '#111', borderRadius: 16, padding: 32,
          border: '1px solid #333', color: '#fff', maxWidth: 760,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Le das una carpeta con archivos del proyecto → los lee, analiza y genera entregables',
              'Navega la web para investigar → extrae información y la estructura',
              'Trabaja con apps de escritorio → crea documentos, organiza archivos',
              'Recibe tareas desde tu iPhone vía Dispatch → ejecuta mientras estás en reunión',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--lcg-green)', fontWeight: 700, flexShrink: 0 }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Features — section--white ===== */}
      <div className="section section--white">
        <div className="section__tag">Capacidades</div>
        <h2 className="section__title">Funcionalidades principales</h2>
        <p className="section__desc">
          Todo lo que Cowork puede hacer para acelerar tu trabajo de consultoría sin escribir una línea de código.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'var(--card)', borderRadius: 14, padding: 28,
              border: '1px solid var(--border)', borderLeft: '3px solid var(--lcg-green)',
            }}>
              <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{f.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 14px' }}>{f.desc}</p>
              <div style={{
                background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
                borderRadius: 8, padding: '10px 16px',
                fontSize: 13, color: 'var(--lcg-green)', fontWeight: 600, lineHeight: 1.6,
              }}>
                Tip LCG: {f.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Comparison Table — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Comparativa</div>
        <h2 className="section__title">Chat vs. Cowork vs. Code</h2>
        <p className="section__desc">
          Elige la interfaz correcta según tu perfil y necesidad.
        </p>
        <div style={{
          borderRadius: 14, overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--card)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'rgba(0,0,0,0.04)', borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--t1)' }}>Característica</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--t2)' }}>Chat</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--lcg-green)' }}>Cowork</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--t2)' }}>Code</th>
              </tr>
            </thead>
            <tbody>
              {vs.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < vs.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td style={{ padding: '12px 20px', color: 'var(--t2)' }}>{row.feature}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--t2)' }}>{row.chat}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, color: 'var(--lcg-green)' }}>{row.cowork}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--t2)' }}>{row.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== LCG Use Cases — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Aplicaciones</div>
        <h2 className="section__title">Casos de uso para consultoría LCG</h2>
        <p className="section__desc">
          Escenarios reales donde Cowork transforma el trabajo diario del consultor sin necesidad de código.
        </p>
        <div className="card-grid">
          {lcgUseCases.map((uc, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <h4 className="card__title">{uc.title}</h4>
                <p className="card__desc">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Resources — section--dark ===== */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title">Recursos y enlaces</h2>
        <p className="section__desc">
          Cursos, tutoriales y documentación para dominar Claude Cowork.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 700 }}>
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '18px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 16, textDecoration: 'none', transition: 'background 0.2s',
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{r.desc}</div>
              </div>
              <span className="btn btn--primary" style={{
                padding: '6px 16px', fontSize: 12, whiteSpace: 'nowrap', flexShrink: 0,
              }}>Abrir ↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
