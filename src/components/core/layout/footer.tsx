'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';
import { githubProfileUrl, githubRepoUrl } from '@/lib/metadata';

export function Footer() {
  return (
    <motion.footer
      className='w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Separator />
      <div className='mx-auto max-w-(--breakpoint-xl) px-4'>
        <div className='flex h-16 items-center justify-center'>
          <p className='text-muted-foreground text-center text-sm'>
            Built by{' '}
            <Link
              href={githubProfileUrl}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              kWAY
            </Link>
            . The source code is available on{' '}
            <Link
              href={githubRepoUrl}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
