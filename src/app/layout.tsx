import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://itnfitness-newyear-event.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ITN 피트니스 신년 이벤트 | 2025년 새해 특별 할인",
    template: "%s | ITN 피트니스",
  },
  description:
    "2025년 새해를 맞아 ITN 피트니스에서 준비한 특별 이벤트! 헬스 12개월 2인 등록 시 월 45,000원, 운동복/수건/사물함 무료 제공. 미션 달성 시 최대 4만원 추가 할인! 함께 시작하면, 더 오래 이어집니다.",
  alternates: {
    canonical: siteUrl,
    languages: { ko: `${siteUrl}/` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ITN 피트니스 신년 이벤트 | 2025년 새해 특별 할인",
    description:
      "함께 시작하면, 더 오래 이어집니다! 헬스 12개월 2인 등록 시 월 45,000원. 미션 달성 시 최대 4만원 추가 할인!",
    siteName: "ITN 피트니스",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ITN 피트니스 2025 신년 이벤트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITN 피트니스 신년 이벤트 | 2025년 새해 특별 할인",
    description:
      "헬스 12개월 2인 등록 시 월 45,000원! 미션 달성 시 최대 4만원 추가 할인.",
    images: ["/og-image.png"],
  },
  keywords: [
    "동해 피트니스",
    "동해 헬스장",
    "ITN 피트니스",
    "신년 이벤트",
    "헬스장 할인",
    "2025 신년 프로모션",
    "체형교정",
    "PT",
    "퍼스널트레이닝",
    "동해시 헬스",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "fitness",
  verification: {},
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
