# Kyndof Wiki

**목적:** 내부 직원용 회사 위키 - 신입 온보딩부터 모든 업무 지식까지 담긴 완전한 회사 백과사전

---

## Wiki 에이전트

> **Wiki 콘텐츠 작성 시 반드시 Wiki-Writer 에이전트의 철학을 따르세요.**
>
> **Agent 정의:** `world-model/agents/wiki-writer.md`

Wiki-Writer 에이전트가 강제하는 핵심 원칙:

| 원칙 | 설명 |
|------|------|
| **DB 덤프 금지** | 테이블 나열 금지, 블로그처럼 읽기 좋게 |
| **Future-Proof** | 3년 후 신입이 혼자 읽고 업무 수행 가능 |
| **One Concept = One File** | 여러 개념 우겨넣기 금지 |
| **Deep Hierarchy** | 5-6 레벨 이상 깊이 |
| **Blog Post Style** | 도입-배경-핵심-관련링크-담당자 구조 |
| **Tables = Supplements** | 테이블은 요약용, 본문은 산문 |

**작업 흐름:**
1. Wiki 관련 작업 요청 시 → Wiki-Writer 에이전트 호출
2. 에이전트가 철학을 적용하여 콘텐츠 생성
3. 체크리스트 통과 후 저장

**참고:** SOP 작성은 `sops/standards/sop-writing-guide.md` 참조

---

## 기술적 구조

### 디렉토리 구조

```
wiki/
├── index.md              # 메인 페이지
├── strategy/             # Layer 1: 전략
│   ├── vision-mission/   # 비전/미션
│   └── goals-strategy/   # 목표/전략
├── operations/           # Layer 2: 운영
│   ├── business-model/   # 비즈니스 모델
│   ├── value-streams/    # 가치 흐름
│   └── functions/        # 기능/프로세스
├── execution/            # Layer 3: 실행
│   ├── projects/         # 프로젝트
│   └── governance/       # 거버넌스 (RABSIC)
├── organization/         # Layer 4: 조직
│   ├── partners-clients/ # 파트너/고객
│   └── teams/            # 팀
├── sops/                 # SOP 문서
├── archive/              # 아카이브
└── _config.yml           # Jekyll 설정
```

### 4개 레이어

| 레이어 | 폴더 | 내용 |
|--------|------|------|
| Strategy | strategy/ | 비전/미션, 목표/전략 |
| Operations | operations/ | 비즈니스 모델, 가치 흐름, 기능 |
| Execution | execution/ | 프로젝트, 거버넌스 |
| Organization | organization/ | 파트너/고객, 팀 |

---

## 기본 규칙

1. **코드 금지** - .ts, .js, package.json 등 절대 추가하지 않음
2. **마크다운만** - .md 파일만 추가
3. **구조 유지** - 카테고리 구조 따르기
4. **상대 경로** - 링크는 상대 경로 사용 (예: `[목표](./strategy/goals-strategy/)`)
5. **kebab-case** - 파일/폴더명은 소문자+하이픈

---

## 배포

GitHub Pages가 Jekyll로 자동 빌드/배포합니다.
- `git push` → 자동 배포
- 빌드 명령 불필요

---

## 관련 레포

| 레포 | 역할 |
|------|------|
| **runtime** | 모든 코드 |
| **world-model** | 데이터 소스 (Knowledge Graph) |
| **wiki** (여기) | 마크다운 컨텐츠만 |

---

## 데이터 흐름

```
world-model/knowledge/  → 원본 데이터 (엔티티, 관계)
        ↓
    [에이전트가 변환]
        ↓
wiki/                   → 사람이 읽는 풍부한 문서
```

**중요:** wiki는 DB를 그대로 복사하는 것이 아니라, 사람이 읽기 좋게 **재작성**해야 함.
