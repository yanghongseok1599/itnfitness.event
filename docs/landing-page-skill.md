# 이벤트 랜딩페이지 제작 스킬

## 개요
Next.js + Tailwind CSS + Framer Motion을 활용한 이벤트/프로모션 랜딩페이지 제작 가이드입니다.

---

## 기술 스택

```
- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion (애니메이션)
- TypeScript
- react-icons (아이콘)
- Vercel (배포)
```

---

## 프로젝트 생성

```bash
npx create-next-app@latest [프로젝트명] --typescript --tailwind --eslint --app --src-dir --no-turbo --import-alias "@/*" --use-npm
cd [프로젝트명]
npm install framer-motion react-icons next-sitemap
```

---

## 핵심 섹션 구조

### 1. Hero Section (히어로)
```tsx
<section className="relative min-h-screen flex items-center justify-center">
  {/* 배경 동영상 (선택) */}
  <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-40">
    <source src="/video.mp4" type="video/mp4" />
  </video>

  {/* 그라데이션 오버레이 */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

  {/* 콘텐츠 */}
  <div className="relative z-10 text-center">
    <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full">
      이벤트 기간
    </span>
    <h1 className="text-4xl md:text-7xl font-black">브랜드명</h1>
    <h2 className="text-3xl md:text-6xl font-black">이벤트 타이틀</h2>
    <p className="text-xl text-zinc-300">서브 카피</p>

    {/* CTA 버튼 */}
    <div className="flex gap-4 justify-center">
      <a href="#pricing" className="px-8 py-4 bg-green-500 text-black font-bold rounded-full">
        혜택 보러가기
      </a>
      <a href="tel:000-0000-0000" className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-full">
        전화 문의
      </a>
    </div>
  </div>
</section>
```

