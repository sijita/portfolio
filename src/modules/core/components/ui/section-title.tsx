'use client';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, id }: { title: string; id?: string }) {
  return (
    <motion.div
      className="relative flex items-center justify-center w-full"
      id={id}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="absolute inset-0 flex items-center"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div 
          className="w-full border-t border-dashed border-neutral-600 relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        ></div>
      </motion.div>
      <motion.div
        className="relative z-10 bg-white dark:bg-[#000000] px-4 py-2 shadow-md rounded-full"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="font-medium dark:text-primary">{title}</p>
      </motion.div>
    </motion.div>
  );
}
