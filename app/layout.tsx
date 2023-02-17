/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              首页
            </Link>
            <Link href="/notes">
              笔记
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
