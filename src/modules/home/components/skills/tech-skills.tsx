'use client';
import { motion } from 'framer-motion';
import useSkillsItems from '../../hooks/skills/use-skills-items';

export default function TechSkills() {
  const technologies = useSkillsItems();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="md:container mx-auto sm:px-4 md:px-20 xl:px-40 py-14">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center group"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-3xl text-primary mb-2"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
            </motion.div>
            <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-400">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
