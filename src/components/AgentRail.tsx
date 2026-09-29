import { agents } from '../data/agents'

type Props = { selected: string; onSelect: (id: string) => void }

export default function AgentRail({ selected, onSelect }: Props) {
  return (
    <aside className="rail">
      <h2>CREW / {agents.length}</h2>
      {agents.map((a) => (
        <button key={a.id} className={selected === a.id ? 'active' : ''} onClick={() => onSelect(a.id)}>
          <i style={{ background: a.color }} />
          <span>
            <b>{a.name}</b>
            <small>{a.role}</small>
          </span>
        </button>
      ))}
    </aside>
  )
}
