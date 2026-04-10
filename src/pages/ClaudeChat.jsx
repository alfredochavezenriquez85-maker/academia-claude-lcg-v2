export default function ClaudeChat() {
  const features = [
    {
      title: 'Proyectos',
      desc: 'Espacios de trabajo con System Prompt personalizado y archivos de referencia. Claude mantiene contexto por cliente, por iniciativa o por equipo. Sube documentos, define instrucciones y todas las conversaciones dentro del proyecto heredan ese contexto.',
      tip: 'Crea un proyecto por cada cliente o engagement. Define en el System Prompt: quién es el cliente, sector, pilares de diagnóstico, formato de entregables esperado.',
    },
    {
      title: 'Artefactos (Artifacts)',
      desc: 'Claude genera piezas de contenido interactivas: código ejecutable, documentos, visualizaciones con gráficas, presentaciones, diagramas de flujo, tablas comparativas. Se renderizan en tiempo real, se pueden iterar con feedback y descargar.',
      tip: 'Pide a Claude que cree un artefacto HTML interactivo con los hallazgos de un diagnóstico. El cliente puede explorar los datos antes de ver un PowerPoint.',
    },
    {
      title: 'Deep Research',
      desc: 'Modo de investigación profunda donde Claude realiza decenas de búsquedas web, lee y sintetiza múltiples fuentes, y genera reportes completos con citas y referencias. Ideal para análisis exhaustivos que normalmente tomarían horas.',
      tip: 'Antes de iniciar un diagnóstico, usa Deep Research para hacer benchmarking sectorial: prácticas de mercado, KPIs de industria, posicionamiento competitivo del prospecto.',
    },
    {
      title: 'Subida de archivos',
      desc: 'Sube directamente PDFs, documentos Word, hojas de Excel, imágenes, capturas de pantalla y presentaciones PowerPoint. Claude los procesa, extrae información y puede analizarlos, compararlos o sintetizarlos.',
      tip: 'Sube exports de Business Central (CSV/Excel) y pide a Claude que identifique tendencias, anomalías y áreas de oportunidad. Cruza datos cuantitativos con hallazgos cualitativos.',
    },
    {
      title: 'Integraciones',
      desc: 'Conecta Claude con Google Drive, Google Docs, Slack, Notion y herramientas externas vía MCP (Model Context Protocol). Accede a tus archivos de Drive directamente desde la conversación sin descargar nada.',
      tip: 'Conecta Google Drive para que Claude acceda a los documentos compartidos del cliente y pueda analizarlos sin que tengas que descargarlos uno por uno.',
    },
    {
      title: 'Conversación multimodal',
      desc: 'Claude procesa texto, imágenes, PDFs, diagramas, capturas de pantalla y más. Puedes pegar una captura de un dashboard, una foto de un pizarrón o un diagrama y Claude lo interpreta y analiza.',
      tip: 'Toma una foto del whiteboard de una sesión de mapeo de procesos y pídele a Claude que lo digitalice como diagrama de flujo en un artefacto.',
    },
  ]

  const lcgUseCases = [
    { title: 'Análisis de entrevistas', desc: 'Sube transcripts de entrevistas con stakeholders. Claude sintetiza hallazgos, identifica patrones recurrentes, detecta contradicciones entre entrevistados y genera un resumen ejecutivo.', interface: 'Proyectos + Archivos' },
    { title: 'Benchmarking pre-diagnóstico', desc: 'Deep Research para investigar prácticas de mercado, KPIs de la industria del cliente, tendencias del sector y posicionamiento competitivo. Reporte con citas antes de iniciar el diagnóstico.', interface: 'Deep Research' },
    { title: 'Preparación de propuestas', desc: 'Crea un Proyecto con la metodología LCG + contexto del cliente. Claude genera borradores de propuestas técnicas y económicas en formato estándar con recomendaciones fundamentadas.', interface: 'Proyectos + Artefactos' },
    { title: 'Diseño de procesos AS-IS → TO-BE', desc: 'Describe el proceso actual y Claude propone mejoras con diagramas de flujo interactivos en artefactos HTML. El cliente puede explorar el proceso propuesto.', interface: 'Artefactos' },
    { title: 'Preparación de licitaciones', desc: 'Deep Research del prospecto, su industria y competidores. Genera análisis FODA, puntos de diferenciación y argumentos personalizados para la propuesta.', interface: 'Deep Research + Proyectos' },
    { title: 'Knowledge management', desc: 'Proyecto con la base de conocimiento de LCG: metodologías, frameworks, casos de éxito, plantillas. Claude se convierte en asistente de conocimiento interno para todo el equipo.', interface: 'Proyectos' },
  ]

  const resources = [
    { label: 'Ir a Claude.ai', url: 'https://claude.ai', desc: 'Accede a la interfaz web directamente.' },
    { label: 'Página de producto', url: 'https://www.anthropic.com/product/claude', desc: 'Descripción oficial de Claude por Anthropic.' },
    { label: 'Curso Claude 101', url: 'https://anthropic.skilljar.com/claude-101', desc: 'Primeros pasos: prompting, proyectos, artefactos, skills, Deep Research. ~2 horas.' },
    { label: 'Video: Future of AI at Work', url: 'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork', desc: 'Webinar de Anthropic: flujo Chat → Code → Cowork y el futuro del trabajo con IA.' },
  ]

  return (
    <div>
      {/* ===== PAGE HERO ===== */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">INTERFAZ PRINCIPAL · Web + Móvil</div>
        <h1 className="page-hero__title">Claude.ai — Chat</h1>
        <p className="page-hero__desc">
          Claude.ai es la interfaz web y móvil principal de Claude. Es un chat conversacional avanzado con capacidades que van mucho más allá de un chatbot: proyectos con contexto persistente, artefactos interactivos, Deep Research para investigación profunda con citas, integraciones con Google Drive, Slack y herramientas externas vía MCP. Soporta subida directa de archivos (PDFs, Word, Excel, imágenes, PowerPoint) para análisis inmediato.
        </p>
      </div>

      {/* ===== ChatGPT vs Claude — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Perspectiva del equipo</div>
        <h2 className="section__title">¿Por qué Claude y no ChatGPT?</h2>
        <p className="section__desc">
          Basado en la experiencia real del equipo LCG en la sesión de capacitación del 10 de abril 2026:
        </p>
        <div style={{
          background: '#111', borderRadius: 16, padding: 32,
          border: '1px solid #333', color: '#fff', maxWidth: 760,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Claude cuestiona y hace preguntas para llegar a más profundidad — no ejecuta "a lo tonto". ChatGPT te dice "claro jefe, gran idea" y se pone a ejecutar sin validar.',
              'Claude es más potente en razonamiento, seguimiento de instrucciones largas y complejidad de análisis.',
              'La ventaja está en las herramientas agénticas (Cowork, Code, Managed Agents) que OpenAI no tiene al mismo nivel.',
              'Recomendación del equipo: ChatGPT gratis para cosas rápidas (reescribir un correo). Claude para trabajo serio de consultoría.',
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
          Todo lo que necesitas para investigar, analizar y crear entregables de consultoría desde una sola interfaz.
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

      {/* ===== Flow Diagram — section--dark ===== */}
      <div className="section section--dark">
        <div className="section__tag">Ecosistema</div>
        <h2 className="section__title" style={{ color: '#fff' }}>Flujo: Chat → Code → Cowork → Managed Agents</h2>
        <p className="section__desc">
          Claude.ai (Chat) es el punto de partida. Aquí conceptualizas, planificas, haces preguntas, defines el CLAUDE.md de tu proyecto. Después escalas:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 14 }}>
          {[
            { step: '1. Chat', desc: 'Conceptualizar, planificar, investigar con Deep Research, definir el proyecto' },
            { step: '2. Code', desc: 'Ejecutar: procesar archivos, generar entregables, push a GitHub' },
            { step: '3. Cowork', desc: 'Trabajo con archivos locales sin terminal — para no-developers' },
            { step: '4. Managed Agents', desc: 'Ejecución autónoma en la nube a escala — agentes 24/7' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(0,200,83,0.06)', borderRadius: 12, padding: 20,
              border: '1px solid rgba(0,200,83,0.15)',
            }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--lcg-green)', marginBottom: 8 }}>{s.step}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LCG Use Cases — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Aplicaciones</div>
        <h2 className="section__title">Casos de uso para consultoría LCG</h2>
        <p className="section__desc">
          Escenarios reales donde Claude.ai acelera el trabajo del consultor en cada fase del engagement.
        </p>
        <div className="card-grid">
          {lcgUseCases.map((uc, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">{uc.interface}</div>
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
        <h2 className="section__title" style={{ color: '#fff' }}>Recursos y enlaces</h2>
        <p className="section__desc">
          Cursos, documentación y herramientas para dominar Claude.ai.
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
              <span style={{
                padding: '6px 16px', borderRadius: 8,
                background: 'var(--lcg-green)', color: '#fff',
                fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
              }}>Abrir ↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
