![Image](https://github.com/user-attachments/assets/06e89332-8299-47cc-b904-2fe2b897abf7)

# 이따가 뭐 먹지? 소개 페이지 

음식 추천 앱 **"이따가 뭐 먹지?"** 의 소개페이지입니다.<br>
앱을 소개받고 Google Play에서 바로 다운로드할 수 있도록 설계했습니다.

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **개발 기간** | 2025.01 ~ 2025.01.02 |
| **프로젝트 유형** | 개인 프로젝트 |
| **핵심 기술** | Next.js, React, TypeScript, Tailwind CSS, Framer Motion |
| **배포 링크** | [바로가기](https://automenu-web.vercel.app/) |
| **앱 다운로드** | [Google Play Store](https://play.google.com/store/apps/details?id=com.automenu2&hl=ko) |

---

## 초기 기획 프롬프트 
기존 앱을 개발하고 있는 프로젝트에서 AI 보조도구를 이용해 프롬프트 입력<br>
```next.js기반으로 랜딩페이지를 만들고 싶어. 개인정보처리방침까지 포함해서. 그걸 만들기 위한 프롬프트를 줘```

**나온 프롬프트 결과값(ex)**<br>
이 프롬프트를 기반으로 기능 구현을 시작하고, 이후 AI 코딩 도구(cursor)를 활용하여 개발을 진행했습니다.<details><summary>프롬프트 전체 내용 보기</summary>

```text
- Context

 - Flutter 앱 "이따가 뭐 먹지"의 Next.js 랜딩페이지 + 개인정보처리방침 페이지 생성
 - 사용 방식: Claude/AI에 바로 붙여넣기 → 코드 생성
 - 연락처/스토어 링크 없음 → 플레이스홀더 처리
 - 기존 LANDING_PAGE_PROMPT.md 대체하는 완성형 버전으로 저장

 출력

 LANDING_PAGE_PROMPT.md를 개선된 완성형 프롬프트로 교체.
 내용: 기술 스펙, 전체 파일 구조, 개인정보처리방침 내용 인라인 포함.

 최종 프롬프트 내용 (아래를 그대로 파일에 저장)

 ---
 Next.js 14 (App Router) + TypeScript + Tailwind CSS로
 "이따가 뭐 먹지" 모바일 앱의 랜딩페이지를 완성된 코드로 만들어주세요.
 모든 파일을 실행 가능한 상태로 작성해주세요.

 앱 정보

 - 앱 이름: 이따가 뭐 먹지
 - 설명: 간단한 질문 몇 가지로 딱 맞는 음식을 추천해주는 모바일 앱
 - 타겟: 직장인
 - 메인 컬러: #FF6B35 (오렌지)
 - Google Play: [GOOGLE_PLAY_URL] (플레이스홀더)
 - App Store: [APP_STORE_URL] (플레이스홀더)
 - 문의 이메일: [CONTACT_EMAIL] (플레이스홀더)

 주요 기능 (기능 소개 섹션에 사용)

 1. 🌅 식사 시간 선택 - 아침, 점심, 저녁 중 선택
 2. 👥 상황 선택 - 혼자, 동료, 애인, 가족과의 식사
 3. 🍺 음주 여부 선택 - 가볍게 한잔? 오늘은 패스?
 4. 🍽️맞춤 음식 추천 - 조건에 맞는 음식 1-3개 카드로 제공
 5. 👆 스와이프 제스처 - 카드 넘기며 원하는 음식 선택
 6. ⏰ 식사 알림 - 식사 시간에 맞춰 알림 설정

 기술 스택

 - Next.js 14 App Router
 - TypeScript
 - Tailwind CSS
 - lucide-react (아이콘)
 - 폰트: Noto Sans KR (Google Fonts)

 필수 파일 목록 (모두 작성해주세요)

 설정 파일

 - package.json - next, react, typescript, tailwindcss, lucide-react 포함
 - tailwind.config.ts - 커스텀 색상 (#FF6B35 오렌지) 포함
 - next.config.ts
 - tsconfig.json
 - postcss.config.mjs

 앱 파일

 - app/layout.tsx - Noto Sans KR 폰트, 메타데이터, 다크모드 클래스
 - app/page.tsx - 모든 섹션 조합
 - app/globals.css
 - app/privacy/page.tsx - 개인정보처리방침 페이지

 컴포넌트

 - components/Header.tsx - 로고 + 상단 내비게이션
 - components/Hero.tsx - 히어로 섹션
 - components/Features.tsx - 기능 소개 6개 카드
 - components/HowItWorks.tsx - 사용 방법 스텝 (선택 → 추천 → 식사)
 - components/DownloadSection.tsx - 다운로드 CTA
 - components/Footer.tsx - 푸터

 각 섹션 상세 요구사항

 Header

 - 왼쪽: 앱 이름 "이따가 뭐 먹지" (오렌지 컬러)
 - 오른쪽: "다운로드" 버튼
 - sticky, 스크롤 시 배경 blur 효과

 Hero 섹션

 - 배경: 오렌지 그라데이션 (#FF6B35 → #FF8C42)
 - 큰 제목: "오늘 뭐 먹을지\n고민 끝!"
 - 부제목: "식사 시간, 상황, 음주 여부만 선택하면\n딱 맞는 음식을 추천해드립니다"
 - 버튼 2개: Google Play 다운로드, App Store 다운로드
 - 오른쪽에 스마트폰 목업 (CSS로 구현, 실제 이미지 없이)

 Features 섹션

 - 6개 카드 그리드 (3열 × 2행)
 - 각 카드: 이모지 아이콘, 제목, 1-2줄 설명, 호버 시 오렌지 테두리 효과

 HowItWorks 섹션

 - 3단계 플로우: "시간 & 상황 선택" → "조건 분석" → "음식 추천"
 - 화살표로 연결

 DownloadSection

 - 배경: 짙은 회색 또는 오렌지
 - "지금 바로 다운로드" 헤드라인
 - Google Play / App Store 버튼 (SVG 로고 포함)

 Footer

 - 앱 이름, 슬로건
 - 링크: 개인정보처리방침 (/privacy)
 - 문의: [CONTACT_EMAIL]
 - 저작권: © 2024 이따가 뭐 먹지. All rights reserved.

 개인정보처리방침 페이지 (/privacy)

 app/privacy/page.tsx에 아래 내용을 HTML로 렌더링:
 - 상단: 뒤로가기 버튼 (← 홈으로)
 - 왼쪽 sticky: 목차 네비게이션 (데스크톱)
 - 본문: 아래 개인정보처리방침 전체 내용

 ---개인정보처리방침 원문---

 개인정보 처리 방침

 이따가 뭐 먹지 앱의 개인정보 처리 방침입니다.

 1. 개인정보의 처리 목적

 본 앱은 다음의 목적을 위하여 개인정보를 처리합니다.

 1.1 서비스 제공

 - 음식 추천 서비스 제공
 - 식사 시간 알림 서비스 제공
 - 앱 기능 개선 및 최적화

 1.2 서비스 분석 및 개선

 - 앱 사용 패턴 분석
 - 서비스 품질 향상을 위한 통계 분석
 - 오류 및 크래시 정보 수집 및 분석

 1.3 마케팅 및 광고

 - 맞춤형 광고 제공
 - 광고 성과 측정

 2. 처리하는 개인정보 항목 및 보유기간

 자동 수집 정보

 - 기기 정보: 기기 모델, 운영체제 버전, 고유 식별자
 - 앱 사용 정보: 앱 버전, 화면 조회 기록, 기능 사용 기록
 - 로그 정보: 오류 로그, 크래시 정보
 - 광고 식별자: 광고 ID (선택적)

 사용자 선택 정보

 - 식사 시간 설정: 아침, 점심, 저녁 식사 시간
 - 알림 설정: 식사 알림 활성화 여부
 - 앱 내 선택 정보: 식사 시간, 상황, 음주 여부, 음식 종류 선택 기록

 푸시 알림 관련 정보

 - FCM 토큰: 푸시 알림 전송을 위한 기기 토큰

 보유기간

 - 서비스 이용 기간: 앱 사용 중 및 앱 삭제 시까지
 - 법령에 따른 보존기간: 관련 법령에 따라 필요한 경우 해당 기간 동안 보관

 3. 개인정보의 제3자 제공

 본 앱은 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우는 예외입니다.

 - Firebase (Google): 서비스 분석, 오류 추적, 푸시 알림 전송
 - Google Mobile Ads (Google): 맞춤형 광고 제공, 광고 성과 측정
 - Supabase: FCM 토큰, 앱 설정 정보 저장 및 관리

 4. 개인정보 처리의 위탁

 - Firebase (Google): 서비스 분석, 오류 추적, 푸시 알림 전송
 - Google Mobile Ads (Google): 광고 제공
 - Supabase: 데이터베이스 서비스

 5. 정보주체의 권리·의무 및 행사방법

 이용자는 다음과 같은 권리를 행사할 수 있습니다.
 - 개인정보 열람 요구
 - 개인정보 정정·삭제 요구 (앱 삭제 시 자동 삭제)
 - 개인정보 처리정지 요구 (앱 내 설정에서 비활성화 가능)
 - 또는 아래 연락처로 요청 가능

 6. 개인정보의 파기

 개인정보가 불필요하게 되었을 때에는 지체 없이 파기합니다.
 - 파기 절차: 앱 삭제 또는 요청 시, 보유기간 경과 시
 - 파기 방법: 전자적 파일은 복구 불가능하게 안전 삭제

 7. 개인정보 보호책임자

 - 이메일: [CONTACT_EMAIL]

 8. 개인정보의 안전성 확보 조치

 - 관리적 조치: 내부관리계획 수립·시행
 - 기술적 조치: 접근권한 관리, 접근통제시스템, 암호화, 보안프로그램
 - 물리적 조치: 전산실, 자료보관실 접근통제

 9. 쿠키 및 유사 기술의 사용

 본 앱은 쿠키를 사용하지 않습니다.
 다만, 서비스 분석 및 광고 제공을 위해 Firebase Analytics와 광고 식별자를 사용할 수 있습니다.

 10. 개인정보 처리방침 변경

 이 방침은 법령·정책 변경 시 변경사항 시행 7일 전부터 앱 내 공지사항을 통해 고지합니다.
 - 시행일자: 2024년 1월 1일
 - 최종 수정일: 2024년 1월 1일

 11. 권익침해 구제방법

 - 개인정보 침해신고센터: privacy.go.kr / 국번 없이 182
 - 개인정보 분쟁조정위원회: http://www.kopico.go.kr / 1833-6972
 - 대검찰청 사이버범죄수사단: http://www.spo.go.kr / 02-3480-3573
 - 경찰청 사이버테러대응센터: http://www.netan.go.kr / 국번 없이 182

 ---개인정보처리방침 끝---

 디자인 요구사항

 - 반응형: 모바일 우선, sm/md/lg 브레이크포인트
 - 다크모드: Tailwind dark: 클래스로 지원 (시스템 설정 따름)
 - 애니메이션: 스크롤 시 fade-in (CSS @keyframes 또는 Intersection Observer)
 - 버튼 hover: 오렌지 밝기 변화 + scale 효과

 SEO

 app/layout.tsx에 메타데이터:
 - title: "이따가 뭐 먹지 - 음식 추천 앱"
 - description: "식사 시간과 상황만 선택하면 딱 맞는 음식을 추천해드립니다"
 - og:title, og:description, og:type: website
 - keywords: 음식추천, 점심메뉴, 뭐먹지, 직장인점심

 주의사항

 - 실제 앱 스크린샷 이미지 없음 → CSS로 폰 목업 구현하거나 placeholder div 사용
 - [GOOGLE_PLAY_URL], [APP_STORE_URL], [CONTACT_EMAIL]은 플레이스홀더로 유지
 - npx create-next-app@latest로 시작하지 말고 모든 파일 내용을 직접 제공
 - Tailwind v4가 아닌 v3 기준으로 작성

 ---
```

</details>

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
| **Next.js** | 16 | 파일 기반 라우팅으로 `/privacy` 페이지를 별도 설정 없이 추가 가능. SEO에 필요한 메타태그 관리가 용이 |
| **TypeScript** | 5.x | 컴포넌트 props 타입 오류를 빌드 단계에서 사전 차단 |
| **Tailwind CSS** | v4 | 유틸리티 클래스로 디자인 시스템을 빠르게 구성. 다크모드 전환을 `dark:` 클래스 하나로 처리 가능 |
| **Framer Motion** | 12.x | 선언형 API로 스크롤 트리거 애니메이션을 간결하게 구현 |
| **React Icons** | 5.x | 별도 SVG 파일 없이 아이콘을 컴포넌트로 인라인 삽입 |
| **React** | 19.x | UI 컴포넌트 렌더링 라이브러리 |
| **React Compiler** | 1.0.0 | 자동 메모이제이션으로 컴포넌트 렌더링 최적화 |

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

![Image](https://github.com/user-attachments/assets/afd3e7da-54d0-44ec-a25d-29767c2a9d46)
소개 페이지에서 구글 스토어로 가는 장면

![Image](https://github.com/user-attachments/assets/3d36b0d9-6ba7-49b7-b282-92752cbcb8d9)
기능알아보기누르면 자동으로 스크롤 내려감 + 캡처샷 누르면 모달창 + 정보방침 페이지 이동

