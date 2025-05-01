import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { Providers } from '@/components/providers/providers';
import { createMetadata } from '@/lib/metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata = createMetadata({
  title: {
    default: 'NextJS Template',
    template: '%s | NextJS Template'
  },
  description:
    'A modern Next.js template with TypeScript, Tailwind CSS, and more.'
});
