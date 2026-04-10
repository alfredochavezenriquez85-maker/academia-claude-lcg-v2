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
    { label: 'Documentación API', url: 'https://platform.claude.com/docs/en/home', desc: 'Referencia completa: Messages API, tool use, streaming, caching, batch, structured output.', color: '#0EA5E9' },
    { label: 'Curso: Building with the Claude API', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', desc: 'El curso más completo de Anthropic Academy: tool use, streaming, RAG, MCP, apps con Claude. ~8 horas.', color: '#00C853' },
    { label: 'Prompt Engineering Guide', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', desc: 'Guía oficial de prompting: técnicas, best practices, structured output, evaluaciones.', color: '#8B5CF6' },
    { label: 'SDK Python', url: 'https://github.com/anthropics/anthropic-sdk-python', desc: 'Repositorio oficial del SDK de Python. Instalación, ejemplos, documentación.', color: '#F59E0B' },
    { label: 'Anthropic Cookbook', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview', desc: 'Recetas y ejemplos prácticos para construir con Claude: RAG, agents, clasificación, extracción.', color: '#EF4444' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Claude API</h1>
      <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, background: '#F59E0B10', border: '1px solid #F59E0B30', color: '#F59E0B', fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
        ACCESO PROGRAMÁTICO · SDKs en Python, TypeScript, Java, Go
      </div>
      <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32, maxWidth: 680, lineHeight: 1.7 }}>
        La API de Claude da acceso programático completo a todos los modelos. Messages API para conversaciones, Tool Use para invocar herramientas externas, streaming de respuestas en tiempo real, prompt caching para reducir costos hasta 90%, batch processing con 50% de descuento para volumen, y structured output para respuestas en JSON. Disponible directamente con Anthropic o vía AWS Bedrock, Google Vertex AI y Microsoft Azure Foundry.
      </p>

      {/* API Overview */}
      <div style={{
        background: 'linear-gradient(135deg, #451a03, #78350f)', borderRadius: 14, padding: 28,
        border: '1px solid #92400e', color: '#fff', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 800 }}>¿Quién necesita la API?</h3>
        <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.7, margin: '0 0 16px' }}>
          La API es para cuando necesitas integrar Claude directamente en tus sistemas, aplicaciones o flujos de trabajo automatizados:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            'Construir chatbots o asistentes personalizados para clientes o uso interno',
            'Integrar Claude con ERP (Business Central), CRM, SharePoint u otros sistemas',
            'Automatizar procesamiento de documentos a escala (cientos o miles)',
            'Crear flujos en Power Automate, Azure Logic Apps o AWS Step Functions que usen IA',
            'Generar dashboards inteligentes donde el usuario pregunte en lenguaje natural',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
              <span style={{ color: '#F59E0B', fontWeight: 700, flexShrink: 0 }}>→</span>
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
            border: '1px solid var(--border)', borderLeft: '4px solid #F59E0B',
          }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 800 }}>{f.title}</h4>
            <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, margin: '0 0 14px' }}>{f.desc}</p>
            <div style={{
              background: '#F59E0B08', border: '1px solid #F59E0B20',
              borderRadius: 8, padding: '10px 16px',
              fontSize: 13, color: '#B45309', fontWeight: 600, lineHeight: 1.6,
            }}>
              Tip LCG: {f.tip}
            </div>
          </div>
        ))}
      </div>

      {/* SDKs */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        SDKs oficiales
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 14, marginBottom: 36 }}>
        {sdks.map((sdk, i) => (
          <a key={i} href={sdk.url} target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--card)', borderRadius: 12, padding: 22,
            border: '1px solid var(--border)', textDecoration: 'none',
          }}>
            <h4 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 800, color: 'var(--t1)' }}>{sdk.lang}</h4>
            <p style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5, margin: 0 }}>{sdk.desc}</p>
          </a>
        ))}
      </div>

      {/* Cloud Platforms */}
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--t2)', marginBottom: 16 }}>
        Plataformas cloud
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14, marginBottom: 36 }}>
        {platforms.map((p, i) => (
          <div key={i} style={{
            background: 'var(--card)', borderRadius: 12, padding: 22,
            border: '1px solid var(--border)',
          }}>
            <h4 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 800 }}>{p.name}</h4>
            <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
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

      {/* Code example */}
      <div style={{
        background: 'var(--card)', borderRadius: 14, padding: 28,
        border: '1px solid var(--border)', marginBottom: 36,
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 800 }}>Ejemplo: llamada básica con Python</h3>
        <div style={{
          background: '#1a1a1a', borderRadius: 8, padding: 20, fontFamily: 'monospace',
          fontSize: 12, lineHeight: 1.8, color: '#e0e0e0', overflow: 'auto',
        }}>
          <div><span style={{ color: '#F59E0B' }}>import</span> anthropic</div>
          <div>&nbsp;</div>
          <div>client = anthropic.Anthropic()</div>
          <div>&nbsp;</div>
          <div>message = client.messages.create(</div>
          <div>    model=<span style={{ color: '#00C853' }}>"claude-sonnet-4-6"</span>,</div>
          <div>    max_tokens=<span style={{ color: '#0EA5E9' }}>1024</span>,</div>
          <div>    system=<span style={{ color: '#00C853' }}>"Eres un consultor experto de LCG..."</span>,</div>
          <div>    messages=[</div>
          <div>        {'{'}<span style={{ color: '#00C853' }}>"role"</span>: <span style={{ color: '#00C853' }}>"user"</span>,</div>
          <div>         <span style={{ color: '#00C853' }}>"content"</span>: <span style={{ color: '#00C853' }}>"Analiza estos KPIs..."</span>{'}'},</div>
          <div>    ]</div>
          <div>)</div>
          <div>&nbsp;</div>
          <div><span style={{ color: '#8B5CF6' }}>print</span>(message.content[<span style={{ color: '#0EA5E9' }}>0</span>].text)</div>
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
