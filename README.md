# AI Use Case 1001

생성형 AI 활용 사례 1001개를 탐색할 수 있는 인터랙티브 웹사이트입니다.

## 소개

11개 산업 분야와 6개 에이전트 유형으로 분류된 1001개의 실제 AI 활용 사례를 제공합니다. 페이퍼 크래프트 스타일의 친근한 UI로 다양한 기업들의 AI 도입 사례를 쉽게 탐색할 수 있습니다.

## 주요 기능

- **대시보드**: 산업별, 에이전트 유형별 통계 시각화
- **탐색 페이지**: 필터링 및 검색을 통한 사례 탐색
- **매트릭스 뷰**: 산업 × 에이전트 유형 교차 분석
- **상세 페이지**: 개별 사례의 상세 정보 확인
- **다국어 지원**: 한국어/영어 전환 지원

## 산업 분야 (11개)

| 분야 | 설명 |
|------|------|
| 자동차 및 물류 | Automotive & Logistics |
| 비즈니스 서비스 | Business Services |
| 소비재 및 유통 | Consumer & Retail |
| 교육 | Education |
| 에너지 및 공공 | Energy & Public Sector |
| 금융 | Financial Services |
| 게임 | Gaming |
| 의료 | Healthcare |
| 숙박 및 여행 | Hospitality & Travel |
| 미디어 및 마케팅 | Media & Marketing |
| 기술 | Technology |

## 에이전트 유형 (6개)

| 유형 | 설명 |
|------|------|
| 고객 에이전트 | 고객 서비스 및 지원 자동화 |
| 직원 에이전트 | 직원 생산성 및 업무 효율화 |
| 창작 에이전트 | 콘텐츠 생성 및 크리에이티브 작업 |
| 코드 에이전트 | 소프트웨어 개발 및 코딩 지원 |
| 데이터 에이전트 | 데이터 분석 및 인사이트 도출 |
| 보안 에이전트 | 보안 모니터링 및 위협 탐지 |

## 기술 스택

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, 페이퍼 크래프트 커스텀 디자인
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **i18n**: next-intl (한국어/영어)
- **Fonts**: Jua, Gaegu (Google Fonts)

## 시작하기

### 환경 설정

```bash
# 저장소 클론
git clone https://github.com/revfactory/ai-usecase-1001.git
cd ai-usecase-1001

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일에 Supabase 연결 정보 입력
```

### 환경 변수

```env
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 데이터베이스 설정

```bash
# Prisma 스키마 푸시
npx prisma db push

# Prisma Client 생성
npx prisma generate
```

## 프로젝트 구조

```
src/
├── app/
│   ├── [locale]/           # 다국어 라우팅
│   │   ├── page.tsx        # 홈페이지
│   │   ├── dashboard/      # 대시보드
│   │   ├── explore/        # 탐색 페이지
│   │   ├── matrix/         # 매트릭스 뷰
│   │   └── case/[id]/      # 상세 페이지
│   └── api/                # API 라우트
├── components/             # 재사용 컴포넌트
├── data/                   # 정적 데이터
├── i18n/                   # 다국어 설정
├── lib/                    # 유틸리티
└── types/                  # TypeScript 타입
messages/
├── ko.json                 # 한국어 번역
└── en.json                 # 영어 번역
prisma/
└── schema.prisma           # 데이터베이스 스키마
```

## 데이터 출처

이 프로젝트의 AI 활용 사례 데이터는 Google Cloud의 공식 자료를 기반으로 합니다:

**[101+ real-world generative AI use cases from industry leaders](https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders)**

> Google Cloud Transform 시리즈에서 제공하는 실제 기업들의 생성형 AI 도입 사례 모음

## 라이선스

MIT License

## 기여

이슈 및 PR을 환영합니다.
