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
      className='fixed right-4 bottom-4 z-50 md:right-8 md:bottom-8'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size='icon'
        onClick={scrollToTop}
        className='group bg-background hover:bg-foreground dark:border-border h-10 w-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:border'
      >
        <ArrowUpIcon className='group-hover:text-background dark:group-hover:text-background h-5 w-5 transition-all duration-300' />
      </Button>
    </motion.div>
  );
}
