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
    title: '힙합 충남송 (제작 준비 중)',
    style: '힙합 · 2030 타깃',
    concept: '더 젊고 스타일리시한 톤. 쇼츠·행사용 15초 훅을 갖춘 트랙.',
    status: '기획 중',
    note: '전략과 가사 참고안은 docs/track02-* 문서에 정리됩니다.',
  },
]
