import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img
            src={`${import.meta.env.BASE_URL}logo-green.png`}
            alt="London Consulting Group"
          />
          <p>
            Portal interno de capacitacion para consultores y directores de London Consulting Group.
            Domina las herramientas de Anthropic y transforma la forma en que entregamos valor.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Interfaces</div>
          <Link className="footer__link" to="/claude-chat">Claude.ai (Chat)</Link>
          <Link className="footer__link" to="/claude-cowork">Claude Cowork</Link>
          <Link className="footer__link" to="/claude-code">Claude Code</Link>
          <Link className="footer__link" to="/claude-api">Claude API</Link>
          <Link className="footer__link" to="/managed-agents">Managed Agents</Link>
        </div>

        <div>
          <div className="footer__col-title">Aprendizaje</div>
          <Link className="footer__link" to="/que-es-claude">Que es Claude</Link>
          <Link className="footer__link" to="/modelos">Modelos</Link>
          <Link className="footer__link" to="/conceptos">Conceptos Clave</Link>
        </div>

        <div>
          <div className="footer__col-title">Recursos</div>
          <a className="footer__link" href="https://anthropic.skilljar.com/" target="_blank" rel="noopener noreferrer">Anthropic Academy</a>
          <a className="footer__link" href="https://platform.claude.com/docs/en/home" target="_blank" rel="noopener noreferrer">API Docs</a>
          <a className="footer__link" href="https://code.claude.com/docs/en/overview" target="_blank" rel="noopener noreferrer">Code Docs</a>
          <a className="footer__link" href="https://claude.com/resources/courses" target="_blank" rel="noopener noreferrer">Cursos</a>
        </div>
      </div>

      <div className="footer__bottom">
        Academia Claude &mdash; London Consulting Group &middot; Abril 2026 &middot; Portal interno de capacitacion
      </div>
    </footer>
  )
}
