'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

export default function Header() {
  const t = useTranslations('Index.header');
  const controls = useAnimation();
  const [startTypewriter, setStartTypewriter] = useState(false);
  
  const developerText = useTypewriter(startTypewriter ? t('developer') : '', 80);
  const fullstackText = useTypewriter(startTypewriter ? t('fullstack') : '', 60);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      });
      await controls.start({
        rotateY: [0, 360],
        scale: [1, 1.1, 1],
        transition: { duration: 2, ease: "easeOut" }
      });
      setStartTypewriter(true);
    };
    
    const timer = setTimeout(sequence, 300);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-10 min-h-[60vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0.3, scale: 0.8, rotateY: -45 }}
        animate={controls}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div className="relative z-50">
          <Image
            src="/logo.png"
            alt="Sijita"
            width={500}
            height={500}
            className="w-64 sm:w-80 lg:w-96 xl:w-[500px] relative z-50 drop-shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 100, rotateX: -90 }}
        animate={{ 
          opacity: 1, 
          x: 0, 
          rotateX: 0,
          transition: { delay: 1.5, duration: 1, ease: "easeOut" }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 blur-xl rounded-lg"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="text-6xl max-lg:text-4xl font-bold max-sm:text-center relative z-10">
          <motion.div
            className="relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="relative">
              {developerText}
              <motion.span
                className="absolute right-0 top-0 w-0.5 h-full bg-primary"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.div>
          <motion.div
            className="relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <motion.span
              className="text-primary relative inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(var(--primary), 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              {fullstackText}
              <motion.span
                className="absolute right-0 top-0 w-0.5 h-full bg-primary"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
              />
            </motion.span>
          </motion.div>
        </div>
        <motion.div
          className="absolute -bottom-10 left-0 text-xs text-primary/40 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'<developer>'}
          </motion.div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            {'  passion: "coding"'}
          </motion.div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            {'</developer>'}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
