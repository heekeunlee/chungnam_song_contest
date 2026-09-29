import { useEffect, useState } from 'react'

const DEADLINE = new Date('2026-10-01T15:00:00+09:00').getTime()

export default function Countdown() {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const left = Math.max(0, DEADLINE - now)
  const d = Math.floor(left / 86400000)
  const h = Math.floor((left % 86400000) / 3600000)
  const m = Math.floor((left % 3600000) / 60000)
  const s = Math.floor((left % 60000) / 1000)
  return (
    <div className="countdown" aria-label="접수 마감까지 남은 시간">
      <small>접수 마감 10/1(목) 15:00</small>
      <strong>{left === 0 ? '마감' : `${d}일 ${h}시간 ${m}분 ${s}초`}</strong>
    </div>
  )
}
