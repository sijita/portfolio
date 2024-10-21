'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import useProjectsItems from '../hooks/use-projects-items';
import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';

function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    technologies: string[];
  };
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-96 perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-1000 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 rounded-lg">
            <h3 className="text-white text-xl font-bold">{project.title}</h3>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white dark:bg-[#0d0d0d] rounded-lg p-6 flex flex-col justify-between gap-5 overflow-y-auto">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex-1">
                  <Chip
                    size="sm"
                    color="primary"
                    variant="dot"
                    className="min-w-full text-center border-1.5"
                  >
                    {tech}
                  </Chip>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-around gap-1">
            <Button
              as={Link}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              variant="light"
              color="primary"
              size="sm"
            >
              <FaGithub size={15} />
            </Button>
            <Button
              as={Link}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              variant="light"
              color="primary"
              size="sm"
            >
              <FaLink size={15} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectShowcase: React.FC = () => {
  const projects = useProjectsItems();
  return (
    <section className="md:container mx-auto sm:px-4 md:px-20 xl:px-40 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
