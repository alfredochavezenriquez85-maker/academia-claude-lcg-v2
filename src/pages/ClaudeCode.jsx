export default function ClaudeCode() {
  const capabilities = [
    {
      icon: '{}',
      title: 'Desarrollo multi-archivo',
      desc: 'Navega directorios completos, entiende conexiones entre modulos, crea y edita archivos a traves de codebases enteros. Opera a nivel de PROYECTO, no de lineas individuales.',
    },
    {
      icon: '▶',
      title: 'Ejecucion autonoma',
      desc: 'Planifica la estrategia de implementacion, ejecuta los cambios, corre tests, itera sobre fallos y ajusta su enfoque hasta lograr el resultado esperado.',
    },
    {
      icon: '⟳',
      title: 'Integracion CI/CD',
      desc: 'Monitorea pipelines de GitHub Actions y GitLab CI. Lee errores de compilacion y tests, corrige el codigo y vuelve a ejecutar las suites de pruebas automaticamente.',
    },
    {
      icon: '⌘',
      title: 'Toolchain nativo',
      desc: 'GitHub CLI, git, kubectl, Docker, Terraform y cualquier herramienta de linea de comandos. Sin necesidad de memorizar sintaxis — Claude Code ejecuta directamente.',
    },
    {
      icon: '⊞',
      title: 'Sub-agentes',
      desc: 'Delega tareas especializadas a agentes independientes que trabajan en paralelo. Un sub-agente para investigacion, otro para testing, otro para documentacion.',
    },
    {
      icon: '◆',
      title: 'Skills reutilizables',
      desc: 'Instrucciones Markdown que se aplican automaticamente segun el tipo de tarea. Compartibles entre equipos, versionables y componibles.',
    },
    {
      icon: '⟡',
      title: 'MCP Servers',
      desc: 'Conexion a herramientas externas, bases de datos, APIs y servicios via Model Context Protocol. Extiende las capacidades sin limites.',
    },
    {
      icon: '📄',
      title: 'CLAUDE.md',
      desc: 'El "cerebro del proyecto": archivo Markdown que define contexto, instrucciones, workflows y reglas. Claude Code lo lee automaticamente y sigue las directivas al pie de la letra.',
    },
  ]

  const enterpriseResults = [
    { company: 'Stripe', metric: '4 dias', detail: 'Migracion Scala a Java de 10,000 lineas con 1,370 ingenieros. Estimado original: 10 semanas-ingeniero.' },
    { company: 'Wiz', metric: '~20 hrs', detail: 'Migracion Python a Go de 50,000 lineas. Estimado manual: 2-3 meses.' },
    { company: 'Ramp', metric: '80%', detail: 'Reduccion en tiempo de investigacion de incidentes. Usuarios no tecnicos consultan data warehouses con lenguaje natural.' },
    { company: 'Rakuten', metric: '5 dias', detail: 'Entrega de features reducida de 24 dias habiles a 5 dias.' },
    { company: 'ServiceNow', metric: '29,000+', detail: 'Empleados con acceso a Claude Code desplegado a nivel enterprise.' },
  ]

  const useCases = [
    { tag: 'Desarrollo', title: 'Aplicaciones full-stack desde cero', desc: 'Frontend, backend, base de datos, autenticacion, deploy. Claude Code construye aplicaciones completas a partir de una descripcion de requerimientos.' },
    { tag: 'Migracion', title: 'Migraciones de codebase a escala', desc: 'Cambio de lenguaje, framework o arquitectura. De monolito a microservicios, de Python a Go, de React Class Components a Hooks — en horas, no meses.' },
    { tag: 'Testing', title: 'Testing automatizado', desc: 'Genera suites de tests unitarios, de integracion y end-to-end. Alcanza targets de cobertura de codigo y mantiene los tests actualizados con cada cambio.' },
    { tag: 'Infraestructura', title: 'Infrastructure as Code', desc: 'Terraform, CloudFormation, manifiestos de Kubernetes, Dockerfiles. Genera, valida y aplica configuraciones de infraestructura.' },
    { tag: 'Datos', title: 'Pipelines de datos y ETL', desc: 'Scripts de extraccion, transformacion y carga. Conectores a APIs, procesamiento de archivos CSV/JSON/XML, transformaciones complejas y validaciones.' },
    { tag: 'APIs', title: 'Desarrollo e integracion de APIs', desc: 'Disena endpoints REST y GraphQL, genera documentacion OpenAPI, implementa clientes y maneja autenticacion OAuth, API keys y webhooks.' },
    { tag: 'Seguridad', title: 'Auditorias de seguridad', desc: 'Escanea codebases en busca de vulnerabilidades, dependencias desactualizadas, configuraciones inseguras y aplica fixes siguiendo mejores practicas.' },
    { tag: 'Rendimiento', title: 'Optimizacion y profiling', desc: 'Identifica cuellos de botella, optimiza queries SQL, reduce tiempos de carga, implementa caching y mejora la eficiencia de algoritmos criticos.' },
    { tag: 'Refactoring', title: 'Refactoring a escala', desc: 'Rename masivo, reestructuracion de modulos, modernizacion de patrones, eliminacion de codigo muerto y actualizacion de dependencias en codebases grandes.' },
    { tag: 'Base de datos', title: 'Schemas y migraciones de DB', desc: 'Disena esquemas relacionales y NoSQL, genera migraciones, optimiza indices y escribe queries complejas con joins y agregaciones.' },
    { tag: 'CI/CD', title: 'Pipelines de CI/CD', desc: 'Configura GitHub Actions, GitLab CI, Jenkins. Automatiza builds, tests, linting, deploy a staging y produccion con rollback automatico.' },
    { tag: 'Documentacion', title: 'Documentacion desde codigo', desc: 'Genera READMEs, docstrings, guias de arquitectura, diagramas y wikis tecnicas a partir del codigo fuente existente.' },
  ]

  const lcgCases = [
    { title: 'Procesamiento de entrevistas', desc: 'Transcripts de Teams subidos a la carpeta del proyecto. Claude Code procesa cada entrevista, extrae hallazgos, detecta patrones y contradicciones, y genera documentos HTML interactivos.' },
    { title: 'Entregables interactivos', desc: 'Paginas web con hallazgos, graficas, drill-down por area y navegacion. Push a GitHub Pages para que el cliente acceda con un link — sin PowerPoints por email.' },
    { title: 'Modelado financiero', desc: 'Modelos de impacto en Python, simulaciones de escenarios y analisis de sensibilidad. Ejemplo: modelo parametrico de evaluacion de riesgo para financiera.' },
    { title: 'Modelos de madurez', desc: 'Calificacion por pilar (Lean, Finanzas, RRHH, Tecnologia) basada en entrevistas y datos, con justificacion y recomendaciones por cada score.' },
    { title: 'Dashboards de KPIs', desc: 'Visualizaciones React/HTML interactivas para que el cliente explore datos antes de implementar en su BI. Graficas, tablas y filtros generados automaticamente.' },
    { title: 'Automatizacion Power Automate', desc: 'Flujos JSON, conectores y logica de integracion con Business Central y SharePoint. Exporta listo para importar en el entorno del cliente.' },
  ]

  const resources = [
    { label: 'Pagina de producto', url: 'https://www.anthropic.com/product/claude-code', desc: 'Descripcion oficial y demos de Claude Code por Anthropic.' },
    { label: 'Documentacion tecnica', url: 'https://code.claude.com/docs/en/overview', desc: 'Referencia completa: comandos, configuracion, MCP, hooks, skills, sub-agentes.' },
    { label: 'Curso: Claude Code in Action', url: 'https://anthropic.skilljar.com/claude-code-in-action', desc: 'Arquitectura, contexto, comandos, MCP y GitHub. Certificado oficial Anthropic. ~3 horas.' },
    { label: 'Curso: Agent Skills', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', desc: 'Crear y compartir Skills reutilizables entre equipos. ~1 hora.' },
    { label: 'Curso: Sub-agents', url: 'https://anthropic.skilljar.com/introduction-to-subagents', desc: 'Delegar tareas a agentes independientes que trabajan en paralelo. ~20 min.' },
    { label: 'DeepLearning.AI: Agent Skills', url: 'https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/', desc: 'Curso con Andrew Ng sobre creacion y deploy de skills reutilizables.' },
    { label: 'DeepLearning.AI: Computer Use', url: 'https://learn.deeplearning.ai/courses/building-toward-computer-use-with-anthropic/', desc: 'Agentes que interactuan con interfaces de computadora via vision.' },
  ]

  const platforms = [
    'Terminal',
    'VS Code',
    'JetBrains',
    'Desktop App',
    'Browser',
    'Web App',
  ]

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">Sistema de coding agentico</div>
        <h1 className="page-hero__title">Claude Code</h1>
        <p className="page-hero__desc">
          Un sistema agentico que lee tu codebase, planifica cambios a traves de multiples archivos, ejecuta, corre tests e itera hasta entregar codigo committed. En Anthropic, la mayoria del codigo ya es escrito por Claude Code.
        </p>
      </div>

      {/* WHAT IT IS — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Que lo hace diferente</div>
        <h2 className="section__title">Autonomia real, no autocompletado</h2>
        <p className="section__desc">
          A diferencia de herramientas de autocompletado que sugieren lineas individuales, Claude Code demuestra autonomia genuina: planifica secuencias de acciones, ejecuta con herramientas reales de desarrollo, evalua resultados y ajusta su enfoque.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 48 }}>
          {platforms.map((p, i) => (
            <div key={i} style={{
              padding: '14px 20px', borderRadius: 10,
              background: '#fff', border: '1px solid var(--border)',
              fontSize: 14, fontWeight: 700, color: 'var(--t1)',
              fontFamily: "'Manrope', sans-serif",
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ color: 'var(--lcg-green)', fontSize: 16 }}>●</span>
              {p}
            </div>
          ))}
        </div>

        <div className="stats-row">
          <div>
            <div className="stat__number">45+</div>
            <div className="stat__label">Minutos por sesion</div>
            <div className="stat__sub">P99.9 de duracion de turno (ene 2026), usuarios otorgando autonomia creciente</div>
          </div>
          <div>
            <div className="stat__number">2x</div>
            <div className="stat__label">Crecimiento en autonomia</div>
            <div className="stat__sub">Duracion de turno P99.9 paso de ~25 min a 45+ min entre oct 2025 y ene 2026</div>
          </div>
          <div>
            <div className="stat__number">&gt;50%</div>
            <div className="stat__label">Codigo en Anthropic</div>
            <div className="stat__sub">La mayoria del codigo de Anthropic es ahora escrito por Claude Code</div>
          </div>
        </div>
      </div>

      {/* KEY CAPABILITIES — section--white */}
      <div className="section section--white">
        <div className="section__tag">Capacidades</div>
        <h2 className="section__title">Arquitectura de un sistema agentico</h2>
        <p className="section__desc">
          Claude Code combina comprension profunda de codigo, ejecucion de herramientas y razonamiento adaptativo en un ciclo autonomo.
        </p>
        <div className="feature-grid">
          {capabilities.map((c, i) => (
            <div key={i} className="feature">
              <div className="feature__icon">{c.icon}</div>
              <div className="feature__title">{c.title}</div>
              <div className="feature__desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ENTERPRISE RESULTS — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Resultados enterprise</div>
        <h2 className="section__title">Resultados medibles en produccion</h2>
        <p className="section__desc">
          Empresas de tecnologia lider ya usan Claude Code en produccion con resultados cuantificables.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {enterpriseResults.map((r, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 24,
              padding: 28, borderRadius: 16,
              background: '#fff', border: '1px solid var(--border)',
            }}>
              <div style={{ flexShrink: 0, minWidth: 100 }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: 2,
                  textTransform: 'uppercase', color: 'var(--lcg-green)',
                  marginBottom: 4, fontFamily: "'Manrope', sans-serif",
                }}>{r.company}</div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32, fontWeight: 700, color: 'var(--t1)', lineHeight: 1.1,
                }}>{r.metric}</div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: 0, paddingTop: 4 }}>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* USE CASES — section--white */}
      <div className="section section--white">
        <div className="section__tag">Casos de uso</div>
        <h2 className="section__title">Aplicaciones diversificadas</h2>
        <p className="section__desc">
          Claude Code no es solo para consultoria — es una herramienta de desarrollo de software completa con aplicaciones en cualquier dominio tecnico.
        </p>
        <div className="card-grid">
          {useCases.map((uc, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">{uc.tag}</div>
                <h4 className="card__title" style={{ fontSize: 17 }}>{uc.title}</h4>
                <p className="card__desc">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLAUDE.md — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Configuracion</div>
        <h2 className="section__title">CLAUDE.md: el cerebro del proyecto</h2>
        <p className="section__desc">
          Un archivo Markdown en la raiz del repositorio que define contexto completo, instrucciones y workflows. Claude Code lo lee automaticamente al iniciar y sigue las directivas definidas.
        </p>
        <div style={{
          background: '#0a0a0a', borderRadius: 12, padding: 28, fontFamily: "'Courier New', monospace",
          fontSize: 13, lineHeight: 2, color: '#e0e0e0', overflow: 'auto', maxWidth: 680,
        }}>
          <div><span style={{ color: 'var(--lcg-green)' }}># Proyecto:</span> Migracion API v2 a v3</div>
          <div><span style={{ color: 'var(--lcg-green)' }}># Stack:</span> Python 3.12, FastAPI, PostgreSQL, Redis</div>
          <div><span style={{ color: 'var(--lcg-green)' }}># Objetivo:</span> Migrar 47 endpoints de REST a GraphQL</div>
          <div><span style={{ color: 'var(--lcg-green)' }}># Reglas:</span></div>
          <div style={{ paddingLeft: 20 }}>- Mantener backward compatibility con v2</div>
          <div style={{ paddingLeft: 20 }}>- Tests de integracion para cada endpoint migrado</div>
          <div style={{ paddingLeft: 20 }}>- Type hints estrictos, mypy sin errores</div>
          <div style={{ paddingLeft: 20 }}>- Documentar breaking changes en CHANGELOG.md</div>
          <div style={{ paddingLeft: 20 }}>- PR por modulo, no monolitico</div>
        </div>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { title: 'Contexto automatico', desc: 'Claude Code lee CLAUDE.md al iniciar cada sesion. No necesitas repetir instrucciones — el archivo define todo el contexto del proyecto.' },
            { title: 'Jerarquia de archivos', desc: 'CLAUDE.md en la raiz del repo, en subcarpetas y en ~/.claude/ (global). Se combinan para dar instrucciones a nivel proyecto, modulo y usuario.' },
            { title: 'Compartible entre equipos', desc: 'El archivo se versiona con Git. Todo el equipo comparte las mismas instrucciones, convenciones y workflows automaticamente.' },
          ].map((item, i) => (
            <div key={i} className="feature">
              <div className="feature__title">{item.title}</div>
              <div className="feature__desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LCG APPLICATIONS — section--white */}
      <div className="section section--white">
        <div className="section__tag">Aplicaciones LCG</div>
        <h2 className="section__title">Aplicaciones para consultoria</h2>
        <p className="section__desc">
          Escenarios concretos donde Claude Code transforma el trabajo de consultoria en London Consulting Group.
        </p>
        <div className="card-grid">
          {lcgCases.map((c, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">Consultoria LCG</div>
                <h4 className="card__title" style={{ fontSize: 17 }}>{c.title}</h4>
                <p className="card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Caso real</div>
        <h2 className="section__title">Prediagnostico para financiera</h2>
        <p className="section__desc">
          Implementacion real con Fer Sanchez y Fray — procesamiento automatizado de entrevistas y generacion de entregables interactivos.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          {[
            'Creacion de proyecto con CLAUDE.md definiendo: cliente, hilo conductor, pilares de diagnostico (Lean, Finanzas, RRHH, Tecnologia) y flujos de trabajo.',
            'Subida de transcripts de entrevistas grabadas en Microsoft Teams a la carpeta del proyecto.',
            'Procesamiento automatico secuencial: Claude Code leyo, analizo y sintetizo cada entrevista individualmente.',
            'Generacion de documentos HTML interactivos con hallazgos clasificados por entrevista y por pilar.',
            'Ciclo iterativo de revision: el consultor revisa, indica correcciones, Claude ajusta y se vuelve a revisar hasta la version final.',
            'Entregable final publicado como pagina web en GitHub Pages con link compartible para el equipo directivo del cliente.',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'var(--lcg-green)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 800, flexShrink: 0,
                fontFamily: "'Manrope', sans-serif",
              }}>{i + 1}</div>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.7, margin: 0, paddingTop: 4 }}>{step}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(0,200,83,0.06)', borderRadius: 12, padding: 24,
          border: '1px solid rgba(0,200,83,0.18)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--lcg-green)', marginBottom: 8, fontFamily: "'Manrope', sans-serif" }}>Resultado</div>
          <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.7, margin: 0 }}>
            Analisis cruzado de entrevistas con datos cuantitativos y cualitativos, modelos de madurez por pilar Lean, top hallazgos priorizados por impacto y oportunidades de mejora enlistadas — sin elaboracion manual de PowerPoints ni analisis manual de hojas de calculo.
          </p>
        </div>
      </div>

      {/* RESOURCES — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title">Cursos, documentacion y herramientas</h2>
        <p className="section__desc">Recursos oficiales de Anthropic y DeepLearning.AI para dominar Claude Code.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="link-card" style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '20px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 16, textDecoration: 'none',
            }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{r.desc}</div>
              </div>
              <span className="btn btn--primary" style={{ padding: '8px 18px', fontSize: 12, flexShrink: 0 }}>
                Abrir
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
