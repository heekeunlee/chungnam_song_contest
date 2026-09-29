import { tracks } from '../data/tracks'

export default function Tracks() {
  return (
    <section className="panel">
      <header>
        <h2>트랙 룸</h2>
        <b>{tracks.length}</b>
      </header>
      <div className="tracks">
        {tracks.map((t) => (
          <article key={t.id}>
            <small>TRACK {t.no} · {t.style}</small>
            <h3>{t.title}</h3>
            <p>{t.concept}</p>
            <span className="badge">{t.status}{t.duration ? ` · ${t.duration}` : ''}</span>
            {t.audio && <audio controls preload="none" src={`${import.meta.env.BASE_URL}${t.audio}`} />}
            <em>{t.note}</em>
          </article>
        ))}
      </div>
    </section>
  )
}
