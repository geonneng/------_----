import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";

const nanumMyeongjo = Nanum_Myeongjo({ 
  weight: ['400', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "조선왕조실록: rewrite - 조선 건국전",
  description: "고려 말, 조선 건국의 격동기를 이방원과 정몽주의 1인칭 시점으로 체험하는 역사 시뮬레이션 게임",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${nanumMyeongjo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