### 2. Pricing Section (가격표)
```tsx
<section id="pricing" className="py-16 px-4 bg-zinc-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center">신년 특별 혜택</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* 가격 카드 */}
      <div className="bg-zinc-800 border-2 border-green-500/30 rounded-3xl p-8">
        <div className="absolute top-0 right-0 bg-green-500 text-black px-4 py-1 rounded-bl-xl">
          혜택 1
        </div>
        <h3 className="text-2xl font-bold text-green-400">상품명</h3>

        <div className="space-y-4">
          <div className="flex justify-between p-4 bg-zinc-700/50 rounded-xl">
            <span>1인 등록 시</span>
            <span className="font-bold">월 00,000원</span>
          </div>
          <div className="flex justify-between p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
            <span className="text-green-400">2인 등록 시</span>
            <span className="text-2xl font-black text-green-400">월 00,000원</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Mission/CTA Section (미션/액션)
```tsx
<section className="py-16 px-4 bg-black">
  <h2 className="text-3xl font-bold text-center">미션 달성하고 추가 할인!</h2>

  {/* 미션 카드 리스트 */}
  <div className="grid gap-4">
    {missions.map((mission) => (
      <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400">
            {mission.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold">{mission.title}</h4>
            <p className="text-zinc-400 text-sm">{mission.description}</p>
          </div>
          <span className="text-green-400 font-bold">-{mission.discount}원</span>
        </div>
        <a href={mission.link} className="mt-4 block py-2 bg-yellow-400 text-black text-center rounded-lg">
          바로가기
        </a>
      </div>
    ))}
  </div>

  {/* 폼 */}
  <form className="mt-8 space-y-4">
    <input type="text" placeholder="이름" className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl" />
    <input type="tel" placeholder="연락처" className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl" />
    <button type="submit" className="w-full py-4 bg-green-500 text-black font-bold rounded-xl">
      신청하기
    </button>
  </form>
</section>
```

### 4. Facility Section (시설/정보)
```tsx
<section className="py-16 px-4 bg-zinc-900">
  <h2 className="text-3xl font-bold text-center">시설 안내</h2>

  <div className="grid md:grid-cols-2 gap-8">
    {/* 이미지 */}
    <div className="relative aspect-video rounded-2xl overflow-hidden">
      <Image src="/facility.jpg" alt="시설" fill className="object-cover" />
    </div>

    {/* 정보 */}
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
          <FiMapPin className="text-2xl" />
        </div>
        <div>
          <h4 className="font-bold">위치</h4>
          <p className="text-zinc-400">주소</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
          <FiClock className="text-2xl" />
        </div>
        <div>
          <h4 className="font-bold">운영시간</h4>
          <p className="text-zinc-400">00:00 - 00:00</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
          <FiPhone className="text-2xl" />
        </div>
        <div>
          <h4 className="font-bold">연락처</h4>
          <p className="text-zinc-400">000-0000-0000</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. Footer
```tsx
<footer className="bg-black border-t border-zinc-800 py-8 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-xl font-bold gradient-text mb-4">브랜드명</h3>
    <p className="text-zinc-400 text-sm">주소</p>
    <p className="text-zinc-400 text-sm">전화: 000-0000-0000</p>
    <p className="text-zinc-500 text-xs mt-4">
      © 2025 브랜드명. All rights reserved.
    </p>
  </div>
</footer>
```

---

## 필수 컴포넌트

### CountdownTimer (카운트다운)
```tsx
"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2025-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-zinc-800 rounded-xl p-4 min-w-[80px]">
          <span className="text-3xl font-black text-green-400">{value}</span>
          <p className="text-zinc-400 text-sm">{key}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## Google Sheets 연동

### 1. Google Apps Script 생성
```javascript
const SPREADSHEET_ID = '시트ID';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheets()[0];
  const koreaTime = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

  const newRow = [
    data.name || '',
    data.phone || '',
    koreaTime,
    data.totalDiscount || 0,
    // 추가 필드...
  ];

  sheet.appendRow(newRow);
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2. 프론트엔드 연동
```tsx
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, ... }),
  });
};
```

---

## SEO 설정

### layout.tsx 메타데이터
```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: {
    default: "브랜드 이벤트 | 타이틀",
    template: "%s | 브랜드",
  },
  description: "이벤트 설명...",
  openGraph: {
    type: "website",
    title: "브랜드 이벤트",
    description: "이벤트 설명",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "브랜드 이벤트",
    images: ["/og-image.png"],
  },
  keywords: ["키워드1", "키워드2", ...],
};
```

### next-sitemap.config.js
```javascript
module.exports = {
  siteUrl: 'https://your-domain.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
```

---

## 배포

### Vercel 배포
```bash
npx vercel --prod
```

### 환경변수 설정
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xxx/exec
```

---

## 체크리스트

### 필수 에셋
- [ ] og-image.png (1200x630)
- [ ] favicon.ico
- [ ] 로고 이미지
- [ ] 시설/상품 이미지
- [ ] 배경 동영상 (선택)

### 필수 정보
- [ ] 브랜드명
- [ ] 이벤트 기간
- [ ] 가격 정보
- [ ] 연락처
- [ ] 주소
- [ ] 운영시간
- [ ] SNS 링크 (카카오톡, 네이버 등)

### 배포 전 확인
- [ ] 모바일 반응형 테스트
- [ ] 링크 작동 확인
- [ ] 폼 제출 테스트
- [ ] 이미지 최적화
- [ ] 메타데이터 확인

---

## 스타일 가이드

### 컬러 팔레트
```css
/* 다크 테마 */
--bg-primary: #0a0a0a;
--bg-secondary: #18181b; /* zinc-900 */
--bg-card: #27272a; /* zinc-800 */

/* 액센트 */
--accent-green: #22c55e; /* green-500 */
--accent-yellow: #facc15; /* yellow-400 */

/* 텍스트 */
--text-primary: #ffffff;
--text-secondary: #a1a1aa; /* zinc-400 */
--text-muted: #71717a; /* zinc-500 */
```

### 그라데이션 텍스트
```css
.gradient-text {
  background: linear-gradient(90deg, #22c55e, #facc15);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 글로우 효과
```css
.glow-green {
  box-shadow: 0 0 30px rgba(34, 197, 94, 0.3);
}
```

---

## 사용 예시

### 명령어
```
이 docs/landing-page-skill.md 파일을 참고해서
[업종] 이벤트 랜딩페이지를 만들어줘.

- 브랜드명: xxx
- 이벤트 기간: 2025.01.01 ~ 2025.01.31
- 주요 혜택: xxx
- 가격: xxx
- 연락처: xxx
- 주소: xxx
```
