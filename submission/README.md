# 제출 폴더

가사·음원·서명 서류는 `submission/private/`에 두면 `.gitignore`로 제외된다(응모 전 비공개).

## 규격
```
2026로컬플레이 공모전_참가자명.ZIP
├─ 1. 신청서_참가자명(팀명).pdf   (+ HWP 1부)
├─ 2. 개인정보동의서_참가자명(팀명).pdf
├─ 3. 곡명_참가자명(팀명).mp3      (2~4분, 보컬 포함)
└─ 4. 기타자료_참가자명(팀명).pdf  (선택)
```
- ZIP만 인정, Windows에서 압축. 메일 제목: `2026로컬플레이 공모전_참가자명(팀명)`
- 검증: `python3 scripts/verify_submission.py submission/private`
