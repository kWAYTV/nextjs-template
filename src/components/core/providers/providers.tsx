'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import { TooltipProvider } from '@/components/ui/tooltip';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
      <Toaster richColors theme='system' />
    </>
  );
}
