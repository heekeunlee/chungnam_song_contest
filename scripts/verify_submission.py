#!/usr/bin/env python3
"""제출 폴더 규격 검증: 파일명, PDF/HWP, MP3 길이(2~4분). 표준 라이브러리만 사용."""
import re
import subprocess
import sys
from pathlib import Path

root = Path(sys.argv[1] if len(sys.argv) > 1 else "submission/private")
errors, warns = [], []

def find(prefix):
    return [p for p in root.glob("*") if p.name.startswith(prefix)]

for prefix, exts in (("1.", (".pdf", ".hwp")), ("2.", (".pdf",)), ("3.", (".mp3",))):
    files = find(prefix)
    if not files:
        errors.append(f"필수 파일 없음: {prefix}*")
        continue
    got = {f.suffix.lower() for f in files}
    for ext in exts:
        if ext not in got:
            errors.append(f"{prefix}* 에 {ext} 없음")
    for f in files:
        if not re.match(r"^\d\.\s?.+_.+\.\w+$", f.name):
            warns.append(f"파일명 형식 확인: {f.name}")

for mp3 in find("3."):
    if mp3.suffix.lower() != ".mp3":
        continue
    try:
        out = subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration",
             "-of", "default=nw=1:nk=1", str(mp3)],
            capture_output=True, text=True, check=True).stdout.strip()
        sec = float(out)
        if not 120 <= sec <= 240:
            errors.append(f"길이 {sec:.1f}초: 2분 이상 4분 이하여야 함")
        else:
            print(f"OK 길이 {sec:.1f}초")
    except (FileNotFoundError, subprocess.CalledProcessError, ValueError):
        warns.append("ffprobe로 길이를 확인하지 못함(수동 확인 필요)")

for w in warns:
    print("WARN", w)
for e in errors:
    print("ERROR", e)
print("결과:", "통과" if not errors else f"실패 {len(errors)}건")
sys.exit(1 if errors else 0)
