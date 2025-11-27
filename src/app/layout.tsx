import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ITN 피트니스 신년 이벤트 | 2025년 새해 특별 할인",
  description: "2025년 새해를 맞아 ITN 피트니스에서 준비한 특별 이벤트! 헬스 12개월 2인 등록 시 월 45,000원, 운동복/수건/사물함 무료 제공. 함께 시작하면, 더 오래 이어집니다!",
  keywords: ["동해 피트니스", "신년 이벤트", "헬스장 할인", "ITN 피트니스", "동해 헬스장", "2025 신년 프로모션"],
  openGraph: {
    title: "ITN 피트니스 신년 이벤트 | 2025년 새해 특별 할인",
    description: "함께 시작하면, 더 오래 이어집니다! 헬스 12개월 2인 등록 시 월 45,000원",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} antialiased bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
