# LOCAL PLAY 작업실

2026 LOCAL PLAY 충남 곡창작 공모전(접수 마감 2026-10-01 15:00) 준비용 작업실입니다.
서브에이전트 9종의 역할 정의, 공고문 준수 체크리스트, 제출 검증 도구, 웹 대시보드로 구성됩니다.

## 원칙
- 제출곡의 작사·작곡·편곡·가창은 사람이 합니다. AI는 아이디어 탐색 등 보조로만 쓰고 `docs/ai-usage-log.md`에 사실대로 기록합니다.
- 가사·음원·서명 서류는 `submission/private/`에 두며 저장소에 올리지 않습니다.

## 구조
- `.claude/agents/`: 서브에이전트 9종
- `docs/`: 준수 점검표, AI 사용 기록, 결정 로그, 공고문 PDF
- `submission/`: 제출 규격, AI 기재 템플릿
- `scripts/verify_submission.py`: 제출 폴더 검증
- `src/`: 웹 대시보드(React + Vite)

## 실행
```bash
npm install
npm run dev
npm run build
```
배포 시 `vite.config.ts`의 `base`는 `/chungnam_song_contest/`입니다.
