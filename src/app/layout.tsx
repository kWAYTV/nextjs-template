import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { BackToTop } from '@/components/core/layout/back-to-top';
import { Footer } from '@/components/core/layout/footer';
import { Navbar } from '@/components/core/layout/navbar';
import { Providers } from '@/components/core/providers/providers';
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
        <Providers>
          <Navbar />
          <main className='mx-auto flex w-full max-w-screen-xl flex-1 items-center justify-center px-4'>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
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
