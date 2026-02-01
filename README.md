# Kyndof Wiki

내부 직원용 회사 위키입니다. GitHub Pages로 자동 배포됩니다.

## 구조

```
wiki/
├── index.md                    # 메인 페이지
├── 00-vision-mission/          # 비전/미션
├── 01-goals-strategy/          # 목표/전략
├── 02-business-model/          # 비즈니스 모델
├── 03-value-streams/           # 가치 흐름
├── 04-functions-processes/     # 기능/프로세스
├── 05-projects/                # 프로젝트
├── 06-governance/              # 거버넌스
├── 07-partners-clients/        # 파트너/고객
├── 08-teams/                   # 팀
└── 99-archive/                 # 아카이브
```

## 사용법

1. 마크다운 파일 편집
2. `git push`
3. GitHub Pages가 자동으로 빌드 및 배포

## 로컬 미리보기

```bash
# Jekyll 설치 필요
bundle exec jekyll serve
```

## 관련 레포

- **runtime**: 에이전트/서비스 코드
- **world-model**: 데이터 (Notion 싱크, knowledge graph)
