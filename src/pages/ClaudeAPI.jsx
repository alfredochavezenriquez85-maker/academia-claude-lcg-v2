export default function ClaudeAPI() {
  const features = [
    {
      title: 'Messages API',
      desc: 'API principal para conversaciones con Claude. Envías mensajes (texto, imágenes, documentos) y recibes respuestas estructuradas. Soporta conversaciones multi-turno con historial completo, system prompts para definir comportamiento, y metadata para tracking.',
      tip: 'Usa la Messages API para construir chatbots internos de LCG que respondan preguntas sobre metodologías, frameworks y casos de éxito usando RAG.',
    },
    {
      title: 'Tool Use / Function Calling',
      desc: 'Define herramientas (funciones) que Claude puede invocar durante una conversación. Tú defines el schema de la herramienta (nombre, parámetros, descripción) y Claude decide cuándo usarla. Perfecto para conectar Claude con APIs externas, bases de datos y sistemas operativos.',
      tip: 'Define tools para que Claude consulte Business Central directamente: obtener saldos, verificar inventarios, consultar estados de cuenta. Claude decide cuándo llamar cada herramienta.',
    },
    {
      title: 'Streaming',
      desc: 'Recibe las respuestas de Claude token por token en tiempo real, en vez de esperar a que se genere toda la respuesta. Mejora drásticamente la experiencia del usuario en aplicaciones interactivas. Soporte completo para Server-Sent Events (SSE).',
      tip: 'Indispensable para dashboards o chatbots donde el usuario necesita ver la respuesta mientras se genera, no esperar 10-20 segundos.',
    },
    {
      title: 'Prompt Caching',
      desc: 'Marca secciones de tu prompt que se repiten entre llamadas (system prompt, documentos de referencia, contexto base) para que se cacheen y no se re-procesen. Reduce costos hasta 90% y latencia hasta 85% en llamadas repetitivas.',
      tip: 'Cachea el sistema de conocimiento LCG (metodologías, frameworks) como parte del system prompt. Cada consulta posterior cuesta una fracción.',
    },
    {
      title: 'Batch Processing',
      desc: 'Envía hasta 100,000 requests de forma asíncrona con un 50% de descuento. Ideal para procesamiento masivo donde no necesitas respuesta inmediata: análisis de documentos, clasificación, extracción de datos a escala.',
      tip: 'Procesa 500 documentos de un cliente en batch: extrae datos clave, clasifica por categoría, genera resúmenes. 50% más barato que en tiempo real.',
    },
    {
      title: 'Structured Output (JSON)',
      desc: 'Fuerza a Claude a responder en formato JSON con un schema específico que tú defines. Garantiza que la salida sea parseable y consistente. Ideal para integraciones donde necesitas datos estructurados, no texto libre.',
      tip: 'Define un JSON schema para hallazgos de diagnóstico: {pilar, calificación, hallazgos[], recomendaciones[], prioridad}. Cada análisis sale en formato consistente.',
    },
  ]

  const sdks = [
    { lang: 'Python', url: 'https://github.com/anthropics/anthropic-sdk-python', desc: 'SDK oficial. pip install anthropic. Async support, streaming, tool use.' },
    { lang: 'TypeScript/Node', url: 'https://github.com/anthropics/anthropic-sdk-typescript', desc: 'SDK oficial. npm install @anthropic-ai/sdk. Full TypeScript types.' },
    { lang: 'Java', url: 'https://github.com/anthropics/anthropic-sdk-java', desc: 'SDK oficial para aplicaciones Java y Android.' },
    { lang: 'Go', url: 'https://github.com/anthropics/anthropic-sdk-go', desc: 'SDK oficial para servicios en Go.' },
  ]

  const platforms = [
    { name: 'AWS Bedrock', desc: 'Accede a Claude desde tu cuenta AWS. Sin API key de Anthropic — usa IAM roles. Integra con Lambda, SageMaker, Step Functions.' },
    { name: 'Google Vertex AI', desc: 'Claude disponible en Google Cloud. Integra con BigQuery, Cloud Functions, Dataflow para pipelines de datos.' },
    { name: 'Microsoft Azure Foundry', desc: 'Claude en el ecosistema Azure. Integra con Azure Functions, Logic Apps, Power Platform.' },
  ]

  const lcgUseCases = [
    { title: 'Chatbot interno de conocimiento', desc: 'API + RAG para un chatbot que responde preguntas sobre metodologías LCG, casos de éxito, plantillas y frameworks. Cada consultor tiene acceso al conocimiento colectivo de la firma.' },
    { title: 'Integración con Business Central', desc: 'Tool Use para que Claude consulte directamente los datos del ERP del cliente: saldos, inventarios, cuentas por cobrar/pagar. Análisis en lenguaje natural sobre datos operativos en tiempo real.' },
    { title: 'Procesamiento masivo de documentos', desc: 'Batch API para procesar cientos de documentos del cliente: extraer datos clave, clasificar por tipo, generar resúmenes. 50% más barato que procesar uno por uno.' },
    { title: 'Flujos en Power Automate', desc: 'Llamar la API de Claude desde Power Automate para automatizar análisis, clasificación de emails, generación de reportes periódicos, alertas inteligentes basadas en datos.' },
    { title: 'Dashboards inteligentes', desc: 'API con streaming para dashboards donde el usuario hace preguntas en lenguaje natural sobre KPIs y recibe análisis en tiempo real con visualizaciones generadas por Claude.' },
    { title: 'Preprocesamiento de datos', desc: 'Structured Output para normalizar y limpiar datos de múltiples fuentes del cliente. Claude extrae, transforma y estructura datos en JSON consistente listo para BI.' },
  ]

  const resources = [
    { label: 'Documentación API', url: 'https://platform.claude.com/docs/en/home', desc: 'Referencia completa: Messages API, tool use, streaming, caching, batch, structured output.' },
    { label: 'Curso: Building with the Claude API', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', desc: 'El curso más completo de Anthropic Academy: tool use, streaming, RAG, MCP, apps con Claude. ~8 horas.' },
    { label: 'Prompt Engineering Guide', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', desc: 'Guía oficial de prompting: técnicas, best practices, structured output, evaluaciones.' },
    { label: 'SDK Python', url: 'https://github.com/anthropics/anthropic-sdk-python', desc: 'Repositorio oficial del SDK de Python. Instalación, ejemplos, documentación.' },
    { label: 'Anthropic Cookbook', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', desc: 'Recetas y ejemplos prácticos para construir con Claude: RAG, agents, clasificación, extracción.' },
  ]

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">Acceso programatico -- SDKs en Python, TypeScript, Java, Go</div>
        <h1 className="page-hero__title">Claude API</h1>
        <p className="page-hero__desc">
          Acceso programatico completo a todos los modelos Claude. Messages API, Tool Use, streaming, prompt caching, batch processing y structured output. Disponible via Anthropic, AWS Bedrock, Google Vertex AI y Azure Foundry.
        </p>
      </div>

      {/* WHO NEEDS THE API — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Para quien es</div>
        <h2 className="section__title">Quien necesita la API?</h2>
        <p className="section__desc">La API es para cuando necesitas integrar Claude directamente en tus sistemas, aplicaciones o flujos de trabajo automatizados.</p>
        <div style={{
          background: 'var(--lcg-black)', borderRadius: 16, padding: 32,
          color: '#fff', maxWidth: 680,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Construir chatbots o asistentes personalizados para clientes o uso interno',
              'Integrar Claude con ERP (Business Central), CRM, SharePoint u otros sistemas',
              'Automatizar procesamiento de documentos a escala (cientos o miles)',
              'Crear flujos en Power Automate, Azure Logic Apps o AWS Step Functions que usen IA',
              'Generar dashboards inteligentes donde el usuario pregunte en lenguaje natural',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--lcg-green)', fontWeight: 700, flexShrink: 0 }}>&#8594;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES — section--white */}
      <div className="section section--white">
        <div className="section__tag">Funcionalidades</div>
        <h2 className="section__title">Funcionalidades principales</h2>
        <p className="section__desc">Las capacidades clave del API de Claude para integraciones empresariales.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'var(--card)', borderRadius: 16, padding: 28,
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--lcg-green)',
            }}>
              <h4 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 800 }}>{f.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 16px' }}>{f.desc}</p>
              <div style={{
                background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
                borderRadius: 8, padding: '12px 18px',
                fontSize: 13, color: 'var(--lcg-green-dark)', fontWeight: 600, lineHeight: 1.6,
              }}>
                Tip LCG: {f.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SDKs + CLOUD — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">SDKs oficiales</div>
        <h2 className="section__title">SDKs y plataformas cloud</h2>
        <p className="section__desc">Integra Claude en cualquier stack tecnologico con SDKs nativos y proveedores cloud.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16, marginBottom: 48 }}>
          {sdks.map((sdk, i) => (
            <a key={i} href={sdk.url} target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--card)', borderRadius: 14, padding: 24,
              border: '1px solid var(--border)', textDecoration: 'none',
              borderTop: '3px solid var(--lcg-green)',
            }}>
              <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800, color: 'var(--t1)' }}>{sdk.lang}</h4>
              <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.5, margin: 0 }}>{sdk.desc}</p>
            </a>
          ))}
        </div>

        <div className="section__tag" style={{ marginBottom: 14 }}>Plataformas cloud</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {platforms.map((p, i) => (
            <div key={i} style={{
              background: 'var(--card)', borderRadius: 14, padding: 24,
              border: '1px solid var(--border)',
            }}>
              <h4 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 800, color: 'var(--t1)' }}>{p.name}</h4>
              <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LCG USE CASES — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Aplicaciones</div>
        <h2 className="section__title">Casos de uso para consultoria LCG</h2>
        <p className="section__desc">Integraciones concretas del API de Claude en flujos de trabajo de consultoria.</p>
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

      {/* CODE EXAMPLE — section--white */}
      <div className="section section--white">
        <div className="section__tag">Ejemplo</div>
        <h2 className="section__title">Llamada basica con Python</h2>
        <p className="section__desc">Asi de simple es enviar un mensaje a Claude desde tu codigo.</p>
        <div style={{
          background: '#0a0a0a', borderRadius: 12, padding: 28, fontFamily: "'Courier New', monospace",
          fontSize: 13, lineHeight: 2, color: '#e0e0e0', overflow: 'auto', maxWidth: 640,
        }}>
          <div><span style={{ color: 'var(--lcg-green)' }}>import</span> anthropic</div>
          <div>&nbsp;</div>
          <div>client = anthropic.Anthropic()</div>
          <div>&nbsp;</div>
          <div>message = client.messages.create(</div>
          <div>    model=<span style={{ color: '#fff' }}>"claude-sonnet-4-6"</span>,</div>
          <div>    max_tokens=<span style={{ color: 'var(--lcg-green)' }}>1024</span>,</div>
          <div>    system=<span style={{ color: '#fff' }}>"Eres un consultor experto de LCG..."</span>,</div>
          <div>    messages=[</div>
          <div>        {'{'}<span style={{ color: '#fff' }}>"role"</span>: <span style={{ color: '#fff' }}>"user"</span>,</div>
          <div>         <span style={{ color: '#fff' }}>"content"</span>: <span style={{ color: '#fff' }}>"Analiza estos KPIs..."</span>{'}'},</div>
          <div>    ]</div>
          <div>)</div>
          <div>&nbsp;</div>
          <div><span style={{ color: 'var(--lcg-green)' }}>print</span>(message.content[<span style={{ color: 'var(--lcg-green)' }}>0</span>].text)</div>
        </div>
      </div>

      {/* RESOURCES — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Recursos</div>
        <h2 className="section__title">Recursos y enlaces</h2>
        <p className="section__desc">Documentacion, cursos y herramientas para dominar el API de Claude.</p>
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
