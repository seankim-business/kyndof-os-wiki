---
title: Railway
layout: default
parent: Tools We Use
grand_parent: Start Here
---

# Railway

{: .highlight }
> 킨도프의 배포 플랫폼. 코드가 서버에서 실행되는 곳입니다.

---

## 왜 Railway인가

코드를 작성했으면 어딘가에서 실행되어야 합니다. 예전에는 서버를 직접 구매하고, 설치하고, 관리해야 했습니다. Railway는 이 모든 것을 자동화합니다.

**Railway의 장점:**
- **간단한 배포** - GitHub 연결 후 푸시만 하면 자동 배포
- **스케일링** - 트래픽에 따라 자동 확장
- **로그 및 모니터링** - 에러 추적, 성능 확인
- **환경 변수 관리** - API 키 등 안전하게 보관
- **비용 효율** - 사용한 만큼만 지불

---

## 누가 사용하나요?

Railway는 주로 **개발자와 DevOps**가 사용합니다.

| 역할 | Railway 사용 |
|------|-------------|
| 개발자 | 배포, 로그 확인, 환경 변수 |
| DevOps | 인프라 설정, 스케일링 |
| PM | 배포 상태 확인 정도 |
| 디자이너 | 거의 없음 |

**비개발자라면:** 이 가이드의 "기본 개념"만 이해해두세요. 실제 사용은 개발팀에 요청하면 됩니다.

---

## 시작하기

### 1. 계정 및 팀 가입

1. 회사 이메일로 Railway 팀 초대 받기
2. [railway.app](https://railway.app) 에서 로그인
3. Kyndof 팀 워크스페이스 확인

### 2. 대시보드 탐색

로그인하면 프로젝트 목록이 보입니다.

```
Kyndof Team/
├── kyndof-api-production    # 운영 API
├── kyndof-api-staging       # 테스트 API
├── kyndof-web-production    # 운영 웹
└── ...
```

---

## 기본 개념

### Project (프로젝트)

**프로젝트 = 배포 환경 하나**

하나의 애플리케이션이 여러 프로젝트를 가질 수 있습니다:
- `kyndof-api-production` - 실제 사용자가 쓰는 버전
- `kyndof-api-staging` - 테스트 버전
- `kyndof-api-development` - 개발 버전

### Service (서비스)

**프로젝트 안에 여러 서비스**가 있을 수 있습니다:
- Web 서버
- 데이터베이스 (PostgreSQL, Redis)
- 워커 (백그라운드 작업)

### Environment Variables (환경 변수)

**민감한 정보**는 코드에 직접 넣지 않습니다.

```
DATABASE_URL=postgres://...
API_KEY=sk-xxx...
SECRET_KEY=abc123...
```

이런 값들은 Railway 대시보드에서 관리합니다.

### Deploy (배포)

코드가 서버에 반영되는 과정입니다.

```
GitHub에 push → Railway가 감지 → 자동 빌드 → 배포 완료
```

---

## 주요 기능

### 로그 확인

에러가 발생하면 가장 먼저 로그를 확인합니다.

1. 프로젝트 > 서비스 선택
2. "Logs" 탭 클릭
3. 실시간 로그 또는 과거 로그 검색

**로그 읽는 팁:**
- `ERROR`, `Exception`, `Traceback` 키워드 주목
- 타임스탬프로 시간대 확인
- 필터 기능으로 특정 로그만 보기

### 환경 변수 관리

1. 프로젝트 > 서비스 선택
2. "Variables" 탭 클릭
3. 변수 추가/수정/삭제

**주의:** 환경 변수 변경 시 서비스가 재시작됩니다.

### 배포 히스토리

1. 프로젝트 > 서비스 선택
2. "Deployments" 탭 클릭
3. 각 배포의 상태, 커밋, 시간 확인

**롤백:**
- 문제 발생 시 이전 배포로 되돌릴 수 있음
- 해당 배포 클릭 > "Redeploy"

---

## 환경별 이해

### Production (운영)

**실제 사용자가 쓰는 환경**

- 가장 안정적이어야 함
- 테스트 완료된 코드만 배포
- 문제 발생 시 즉시 대응 필요

### Staging (스테이징)

**배포 전 최종 테스트 환경**

- Production과 거의 동일한 설정
- QA 팀이 테스트
- 문제 발견 시 여기서 수정

### Development (개발)

**개발자 테스트 환경**

- 기능 개발 중 테스트
- 자주 변경됨
- 불안정해도 괜찮음

---

## 팁과 에티켓

### DO (이렇게 하세요)

**배포 전 staging에서 확인:**
```
main에 머지 → staging 배포 → 테스트 → production 배포

바로 production으로 가지 마세요.
```

**로그에 의미 있는 메시지:**
```javascript
// ❌
console.log("here");
console.log(data);

// ✅
console.log("User login attempt:", { userId, timestamp });
console.log("Payment processed:", { orderId, amount, status });
```

### DON'T (이렇게 하지 마세요)

**환경 변수를 코드에 하드코딩:**
```javascript
// ❌ 절대 이렇게 하지 마세요
const apiKey = "sk-1234567890";

// ✅ 환경 변수 사용
const apiKey = process.env.API_KEY;
```

**Production에서 직접 디버깅:**
```
❌ Production 서버에 console.log 추가해서 푸시

✅ 로컬 또는 staging에서 재현 후 수정
```

---

## 자주 묻는 질문

### "배포가 실패했어요"

1. Deployments 탭에서 실패한 배포 클릭
2. 빌드 로그 확인
3. 에러 메시지 읽기 (보통 의존성 문제, 문법 에러)
4. 수정 후 다시 푸시

### "서비스가 느려졌어요"

1. Metrics 탭에서 CPU/Memory 확인
2. 급증한 시점 확인
3. 해당 시점 로그 확인
4. 필요시 스케일 업 요청

### "환경 변수를 어디서 확인하나요?"

각 서비스의 Variables 탭에서 확인합니다.
단, 민감한 변수는 값이 마스킹되어 있을 수 있습니다.

---

## 비개발자를 위한 요약

Railway를 직접 다루지 않더라도 알아두면 좋은 것:

| 상황 | 의미 |
|------|------|
| "배포 중입니다" | 새 코드가 서버에 반영되는 중 |
| "배포 완료" | 변경사항이 적용됨 |
| "롤백했습니다" | 문제가 있어 이전 버전으로 되돌림 |
| "staging에서 테스트 중" | 아직 실제 서비스에 반영 안 됨 |
| "production 이슈" | 실제 사용자에게 영향 있는 문제 |

---

## 관련 문서

- [GitHub 가이드](./github.md) - 코드 관리
- [Figma 가이드](./figma.md) - 디자인 도구
- [첫 주 가이드](../your-first-week/) - 전체 온보딩

---

**[← GitHub](./github.md)** | **[Figma →](./figma.md)**
