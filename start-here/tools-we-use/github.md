---
title: GitHub
layout: default
parent: Tools We Use
grand_parent: Start Here
---

# GitHub

{: .highlight }
> 킨도프의 코드 저장소. 모든 소프트웨어가 여기서 관리되고 협업됩니다.

---

## 왜 GitHub인가

코드는 혼자 짜는 것이 아닙니다. 여러 사람이 동시에 같은 코드를 수정하면 어떻게 될까요? 누가 뭘 바꿨는지 추적하고, 충돌을 해결하고, 이전 버전으로 돌아갈 수 있어야 합니다.

킨도프는 버전 관리와 협업을 위해 GitHub을 선택했습니다.

**GitHub의 장점:**
- **버전 관리** - 모든 변경 이력이 기록됨
- **협업 워크플로우** - Pull Request로 코드 리뷰
- **이슈 트래킹** - 버그, 기능 요청 관리
- **자동화** - CI/CD 파이프라인 연동
- **오픈소스 생태계** - 수많은 도구와 통합

---

## 누가 사용하나요?

GitHub은 주로 **개발자와 기술직**이 사용합니다.

| 역할 | GitHub 사용 |
|------|------------|
| 개발자 | 필수 (매일 사용) |
| 디자이너 | 선택 (디자인 시스템, 에셋) |
| 마케터 | 거의 없음 (문서는 Notion) |
| PM | 이슈 확인 정도 |

**비개발자라면:** 이 가이드의 "시작하기"와 "기본 개념"만 읽어두세요. 나머지는 필요할 때 참고하면 됩니다.

---

## 시작하기

### 1. 계정 및 조직 가입

이미 GitHub 계정이 있다면 그 계정으로 조직 초대를 받습니다.

1. 회사 이메일로 조직 초대 받기
2. 초대 수락
3. Kyndof 조직 멤버 확인

