'use client';

import { ArrowUpIcon } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', latest => {
      setIsVisible(latest > 200);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className='fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size='icon'
        onClick={scrollToTop}
        className='group h-10 w-10 rounded-full bg-background shadow-lg transition-all duration-300 hover:scale-110 hover:bg-foreground hover:shadow-xl dark:border dark:border-border'
      >
        <ArrowUpIcon className='h-5 w-5 transition-all duration-300 group-hover:text-background dark:group-hover:text-background' />
      </Button>
    </motion.div>
  );
}
