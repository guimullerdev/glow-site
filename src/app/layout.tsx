import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { BottomNav } from '@/components/layout/BottomNav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JAH. Açaí Premium',
  description:
    'Os melhores açaís da cidade com promoções exclusivas e programa de fidelidade',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#9333ea',
  viewportFit: 'auto',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js').catch(err => console.log('Service worker registration failed', err));
            }
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
        <BottomNav />
      </body>
    </html>
  );
}

export default RootLayout;
