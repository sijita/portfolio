'use client';
import ProjectCard from './project-card';
import useProjectsItems from '@/modules/home/hooks/projects/use-projects-items';

export default function ProjectsSection() {
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
}
