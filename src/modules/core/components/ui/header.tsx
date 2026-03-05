'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const stagger = 0.04;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

function AnimatedLine({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * stagger,
            ease,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
    >
      <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      <motion.div
        className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.span className="w-1 h-1.5 rounded-full bg-current" />
      </motion.div>
    </motion.div>
  );
}

export default function Header() {
  const t = useTranslations('Index.header');
  const developer = t('developer');
  const fullstack = t('fullstack');
  const codeDelay = 0.3 + (developer.length + fullstack.length) * stagger + 0.35;

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-10 min-h-[60vh] overflow-hidden pb-16">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src="/logo.png"
          alt="Sijita"
          width={500}
          height={500}
          className="w-64 sm:w-80 lg:w-96 xl:w-[500px] relative z-50 drop-shadow-2xl"
          priority
        />
      </motion.div>
      <div className="relative z-10 flex flex-col gap-5">
        <div className="text-6xl max-lg:text-4xl font-bold max-sm:text-center relative z-10">
          <AnimatedLine text={developer} delay={0.3} />
          <AnimatedLine
            text={fullstack}
            className="text-primary"
            delay={0.3 + developer.length * stagger + 0.15}
          />
        </div>
        <motion.div
          className="font-mono text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/80 dark:bg-neutral-900/80 px-4 py-3 w-fit mx-auto sm:mx-0 shadow-sm"
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: codeDelay - 0.2, ease }}
        >
          <motion.div
            className="text-primary/70 dark:text-primary/60"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: codeDelay, ease }}
          >
            {'<developer>'}
          </motion.div>
          <motion.div
            className="text-neutral-500 dark:text-neutral-400 pl-2"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: codeDelay + 0.15, ease }}
          >
            {'  passion: "coding"'}
          </motion.div>
          <motion.div
            className="text-primary/70 dark:text-primary/60"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: codeDelay + 0.3, ease }}
          >
            {'</developer>'}
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
