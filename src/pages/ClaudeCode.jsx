export default function ClaudeCode() {
  const features = [
    {
      title: 'CLAUDE.md — El cerebro del proyecto',
      desc: 'Archivo Markdown que define el contexto completo del proyecto: quién es el cliente, cuál es el objetivo, cuáles son los pilares de diagnóstico, cómo se estructura el trabajo, qué instrucciones seguir. Claude Code lo lee automáticamente al iniciar y sigue las instrucciones definidas.',
      tip: 'Define en tu CLAUDE.md: cliente, hilo conductor del diagnóstico, pilares a calificar, formato de entregables. Una vez que Claude entiende, le puedes decir: "cuando tengas entrevistas cargadas, procésalas y genera presentaciones".',
    },
    {
      title: 'Lectura completa de codebases y archivos',
      desc: 'Claude Code puede leer repositorios completos, carpetas con cientos de archivos, documentos, CSVs, JSONs. Entiende la estructura, las relaciones entre archivos y puede navegar el proyecto de forma inteligente para encontrar lo que necesita.',
      tip: 'Sube toda la carpeta de un proyecto de consultoría: entrevistas, datos, presentaciones previas. Claude Code mapeará todo el contenido y podrá cruzar información entre archivos.',
    },
    {
      title: 'Sub-agentes especializados',
      desc: 'Claude Code puede crear sub-agentes para delegar tareas específicas. Un sub-agente de investigación, otro de análisis de datos, otro de generación de documentos. Cada uno trabaja de forma independiente y reporta resultados al agente principal.',
      tip: 'Para un diagnóstico complejo, crea sub-agentes: uno que analice las entrevistas, otro que procese los datos financieros, y un agente principal que cruce y sintetice los hallazgos.',
    },
    {
      title: 'Skills reutilizables',
      desc: 'Instrucciones en formato Markdown que Claude aplica automáticamente según el tipo de tarea. Son reutilizables y compartibles entre equipos. Define un skill para análisis de entrevistas, otro para formato de reportes, otro para modelos de madurez.',
      tip: 'Crea un skill "diagnostico-lean" que defina: los pilares de madurez, la escala de calificación, el formato de salida. Cada vez que proceses entrevistas, Claude aplicará el mismo framework.',
    },
    {
      title: 'Ejecución de código y comandos',
      desc: 'Ejecuta código Python, JavaScript, bash directamente. Puede instalar dependencias, correr scripts de análisis, generar visualizaciones, procesar datos. Todo desde la terminal sin que tú escribas código.',
      tip: 'Pídele que cree un script Python para analizar los datos de Business Central, genere gráficas con matplotlib y exporte un HTML con la visualización interactiva.',
    },
    {
      title: 'Git y GitHub integrado',
      desc: 'Gestiona repositorios Git de forma nativa: commits, branches, pull requests, push directo a GitHub. Los entregables se versionan y se pueden compartir como páginas web en GitHub Pages.',
      tip: 'Cada entregable de diagnóstico queda versionado en Git. El cliente accede a la página web del reporte vía un link de GitHub Pages — sin enviar PowerPoints por email.',
    },
    {
      title: 'MCP Servers',
      desc: 'Se conecta con herramientas externas vía el Model Context Protocol: bases de datos, APIs, SharePoint, Business Central, y cualquier servicio con un MCP server. Extiende las capacidades de Claude Code infinitamente.',
      tip: 'Conecta un MCP server de SharePoint para que Claude Code acceda directamente a los documentos del cliente sin descargar archivos manualmente.',
    },
    {
      title: 'Generación de entregables HTML',
      desc: 'Crea páginas web completas e interactivas como entregables de consultoría. Gráficas, tablas con drill-down, navegación por secciones, responsive. Push a GitHub Pages para que el cliente acceda con un link.',
      tip: 'En vez de un PowerPoint estático de 50 slides, genera un portal interactivo donde el director del cliente puede explorar los hallazgos, filtrar por área y ver el detalle de cada recomendación.',
    },
  ]

  const caseStudy = {
    title: 'Caso Real: Prediagnóstico para Financiera',
    participants: 'Fer Sánchez + Fray',
    steps: [
      'Se creó un proyecto en Claude Code con CLAUDE.md como "cerebro del proyecto": cliente, hilo conductor del diagnóstico, pilares a calificar, flujos de trabajo.',
      'Se subieron transcripts de entrevistas grabadas en Teams a la carpeta del proyecto.',
      'Claude Code procesó cada entrevista automáticamente: "Ya procesé la entrevista 1, ya procesé la 2, ya procesé la 3..."',
      'Generó documentos HTML interactivos con hallazgos por entrevista.',
      'Se iteró con correcciones: "No, está mal" → Claude aplica cambios → se revisa → se itera hasta quedar bien.',
      'Entregable final: push a GitHub como página web accesible con link compartible.',
    ],
    result: 'Análisis cruzado de entrevistas con datos, modelos de madurez por pilar Lean, top hallazgos, oportunidades priorizadas — sin hacer PowerPoint manual ni analizar Excel a mano.',
  }

  const lcgUseCases = [
    { title: 'Procesamiento de entrevistas', desc: 'Grabar entrevistas con transcript de Teams → subir a carpeta Claude Code → procesamiento automático → síntesis de hallazgos, patrones recurrentes, contradicciones entre entrevistados → documento interactivo HTML.' },
    { title: 'Entregables HTML interactivos', desc: 'En vez de PowerPoint estático, generar páginas web interactivas con hallazgos, gráficas, drill-down por área. Push a GitHub Pages → link compartible para el cliente.' },
    { title: 'Modelado financiero y paramétrico', desc: 'Claude Code crea modelos de impacto en Python, simulaciones de escenarios, análisis de sensibilidad. Ejemplo real: modelo paramétrico de evaluación de riesgo para la financiera.' },
    { title: 'Modelos de madurez automatizados', desc: 'Define pilares (ej: pilares Lean) en CLAUDE.md. Claude califica cada pilar basado en entrevistas y datos, con justificación por cada score y recomendaciones específicas.' },
    { title: 'Dashboards de KPIs', desc: 'Artefactos React/HTML con visualizaciones interactivas que el cliente explora antes de implementar en su BI. Gráficas, tablas, filtros — todo generado por Claude Code.' },
    { title: 'Automatización con Power Automate', desc: 'Claude Code genera flujos JSON de Power Automate, conectores y lógica de integración con Business Central y SharePoint. Exporta listo para importar.' },
    { title: 'Portal de entregables para clientes', desc: 'Página web con links a reportes, guías, documentos de análisis. Cada director o consejero del cliente puede entrar y ver el estado de las entregas.' },
    { title: 'Migración de ChatGPT a Claude', desc: 'Bajar historial de chats de ChatGPT → subir en perfilamiento de Claude para no perder el contexto acumulado de conversaciones anteriores.' },
  ]

  const resources = [
    { label: 'Página de producto', url: 'https://www.anthropic.com/product/claude-code', desc: 'Descripción oficial de Claude Code por Anthropic.' },
    { label: 'Documentación completa', url: 'https://code.claude.com/docs/en/overview', desc: 'Referencia técnica completa: comandos, configuración, MCP, hooks, skills.' },
    { label: 'Curso: Claude Code in Action', url: 'https://anthropic.skilljar.com/claude-code-in-action', desc: 'Arquitectura de asistentes de código, contexto, comandos, MCP, GitHub. ~3 horas.' },
    { label: 'Curso: Agent Skills', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', desc: 'Crear y compartir Skills reutilizables en Claude Code. ~1 hora.' },
    { label: 'Curso: Subagents', url: 'https://anthropic.skilljar.com/introduction-to-subagents', desc: 'Sub-agentes para delegar tareas y gestionar contexto. ~20 minutos.' },
    { label: 'DeepLearning.AI: Agent Skills', url: 'https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/', desc: 'Curso con Andrew Ng sobre Agent Skills: crear, compartir y desplegar skills reutilizables.' },
    { label: 'DeepLearning.AI: Computer Use', url: 'https://learn.deeplearning.ai/courses/building-toward-computer-use-with-anthropic/', desc: 'Curso sobre Computer Use: agentes que interactúan con interfaces de computadora.' },
  ]

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero__tag">CLI AGENTICO -- Terminal + VS Code + JetBrains + Desktop + Browser</div>
        <h1 className="page-hero__title">Claude Code</h1>
        <p className="page-hero__desc">
          Herramienta de linea de comandos para trabajo agentico. Lee codebases completos, edita archivos, ejecuta comandos bash, gestiona repositorios Git, instala dependencias, crea paginas web, procesa datos y genera entregables. El CLAUDE.md es el "cerebro del proyecto".
        </p>
      </div>

      {/* STATS — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Datos de la sesion</div>
        <h2 className="section__title">Adopcion en LCG</h2>
        <p className="section__desc">Sesion interna del 10 de abril 2026 con consultores y directores.</p>
        <div className="stats-row">
          {[
            { n: '~30', l: 'Consultores en sesion', s: 'Sesion del 10 abril 2026' },
            { n: '50%', l: 'Ya tienen Claude', s: '16 de 30 conectados' },
            { n: '20%', l: 'Usan Claude Code', s: '~6 consultores activos' },
            { n: '80%', l: 'Oportunidad', s: 'Consultores por activar' },
          ].map((s, i) => (
            <div key={i}>
              <div className="stat__number">{s.n}</div>
              <div className="stat__label" style={{ color: '#fff' }}>{s.l}</div>
              <div className="stat__sub" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Caso real</div>
        <h2 className="section__title">{caseStudy.title}</h2>
        <p className="section__desc">Participantes: {caseStudy.participants}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          {caseStudy.steps.map((step, i) => (
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
          <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.7, margin: 0 }}>{caseStudy.result}</p>
        </div>
      </div>

      {/* QUOTES — section--white */}
      <div className="section section--white">
        <div className="section__tag">Voces del equipo</div>
        <h2 className="section__title">Lo que dicen los consultores</h2>
        <div style={{ height: 48 }} />
        <div className="card-grid">
          <div style={{
            background: 'rgba(0,200,83,0.04)', border: '1px solid rgba(0,200,83,0.15)',
            borderRadius: 16, padding: 28,
          }}>
            <div style={{ fontSize: 36, color: 'var(--lcg-green)', fontWeight: 800, lineHeight: 1, marginBottom: 12, fontFamily: "'Playfair Display', serif" }}>&ldquo;</div>
            <p style={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.75, margin: '0 0 16px', color: 'var(--t1)' }}>
              Nosotros nos estamos convirtiendo en editores, no en espectadores. Tenemos que revisar la informacion, agregar nuestro conocimiento e intuicion que ninguna IA tiene hoy.
            </p>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--lcg-green)' }}>— Jaime Restrepo</div>
          </div>
          <div style={{
            background: 'rgba(0,200,83,0.04)', border: '1px solid rgba(0,200,83,0.15)',
            borderRadius: 16, padding: 28,
          }}>
            <div style={{ fontSize: 36, color: 'var(--lcg-green)', fontWeight: 800, lineHeight: 1, marginBottom: 12, fontFamily: "'Playfair Display', serif" }}>&ldquo;</div>
            <p style={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.75, margin: '0 0 16px', color: 'var(--t1)' }}>
              El ahorro de tiempo es exponencial. No es un texto bonito ni un formato — es analisis cruzado con datos, oportunidades enlistadas y priorizadas. Es oro puro para nosotros.
            </p>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--lcg-green)' }}>— Fray</div>
          </div>
        </div>
      </div>

      {/* FEATURES — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Funcionalidades</div>
        <h2 className="section__title">Funcionalidades principales</h2>
        <p className="section__desc">Todo lo que Claude Code puede hacer por tu equipo de consultoria.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: 28,
              border: '1px solid rgba(255,255,255,0.08)',
              borderLeft: '4px solid var(--lcg-green)',
            }}>
              <h4 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 800, color: '#fff' }}>{f.title}</h4>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 16px' }}>{f.desc}</p>
              <div style={{
                background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.2)',
                borderRadius: 8, padding: '12px 18px',
                fontSize: 13, color: 'var(--lcg-green)', fontWeight: 600, lineHeight: 1.6,
              }}>
                Tip LCG: {f.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LCG USE CASES — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Aplicaciones</div>
        <h2 className="section__title">Casos de uso para consultoria LCG</h2>
        <p className="section__desc">Escenarios concretos donde Claude Code transforma el trabajo de consultoria.</p>
        <div className="card-grid">
          {lcgUseCases.map((uc, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">Caso de uso</div>
                <h4 className="card__title" style={{ fontSize: 17 }}>{uc.title}</h4>
                <p className="card__desc">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLAUDE.md EXPLANATION — section--white */}
      <div className="section section--white">
        <div className="section__tag">Configuracion</div>
        <h2 className="section__title">El CLAUDE.md como "cerebro del proyecto"</h2>
        <p className="section__desc">
          Es un archivo Markdown en la raiz del proyecto que define todo el contexto. Claude Code lo lee automaticamente y sigue las instrucciones al pie de la letra.
        </p>
        <div style={{
          background: '#0a0a0a', borderRadius: 12, padding: 28, fontFamily: "'Courier New', monospace",
          fontSize: 13, lineHeight: 2, color: '#e0e0e0', overflow: 'auto', maxWidth: 640,
        }}>
          <div><span style={{ color: 'var(--lcg-green)' }}># Cliente:</span> Financiera XYZ</div>
          <div><span style={{ color: 'var(--lcg-green)' }}># Objetivo:</span> Prediagnostico operativo</div>
          <div><span style={{ color: 'var(--lcg-green)' }}># Pilares:</span> Lean, Finanzas, RRHH, Tecnologia</div>
          <div><span style={{ color: 'var(--lcg-green)' }}># Instrucciones:</span></div>
          <div style={{ paddingLeft: 20 }}>- Cuando tengas entrevistas cargadas, procesalas</div>
          <div style={{ paddingLeft: 20 }}>- Genera hallazgos por pilar con calificacion 1-5</div>
          <div style={{ paddingLeft: 20 }}>- Entregable: HTML interactivo con push a GitHub</div>
          <div style={{ paddingLeft: 20 }}>- Formato: Top hallazgos + oportunidades priorizadas</div>
        </div>
      </div>

      {/* RESOURCES — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title">Recursos y enlaces</h2>
        <p className="section__desc">Cursos, documentacion y herramientas para dominar Claude Code.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
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
