# Track 02 Suno 데모 키트 v4 - 쌓는 중 (젊고 트렌디한 멜로딕 랩팝, 충남 전체)

용도: 방향 탐색 데모. **제출 음원·제출 가사로 그대로 쓰지 않는다.** 제출곡은 랩 가사·훅 멜로디·비트·녹음을 사람이 직접 한다. 사용 내역은 `docs/ai-usage-log.md`와 신청서에 사실대로 기재한다.
개정(v4, 2026-09-29): 더 젊고 트렌디한 사운드, 반복되는 짧은 훅(귀에 남는 구조), 벌스 8줄로 압축(전체 약 2:40). 충남 전체 이동 구조와 고정관념 반전 3개는 유지.
사실 범위(materials.md 확인분): 신두리 사구 천연기념물, 논산 딸기 축제, 공주 공산성, 부여 정림사지, 공고문의 충남 15개 시·군. '~유'·"어서와유"·쇠똥구리·"노잼" 미사용.

## Styles
```
Korean melodic rap-pop crossover, bouncy syncopated drums with snappy claps, punchy 808 sub bass, bright plucky synth arpeggio, airy vocal chops, glossy modern production, 100 BPM, smooth youthful Korean rap verses with clear pronunciation, short chant-like sung hook built on a simple repeating melody, hook starts within 5 seconds, playful call and response shouts, instrumental drop before the final hook, energetic and stylish, road trip feeling, short-form friendly, about 2 minutes 40 seconds
```
## Exclude styles
```
trot, screaming, heavy distortion, drill, explicit lyrics, profanity, diss, English lyrics, sad ballad, K-pop idol dance, sample of existing songs, cover, remix, imitation of any artist
```
## 비트 탐색용 (Instrumental 켬, BPM 96/100/104 변주)
```
Korean melodic rap-pop instrumental, bouncy syncopated drums, snappy claps, punchy 808 sub bass, bright plucky synth arpeggio, airy vocal chops, glossy modern production, 100 BPM, road trip mood, drop before the final section, about 2 minutes 40 seconds
```

## Lyrics (Claude 초안 v4, 데모용)
```
[Intro]
(finger snaps, vocal chop)
쌓는 중, 쌓는 중, 충남 쌓는 중

[Verse 1]
새벽 알람 끄고 서쪽으로
태안 신두리 모래 위에 첫 발
바람이 밤새 그려 놓은 결
내 발자국이 조용히 앉아
천연기념물 이 언덕 하나
하루아침에 된 게 아니래
느리다던 말 들었어 충청도는
근데 언덕은 느려야 쌓여

[Pre-Hook]
(하나 둘) 한 칸씩
(셋 넷) 한 걸음씩

[Hook]
쌓는 중 쌓는 중 충남 쌓는 중
한 칸 두 칸 계속 쌓는 중
쌓는 중 쌓는 중 충남 쌓는 중
오늘은 여기 다음엔 저기

[Verse 2]
핸들 돌려 안쪽으로 봄이 붉어
논산 딸기 축제 가판대가 붉어
공주 공산성 성곽 위 시간이 느려져
부여 정림사지 석탑 앞 뜰
지나가는 길이라던 그 말은 접고
일부러 내려서 걷는 중
열다섯 시군 다 못 걸었지만
오늘은 여기 다음엔 저기

[Pre-Hook]
(하나 둘) 한 칸씩
(셋 넷) 한 걸음씩

[Hook]
쌓는 중 쌓는 중 충남 쌓는 중
한 칸 두 칸 계속 쌓는 중
쌓는 중 쌓는 중 충남 쌓는 중
오늘은 여기 다음엔 저기

[Bridge]
(beat drops out, only claps)
심심하다던 사람들 한번 와 봐
모래도 들도 돌도 서두르지 않아
느려도 멈추지 않으면
(쌓는 중!) 결국 여기까지 와

[Final Hook]
쌓는 중 쌓는 중 충남 쌓는 중
한 칸 두 칸 계속 쌓는 중
쌓는 중 쌓는 중 충남 쌓는 중
충남, 느려도 다음 길로 가는 중

[Outro]
(vocal chop fades)
쌓는 중
```
15초 컷 훅: "쌓는 중 쌓는 중 충남 쌓는 중 / 한 칸 두 칸 계속 쌓는 중" ("충남" 자리에 시·군명 치환 가능)

## 옵션
| 항목 | 값 |
|---|---|
| Custom mode / Instrumental | 켬 / 가사 버전은 끔 |
| Vocal gender | Male, Female 각각 |
| Weirdness / Style influence | 40~50% / 55~65% (신선함을 조금 높임) |
| Audio influence / Persona | 사용 안 함 |
| 생성 수 | 8~12개(인스트루멘털 4, 보컬 4~8) |
| 길이 | 2:30~3:00 (제출 규격 2분 이상 4분 이하) |

## 표절 시비 최소화 원칙 (완전한 배제는 불가)
1. 프롬프트에 아티스트·곡명·"~풍" 지시를 쓰지 않는다(장르·악기·질감 용어만).
2. **훅 멜로디는 사람이 직접 작곡한다.** Suno의 훅을 그대로 쓰지 않는다. 짧고 단순한 반복 멜로디일수록 우연히 겹치기 쉬우므로 리듬과 음정 진행을 직접 변형한다.
3. 코드 진행은 사람이 정하고 아주 흔한 진행 하나만 반복하지 않는다.
4. 훅을 허밍 녹음해 음악 인식 앱(허밍 검색 기능)과 유튜브 검색으로 확인하고 결과를 기록한다.
5. "쌓는 중", "한 칸 두 칸", "오늘은 여기 다음엔 저기"를 멜론·지니·유튜브에서 직접 검색한다(2차 유사성 조사).
6. 제작 과정(날짜, 생성 ID, 직접 수정한 부분)을 `ai-usage-log.md`에 남긴다.

## 확인·주의
- 고정관념 반전 3개(느림→쌓는 힘, 지나가는 길→내려서 걷기, 심심함→초대)는 통념을 가정한 것이며 사실 주장이 아니다.
- "논산 딸기 축제 가판대", "공산성 성곽", "정림사지 석탑 앞 뜰"은 장면 묘사다. 공식 자료로 재확인한다.
- 지명 4곳이 나열로 들리지 않게 응모자 경험 장면으로 고쳐 쓴다.
