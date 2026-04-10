export default function ManagedAgents() {
  const coreArchitecture = [
    {
      title: 'Agent',
      desc: 'The declarative definition: model selection, system prompt, tool configuration, MCP server connections, and skills. Created once via API, referenced by ID across sessions.',
    },
    {
      title: 'Environment',
      desc: 'A configured container template specifying runtime packages (Python, Node, Go), network access rules, and mounted files. Isolated execution sandbox with no credential leakage.',
    },
    {
      title: 'Session',
      desc: 'A running agent instance performing a specific task. Maintains a durable event log with persistent filesystem. Billed only while status is "running" — idle and terminated time is not counted.',
    },
    {
      title: 'Events',
      desc: 'Structured messages between your application and the agent: user turns, tool results, status updates. Streamed via SSE in real time with full history persisted server-side.',
    },
  ]

  const builtInTools = [
    { name: 'Bash', desc: 'Execute shell commands inside the secure container environment. Install packages, run scripts, manage processes.' },
    { name: 'File Operations', desc: 'Read, write, edit, glob, and grep across the session filesystem. Full programmatic access to all mounted and generated files.' },
    { name: 'Web Search & Fetch', desc: 'Search the web and retrieve page content. Agents can research, verify information, and pull live data during execution.' },
    { name: 'MCP Servers', desc: 'Connect external tool providers via the Model Context Protocol. Extend agent capabilities with custom integrations and third-party services.' },
  ]

  const useCases = [
    { title: 'Automated Code Review & PR Generation', desc: 'Agents review pull requests, identify issues, suggest improvements, and generate fix PRs — running continuously across repositories.' },
    { title: 'Data Pipeline Monitoring', desc: 'Self-healing agents that detect pipeline failures, diagnose root causes, apply fixes, and alert stakeholders with resolution summaries.' },
    { title: 'Automated Report Generation', desc: 'Scheduled agents that pull data from multiple sources, run analysis, and produce formatted reports on a recurring cadence.' },
    { title: 'Compliance Document Processing', desc: 'Process regulatory filings, extract requirements, cross-reference against policies, and flag gaps — with full audit trail.' },
    { title: 'Research Synthesis', desc: 'Agents that search across document libraries, synthesize findings, identify patterns, and produce structured research summaries.' },
    { title: 'ETL Job Execution', desc: 'Execute and monitor extract-transform-load jobs with automatic error handling, retry logic, and data validation checks.' },
    { title: 'Customer Support Triage', desc: 'Classify incoming tickets, route to appropriate teams, draft responses, and escalate complex issues based on configurable rules.' },
    { title: 'Continuous Security Scanning', desc: 'Persistent agents that scan codebases and infrastructure for vulnerabilities, generate reports, and open remediation tickets.' },
    { title: 'Multi-Step Approval Workflows', desc: 'Orchestrate complex approval chains: gather inputs, validate against criteria, route for review, and track status through completion.' },
    { title: 'Knowledge Base Maintenance', desc: 'Agents that monitor source materials for changes, update documentation, resolve conflicts, and maintain version consistency.' },
    { title: 'Automated Testing', desc: 'Run test suites across environments, analyze failures, generate regression reports, and identify flaky tests with root cause analysis.' },
    { title: 'Content Moderation at Scale', desc: 'Process user-generated content against policy guidelines, flag violations, generate review queues, and produce moderation analytics.' },
  ]

  const resources = [
    { label: 'Managed Agents Overview', url: 'https://platform.claude.com/docs/en/managed-agents/overview', desc: 'Complete API reference: agents, environments, sessions, events, and configuration.' },
    { label: 'Quickstart Guide', url: 'https://platform.claude.com/docs/en/managed-agents/quickstart', desc: 'Step-by-step guide to creating and running your first managed agent.' },
    { label: 'Engineering Architecture Blog', url: 'https://www.anthropic.com/engineering/managed-agents', desc: 'Technical deep-dive into the Brain/Hands/Session architecture and design decisions.' },
    { label: 'Agent SDK Documentation', url: 'https://platform.claude.com/docs/en/agent-sdk/overview', desc: 'Build custom agents using the same tooling that powers Claude Code.' },
    { label: 'Data Analyst Agent Cookbook', url: 'https://platform.claude.com/cookbook/managed-agents-data-analyst-agent', desc: 'End-to-end example: building a data analyst agent with file processing and visualization.' },
    { label: 'Agent SDK on GitHub', url: 'https://github.com/anthropics/claude-code', desc: 'Open source repository for the Claude Agent SDK.' },
    { label: 'Agent Skills Course', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', desc: 'Anthropic Academy course on creating and configuring reusable Agent Skills.' },
    { label: 'Subagents Course', url: 'https://anthropic.skilljar.com/introduction-to-subagents', desc: 'Learn multi-agent coordination patterns with specialized sub-agents.' },
    { label: 'Agent Skills (DeepLearning.AI)', url: 'https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/', desc: 'Free course with Andrew Ng on building and deploying reusable agent skills.' },
  ]

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__tag">Beta -- Requires managed-agents-2026-04-01 header</div>
        <h1 className="page-hero__title">Claude Managed Agents</h1>
        <p className="page-hero__desc">
          Pre-built, configurable agent harness running on managed infrastructure. Instead of building your own agent loop, tool execution, and runtime — deploy autonomous agents that read files, run commands, browse the web, and execute code securely.
        </p>
      </div>

      {/* WHAT & WHY — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Overview</div>
        <h2 className="section__title">What are Managed Agents</h2>
        <p className="section__desc">A fully managed environment for long-running, asynchronous agent workloads — with built-in prompt caching, compaction, and performance optimizations.</p>
        <div className="card-grid">
          {[
            {
              title: 'Managed Infrastructure',
              desc: 'Secure cloud containers with pre-installed runtimes. No custom agent loop, no sandbox provisioning, no infrastructure maintenance. Define the agent, start a session, stream results.',
            },
            {
              title: 'Long-Running Execution',
              desc: 'Sessions that run for minutes to hours with multiple tool calls. Persistent filesystem and conversation history across interactions. Stateful by default.',
            },
            {
              title: 'Production-Grade Reliability',
              desc: 'Failed containers are "cattle" not "pets" — automatic recovery with no state loss. Credentials never reach the sandbox: OAuth tokens in vaults, Git tokens wired at initialization.',
            },
          ].map((c, i) => (
            <div key={i} className="card" style={{ borderTop: '3px solid var(--lcg-green)' }}>
              <div className="card__body">
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CORE ARCHITECTURE — section--white */}
      <div className="section section--white">
        <div className="section__tag">Architecture</div>
        <h2 className="section__title">Four core concepts</h2>
        <p className="section__desc">Managed Agents decouples the Brain (Claude + harness), Hands (sandbox), and Session (durable event log) — virtualizing agent components like an OS abstracts hardware.</p>
        <div className="feature-grid">
          {coreArchitecture.map((c, i) => (
            <div key={i} className="feature">
              <div className="feature__icon" style={{ fontSize: 16, fontWeight: 800, color: 'var(--lcg-green)' }}>{i + 1}</div>
              <div className="feature__title">{c.title}</div>
              <div className="feature__desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Workflow</div>
        <h2 className="section__title">How it works</h2>
        <p className="section__desc">Five steps from definition to execution.</p>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {[
            { step: '01', title: 'Create an Agent', desc: 'Define model, system prompt, tools, MCP servers, and skills. Created once via API, referenced by ID.' },
            { step: '02', title: 'Create an Environment', desc: 'Configure container template: Python/Node/Go runtime, network access rules, mounted files and packages.' },
            { step: '03', title: 'Start a Session', desc: 'Launch a running instance referencing your agent + environment. Session gets a persistent filesystem and event log.' },
            { step: '04', title: 'Send Events & Stream Responses', desc: 'Interact via SSE: send user turns and tool results, receive agent messages and status updates in real time.' },
            { step: '05', title: 'Steer or Interrupt', desc: 'Inject guidance mid-execution, pause processing, or terminate sessions programmatically at any point.' },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', gap: 24, padding: '24px 0',
              borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32, fontWeight: 700, color: 'var(--lcg-green)',
                lineHeight: 1, minWidth: 48, flexShrink: 0,
              }}>{s.step}</div>
              <div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, fontWeight: 800, marginBottom: 6, color: 'var(--t1)' }}>{s.title}</div>
                <div style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUILT-IN TOOLS — section--white */}
      <div className="section section--white">
        <div className="section__tag">Capabilities</div>
        <h2 className="section__title">Built-in tools</h2>
        <p className="section__desc">Every session includes these tools out of the box — no additional configuration required.</p>
        <div className="card-grid">
          {builtInTools.map((t, i) => (
            <div key={i} className="card">
              <div className="card__body">
                <div className="card__tag">Built-in</div>
                <h4 className="card__title" style={{ fontSize: 18 }}>{t.name}</h4>
                <p className="card__desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ENGINEERING PERFORMANCE — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Performance</div>
        <h2 className="section__title">Engineering architecture</h2>
        <p className="section__desc">Key design decisions from the Anthropic engineering team that make Managed Agents production-ready.</p>
        <div className="feature-grid">
          {[
            { cap: 'Brain / Hands / Session', det: 'Decoupled architecture: stateless harnesses (Brain) connect to isolated sandboxes (Hands) with durable event logs (Session). Components scale independently.' },
            { cap: 'Multi-Brain, Multi-Hand', det: 'Multiple stateless harnesses can drive multiple execution environments simultaneously. Horizontal scaling without shared state.' },
            { cap: 'Automatic Recovery', det: 'Failed containers are automatically replaced with no state loss. Session event log is the source of truth — execution resumes seamlessly.' },
            { cap: 'Credential Isolation', det: 'OAuth tokens stored in vaults, Git tokens wired at container initialization. Credentials never enter the sandbox environment.' },
            { cap: 'TTFT Optimization', det: 'Time-to-first-token improved significantly: p50 latency reduced by ~60%, p95 latency reduced by over 90% through built-in prompt caching and compaction.' },
            { cap: 'Event Streaming', det: 'Real-time SSE delivery of agent messages, tool calls, results, and session status. Full event history persisted server-side for replay and debugging.' },
          ].map((c, i) => (
            <div key={i} className="feature">
              <div className="feature__icon" style={{ fontSize: 16, fontWeight: 800, color: 'var(--lcg-green)' }}>{i + 1}</div>
              <div className="feature__title">{c.cap}</div>
              <div className="feature__desc">{c.det}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CODE EXAMPLE — section--white */}
      <div className="section section--white">
        <div className="section__tag">SDK Example</div>
        <h2 className="section__title">Create and run an agent</h2>
        <p className="section__desc">Python SDK example showing the full lifecycle: create agent, create environment, start session, and stream events.</p>
        <div style={{
          background: '#0D0D0D', borderRadius: 16, padding: 32, overflow: 'auto',
          border: '1px solid #2A2A2A',
        }}>
          <pre style={{
            fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
            fontSize: 13, lineHeight: 1.7, color: '#E0E0E0', margin: 0,
            whiteSpace: 'pre', overflowX: 'auto',
          }}>{`import anthropic

client = anthropic.Anthropic()

# 1. Create an agent
agent = client.agents.create(
    model="claude-sonnet-4-20250514",
    name="data-analyst",
    instructions="You are a data analyst. Analyze uploaded datasets, "
                 "generate visualizations, and produce summary reports.",
    tools=[
        {"type": "bash"},
        {"type": "file_read"},
        {"type": "file_write"},
        {"type": "web_search"},
    ],
)

# 2. Create an environment
environment = client.agents.environments.create(
    agent_id=agent.id,
    name="analysis-env",
    packages=["pandas", "matplotlib", "seaborn", "openpyxl"],
)

# 3. Start a session
session = client.agents.sessions.create(
    agent_id=agent.id,
    environment_id=environment.id,
)

# 4. Send a message and stream the response
with client.agents.sessions.turn(
    session_id=session.id,
    agent_id=agent.id,
    messages=[{
        "role": "user",
        "content": "Analyze the sales data in /uploads/q1_sales.csv. "
                   "Generate a trend chart and executive summary."
    }],
) as stream:
    for event in stream:
        if event.type == "message_delta":
            print(event.delta.text, end="", flush=True)
        elif event.type == "tool_use":
            print(f"\\n[Tool: {event.name}]")
        elif event.type == "session_status":
            print(f"\\n[Status: {event.status}]")`}</pre>
        </div>
        <div style={{ marginTop: 16, fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>
          Requires the <code style={{ background: 'var(--bg-cream)', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>managed-agents-2026-04-01</code> beta header. See the <a href="https://platform.claude.com/docs/en/managed-agents/quickstart" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lcg-green)', fontWeight: 600 }}>Quickstart Guide</a> for complete setup instructions.
        </div>
      </div>

      {/* WHEN TO USE — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Decision Guide</div>
        <h2 className="section__title">When to use Managed Agents</h2>
        <p className="section__desc">Choose Managed Agents over the standard Messages API when your workload matches these criteria.</p>
        <div className="card-grid">
          {[
            { title: 'Long-Running Execution', desc: 'Tasks that take minutes to hours with multiple sequential tool calls. The managed runtime handles timeouts, retries, and state persistence automatically.' },
            { title: 'Cloud Infrastructure Required', desc: 'You need secure containers with pre-installed packages, network isolation, and file system access — without provisioning or managing servers.' },
            { title: 'Minimal Infrastructure Overhead', desc: 'You want to skip building a custom agent loop, sandbox, and execution runtime. Define the agent declaratively and let Anthropic handle the rest.' },
            { title: 'Stateful Sessions', desc: 'Tasks requiring persistent filesystem, conversation history across turns, and the ability to resume or steer execution mid-flight.' },
          ].map((c, i) => (
            <div key={i} className="card" style={{ borderLeft: '4px solid var(--lcg-green)' }}>
              <div className="card__body">
                <h3 className="card__title" style={{ fontSize: 18 }}>{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USE CASES — section--white */}
      <div className="section section--white">
        <div className="section__tag">Use Cases</div>
        <h2 className="section__title">Enterprise applications</h2>
        <p className="section__desc">Production-ready patterns for autonomous agent workloads across industries.</p>
        <div className="feature-grid">
          {useCases.map((uc, i) => (
            <div key={i} className="feature">
              <div className="feature__icon" style={{ fontSize: 14, fontWeight: 800, color: 'var(--lcg-green)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="feature__title">{uc.title}</div>
              <div className="feature__desc">{uc.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING — section--cream */}
      <div className="section section--cream">
        <div className="section__tag">Pricing</div>
        <h2 className="section__title">Pricing model</h2>
        <p className="section__desc">Pay-per-use pricing with three components. Idle and terminated session time is not billed.</p>
        <div style={{
          background: 'var(--lcg-black)', borderRadius: 16, padding: 40,
          color: '#fff',
        }}>
          <div className="stats-row">
            <div>
              <div style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, marginBottom: 8 }}>Tokens</div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Standard API pricing per model. Same rates as the Messages API.</div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, marginBottom: 8 }}>Runtime</div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Billed per millisecond, only while session status is "running".</div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, marginBottom: 8 }}>Web Search</div>
              <div className="stat__number" style={{ fontSize: 36 }}>$10</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>per 1,000 web searches</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{
            background: 'var(--card)', borderRadius: 12, padding: '16px 24px',
            border: '1px solid var(--border)', flex: '1 1 200px',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--lcg-green)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Create Rate Limit</div>
            <div style={{ fontSize: 14, color: 'var(--t2)' }}>60 requests / minute</div>
          </div>
          <div style={{
            background: 'var(--card)', borderRadius: 12, padding: '16px 24px',
            border: '1px solid var(--border)', flex: '1 1 200px',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--lcg-green)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Read Rate Limit</div>
            <div style={{ fontSize: 14, color: 'var(--t2)' }}>600 requests / minute</div>
          </div>
        </div>
      </div>

      {/* BETA STATUS — section--white */}
      <div className="section section--white">
        <div className="section__tag">Beta Status</div>
        <h2 className="section__title">Current availability</h2>
        <p className="section__desc">Managed Agents is in public beta. Some features are in research preview with limited availability.</p>
        <div className="card-grid" style={{ maxWidth: 900 }}>
          <div className="card" style={{ borderTop: '3px solid var(--lcg-green)' }}>
            <div className="card__body">
              <div className="card__tag">Public Beta</div>
              <h4 className="card__title" style={{ fontSize: 18 }}>Generally Available</h4>
              <p className="card__desc">Agents, Environments, Sessions, Events, built-in tools (Bash, File ops, Web search, MCP), SSE streaming, session management. Requires beta header in API requests.</p>
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--border)' }}>
            <div className="card__body">
              <div className="card__tag" style={{ color: 'var(--t2)' }}>Research Preview</div>
              <h4 className="card__title" style={{ fontSize: 18 }}>Limited Availability</h4>
              <p className="card__desc">Outcomes (structured task results), Multi-agent coordination (agent-to-agent delegation), and Persistent memory (cross-session context). APIs may change.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RESOURCES — section--dark */}
      <div className="section section--dark">
        <div className="section__tag">Resources</div>
        <h2 className="section__title">Documentation and courses</h2>
        <p className="section__desc">Official documentation, engineering deep-dives, and hands-on courses to get started with Managed Agents.</p>
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
                Open
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
