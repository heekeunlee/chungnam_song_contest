export type Report = { id: string; type: string; title: string; owner: string; status: string; summary: string }

export const reports: Report[] = [
  { id: 'r1', type: '전략', title: '승부 논리 요약', owner: '총괄 PD', status: '확정', summary: '1차는 블라인드 기획사 심사(도입 30초 승부), 결선은 라이브. 실격 방지가 최우선.' },
  { id: 'r2', type: '준수', title: 'AI 사용 안전선', owner: '규정 감사관', status: '확정', summary: 'Suno는 방향 탐색·참고용만. 제출 가사·멜로디·보컬은 사람이 만들고 녹음. 사용 내역은 ai-usage-log에 사실대로 기록.' },
  { id: 'r3', type: '소재', title: '충남 소재 카드', owner: '소재 리서처', status: '대기', summary: '후보: 논산 딸기, 보령 머드, 태안 노을, 공주·부여 백제, 천안 호두과자. 출처 조사 후 5개 확정.' },
  { id: 'r4', type: '브리프', title: '1쪽 브리프', owner: '전략가', status: '대기', summary: '타깃, 전달 문장, 충남 근거 2개, 피할 표현. CM송 활용성 기준 포함.' },
  { id: 'r5', type: '가사', title: '후렴 후보 5안', owner: '작사·탑라이너', status: '대기', summary: '첫 30초 안에 후렴과 충남이 등장하는 장면형 가사.' },
  { id: 'r6', type: '권리', title: '유사성·권리 점검', owner: '독창성·권리 리서처', status: '대기', summary: '생성 전·데모 후·제출 전 3회 조사. 신탁 여부와 공동저작자 동의 확인.' },
  { id: 'r7', type: '제출', title: '제출 패키지 검증', owner: '패키저·QA', status: '대기', summary: 'scripts/verify_submission.py로 파일명·ZIP·길이 검증 후 사용자 승인으로 발송.' },
]
