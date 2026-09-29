import { useState } from 'react'
import { reports } from '../data/reports'

export default function Reports() {
  const [active, setActive] = useState(reports[0].id)
  const r = reports.find((x) => x.id === active) ?? reports[0]
  return (
    <section className="panel reports">
      <header><h2>업무보고 아카이브</h2><b>{reports.length}</b></header>
      <div className="report-grid">
        <div>
          {reports.map((x) => (
            <button key={x.id} className={active === x.id ? 'active' : ''} onClick={() => setActive(x.id)}>
              <small>{x.type} · {x.status}</small>
              <b>{x.title}</b>
            </button>
          ))}
        </div>
        <article>
          <small>{r.owner} · {r.status}</small>
          <h3>{r.title}</h3>
          <p>{r.summary}</p>
        </article>
      </div>
    </section>
  )
}
