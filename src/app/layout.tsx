import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "이따가 뭐 먹지 - 간단한 질문으로 딱 맞는 음식 추천",
  description: "간단한 질문으로 당신에게 딱 맞는 음식을 추천해드립니다. 식사 시간, 상황, 음주 여부를 선택하면 맞춤 음식을 추천받을 수 있습니다.",
  keywords: ["음식 추천", "식사 추천", "맛집", "음식 앱", "식사 시간 알림"],
  authors: [{ name: "이따가 뭐 먹지" }],
  openGraph: {
    title: "이따가 뭐 먹지 - 간단한 질문으로 딱 맞는 음식 추천",
    description: "간단한 질문으로 당신에게 딱 맞는 음식을 추천해드립니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "이따가 뭐 먹지",
  },
  twitter: {
    card: "summary_large_image",
    title: "이따가 뭐 먹지 - 간단한 질문으로 딱 맞는 음식 추천",
    description: "간단한 질문으로 당신에게 딱 맞는 음식을 추천해드립니다.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "이따가 뭐 먹지",
    description: "간단한 질문으로 딱 맞는 음식을 추천해드립니다",
    applicationCategory: "Food & Drink",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
  };

  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} font-sans antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
