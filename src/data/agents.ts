export type Agent = {
  id: string
  name: string
  role: string
  team: string
  color: string
  task: string
  outputs: string[]
  guard: string
}

export const agents: Agent[] = [
  { id: 'lead', name: '총괄 PD', role: '일정·결정 통합', team: '제작본부', color: '#e8574a', task: '결정 로그와 마감 관리', outputs: ['결정 로그', '체크리스트'], guard: '공통 브리프는 총괄만 확정한다.' },
  { id: 'audit', name: '규정 감사관', role: '공고문 준수·AI 사용 관리', team: '준수팀', color: '#c0392b', task: '실격 사유 점검, AI 사용 기록', outputs: ['준수 점검표', 'AI 사용 기록'], guard: '제출 전 마지막 점검에서 거부권을 가진다.' },
  { id: 'research', name: '소재 리서처', role: '충남 소재 조사', team: '전략팀', color: '#2f9e6b', task: '출처 있는 소재 카드 5개', outputs: ['소재 카드'], guard: '출처 없는 사실은 쓰지 않는다.' },
  { id: 'brand', name: '전략가', role: '사업적합성 브리프', team: '전략팀', color: '#1e9aa0', task: 'CM송·홍보영상 활용 관점 메시지', outputs: ['1쪽 브리프'], guard: '가사를 직접 쓰지 않는다.' },
  { id: 'writer', name: '작사·탑라이너', role: '훅과 가사', team: '음악팀', color: '#d9962b', task: '첫 30초 훅, 장면형 가사', outputs: ['가사 후보', '최종 가사'], guard: '자기 가사를 스스로 평가하지 않는다.' },
  { id: 'producer', name: '프로듀서', role: '구조·편곡·라이브 편성', team: '음악팀', color: '#7a5ad6', task: '2~4분 곡 구조와 재현 가능한 편성', outputs: ['곡 설계서'], guard: '특정 곡 모사를 지시하지 않는다.' },
  { id: 'live', name: '보컬·라이브 디렉터', role: '녹음·결선 무대', team: '음악팀', color: '#d94f70', task: '발음·음역 점검, 10/8 큐시트', outputs: ['녹음 가이드', '무대 큐시트'], guard: '실제 청취 없이 보컬을 평가하지 않는다.' },
  { id: 'rights', name: '독창성·권리 리서처', role: '유사성·신탁·공동저작자', team: '권리팀', color: '#e0703c', task: '제목·가사·멜로디 선행작 조사', outputs: ['유사성 보고서', '권리 체크'], guard: '"미발견"을 "표절 아님"으로 쓰지 않는다.' },
  { id: 'pack', name: '패키저·QA', role: '제출물 검증', team: '권리팀', color: '#3f7fd1', task: '파일명·ZIP·길이·서명 검증', outputs: ['제출 폴더'], guard: '실제 발송은 사용자 승인 후에만.' },
]
