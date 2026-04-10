# Academia Claude — London Consulting Group

## Descripción del Proyecto
Portal interno de capacitación en IA para consultores y directores de London Consulting Group (LCG) México.
El portal cubre el ecosistema completo de Claude (Anthropic): modelos, interfaces, conceptos clave, plan de capacitación con certificaciones oficiales, Managed Agents y casos de uso aplicados a consultoría.

## Tipografía
- **Títulos (h1-h6):** Playfair Display (serif) — Google Fonts
- **Body / texto:** Abadi con fallback a Segoe UI, Calibri, sans-serif

## Logos
- **Sidebar (fondo negro #000):** Logo_Secundario_-_Light.png (blanco, fondo negro opaco en PNG)
- **Hero (fondo oscuro):** Mismo Logo Light
- **Secciones claras:** Lockup_Shape_Your_Business_-_Verde.png
- NOTA: Los PNGs NO tienen transparencia, tienen fondo negro RGB. El sidebar y hero DEBEN ser fondo #000000 puro para que el logo se integre.

## Paleta de Colores
- **Verde LCG:** `#00C853`
- **Negro fondos:** `#000000` (sidebar, hero)
- **Fondo claro:** `#F5F3EF`
- **Tarjetas:** `#FFFFFF`
- **Bordes:** `#E5E1DB`
- **Texto primario:** `#1A1A1A`
- **Texto secundario:** `#6B6B6B`

---

## SECCIÓN: Modelos & Interfaces — LIGAS Y VIDEOS POR CADA INTERFAZ

### Claude.ai (Chat)
- **Producto:** https://claude.ai
- **Página oficial:** https://www.anthropic.com/product/claude
- **Curso:** https://anthropic.skilljar.com/claude-101
- **Video intro:** https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork (contexto Chat → Code → Cowork)
- **Descripción expandida:** Interfaz web y móvil principal. Chat conversacional con proyectos, artefactos (código, documentos, visualizaciones interactivas), Deep Research para investigación profunda con citas, integraciones con Google Drive, Slack y herramientas externas via MCP. Soporta subida de archivos (PDFs, Word, Excel, imágenes) para análisis directo. Sistema de Proyectos con System Prompt personalizado y archivos de referencia para mantener contexto por cliente.

### Claude Cowork
- **Producto:** https://www.anthropic.com/product/claude-cowork
- **Curso:** https://anthropic.skilljar.com/introduction-to-claude-cowork
- **Webinar Anthropic:** https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork
- **Tutorial DataCamp:** https://www.datacamp.com/tutorial/claude-cowork-tutorial
- **Anuncio TechCrunch:** https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/
- **Descripción expandida:** Agente de escritorio (macOS y Windows, GA desde abril 2026) que trabaja directamente con archivos y aplicaciones del usuario. Task loop autónomo: le asignas una carpeta, describes la tarea y Claude planifica y ejecuta pasos sin intervención constante. Puede reorganizar archivos, crear reportes desde notas, extraer datos de screenshots, generar presentaciones. Incluye plugins, connectors (web y desktop), browser automation via Chrome, y Dispatch para asignar tareas desde iPhone. Disponible en planes Pro, Team y Enterprise.

### Claude Code
- **Producto:** https://www.anthropic.com/product/claude-code
- **Docs:** https://code.claude.com/docs/en/overview
- **Curso:** https://anthropic.skilljar.com/claude-code-in-action
- **Curso Agent Skills:** https://anthropic.skilljar.com/introduction-to-agent-skills
- **Curso Subagents:** https://anthropic.skilljar.com/introduction-to-subagents
- **DeepLearning.AI Agent Skills:** https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/
- **DeepLearning.AI Computer Use:** https://learn.deeplearning.ai/courses/building-toward-computer-use-with-anthropic/
- **Descripción expandida:** Herramienta de línea de comandos (CLI) para coding agéntico. Lee codebases completos, edita archivos, ejecuta comandos bash, gestiona repositorios Git, instala dependencias. Soporta sub-agentes especializados, Skills (instrucciones Markdown reutilizables), integración con MCP servers. Disponible en terminal, VS Code, JetBrains, desktop app y browser. El CLAUDE.md es el "cerebro del proyecto": define contexto, instrucciones y flujos de trabajo. Push directo a GitHub.

### Claude API
- **Docs:** https://platform.claude.com/docs/en/home
- **Curso:** https://anthropic.skilljar.com/claude-with-the-anthropic-api
- **SDK Python:** https://github.com/anthropics/anthropic-sdk-python
- **Cookbook:** https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
- **Descripción expandida:** Acceso programático completo a los modelos Claude. Messages API para conversaciones, Tool Use / Function Calling para invocar herramientas externas, streaming de respuestas, prompt caching para reducir costos, batch processing. SDKs en Python, TypeScript, Java, Go y más. Integración con AWS Bedrock, Google Vertex AI, Microsoft Azure Foundry.

### Claude Managed Agents
- **Docs:** https://platform.claude.com/docs/en/managed-agents/overview
- **Quickstart:** https://platform.claude.com/docs/en/managed-agents/quickstart
- **Agent SDK:** https://platform.claude.com/docs/en/agent-sdk/overview
- **Engineering Blog:** https://www.anthropic.com/engineering/managed-agents
- **Anuncio oficial:** https://www.anthropic.com/news/managed-agents (si existe)
- **Cookbook Data Analyst:** https://platform.claude.com/cookbook/managed-agents-data-analyst-agent
- **GitHub Agent SDK:** https://github.com/anthropics/claude-code
- **Descripción expandida:** Beta pública desde abril 8, 2026. APIs composables para construir y desplegar agentes autónomos en infraestructura cloud administrada por Anthropic. El developer define Agent (modelo, system prompt, tools, MCP servers, skills), Environment (container con Python/Node/Go, reglas de red, archivos) y Session (instancia ejecutándose). Sandboxed execution, persistent memory, multi-agent coordination (research preview), event streaming en tiempo real. Pricing: tokens estándar + $0.08/session-hour activo + $10/1,000 web searches. Ya usado por Notion, Asana, Sentry, Rakuten en producción.

---

## SECCIÓN: Casos de Uso LCG — ENRIQUECIDOS CON TRANSCRIPT

### Contexto de la sesión de capacitación (10 abril 2026)
Sesión interna LCG. Participantes: ~30 consultores conectados. De esos, ~16 (50%) ya tienen Claude instalado. De esos 16, solo ~6 (20%) están usando Claude Code activamente. Esto demuestra la brecha y oportunidad.

### Caso Real: Prediagnóstico con Claude Code (Fer Sánchez + Fray)
- **Contexto:** Prediagnóstico para una financiera. Fer Sánchez proporcionó entrevistas grabadas (transcripts de Teams), documentos financieros y presentaciones del cliente.
- **Proceso:**
  1. Se creó un proyecto en Claude Code con CLAUDE.md como "cerebro del proyecto": cliente, hilo conductor del diagnóstico, pilares a calificar, flujos de trabajo.
  2. Se subieron transcripts de entrevistas a la carpeta del proyecto.
  3. Claude Code procesó cada entrevista automáticamente: "Ya procesé la entrevista 1, ya procesé la 2, ya procesé la 3..."
  4. Generó documentos HTML interactivos con hallazgos por entrevista.
  5. Se iteró con correcciones: "No, está mal" → Claude aplica cambios → se revisa → se itera hasta quedar bien.
  6. Entregable final: push a GitHub como página web accesible con link compartible.
- **Resultado:** Análisis cruzado de entrevistas con datos, modelos de madurez por pilar Lean, top hallazgos, oportunidades priorizadas — sin hacer PowerPoint manual ni analizar Excel a mano.
- **Quote clave (Jaime Restrepo):** "Nosotros nos estamos convirtiendo en editores, no en espectadores. Tenemos que revisar la información, agregar nuestro conocimiento e intuición que ninguna IA tiene hoy."
- **Quote clave (Fray):** "El ahorro de tiempo es exponencial. No es un texto bonito ni un formato — es análisis cruzado con datos, oportunidades enlistadas y priorizadas. Es oro puro para nosotros."

### Caso: Portal de entregables para clientes
- Se creó una página web en Lovable con ligas a GitHub donde el cliente/prospecto puede acceder a: estudio de mercado, guías de entrevistas, documentos de análisis.
- Cada consejero o director general del cliente puede entrar y ver cómo quedaron las entrevistas de su equipo.
- Entregable interactivo vs. PowerPoint estático.

### Diagnóstico & Discovery (expandido)
- **Procesamiento de entrevistas:** Grabar entrevistas con transcript de Teams → subir a carpeta Claude Code → procesamiento automático → síntesis de hallazgos, patrones recurrentes, contradicciones entre entrevistados → documento interactivo HTML.
- **Benchmarking sectorial:** Deep Research para investigar prácticas de mercado, KPIs de industria, posicionamiento competitivo. Genera reportes con citas de fuentes antes de iniciar diagnóstico.
- **Análisis de datos operativos:** Exports de Business Central (CSV/Excel) → Claude identifica tendencias, anomalías y áreas de oportunidad. Cruza datos cuantitativos con hallazgos cualitativos de entrevistas.
- **Estudio de mercado automatizado:** Managed Agents para investigación continua de mercado del prospecto, su industria y competidores. FODA y puntos de diferenciación.

### Diseño de Soluciones (expandido)
- **Redacción de propuestas técnicas y económicas:** Proyecto Claude con metodología LCG + contexto del cliente → propuestas en formato estándar con recomendaciones fundamentadas.
- **Diseño de procesos AS-IS → TO-BE:** Describir proceso actual, Claude propone mejoras con diagramas de flujo en artefactos HTML interactivos.
- **Modelado financiero y paramétrico:** Claude Code para modelos de impacto, simulaciones de escenarios, análisis de sensibilidad. Ejemplo: modelo paramétrico de evaluación de riesgo para financiera.
- **Modelos de madurez:** Claude genera calificaciones por pilar (ej: pilares Lean) basado en entrevistas y datos, con justificación por cada score.

### Implementación & Entregables (expandido)
- **Entregables HTML interactivos:** En vez de PowerPoint estático, generar páginas web interactivas con hallazgos, gráficas, drill-down por área. Push a GitHub → link compartible.
- **Generación masiva de documentos:** Cowork para crear presentaciones, reportes ejecutivos, manuales de procedimientos desde archivos locales sin tocar PowerPoint manualmente.
- **Dashboards de KPIs:** Artefactos React/HTML con visualizaciones interactivas que el cliente explora antes de implementar en su BI.
- **Automatización con Power Automate:** Claude Code genera flujos JSON, conectores y lógica de integración con Business Central y SharePoint.

### Gestión Interna LCG (expandido)
- **Preparación de licitaciones:** Deep Research del prospecto + Managed Agents para monitoreo continuo → FODA, diferenciación, propuesta personalizada.
- **Knowledge Management:** Proyecto con base de conocimiento LCG (metodologías, casos de éxito, plantillas). Claude como asistente de conocimiento interno. "Cerebro del proyecto" con CLAUDE.md.
- **Capacitación interna:** Portal web con módulos, quizzes, ligas a Anthropic Academy. Este mismo portal es ejemplo.
- **Migración de ChatGPT a Claude:** Bajar historial de chats de ChatGPT → subir en perfilamiento de Claude para no perder el contexto acumulado.

---

## INSIGHTS DEL TRANSCRIPT PARA INCLUIR EN LA SECCIÓN "¿Qué es Claude?"

### ¿Por qué Claude y no ChatGPT?
- Claude es más potente en razonamiento, seguimiento de instrucciones y profundidad.
- "Claude cuestiona, te hace preguntas para llegar a más profundidad de tu trabajo" — no ejecuta a lo tonto.
- ChatGPT "te dice 'claro jefe, gran idea' y se pone a hacer pura ****" — Claude pide claridad antes de ejecutar.
- Recomendación: Usar ChatGPT gratis para cosas rápidas (reescribir un correo), pero Claude para trabajo serio.
- La ventaja de Claude está en la interfaz, en cómo cuestiona, y en las herramientas agénticas (Cowork, Code, Managed Agents) que OpenAI no tiene al mismo nivel.

### Flujo Chat → Code → Cowork → Managed Agents
1. **Chat (Claude.ai):** Conceptualizar, planificar, hacer preguntas, definir el CLAUDE.md
2. **Code:** Ejecutar el proyecto — procesar archivos, generar entregables, push a GitHub
3. **Cowork:** Trabajo con archivos locales sin terminal — para no-developers
4. **Managed Agents:** Ejecución autónoma en la nube a escala — agentes 24/7

### El CLAUDE.md como "cerebro del proyecto"
- Es un archivo Markdown que define: quién es el cliente, cuál es el objetivo, cuáles son los pilares, cómo se estructura el proyecto, qué instrucciones seguir.
- Claude Code lo lee automáticamente y sigue las instrucciones.
- "Una vez que él entiende, le pusimos: una vez que tengas entrevistas cargadas, las vas a procesar y me vas a ayudar a hacer presentaciones."

---

## URLs CLAVE — RECURSOS DIRECTOS

### Anthropic Academy (Skilljar) — Cursos gratuitos con certificado
- Portal: https://anthropic.skilljar.com/
- Claude 101: https://anthropic.skilljar.com/claude-101
- AI Fluency: https://anthropic.skilljar.com/ai-fluency-framework-foundations
- Claude Cowork: https://anthropic.skilljar.com/introduction-to-claude-cowork
- Claude Code: https://anthropic.skilljar.com/claude-code-in-action
- Agent Skills: https://anthropic.skilljar.com/introduction-to-agent-skills
- Subagents: https://anthropic.skilljar.com/introduction-to-subagents
- Claude API: https://anthropic.skilljar.com/claude-with-the-anthropic-api
- Enterprise Adoption: https://anthropic.skilljar.com/driving-enterprise-adoption-of-claude
- Train-the-Trainer: https://anthropic.skilljar.com/enterprise-train-the-trainer

### Páginas de Producto Anthropic
- Claude: https://www.anthropic.com/product/claude
- Claude Code: https://www.anthropic.com/product/claude-code
- Claude Cowork: https://www.anthropic.com/product/claude-cowork
- Managed Agents: https://www.anthropic.com/engineering/managed-agents
- Partner Network: https://claude.com/partners

### Documentación Técnica
- Claude API Docs: https://platform.claude.com/docs/en/home
- Managed Agents Docs: https://platform.claude.com/docs/en/managed-agents/overview
- Agent SDK Docs: https://platform.claude.com/docs/en/agent-sdk/overview
- Claude Code Docs: https://code.claude.com/docs/en/overview
- Prompting Guide: https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview

### Cursos Externos (DeepLearning.AI)
- Agent Skills: https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/
- Computer Use: https://learn.deeplearning.ai/courses/building-toward-computer-use-with-anthropic/

### Webinars y Videos
- Cowork Webinar (Anthropic): https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork
- Learn Hub: https://www.anthropic.com/learn
- Courses Hub: https://claude.com/resources/courses

---

## INSTRUCCIONES PARA CLAUDE CODE

Al desarrollar este portal:
1. Cada interfaz (Claude.ai, Cowork, Code, API, Managed Agents) debe tener su propia sección con: descripción detallada, links a producto/docs/curso/video, y casos de uso específicos para consultoría LCG.
2. Los casos de uso deben incluir el caso real del prediagnóstico de la financiera como ejemplo destacado.
3. Incluir quotes del transcript donde agreguen valor (Jaime, Fray, Fer).
4. La sección "¿Qué es Claude?" debe incluir la comparación con ChatGPT basada en la experiencia real del equipo.
5. Sidebar y hero en fondo #000 para que los logos se integren.
6. Tipografía: Playfair Display para títulos, Abadi/Segoe UI para texto.
