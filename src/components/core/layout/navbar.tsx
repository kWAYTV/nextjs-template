'use client';

import { motion, useScroll } from 'motion/react';
import Link from 'next/link';
import * as React from 'react';

import { ModeToggle } from '@/components/ui/mode-toggle';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest: number) => {
      setIsScrolled(latest > 0);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 dark:bg-background/80 dark:supports-[backdrop-filter]:bg-background/60'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className='mx-auto max-w-screen-xl px-4'>
        <nav className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <motion.span
              className='text-xl font-bold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NextJS Template
            </motion.span>
          </Link>
          <ModeToggle />
        </nav>
      </div>
      <motion.div
        className='w-full'
        animate={{
          opacity: isScrolled ? 1 : 0,
          height: isScrolled ? '1px' : '0px'
        }}
        transition={{ duration: 0.2 }}
      >
        <Separator
          className={cn(
            'transition-colors duration-200',
            isScrolled ? 'bg-border' : 'bg-transparent'
          )}
        />
      </motion.div>
    </motion.header>
  );
}
