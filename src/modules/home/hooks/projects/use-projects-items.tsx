import { useTranslations } from 'next-intl';

export default function useProjectsItems() {
  const t = useTranslations('Projects.projects');
  const projects = [
    {
      id: 1,
      title: 'Catering Food and Bakery',
      description: t('cateringfoodbakery.description'),
      image: '/cateringfood.jpeg',
      liveUrl: 'https://catering-food-bakery.vercel.app/',
      repoUrl: 'https://github.com/sijita/catering-food-bakery',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 2,
      title: 'Rodriguez Cleaning',
      description: t('rodriguezcleaning.description'),
      image: '/rodriguezcleaning.jpeg',
      liveUrl: 'https://www.rodriguezcleaningco.com/',
      repoUrl: 'https://github.com/sijita/rodriguez-cleaning',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 3,
      title: 'Futseek',
      description: t('futseek.description'),
      image: '/futseek.png',
      liveUrl: 'https://futseek.com',
      repoUrl: 'https://futseek.com',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 4,
      title: 'Movieverse',
      description: t('movieverse.description'),
      image: '/movieverse.png',
      liveUrl: 'https://movieverse-info.vercel.app/',
      repoUrl: 'https://github.com/sijita/movieverse',
      technologies: ['Nextjs', 'Typescript', 'Supabase', 'Tailwindcss'],
    },
    {
      id: 5,
      title: 'Football Quiz',
      description: t('footballquiz.description'),
      image: '/football-quiz.png',
      liveUrl: 'https://football-quiz-three.vercel.app/',
      repoUrl: 'https://github.com/sijita/football-quiz',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 6,
      title: 'Pokedex',
      description: t('pokedex.description'),
      image: '/pokedex.png',
      liveUrl: 'https://pokedex-2-kappa.vercel.app/',
      repoUrl: 'https://github.com/sijita/Pokedex_2.0',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 7,
      title: 'eCommerce',
      description: t('ecommerce.description'),
      image: '/ecommerce.png',
      liveUrl: 'https://sneakers-ecommerce-snowy.vercel.app/',
      repoUrl: 'https://github.com/sijita/sneakers-ecommerce',
      technologies: ['Nextjs', 'Tailwindcss', 'Postgresql', 'Prisma'],
    },
    {
      id: 8,
      title: 'Servidrones',
      description: t('servidrones.description'),
      image: '/servidrones.png',
      liveUrl: 'https://servidrones.vercel.app/',
      repoUrl: 'https://github.com/sijita/Servidrones',
      technologies: ['React', 'Tailwindcss'],
    },
  ];

  return projects;
}
