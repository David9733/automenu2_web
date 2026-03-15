# 이따가 뭐 먹지? 소개 페이지 

음식 추천 앱 **"이따가 뭐 먹지?"** 의 소개페이지입니다.
앱을 소개받고 Google Play에서 바로 다운로드할 수 있도록 설계했습니다.

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **개발 기간** | 2025.01 ~ 2025.01.02 |
| **프로젝트 유형** | 개인 프로젝트 |
| **핵심 기술** | Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion |
| **배포 링크** | [(입력 필요)](https://automenu-web.vercel.app/) |
| **앱 다운로드** | [Google Play](https://play.google.com/store/apps/details?id=com.automenu2&hl=ko) |

---

## 초기 기획 프롬프트 (Prompt-driven Planning)

프로젝트 초기 단계에서 서비스 목적과 핵심 기능을 정의하는 프롬프트를 작성했습니다.
이 프롬프트를 기반으로 기능 구현을 시작하고, 이후 AI 코딩 도구를 활용하여 개발을 진행했습니다.

```text
목표:
"이따가 뭐 먹지?" 앱의 웹 랜딩 페이지를 만든다.
앱의 핵심 기능을 소개하고, Google Play 다운로드로 전환을 유도한다.

요구 기능:
- 앱 소개 Hero 섹션 (로고, 슬로건, CTA 버튼)
- 핵심 기능 6가지 소개 (그리드 레이아웃)
- 앱 스크린샷 갤러리 (클릭 시 모달 확대)
- Google Play / App Store 다운로드 버튼 섹션
- 개인정보처리방침 페이지 (별도 라우트)
- 푸터 (연락처, 링크)

기술 방향:
- Next.js + TypeScript (파일 기반 라우팅, SEO 최적화)
- Tailwind CSS (빠른 스타일링)
- Framer Motion (스크롤 애니메이션)
- 한국어 최적화: Noto Sans KR

추가 요구사항:
- 다크모드 지원
- 모바일 퍼스트 반응형 레이아웃
- SEO: Open Graph, JSON-LD 구조화 데이터 삽입
- 커스텀 스크롤바 (오렌지 테마)
```

---

## 주요 기능

앱이 제공하는 핵심 기능을 랜딩 페이지에서 시각적으로 전달합니다.

| 기능 | 설명 |
|------|------|
| **식사 시간 선택** | 아침 / 점심 / 저녁 선택 |
| **상황 선택** | 혼자 / 직장동료 / 연인 / 가족 |
| **술 포함 여부** | 음주 상황 고려 여부 선택 |
| **음식 종류 선택** | 한식 / 일식 / 양식 / 중식 / 분식 |
| **개인화 추천** | 조건에 맞는 음식 1~3개 추천 |
| **식사 시간 알림** | 설정한 시간에 식사 알림 제공 |

---

## 핵심 구현 내용

### 1. 컴포넌트 구조 설계

기능 단위로 컴포넌트를 분리하여 유지보수가 쉬운 구조로 구성했습니다.

```
src/
├── app/
│   ├── layout.tsx        # 공통 레이아웃 (폰트, 메타태그, JSON-LD)
│   ├── page.tsx          # 메인 랜딩 페이지 (컴포넌트 조합)
│   └── privacy/
│       └── page.tsx      # 개인정보처리방침 (별도 라우트)
└── components/
    ├── Hero.tsx           # 메인 Hero 섹션
    ├── Features.tsx       # 기능 소개 그리드
    ├── Screenshots.tsx    # 스크린샷 갤러리 + 모달
    ├── DownloadSection.tsx # 다운로드 CTA
    └── Footer.tsx         # 푸터
```

### 2. 스크린샷 갤러리 (모달 구현)

`Screenshots.tsx`에서 이미지 클릭 시 모달로 확대되는 갤러리를 구현했습니다.

- 10장의 앱 스크린샷을 5열 반응형 그리드로 배치
- 이미지 클릭 시 Framer Motion 애니메이션으로 모달 등장
- 모달 외부 클릭 또는 ESC로 닫기

### 3. SEO 구조화 데이터 삽입

`layout.tsx`에서 JSON-LD 형태의 Schema.org MobileApplication 구조화 데이터를 직접 구성했습니다.

```tsx
// src/app/layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "이따가 뭐 먹지?",
      "operatingSystem": "Android, iOS",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
    })
  }}
/>
```

검색엔진이 앱 정보를 구조화된 형태로 인식할 수 있도록 설계했습니다.

### 4. Framer Motion 스크롤 애니메이션

각 섹션이 뷰포트에 진입할 때 fade-in 효과가 적용되도록 `whileInView`를 활용했습니다.

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
```

### 5. 다크모드 대응

Tailwind CSS의 `dark:` 변형을 전체 컴포넌트에 적용하여 시스템 설정에 따라 자동으로 테마가 전환되도록 구성했습니다.

---

## 기술 스택 및 선택 이유

| 기술 | 버전 | 선택 이유 |
|------|------|-----------|
| **Next.js** | 15 | 파일 기반 라우팅으로 `/privacy` 페이지를 별도 설정 없이 추가 가능. SEO에 필요한 메타태그 관리가 용이 |
| **TypeScript** | 5.x | 컴포넌트 props 타입 오류를 빌드 단계에서 사전 차단 |
| **Tailwind CSS** | v4 | 유틸리티 클래스로 디자인 시스템을 빠르게 구성. 다크모드 전환을 `dark:` 클래스 하나로 처리 가능 |
| **Framer Motion** | 12.x | 선언형 API로 스크롤 트리거 애니메이션을 간결하게 구현 |
| **React Icons** | 5.x | 별도 SVG 파일 없이 아이콘을 컴포넌트로 인라인 삽입 |

---

## 트러블슈팅 / 개선 경험

> 실제 개발 중 마주친 문제와 해결 과정을 기록합니다.

### (입력 필요 — 예시 형식)

**문제:** (겪은 문제 상황)
**원인:** (파악한 원인)
**해결:** (적용한 해결책)

---

## AI 활용 개발 방식 (AI-assisted Development)

이 프로젝트는 AI 코딩 도구를 활용한 개발 workflow를 설계하고 반복적으로 개선하는 방식으로 진행했습니다.

**사용 도구:** Cursor · Claude CLI

**개발 흐름:**

1. 기능 요구사항 정의 → 초기 기획 프롬프트 작성
2. AI 코딩 도구에 프롬프트 입력 후 코드 생성
3. 실행하여 기능 동작 여부 확인
4. 오류 발생 시 문제 상황을 설명하고 수정 요청
5. 정상 작동할 때까지 반복 수정
6. 필요 시 코드 구조 개선 요청
7. 최종 동작 확인 후 배포

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# → http://localhost:3000

# 프로덕션 빌드
npm run build
npm run start
```

**Node.js 버전:** (입력 필요 — 예: 20.x 이상)

---

## 배포

- **배포 플랫폼:** (입력 필요 — 예: Vercel)
- **배포 URL:** [(입력 필요)](https://example.com)
- **앱 다운로드:** [Google Play Store](https://play.google.com/store/apps/details?id=com.automenu2&hl=ko)
- **App Store:** 준비 중

---

## 향후 개선 계획

- [ ] App Store 배포 완료 후 다운로드 버튼 활성화
- [ ] (추가 예정)

---

## License

(입력 필요 — 예: MIT License)
