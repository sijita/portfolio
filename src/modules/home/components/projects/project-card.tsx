'use client';

import { Button, Chip, Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
    repoUrl?: string;
    technologies: string[];
  };
  index?: number;
}) {
  const t = useTranslations('Projects');
  const remainingTech = project.technologies.slice(4);

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      custom={index}
      className="group h-full"
    >
      <div className="h-full flex flex-col min-h-0 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300">
        <div className="block relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          {(project.liveUrl || project.repoUrl) ? (
            <Link
              href={project.liveUrl ?? project.repoUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={340}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-lg">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-col flex-1 min-h-0 p-4 gap-3">
          <Tooltip content={project.description} delay={300} closeDelay={100} className="max-w-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 flex-1 min-h-0 cursor-help">
              {project.description}
            </p>
          </Tooltip>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                size="sm"
                variant="flat"
                className="text-xs bg-primary/10 dark:bg-primary/15 text-primary border-0"
              >
                {tech}
              </Chip>
            ))}
            {project.technologies.length > 4 && (
              <Tooltip
                content={
                  <div className="px-1 py-0.5">
                    <p className="text-xs font-medium mb-1.5">{t('technologiesLabel')}</p>
                    <p className="text-xs text-neutral-300">{remainingTech.join(', ')}</p>
                  </div>
                }
                delay={300}
                closeDelay={100}
              >
                <span className="inline-flex">
                  <Chip size="sm" variant="flat" className="text-xs text-neutral-500 cursor-help">
                    +{project.technologies.length - 4}
                  </Chip>
                </span>
              </Tooltip>
            )}
          </div>
          <div className="flex gap-2 pt-1">
            {project.repoUrl && (
              <Button
                as={Link}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="light"
                color="primary"
                isIconOnly
                aria-label="Repositorio"
              >
                <FaGithub size={16} />
              </Button>
            )}
            {project.liveUrl && (
              <Button
                as={Link}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="light"
                color="primary"
                isIconOnly
                aria-label="Ver proyecto"
              >
                <FaLink size={14} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
