'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ProjectCard from './project-card';
import useProjectsItems from '@/modules/home/hooks/projects/use-projects-items';

export default function ProjectsSection() {
  const t = useTranslations('Projects');
  const projects = useProjectsItems();

  return (
    <div className="space-y-10">
      <motion.p
        className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {t('subtitle')}
      </motion.p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 list-none p-0 m-0 items-stretch">
        {projects.map((project, index) => (
          <li key={project.id} className="min-h-full">
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
