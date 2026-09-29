export type Track = {
  id: string
  no: string
  title: string
  style: string
  concept: string
  status: string
  audio?: string
  duration?: string
  note: string
}

export const tracks: Track[] = [
  {
    id: 't1',
    no: '01',
    title: '충남 바닷길 (길이 열리는 시간)',
    style: '포크팝 · 간월암 물때',
    concept: '밀물엔 섬, 썰물엔 걸어가는 길. 기다림을 안심으로 바꾸는 곡.',
    status: 'AI 데모 · 제출 아님',
    audio: 'demo/track01-chungnam-badagil-suno-demo.mp3',
    duration: '3:09',
    note: 'Suno 생성 데모(2026-09-29)입니다. 방향 탐색용이며 제출곡은 사람이 가사·멜로디·녹음을 직접 만듭니다.',
  },
  {
    id: 't2',
    no: '02',
    title: '쌓는 중 (가제) · 힙합 충남송',
    style: '멜로딕 힙합 · 96 BPM · 신두리 사구',
    concept: '바람이 모래를 쌓듯 나도 한 걸음씩. 2030 타깃, 쇼츠·행사용 15초 훅.',
    status: '기획·가사 참고안 완료 · 음원 미제작',
    note: '전략은 docs/track02-hiphop-plan.md, 가사 참고안은 docs/track02-hiphop-lyrics.md. 제출은 1곡뿐이라 9/30 정오까지 랩 녹음이 안 되면 Track 01로 전환합니다.',
  },
]
