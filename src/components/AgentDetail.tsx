import type { Agent } from '../data/agents'

export default function AgentDetail({ agent }: { agent: Agent }) {
  return (
    <aside className="detail">
      <small style={{ color: agent.color }}>{agent.team}</small>
      <h2>{agent.name}</h2>
      <p>{agent.role}</p>
      <section>
        <span>현재 과제</span>
        <b>{agent.task}</b>
      </section>
      <section>
        <span>산출물</span>
        <ul>{agent.outputs.map((o) => <li key={o}>{o}</li>)}</ul>
      </section>
      <section>
        <span>가드레일</span>
        <p>{agent.guard}</p>
      </section>
    </aside>
  )
}
