import { useEffect, useState } from 'react'
import { checklist } from '../data/checklist'

const KEY = 'cnsong-checklist'

function load(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]')
  } catch {
    return []
  }
}

export default function Checklist() {
  const [done, setDone] = useState<string[]>(load)
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(done))
    } catch { /* 저장 불가 환경은 무시 */ }
  }, [done])
  const toggle = (id: string) => setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]))
  const pct = Math.round((done.length / checklist.length) * 100)
  const groups = [...new Set(checklist.map((c) => c.group))]
  return (
    <section className="panel">
      <header>
        <h2>규정 준수 체크리스트</h2>
        <b>{done.length}/{checklist.length} · {pct}%</b>
      </header>
      <div className="bar"><em style={{ width: `${pct}%` }} /></div>
      {groups.map((g) => (
        <div key={g}>
          <h3>{g}</h3>
          {checklist.filter((c) => c.group === g).map((c) => (
            <label key={c.id} className={done.includes(c.id) ? 'done' : ''}>
              <input type="checkbox" checked={done.includes(c.id)} onChange={() => toggle(c.id)} />
              <span>{c.text}<small>{c.source}</small></span>
            </label>
          ))}
        </div>
      ))}
    </section>
  )
}
