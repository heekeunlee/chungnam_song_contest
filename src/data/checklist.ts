export type Check = { id: string; group: string; text: string; source: string }

export const checklist: Check[] = [
  { id: 'c1', group: '자격', text: '음저협 등 신탁단체에 저작재산권을 맡기지 않았다', source: '공고문 p.6' },
  { id: 'c2', group: '자격', text: '1인/1팀 1곡, 개인·단체 중복지원 아님', source: '공고문 p.1' },
  { id: 'c3', group: '자격', text: '공동저작자·실연자 전원 사업참여동의서 확보', source: '공고문 p.6' },
  { id: 'c4', group: '작품', text: '미발매 순수 창작곡 (리믹스·리메이크·기발매 불가)', source: '공고문 p.3' },
  { id: 'c5', group: '작품', text: '가사 포함, 보컬 녹음, 2분 이상 4분 이하 MP3', source: '공고문 p.2-3' },
  { id: 'c6', group: '작품', text: '비속어·비방 표현 없음', source: '공고문 p.5' },
  { id: 'c7', group: 'AI', text: '작사·작곡·편곡·가창의 주요 과정을 AI로 만들지 않았다', source: '공고문 p.2' },
  { id: 'c8', group: 'AI', text: 'AI 사용 도구·분야·범위·수정 부분을 신청서에 사실대로 기재', source: '공고문 p.3, 5' },
  { id: 'c9', group: '제출', text: '신청서 PDF+HWP 각 1부, 서명 완료, 빈 양식 아님', source: '공고문 p.3, 5' },
  { id: 'c10', group: '제출', text: '개인정보 동의서 PDF 스캔본', source: '공고문 p.3' },
  { id: 'c11', group: '제출', text: '파일명: 1.신청서_/2.개인정보동의서_/3.곡명_/4.기타자료_', source: '공고문 p.4' },
  { id: 'c12', group: '제출', text: 'ZIP(7z/RAR/EGG 불가), Windows에서 압축', source: '공고문 p.3, 5' },
  { id: 'c13', group: '제출', text: '메일 제목: 2026로컬플레이 공모전_참가자명(팀명)', source: '공고문 p.4' },
  { id: 'c14', group: '제출', text: '10/1 15:00 이전 발송 (제출 후 보완 불가)', source: '공고문 p.3, 5' },
  { id: 'c15', group: '결선', text: '10/8 대표자 현장 참석 가능, 실연자 지정', source: '공고문 p.2' },
]
