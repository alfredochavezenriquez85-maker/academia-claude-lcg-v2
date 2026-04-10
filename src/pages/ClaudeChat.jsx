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
    { label: 'Ir a Claude.ai', url: 'https://claude.ai', desc: 'Accede a la interfaz web directamente.', color: '#00C853' },
    { label: 'Página de producto', url: 'https://www.anthropic.com/product/claude', desc: 'Descripción oficial de Claude por Anthropic.', color: '#8B5CF6' },
    { label: 'Curso Claude 101', url: 'https://anthropic.skilljar.com/claude-101', desc: 'Primeros pasos: prompting, proyectos, artefactos, skills, Deep Research. ~2 horas.', color: '#0EA5E9' },
    { label: 'Video: Future of AI at Work', url: 'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork', desc: 'Webinar de Anthropic: flujo Chat → Code → Cowork y el futuro del trabajo con IA.', color: '#F59E0B' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Claude.ai — Chat</h1>
      <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, background: '#00C85310', border: '1px solid #00C85330', color: '#00C853', fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
        INTERFAZ PRINCIPAL · Web + Móvil
      </div>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 680, lineHeight: 1.7 }}>
        Claude.ai es la interfaz web y móvil principal de Claude. Es un chat conversacional avanzado con capacidades que van mucho más allá de un chatbot: proyectos con contexto persistente, artefactos interactivos, Deep Research para investigación profunda con citas, integraciones con Google Drive, Slack y herramientas externas vía MCP. Soporta subida directa de archivos (PDFs, Word, Excel, imágenes, PowerPoint) para análisis inmediato.
      </p>

      {/* ChatGPT vs Claude */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius: 14, padding: 28,
        border: '1px solid #334155', color: '#fff', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 800 }}>¿Por qué Claude y no ChatGPT?</h3>
        <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.7, margin: '0 0 16px' }}>
          Basado en la experiencia real del equipo LCG en la sesión de capacitación del 10 de abril 2026:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Claude cuestiona y hace preguntas para llegar a más profundidad — no ejecuta "a lo tonto". ChatGPT te dice "claro jefe, gran idea" y se pone a ejecutar sin validar.',
            'Claude es más potente en razonamiento, seguimiento de instrucciones largas y complejidad de análisis.',
            'La ventaja está en las herramientas agénticas (Cowork, Code, Managed Agents) que OpenAI no tiene al mismo nivel.',
            'Recomendación del equipo: ChatGPT gratis para cosas rápidas (reescribir un correo). Claude para trabajo serio de consultoría.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, opacity: 0.8, lineHeight: 1.6 }}>
              <span style={{ color: '#00C853', fontWeight: 700, flexShrink: 0 }}>→</span>
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
            border: '1px solid var(--border)', borderLeft: '4px solid #00C853',
          }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{f.title}</h4>
            <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 14px' }}>{f.desc}</p>
            <div style={{
              background: '#00C85308', border: '1px solid #00C85320',
              borderRadius: 8, padding: '10px 16px',
              fontSize: 13, color: '#00913A', fontWeight: 600, lineHeight: 1.6,
            }}>
              Tip LCG: {f.tip}
            </div>
          </div>
        ))}
      </div>

      {/* Flow */}
      <div style={{
        background: 'var(--card)', borderRadius: 14, padding: 28,
        border: '1px solid var(--border)', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 800 }}>Flujo: Chat → Code → Cowork → Managed Agents</h3>
        <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 16px' }}>
          Claude.ai (Chat) es el punto de partida. Aquí conceptualizas, planificas, haces preguntas, defines el CLAUDE.md de tu proyecto. Después escalas:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
          {[
            { step: '1. Chat', desc: 'Conceptualizar, planificar, investigar con Deep Research, definir el proyecto', color: '#00C853' },
            { step: '2. Code', desc: 'Ejecutar: procesar archivos, generar entregables, push a GitHub', color: '#8B5CF6' },
            { step: '3. Cowork', desc: 'Trabajo con archivos locales sin terminal — para no-developers', color: '#0EA5E9' },
            { step: '4. Managed Agents', desc: 'Ejecución autónoma en la nube a escala — agentes 24/7', color: '#F59E0B' },
          ].map((s, i) => (
            <div key={i} style={{
              background: `${s.color}08`, borderRadius: 10, padding: 16,
              border: `1px solid ${s.color}25`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: s.color, marginBottom: 6 }}>{s.step}</div>
              <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases for LCG */}
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
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: '0 0 10px' }}>{uc.desc}</p>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#00C853', textTransform: 'uppercase', letterSpacing: 1 }}>
              {uc.interface}
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{
        background: '#00C85308', border: '1px solid #00C85320', borderRadius: 14,
        padding: 28, marginBottom: 36,
      }}>
        <div style={{ fontSize: 28, color: '#00C853', fontWeight: 800, marginBottom: 8 }}>"</div>
        <p style={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 12px', color: 'var(--t1)' }}>
          Nosotros nos estamos convirtiendo en editores, no en espectadores. Tenemos que revisar la información, agregar nuestro conocimiento e intuición que ninguna IA tiene hoy.
        </p>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#00C853' }}>— Jaime Restrepo, LCG</div>
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