**계정이 없다면:**
1. [github.com](https://github.com) 에서 가입
2. 이메일 인증
3. 조직 초대 수락

### 2. 2FA 설정 (필수)

킨도프는 보안을 위해 **2단계 인증(2FA)을 필수**로 합니다.

1. Settings > Password and authentication
2. Two-factor authentication > Enable
3. 인증 앱 설정 (Google Authenticator 등)
4. 복구 코드 안전하게 보관

### 3. 로컬 환경 설정 (개발자)

**Git 설치:**
```bash
# macOS
brew install git

# 또는 Xcode Command Line Tools
xcode-select --install
```

**SSH 키 설정:**
```bash
# SSH 키 생성
ssh-keygen -t ed25519 -C "your_email@kyndof.com"

# SSH 에이전트에 추가
ssh-add ~/.ssh/id_ed25519

# 공개키 복사
cat ~/.ssh/id_ed25519.pub
```

GitHub Settings > SSH and GPG keys > New SSH key에 붙여넣기

---

## 기본 개념

### Repository (저장소)

하나의 프로젝트 = 하나의 Repository (줄여서 "Repo")

```
kyndof/
├── kyndof-os          # CompanyOS 시스템
├── runtime            # 에이전트 런타임
├── wiki               # 이 Wiki
└── [팀별 프로젝트]     # 각 팀 프로젝트
```

### Branch (브랜치)

**브랜치 = 독립적인 작업 공간**

```
main (또는 master)    ← 배포되는 안정 버전
    │
    ├── feature/login  ← 로그인 기능 개발
    ├── feature/search ← 검색 기능 개발
    └── fix/bug-123    ← 버그 수정
```

- `main`: 항상 배포 가능한 상태 유지
- 새 기능은 별도 브랜치에서 개발
- 완성되면 main으로 병합 (merge)

### Commit (커밋)

**커밋 = 변경 사항의 스냅샷**

```bash
git commit -m "Add login button to header"
```

- 작업 단위로 커밋
- 메시지는 무엇을, 왜 바꿨는지 명확하게

### Pull Request (PR)

**PR = 코드 리뷰 요청**

```
1. 브랜치에서 개발 완료
2. PR 생성 (main에 병합 요청)
3. 팀원이 코드 리뷰
4. 리뷰 반영 후 승인
5. main에 병합
```

PR은 코드 품질을 유지하는 핵심 과정입니다.

---

## 워크플로우

### 새 기능 개발

```bash
# 1. main 브랜치 최신화
git checkout main
git pull origin main

# 2. 새 브랜치 생성
git checkout -b feature/기능명

# 3. 코드 작성...

# 4. 변경사항 커밋
git add .
git commit -m "Add feature: 기능 설명"

# 5. 원격에 푸시
git push origin feature/기능명

# 6. GitHub에서 PR 생성
```

### 버그 수정

```bash
# 1. 버그 수정 브랜치 생성
git checkout -b fix/버그설명

# 2. 버그 수정...

# 3. 커밋 & 푸시
git add .
git commit -m "Fix: 버그 설명"
git push origin fix/버그설명

# 4. PR 생성 및 리뷰
```

### 코드 리뷰 하기

1. PR 페이지에서 "Files changed" 탭
2. 라인별로 코멘트 추가 가능
3. 전체 리뷰 제출:
   - **Approve**: 승인 (병합 가능)
   - **Request changes**: 수정 요청
   - **Comment**: 의견만 (승인/거절 없음)

---

## 팁과 에티켓

### DO (이렇게 하세요)

**커밋 메시지 잘 쓰기:**
```
❌ "fixed stuff"
❌ "update"
❌ "asdf"

✅ "Add user authentication to login page"
✅ "Fix: Prevent crash when user list is empty"
✅ "Refactor: Extract email validation to utils"
```

**작은 PR 자주:**
```
❌ 1000줄짜리 PR 하나
   (리뷰하기 힘듦, 버그 숨기 쉬움)

✅ 100줄짜리 PR 열 개
   (리뷰 빠름, 버그 발견 쉬움)
```

**이슈에 컨텍스트 충분히:**
```
❌ "버그 있음"

✅ "로그인 버튼 클릭 시 에러
   - 재현 방법: 이메일 비우고 로그인 클릭
   - 기대 동작: 에러 메시지 표시
   - 실제 동작: 화면이 멈춤
   - 스크린샷: [첨부]"
```

### DON'T (이렇게 하지 마세요)

**main에 직접 푸시:**
```
❌ git push origin main
   (리뷰 없이 배포됨)

✅ 브랜치 생성 → PR → 리뷰 → 병합
```

**리뷰 없이 self-merge:**
```
❌ 자기 PR을 자기가 승인하고 병합
   (긴급 상황 제외)

✅ 최소 1명의 팀원 리뷰 받기
```

---

## 자주 쓰는 명령어

### 기본

```bash
git status            # 현재 상태 확인
git add .             # 모든 변경사항 스테이징
git commit -m "msg"   # 커밋
git push              # 원격에 푸시
git pull              # 원격에서 가져오기
```

### 브랜치

```bash
git branch            # 브랜치 목록
git checkout 브랜치명  # 브랜치 전환
git checkout -b 이름   # 새 브랜치 생성 & 전환
git merge 브랜치명     # 브랜치 병합
```

### 되돌리기

```bash
git checkout -- 파일   # 파일 변경 취소
git reset HEAD~1      # 최근 커밋 취소 (변경사항 유지)
git stash             # 변경사항 임시 저장
git stash pop         # 임시 저장 복원
```

---

## 자주 묻는 질문

### "충돌(conflict)이 났어요"

두 브랜치가 같은 부분을 다르게 수정했을 때 발생합니다.

```bash
# 1. 충돌 파일 열기
# <<<<<<< HEAD
# 내 변경사항
# =======
# 다른 사람 변경사항
# >>>>>>> feature/other

# 2. 수동으로 병합 (원하는 코드 남기고 마커 삭제)

# 3. 커밋
git add .
git commit -m "Resolve merge conflict"
```

### "잘못 커밋했어요"

**아직 푸시 안 했으면:**
```bash
git reset HEAD~1      # 커밋 취소 (코드는 유지)
# 수정 후 다시 커밋
```

**이미 푸시했으면:**
```bash
git revert HEAD       # 되돌리는 새 커밋 생성
git push
```

### "비개발자인데 이슈만 보고 싶어요"

GitHub 웹에서:
1. 레포지토리 > Issues 탭
2. 원하는 이슈 클릭
3. 코멘트 추가 가능

코드를 직접 다룰 필요 없습니다.

---

## 관련 문서

- [Railway 가이드](./railway.md) - 배포 환경
- [Notion 가이드](./notion.md) - 문서 협업
- [첫 주 가이드](../your-first-week/) - 전체 온보딩

---

**[← Notion](./notion.md)** | **[Railway →](./railway.md)**
