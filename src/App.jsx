import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import QueEsClaude from './pages/QueEsClaude'
import ModelosInterfaces from './pages/ModelosInterfaces'
import ClaudeChat from './pages/ClaudeChat'
import ClaudeCowork from './pages/ClaudeCowork'
import ClaudeCode from './pages/ClaudeCode'
import ClaudeAPI from './pages/ClaudeAPI'
import ConceptosClave from './pages/ConceptosClave'
import PlanCapacitacion from './pages/PlanCapacitacion'
import Certificaciones from './pages/Certificaciones'
import ManagedAgents from './pages/ManagedAgents'
import CasosDeUso from './pages/CasosDeUso'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/que-es-claude" element={<QueEsClaude />} />
        <Route path="/modelos" element={<ModelosInterfaces />} />
        <Route path="/claude-chat" element={<ClaudeChat />} />
        <Route path="/claude-cowork" element={<ClaudeCowork />} />
        <Route path="/claude-code" element={<ClaudeCode />} />
        <Route path="/claude-api" element={<ClaudeAPI />} />
        <Route path="/conceptos" element={<ConceptosClave />} />
        <Route path="/capacitacion" element={<PlanCapacitacion />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/managed-agents" element={<ManagedAgents />} />
        <Route path="/casos-de-uso" element={<CasosDeUso />} />
      </Routes>
    </Layout>
  )
}
