import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 활용 사례 인사이트 | 1,001가지 생성형 AI 사례",
  description: "세계 최고 기업들의 1,001가지 실제 생성형 AI 활용 사례를 탐색하고 인사이트를 발견하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
