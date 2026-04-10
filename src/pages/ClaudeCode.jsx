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
    { label: 'Página de producto', url: 'https://www.anthropic.com/product/claude-code', desc: 'Descripción oficial de Claude Code por Anthropic.', color: '#8B5CF6' },
    { label: 'Documentación completa', url: 'https://code.claude.com/docs/en/overview', desc: 'Referencia técnica completa: comandos, configuración, MCP, hooks, skills.', color: '#0EA5E9' },
    { label: 'Curso: Claude Code in Action', url: 'https://anthropic.skilljar.com/claude-code-in-action', desc: 'Arquitectura de asistentes de código, contexto, comandos, MCP, GitHub. ~3 horas.', color: '#00C853' },
    { label: 'Curso: Agent Skills', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', desc: 'Crear y compartir Skills reutilizables en Claude Code. ~1 hora.', color: '#F59E0B' },
    { label: 'Curso: Subagents', url: 'https://anthropic.skilljar.com/introduction-to-subagents', desc: 'Sub-agentes para delegar tareas y gestionar contexto. ~20 minutos.', color: '#EF4444' },
    { label: 'DeepLearning.AI: Agent Skills', url: 'https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/', desc: 'Curso con Andrew Ng sobre Agent Skills: crear, compartir y desplegar skills reutilizables.', color: '#8B5CF6' },
    { label: 'DeepLearning.AI: Computer Use', url: 'https://learn.deeplearning.ai/courses/building-toward-computer-use-with-anthropic/', desc: 'Curso sobre Computer Use: agentes que interactúan con interfaces de computadora.', color: '#0EA5E9' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Claude Code</h1>
      <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, background: '#8B5CF610', border: '1px solid #8B5CF630', color: '#8B5CF6', fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
        CLI AGÉNTICO · Terminal + VS Code + JetBrains + Desktop + Browser
      </div>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 680, lineHeight: 1.7 }}>
        Claude Code es una herramienta de línea de comandos (CLI) para trabajo agéntico. Lee codebases completos, edita archivos, ejecuta comandos bash, gestiona repositorios Git, instala dependencias, crea páginas web, procesa datos y genera entregables. Soporta sub-agentes especializados, Skills reutilizables, integración con MCP servers. Disponible en terminal, VS Code, JetBrains, desktop app y browser. El CLAUDE.md es el "cerebro del proyecto" que define todo el contexto.
      </p>

      {/* Stats from session */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 36 }}>
        {[
          { n: '~30', l: 'Consultores en sesión', s: 'Sesión del 10 abril 2026', c: '#8B5CF6' },
          { n: '50%', l: 'Ya tienen Claude', s: '16 de 30 conectados', c: '#0EA5E9' },
          { n: '20%', l: 'Usan Claude Code', s: '~6 consultores activos', c: '#00C853' },
          { n: '80%', l: 'Oportunidad', s: 'Consultores por activar', c: '#F59E0B' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 14, padding: '24px 20px',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: s.c }}>{s.n}</div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>{s.l}</div>
            <div style={{ fontSize: 12, color: 'var(--t2)', marginTop: 4 }}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* Case Study */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0a2e, #2d1b4e)', borderRadius: 14, padding: 32,
        border: '1px solid #4c2885', color: '#fff', marginBottom: 36,
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#8B5CF6', marginBottom: 8 }}>
          CASO REAL
        </div>
        <h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 800 }}>{caseStudy.title}</h3>
        <p style={{ fontSize: 13, opacity: 0.6, marginBottom: 20 }}>Participantes: {caseStudy.participants}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {caseStudy.steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800, flexShrink: 0,
              }}>{i + 1}</div>
              <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6, margin: 0 }}>{step}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(139, 92, 246, 0.15)', borderRadius: 10, padding: 20,
          border: '1px solid rgba(139, 92, 246, 0.3)',
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#8B5CF6', marginBottom: 6 }}>RESULTADO</div>
          <p style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.7, margin: 0 }}>{caseStudy.result}</p>
        </div>
      </div>

      {/* Quotes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginBottom: 36 }}>
        <div style={{
          background: '#00C85308', border: '1px solid #00C85320', borderRadius: 14, padding: 24,
        }}>
          <div style={{ fontSize: 28, color: '#00C853', fontWeight: 800, marginBottom: 8 }}>"</div>
          <p style={{ fontSize: 14, fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 12px', color: 'var(--t1)' }}>
            Nosotros nos estamos convirtiendo en editores, no en espectadores. Tenemos que revisar la información, agregar nuestro conocimiento e intuición que ninguna IA tiene hoy.
          </p>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#00C853' }}>— Jaime Restrepo</div>
        </div>
        <div style={{
          background: '#8B5CF608', border: '1px solid #8B5CF620', borderRadius: 14, padding: 24,
        }}>
          <div style={{ fontSize: 28, color: '#8B5CF6', fontWeight: 800, marginBottom: 8 }}>"</div>
          <p style={{ fontSize: 14, fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 12px', color: 'var(--t1)' }}>
            El ahorro de tiempo es exponencial. No es un texto bonito ni un formato — es análisis cruzado con datos, oportunidades enlistadas y priorizadas. Es oro puro para nosotros.
          </p>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#8B5CF6' }}>— Fray</div>
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
            border: '1px solid var(--border)', borderLeft: '4px solid #8B5CF6',
          }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{f.title}</h4>
            <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 14px' }}>{f.desc}</p>
            <div style={{
              background: '#8B5CF608', border: '1px solid #8B5CF620',
              borderRadius: 8, padding: '10px 16px',
              fontSize: 13, color: '#6D28D9', fontWeight: 600, lineHeight: 1.6,
            }}>
              Tip LCG: {f.tip}
            </div>
          </div>
        ))}
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

      {/* CLAUDE.md explanation */}
      <div style={{
        background: 'var(--card)', borderRadius: 14, padding: 28,
        border: '1px solid var(--border)', marginBottom: 36,
        borderLeft: '4px solid #8B5CF6',
      }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 800 }}>El CLAUDE.md como "cerebro del proyecto"</h3>
        <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 16px' }}>
          Es un archivo Markdown en la raíz del proyecto que define todo el contexto. Claude Code lo lee automáticamente y sigue las instrucciones al pie de la letra. Ejemplo de contenido:
        </p>
        <div style={{
          background: '#1a1a1a', borderRadius: 8, padding: 20, fontFamily: 'monospace',
          fontSize: 12, lineHeight: 1.8, color: '#e0e0e0', overflow: 'auto',
        }}>
          <div><span style={{ color: '#8B5CF6' }}># Cliente:</span> Financiera XYZ</div>
          <div><span style={{ color: '#8B5CF6' }}># Objetivo:</span> Prediagnóstico operativo</div>
          <div><span style={{ color: '#8B5CF6' }}># Pilares:</span> Lean, Finanzas, RRHH, Tecnología</div>
          <div><span style={{ color: '#8B5CF6' }}># Instrucciones:</span></div>
          <div style={{ paddingLeft: 16 }}>- Cuando tengas entrevistas cargadas, procésalas</div>
          <div style={{ paddingLeft: 16 }}>- Genera hallazgos por pilar con calificación 1-5</div>
          <div style={{ paddingLeft: 16 }}>- Entregable: HTML interactivo con push a GitHub</div>
          <div style={{ paddingLeft: 16 }}>- Formato: Top hallazgos + oportunidades priorizadas</div>
        </div>
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
