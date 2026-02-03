---
title: Standard Operating Procedures
---

# SOPs (표준 운영 절차)

반복되는 일을 매번 처음부터 다시 생각하지 마세요. SOP로 문서화하고, 나중엔 자동화까지.

## SOP란?

**Standard Operating Procedure** - 반복되는 프로세스를 단계별로 문서화한 것.

### 왜 필요한가?

똑같은 일을 할 때마다:
- "어떻게 했더라?" 다시 생각
- 사람마다 다르게 처리
- 실수 반복
- 신입이 물어봄

→ **SOP로 한 번 정리하면 끝**

### 언제 만드나?

같은 일을 **2번 이상** 했다면 SOP를 만들 타이밍입니다.

\`\`\`
1회: 그냥 함
2회: "어? 이거 전에 한 것 같은데..."
3회: "SOP 만들었어야 했는데..."

→ 2회 시점에 SOP 만들기
\`\`\`

---

## SOP 시스템 (자동화)

킨도프는 SOP를 자동으로 감지하고 생성합니다.

### 1. Pattern Detection (패턴 감지)

시스템이 자동으로 반복 패턴을 찾습니다:

- CLI 명령어 패턴
- 브라우저 작업 패턴
- 조직 프로세스 패턴

**트리거:**
- \`/ingest\` 완료 후
- 브라우저 세션 종료 후
- 10개 메시지마다

**알림:**
고신뢰도 패턴(85%+) 발견 시 자동 제안

\`\`\`
"[패턴 감지] 'Notion 데이터 동기화' 작업이 3회 반복되었습니다.
SOP로 만들까요?"
\`\`\`

### 2. SOP Recording (녹화)

작업하면서 SOP를 만듭니다.

\`\`\`bash
/sop record [이름]
\`\`\`

**자동으로:**
- 화면 캡처 (스크린샷)
- 단계별 주석 (빨간 원, 박스, 번호)
- 실행 명령어 기록

**완료:**
\`\`\`bash
/sop stop
\`\`\`

→ \`workflows/sops/{이름}/sop.md\` 생성

### 3. SOP Execution (실행)

만든 SOP를 실행합니다.

\`\`\`bash
/sop run [이름]
\`\`\`

**자동 트리거:**
사용자 입력이 SOP의 트리거 패턴과 매칭되면 자동으로 제안:

\`\`\`
"이 작업은 'Notion 동기화' SOP로 실행할 수 있습니다.
실행할까요?"
\`\`\`

---

## Process Intelligence (조직 프로세스 자동화)

CLI/브라우저 작업뿐 아니라, **조직 데이터**에서도 패턴을 감지합니다.

### 무엇을 분석하나?

- **Interactions** - 회의, 대화, 이벤트
- **Decisions** - 의사결정 워크플로우
- **Tasks** - 작업 실행 패턴
- **Approvals** - 승인 체인

### 10가지 패턴 카테고리

| 카테고리 | 설명 | 예시 |
|---------|------|------|
| decision-making | 의사결정 프로세스 | RABSIC Decision Flow |
| communication | 커뮤니케이션 패턴 | Weekly Status Update |
| approval | 승인 워크플로우 | Multi-Level Approval |
| reporting | 리포팅 패턴 | KPI Dashboard Update |
| meeting | 회의 패턴 | Recurring Standup |
| documentation | 문서화 패턴 | Meeting Notes Workflow |
| sync | 동기화 패턴 | External System Sync |
| escalation | 에스컬레이션 패턴 | Issue Escalation |
| project-lifecycle | 프로젝트 수명주기 | Project Kickoff |
| onboarding | 온보딩 프로세스 | New Member Onboarding |

### Maturity Model (성숙도 모델)

패턴이 점진적으로 성숙합니다:

| Level | 이름 | 기준 | 다음 단계 |
|-------|------|------|-----------|
| 0 | Ad-hoc | 패턴 감지됨 | 빈도 모니터링 |
| 1 | Repeatable | 3회+ 발생, 70%+ 신뢰도 | SOP 검토 |
| 2 | Defined | SOP 생성 및 리뷰 | 메트릭 추적 |
| 3 | Managed | 실행 메트릭 추적됨 | 위임 검토 |
| 4 | Automated | 에이전트가 처리 | 모니터링 & 최적화 |

### 사용 명령어

\`\`\`bash
# 조직 데이터 분석
/process analyze

# 감지된 패턴 보기
/process patterns

# 패턴에서 SOP 생성
/process sop [패턴]

# 에이전트에게 위임
/process delegate [패턴]

# 성숙도 대시보드
/process maturity

# 준비된 제안 보기
/process suggest
\`\`\`

---

## SOP 파일 구조

\`\`\`
workflows/sops/{이름}/
├── sop.md              # SOP 문서 (단계별 설명)
├── screenshots/        # 주석 달린 스크린샷
└── metadata.json       # 트리거 패턴, 버전, 실행 기록
\`\`\`


### sop.md 예시

\`\`\`markdown
# Notion 데이터 동기화

## 목적
Notion에서 최신 데이터를 가져와 로컬 DB를 업데이트합니다.

## 트리거
- 매주 월요일 오전
- 데이터 변경 알림 수신 시

## 단계

### 1. Notion API 인증 확인
![스크린샷](screenshots/01-auth.png)

\\\`\\\`\\\`bash
npm run auth:check
\\\`\\\`\\\`

### 2. 데이터 동기화 실행
![스크린샷](screenshots/02-sync.png)

\\\`\\\`\\\`bash
npm run sync:notion --force
\\\`\\\`\\\`

### 3. 결과 확인
![스크린샷](screenshots/03-verify.png)

\\\`\\\`\\\`bash
npm run verify:sync
\\\`\\\`\\\`
\`\`\`

---

## 좋은 SOP 작성법

### 1. 명확한 목적

\`\`\`
❌ 나쁜 예:
"데이터 처리"

✅ 좋은 예:
"Notion에서 고객 주문 데이터를 가져와 생산 시스템에 입력"
\`\`\`

### 2. 구체적인 단계

\`\`\`
❌ 나쁜 예:
"서버에 접속해서 확인"

✅ 좋은 예:
1. SSH로 production 서버 접속
2. /var/log/app.log 확인
3. 에러가 있으면 #dev-ops 채널에 알림
\`\`\`

### 3. 스크린샷 + 설명

텍스트만으로 부족한 부분은 주석 달린 스크린샷 추가:
- 빨간 원: 클릭할 버튼
- 박스: 입력할 필드
- 번호: 순서

### 4. 예외 처리

\`\`\`
### 단계 3: 동기화 실행

정상 케이스:
"Sync completed successfully" 메시지 확인

예외 케이스:
- "Auth failed" → 1단계로 돌아가서 인증 재확인
- "Connection timeout" → 네트워크 상태 확인 후 재시도
\`\`\`

---

## SOP 관리

### 버전 관리

SOP는 시간이 지나면 변합니다. 버전을 관리하세요.

\`\`\`json
// metadata.json
{
  "version": "2.1.0",
  "lastUpdated": "2026-02-02",
  "changelog": [
    "v2.1.0: 에러 처리 단계 추가",
    "v2.0.0: Notion API v2로 업데이트",
    "v1.0.0: 초기 버전"
  ]
}
\`\`\`

### 실행 기록

누가 언제 실행했는지 추적:

\`\`\`json
{
  "executionHistory": [
    {
      "date": "2026-02-02",
      "executor": "브랜드 오퍼레이션 팀",
      "result": "성공",
      "duration": "5분"
    }
  ]
}
\`\`\`

### 주기적 리뷰

SOP는 3-6개월마다 리뷰하세요:
- 여전히 유효한가?
- 더 효율적인 방법이 있는가?
- 자동화할 수 있는가?

---

## 자동화로 진화

SOP의 최종 목표는 **자동화**입니다.

### Level 1: 문서화
"매번 이 문서 보고 수동 실행"

### Level 2: 스크립트화
"버튼 하나로 실행"

### Level 3: 자동 트리거
"조건 만족 시 자동 실행"

### Level 4: 에이전트 위임
"에이전트가 알아서 처리"

\`\`\`
예시: Notion 동기화

Level 1: SOP 문서 보고 수동 실행
  ↓
Level 2: npm run sync 명령어
  ↓
Level 3: 매주 월요일 자동 실행
  ↓
Level 4: Librarian 에이전트가 알아서 동기화
\`\`\`

---

## 관련 문서

- [Process Intelligence 가이드](https://www.notion.so/03_RABSIC-Value-Stream-1-2fb4a6fb8b0680568b5ef41cbdd7f49f)
- [RABSIC 프레임워크](../making-decisions/rabsic/)
- [CompanyOS 시스템 가이드](../../reference/)

---

**이전:** [How We Work](../)
