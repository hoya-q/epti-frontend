import { Geist, Geist_Mono, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSans = Noto_Sans_KR({
  variable: '--font-noto',
  subsets: ['latin', 'korean'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'epti - AI 기반 EPUB 제작 플랫폼',
  description:
    'AI가 EPUB 제작의 전 과정을 자동화해 목소리와 효과음까지 생생하게 구현된 동화책을 단 한 번에 완성하세요.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
