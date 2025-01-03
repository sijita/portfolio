'use client';
import useSkillsItems from '../../../hooks/skills/use-skills-items';

export default function TechSkills() {
  const technologies = useSkillsItems();

  return (
    <section className="md:container mx-auto sm:px-4 md:px-20 xl:px-40 py-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group">
            <div className="text-3xl text-primary mb-2">{tech.icon}</div>
            <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
