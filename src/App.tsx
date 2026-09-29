import { useState } from 'react'
import { agents } from './data/agents'
import AgentRail from './components/AgentRail'
import AgentDetail from './components/AgentDetail'
import Checklist from './components/Checklist'
import Reports from './components/Reports'
import Countdown from './components/Countdown'

export default function App() {
  const [selected, setSelected] = useState(agents[0].id)
  const agent = agents.find((a) => a.id === selected) ?? agents[0]
  return (
    <div className="app">
      <header className="top">
        <div>
          <small>2026 LOCAL PLAY · 충남 곡창작 공모전</small>
          <h1>LOCAL PLAY 작업실</h1>
        </div>
        <Countdown />
      </header>
      <main className="layout">
        <AgentRail selected={selected} onSelect={setSelected} />
        <div className="center">
          <Checklist />
          <Reports />
        </div>
        <AgentDetail agent={agent} />
      </main>
      <footer>
        에이전트는 기획·점검을 돕는 역할 설계이며, 창작과 최종 선택은 사람이 합니다. 제출곡은 사람이 작사·작곡·녹음하고 AI 보조는 사실대로 기록합니다.
      </footer>
    </div>
  )
}
