export default function ClaudeCowork() {
  const coreCapabilities = [
    {
      title: 'Ejecucion autonoma orientada a resultados',
      desc: 'Define el objetivo final y Cowork se encarga del resto. No necesitas descomponer el trabajo en prompts individuales. Claude planifica los pasos, ejecuta secuencialmente y entrega el resultado terminado.',
    },
    {
      title: 'Gestion de archivos locales',
      desc: 'Lee, crea, edita, renombra, clasifica y organiza archivos directamente en tu maquina. Word, Excel, PDFs, imagenes, texto plano, presentaciones. Opera sobre tu filesystem sin necesidad de subir nada a la nube.',
    },
    {
      title: 'Browser Automation via Chrome',
      desc: 'Navega la web de forma autonoma para buscar informacion, llenar formularios, extraer datos de paginas, completar flujos web y recopilar informacion de multiples fuentes en linea.',
    },
    {
      title: 'Dispatch desde iPhone',
      desc: 'Asigna tareas a Cowork desde tu dispositivo movil. Envia la instruccion desde el iPhone, Cowork la recibe en tu computadora y ejecuta. Delega trabajo mientras estas en reuniones o en movimiento.',
    },
    {
      title: 'Skills reutilizables',
      desc: 'Instrucciones en formato Markdown que Cowork aplica automaticamente segun el tipo de tarea. Define plantillas de reportes, formatos de analisis, estructuras de documentos y flujos de trabajo estandarizados.',
    },
    {
      title: 'Plugins y Connectors',
      desc: 'Conectores para herramientas web (Google Drive, Notion, Slack) y plugins de escritorio para interactuar con aplicaciones locales. Extensible via MCP servers para integraciones personalizadas.',
    },
  ]

  const designPrinciples = [
    { title: 'Supervision humana', desc: 'Completa tareas de forma autonoma pero las decisiones consequenciales permanecen con el usuario. Transparencia total sobre cada paso ejecutado.' },
    { title: 'Sin barreras tecnicas', desc: 'No requiere terminal, linea de comandos ni conocimientos de programacion. Disenado para que cualquier profesional del conocimiento lo utilice desde el primer dia.' },
    { title: 'Contexto local', desc: 'Opera donde ocurre el trabajo real: tu escritorio, tus carpetas, tus aplicaciones. Sin necesidad de migrar archivos a plataformas externas.' },
    { title: 'Sintesis multi-fuente', desc: 'Mueve informacion entre archivos locales, carpetas y aplicaciones. Sintetiza datos de multiples fuentes en un solo entregable coherente.' },
  ]

  const useCases = [
    { category: 'Documentacion', title: 'Generacion de reportes', desc: 'Apunta a una carpeta con datos crudos, notas de campo y archivos de referencia. Cowork genera reportes estructurados, resumenes ejecutivos y documentos con formato profesional.' },
    { category: 'Documentacion', title: 'Minutas y acciones de reuniones', desc: 'Procesa grabaciones transcritas o notas rapidas y genera actas formales con acuerdos, responsables, fechas limite y puntos pendientes.' },
    { category: 'Documentacion', title: 'Creacion de presentaciones', desc: 'Ensambla presentaciones a partir de multiples archivos de investigacion, datos y notas. Estructura el contenido con narrativa coherente.' },
    { category: 'Datos y Analisis', title: 'Extraccion de datos de documentos', desc: 'Parsea documentos densos (contratos, reportes financieros, registros) y extrae informacion estructurada en formatos tabulares utilizables.' },
    { category: 'Datos y Analisis', title: 'Procesamiento de facturas y gastos', desc: 'Procesa facturas, recibos y reportes de gastos. Extrae montos, categoriza y organiza en hojas de calculo consolidadas.' },
    { category: 'Datos y Analisis', title: 'Analisis competitivo', desc: 'Browser automation para investigar competidores, precios, posicionamiento y noticias recientes. Compila un brief estructurado con hallazgos.' },
    { category: 'Operaciones', title: 'Organizacion y archivado de archivos', desc: 'Renombra, clasifica, deduplica y organiza archivos segun convenciones definidas. Crea estructuras de carpetas estandarizadas y migra documentos.' },
    { category: 'Operaciones', title: 'Entrada de datos y llenado de formularios', desc: 'Automatiza la transferencia de datos entre documentos, formularios y hojas de calculo. Reduce errores manuales en procesos repetitivos.' },
    { category: 'Operaciones', title: 'Logistica de eventos y viajes', desc: 'Investiga opciones, compara alternativas, organiza itinerarios y genera documentos de planificacion con detalles logisticos completos.' },
    { category: 'RRHH y Legal', title: 'Procesamiento de documentos HR', desc: 'Filtra y organiza CVs, genera materiales de onboarding, estructura guias de capacitacion y procesa documentacion de personal.' },
    { category: 'RRHH y Legal', title: 'Revision de contratos', desc: 'Extrae clausulas clave, identifica obligaciones y plazos, genera resumenes comparativos entre versiones de documentos legales.' },
    { category: 'Consultoria LCG', title: 'Entregables de consultoria', desc: 'Genera presentaciones, manuales de procedimientos y reportes ejecutivos directamente desde archivos locales del proyecto. Sin abrir PowerPoint manualmente.' },
  ]

  const targetProfiles = [
    { profile: 'Investigadores y analistas', desc: 'Sintesis de multiples fuentes, revision bibliografica, compilacion de hallazgos en reportes estructurados.' },
    { profile: 'Profesionales legales', desc: 'Revision de contratos, extraccion de clausulas, organizacion de expedientes y generacion de resumenes.' },
    { profile: 'Equipos de finanzas', desc: 'Procesamiento de facturas, consolidacion de reportes, extraccion de datos de documentos financieros.' },
    { profile: 'Operaciones y administracion', desc: 'Organizacion de archivos, entrada de datos, gestion de documentacion y automatizacion de flujos repetitivos.' },
    { profile: 'Consultores', desc: 'Generacion de entregables, procesamiento de entrevistas, reportes de diagnostico, propuestas desde archivos del proyecto.' },
    { profile: 'Marketing y comunicacion', desc: 'Investigacion de mercado, creacion de contenido desde briefs, programacion de publicaciones, analisis de competencia.' },
  ]

  const stats = [
    { value: 'macOS + Windows', label: 'Disponible en escritorio' },
    { value: 'GA', label: 'Disponibilidad general desde abril 2026' },
    { value: '0', label: 'Lineas de codigo requeridas' },
    { value: 'iPhone', label: 'Dispatch para tareas remotas' },
  ]

  const resources = [
    { label: 'Pagina de producto', url: 'https://www.anthropic.com/product/claude-cowork', desc: 'Descripcion oficial de Claude Cowork por Anthropic.' },
    { label: 'Curso: Introduction to Claude Cowork', url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork', desc: 'Task loop, plugins, skills, flujos de archivos e investigacion. ~1.5 horas.' },
    { label: 'Webinar: Future of AI at Work', url: 'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork', desc: 'Webinar oficial de Anthropic presentando Cowork y su vision del trabajo con IA.' },
    { label: 'Tutorial DataCamp', url: 'https://www.datacamp.com/tutorial/claude-cowork-tutorial', desc: 'Tutorial practico paso a paso de Claude Cowork por DataCamp.' },
    { label: 'Articulo TechCrunch', url: 'https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/', desc: 'Cobertura de TechCrunch sobre Cowork como agente de escritorio.' },
  ]

  return (
    <div>
      {/* ===== PAGE HERO ===== */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">AGENTE DE ESCRITORIO -- macOS + Windows -- GA Abril 2026</div>
        <h1 className="page-hero__title">Claude Cowork</h1>
        <p className="page-hero__desc">
          Agente de escritorio que maneja tareas de forma autonoma. Define el objetivo, apunta a tus archivos y Cowork se encarga del resto: planifica los pasos, trabaja con tus documentos y aplicaciones locales, y entrega resultados terminados. Sin terminal. Sin codigo. Disponible en planes Pro, Team y Enterprise.
        </p>
      </div>

      {/* ===== Stats Row — section--cream ===== */}
      <div className="section section--cream">
        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Design Philosophy — section--white ===== */}
      <div className="section section--white">
        <div className="section__tag">Filosofia de diseno</div>
        <h2 className="section__title">Principios de Cowork</h2>
        <p className="section__desc">
          Cowork esta disenado para profesionales del conocimiento que necesitan resultados, no una interfaz tecnica.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {designPrinciples.map((p, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <h4 className="card__title">{p.title}</h4>
                <p className="card__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Core Capabilities — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Capacidades</div>
        <h2 className="section__title">Funcionalidades principales</h2>
        <p className="section__desc">
          Herramientas integradas que permiten a Cowork operar de forma autonoma sobre tus archivos, aplicaciones y fuentes de informacion.
        </p>
        <div className="feature-grid">
          {coreCapabilities.map((f, i) => (
            <div key={i} className="feature">
              <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{f.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== How It Works — section--white ===== */}
      <div className="section section--white">
        <div className="section__tag">Flujo de trabajo</div>
        <h2 className="section__title">Como funciona Cowork</h2>
        <p className="section__desc">
          Un flujo simple de tres pasos que convierte instrucciones en entregables terminados.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
          {[
            { step: '1. Define el objetivo', desc: 'Describe la tarea en lenguaje natural y senala los archivos o carpetas relevantes. Cowork analiza el contexto y genera un plan de ejecucion.' },
            { step: '2. Cowork ejecuta', desc: 'Claude trabaja de forma autonoma: lee archivos, investiga en web, procesa datos, genera documentos. Muestra progreso paso a paso con transparencia total.' },
            { step: '3. Revisa y ajusta', desc: 'Recibe el entregable terminado. Revisa, solicita ajustes especificos si es necesario. Las decisiones consequenciales siempre pasan por ti.' },
          ].map((s, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--lcg-green)', marginBottom: 10 }}>{s.step}</div>
                <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Target Profiles — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Perfiles objetivo</div>
        <h2 className="section__title">Para quien es Cowork</h2>
        <p className="section__desc">
          Disenado para profesionales del conocimiento que trabajan con documentos, datos y multiples fuentes de informacion.
        </p>
        <div className="card-grid">
          {targetProfiles.map((tp, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <h4 className="card__title">{tp.profile}</h4>
                <p className="card__desc">{tp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Use Cases — section--white ===== */}
      <div className="section section--white">
        <div className="section__tag">Aplicaciones</div>
        <h2 className="section__title">Casos de uso por area profesional</h2>
        <p className="section__desc">
          Escenarios diversos donde Cowork genera impacto medible en productividad y calidad de entregables.
        </p>
        <div className="card-grid">
          {useCases.map((uc, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">{uc.category}</div>
                <h4 className="card__title">{uc.title}</h4>
                <p className="card__desc">{uc.desc}</p>
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
          Cada interfaz del ecosistema Claude esta optimizada para un tipo de trabajo diferente.
        </p>
        <div style={{
          borderRadius: 14, overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--card)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'rgba(0,0,0,0.04)', borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--t1)' }}>Caracteristica</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--t2)' }}>Chat</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--lcg-green)' }}>Cowork</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--t2)' }}>Code</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Requiere terminal o codigo', chat: 'No', cowork: 'No', code: 'Si' },
                { feature: 'Trabaja con archivos locales', chat: 'No', cowork: 'Si', code: 'Si' },
                { feature: 'Navegacion web autonoma', chat: 'No', cowork: 'Si', code: 'No' },
                { feature: 'Task loop multi-paso', chat: 'No', cowork: 'Si', code: 'Si' },
                { feature: 'Push a GitHub', chat: 'No', cowork: 'No', code: 'Si' },
                { feature: 'Ideal para no-developers', chat: 'Si', cowork: 'Si', code: 'No' },
                { feature: 'Disponible en movil', chat: 'Si', cowork: 'Dispatch', code: 'No' },
              ].map((row, i, arr) => (
                <tr key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
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

      {/* ===== Resources — section--dark ===== */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title" style={{ color: 'var(--t1)' }}>Recursos y enlaces</h2>
        <p className="section__desc">
          Cursos oficiales, tutoriales y documentacion para dominar Claude Cowork.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 700 }}>
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="link-card">
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--t1)', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{r.desc}</div>
              </div>
              <span className="btn btn--primary" style={{
                padding: '6px 16px', fontSize: 12, whiteSpace: 'nowrap', flexShrink: 0,
              }}>Abrir</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
