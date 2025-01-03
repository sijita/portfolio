import { BiLogoTypescript } from 'react-icons/bi';
import { FaDatabase, FaDocker, FaGitAlt, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiSupabaseFill } from 'react-icons/ri';
import { SiNestjs } from 'react-icons/si';

export default function useSkillsItems() {
  const technologies = [
    { name: 'TypeScript', icon: <BiLogoTypescript />, category: 'Frontend' },
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'Next.js', icon: <RiNextjsFill />, category: 'Frontend' },
    { name: 'NestJS', icon: <SiNestjs />, category: 'Backend' },
    {
      name: 'Bases de datos',
      icon: <FaDatabase size={25} />,
      category: 'Backend',
    },
    {
      name: 'Supabase',
      icon: <RiSupabaseFill size={25} />,
      category: 'Backend',
    },
    { name: 'Git', icon: <FaGitAlt />, category: 'Backend' },
    { name: 'Docker', icon: <FaDocker />, category: 'Backend' },
  ];

  return technologies;
}
