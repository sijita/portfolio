'use client';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/3 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '60%', right: '10%' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-primary/4 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ bottom: '20%', left: '20%' }}
      />
    </div>
  );
}