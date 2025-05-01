'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import { BackToTop } from '@/components/core/layout/back-to-top';
import { Footer } from '@/components/core/layout/footer';
import { Navbar } from '@/components/core/layout/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <TooltipProvider>
          <Navbar />
          <main className='mx-auto flex w-full max-w-(--breakpoint-xl) flex-1 items-center justify-center px-4'>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </TooltipProvider>
      </ThemeProvider>
      <Toaster richColors theme='system' />
    </>
  );
}
