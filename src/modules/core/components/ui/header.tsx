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

export default function Header() {
  const t = useTranslations('Index.header');
  const developer = t('developer');
  const fullstack = t('fullstack');

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-10 min-h-[60vh] overflow-hidden">
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
      <div className="relative z-10">
        <div className="text-6xl max-lg:text-4xl font-bold max-sm:text-center relative z-10">
          <AnimatedLine text={developer} delay={0.3} />
          <AnimatedLine text={fullstack} className="text-primary" delay={0.3 + developer.length * stagger + 0.15} />
        </div>
        <div className="absolute -bottom-10 left-0 text-xs text-primary/40 font-mono">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.3 + (developer.length + fullstack.length) * stagger + 0.4, ease }}
          >
            {'<developer>'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.3 + (developer.length + fullstack.length) * stagger + 0.55, ease }}
          >
            {'  passion: "coding"'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.3 + (developer.length + fullstack.length) * stagger + 0.7, ease }}
          >
            {'</developer>'}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
