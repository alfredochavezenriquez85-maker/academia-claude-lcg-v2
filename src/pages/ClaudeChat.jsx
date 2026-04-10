export default function ClaudeChat() {
  const coreCapabilities = [
    {
      title: 'Proyectos',
      desc: 'Espacios de trabajo organizados con System Prompt personalizado y archivos de referencia. Ventana de contexto de 200K tokens (~500 paginas). Claude mantiene contexto persistente dentro de cada proyecto, heredando instrucciones en todas las conversaciones.',
    },
    {
      title: 'Artefactos (Artifacts)',
      desc: 'Genera contenido interactivo renderizado en tiempo real: codigo ejecutable, documentos, visualizaciones con graficas, diagramas, tablas comparativas. Iterable con feedback, descargable, y ahora con soporte para MCP y almacenamiento persistente.',
    },
    {
      title: 'Deep Research',
      desc: 'Investigacion profunda que descompone solicitudes complejas en sub-consultas, investiga cientos de fuentes internas y externas, y compila reportes comprehensivos con citas en 5-45 minutos. Entrega analisis de nivel profesional con referencias verificables.',
    },
    {
      title: 'Subida y analisis de archivos',
      desc: 'Procesa directamente PDFs, documentos Word, hojas de Excel, presentaciones PowerPoint, imagenes y capturas de pantalla. Extrae, analiza, compara y sintetiza informacion de multiples archivos simultaneamente.',
    },
    {
      title: 'Integraciones y MCP',
      desc: 'Conecta con herramientas empresariales via Model Context Protocol: Jira, Confluence, Zapier, Cloudflare, Intercom, Asana, Square, Sentry, PayPal, Linear, Plaid, Google Drive, Slack, Notion. Acceso directo sin descargas.',
    },
    {
      title: 'Capacidad multimodal',
      desc: 'Procesa texto, imagenes, PDFs, diagramas, capturas de pantalla y documentos escaneados. Interpreta contenido visual, extrae datos de graficas, analiza diagramas de arquitectura y digitaliza informacion de pizarrones.',
    },
  ]

  const comparisonPoints = [
    { dimension: 'Razonamiento y profundidad', claude: 'Cuestiona supuestos, solicita clarificaciones y profundiza antes de ejecutar. Razonamiento extendido con cadenas de pensamiento visibles.', other: 'Tiende a ejecutar inmediatamente con la primera interpretacion. Menor profundidad en seguimiento de instrucciones complejas.' },
    { dimension: 'Seguimiento de instrucciones', claude: 'Alta fidelidad a instrucciones largas y detalladas. System Prompts de miles de tokens respetados consistentemente.', other: 'Degradacion progresiva en instrucciones extensas. Menor adherencia a restricciones multiples simultaneas.' },
    { dimension: 'Herramientas agénticas', claude: 'Ecosistema integrado: Chat, Code (CLI), Cowork (desktop agent), Managed Agents (cloud). Flujo continuo entre interfaces.', other: 'GPTs y Assistants API. Canvas para edicion. Menor integracion entre herramientas agénticas de escritorio y terminal.' },
    { dimension: 'Contexto', claude: '200K tokens (~500 paginas). Proyectos con System Prompt + archivos de referencia persistentes.', other: '128K tokens en GPT-4o. Custom GPTs con knowledge files.' },
    { dimension: 'Transparencia', claude: 'Admite limitaciones abiertamente. No fabrica confianza artificial. Indica cuando no tiene certeza.', other: 'Tendencia a responder afirmativamente incluso con informacion insuficiente.' },
  ]

  const useCases = [
    { category: 'Estrategia y Analisis', title: 'Planificacion estrategica', desc: 'Analisis FODA, definicion de OKRs, evaluacion de escenarios competitivos, roadmaps de producto. Deep Research para benchmarking sectorial con fuentes verificables.' },
    { category: 'Estrategia y Analisis', title: 'Inteligencia de mercado', desc: 'Investigacion de industrias, competidores, tendencias regulatorias y oportunidades de mercado. Reportes con citas de fuentes primarias y secundarias.' },
    { category: 'Contenido y Comunicacion', title: 'Creacion de contenido', desc: 'Copy de marketing, posts de blog, documentacion tecnica, newsletters, comunicados de prensa. Adaptacion de tono y estilo por audiencia.' },
    { category: 'Contenido y Comunicacion', title: 'Redaccion y comunicacion', desc: 'Emails ejecutivos, presentaciones, propuestas comerciales, reportes para stakeholders. Traduccion y localizacion multilingue.' },
    { category: 'Legal y Finanzas', title: 'Revision de documentos legales', desc: 'Analisis de contratos, identificacion de clausulas criticas, comparacion de versiones, extraccion de obligaciones y plazos. Artefactos con resumen estructurado.' },
    { category: 'Legal y Finanzas', title: 'Modelado financiero', desc: 'Analisis de datos en Excel/CSV, identificacion de tendencias, simulacion de escenarios, analisis de sensibilidad. Visualizaciones interactivas de KPIs.' },
    { category: 'Producto y Tecnologia', title: 'Especificaciones de producto', desc: 'PRDs, user stories, criterios de aceptacion, diagramas de arquitectura. Artefactos interactivos con diagramas de flujo y wireframes.' },
    { category: 'Producto y Tecnologia', title: 'Soporte y operaciones', desc: 'Templates de respuesta a clientes, bases de conocimiento, documentacion de procesos, guias de troubleshooting, FAQs estructurados.' },
    { category: 'Educacion y RRHH', title: 'Desarrollo de contenido educativo', desc: 'Curriculos, materiales de capacitacion, evaluaciones, guias de estudio. Artefactos interactivos con quizzes y ejercicios practicos.' },
    { category: 'Educacion y RRHH', title: 'Gestion de proyectos', desc: 'Planificacion de sprints, matrices RACI, analisis de riesgos, cronogramas. Seguimiento de dependencias y generacion de reportes de status.' },
    { category: 'Consultoria LCG', title: 'Prediagnostico y discovery', desc: 'Procesamiento de transcripts de entrevistas, benchmarking sectorial con Deep Research, analisis cruzado de hallazgos cualitativos y cuantitativos.' },
    { category: 'Consultoria LCG', title: 'Propuestas y entregables', desc: 'Proyectos con metodologia LCG + contexto del cliente. Propuestas tecnicas, modelos de madurez, diagramas AS-IS / TO-BE en artefactos interactivos.' },
  ]

  const stats = [
    { value: '200K', label: 'Tokens de contexto (~500 paginas)' },
    { value: '45 min', label: 'Investigacion Deep Research completa' },
    { value: '15+', label: 'Integraciones MCP disponibles' },
    { value: '6+', label: 'Formatos de archivo soportados' },
  ]

  const resources = [
    { label: 'Ir a Claude.ai', url: 'https://claude.ai', desc: 'Accede a la interfaz web directamente.' },
    { label: 'Pagina de producto', url: 'https://www.anthropic.com/product/claude', desc: 'Descripcion oficial de Claude por Anthropic.' },
    { label: 'Curso Claude 101', url: 'https://anthropic.skilljar.com/claude-101', desc: 'Primeros pasos: prompting, proyectos, artefactos, skills, Deep Research. ~2 horas.' },
    { label: 'AI Fluency Framework', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', desc: 'Fundamentos de fluencia en IA para profesionales.' },
    { label: 'Video: Future of AI at Work', url: 'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork', desc: 'Webinar de Anthropic: flujo Chat, Code, Cowork y el futuro del trabajo con IA.' },
    { label: 'Learn Hub de Anthropic', url: 'https://www.anthropic.com/learn', desc: 'Centro de recursos y aprendizaje oficial de Anthropic.' },
  ]

  return (
    <div>
      {/* ===== PAGE HERO ===== */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">INTERFAZ PRINCIPAL -- Web + Movil</div>
        <h1 className="page-hero__title">Claude.ai -- Chat</h1>
        <p className="page-hero__desc">
          La interfaz web y movil principal de Claude. Un asistente conversacional avanzado con proyectos de contexto persistente, artefactos interactivos, Deep Research con citas verificables, procesamiento multimodal de archivos e integraciones empresariales via MCP. Mucho mas que un chatbot: una plataforma de productividad profesional.
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

      {/* ===== Core Capabilities — section--white ===== */}
      <div className="section section--white">
        <div className="section__tag">Capacidades</div>
        <h2 className="section__title">Funcionalidades principales</h2>
        <p className="section__desc">
          Herramientas integradas para investigar, analizar, crear y colaborar desde una sola interfaz.
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

      {/* ===== Claude vs ChatGPT — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Comparativa</div>
        <h2 className="section__title">Claude vs. ChatGPT: comparacion objetiva</h2>
        <p className="section__desc">
          Diferencias clave basadas en capacidades tecnicas, arquitectura de producto y experiencia de uso en entornos profesionales.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {comparisonPoints.map((cp, i) => (
            <div key={i} style={{
              background: 'var(--card)', borderRadius: 14, padding: 24,
              border: '1px solid var(--border)',
            }}>
              <h4 style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 800, color: 'var(--lcg-green)' }}>{cp.dimension}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--lcg-green)', marginBottom: 6 }}>Claude</div>
                  <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{cp.claude}</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--t2)', marginBottom: 6 }}>ChatGPT</div>
                  <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>{cp.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Ecosystem Flow — section--white ===== */}
      <div className="section section--white">
        <div className="section__tag">Ecosistema</div>
        <h2 className="section__title">Flujo de trabajo: Chat como punto de partida</h2>
        <p className="section__desc">
          Claude.ai es el punto de entrada al ecosistema. Aqui se conceptualiza, investiga y planifica antes de escalar a herramientas especializadas.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 14 }}>
          {[
            { step: '1. Chat', desc: 'Conceptualizar, investigar con Deep Research, planificar y definir requerimientos del proyecto.' },
            { step: '2. Code', desc: 'Ejecutar tareas tecnicas: procesar archivos, generar entregables, gestionar repositorios.' },
            { step: '3. Cowork', desc: 'Trabajo autonomo con archivos locales y aplicaciones de escritorio. Sin terminal.' },
            { step: '4. Managed Agents', desc: 'Ejecucion autonoma en la nube a escala. Agentes especializados 24/7.' },
          ].map((s, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--lcg-green)', marginBottom: 8 }}>{s.step}</div>
                <div style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Use Cases — section--cream ===== */}
      <div className="section section--cream">
        <div className="section__tag">Aplicaciones</div>
        <h2 className="section__title">Casos de uso por area profesional</h2>
        <p className="section__desc">
          Claude.ai se adapta a multiples funciones y sectores. Estos son escenarios donde la plataforma genera impacto medible.
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

      {/* ===== Resources — section--dark ===== */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title" style={{ color: '#fff' }}>Recursos y enlaces</h2>
        <p className="section__desc">
          Cursos oficiales, documentacion y herramientas para dominar Claude.ai.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 700 }}>
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="link-card">
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{r.desc}</div>
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
