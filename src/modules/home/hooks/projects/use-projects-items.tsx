import { useTranslations } from 'next-intl';

export default function useProjectsItems() {
  const t = useTranslations('Projects.projects');
  const projects = [
    {
      id: 1,
      title: 'Futseek',
      description: t('futseek.description'),
      image: '/futseek.png',
      liveUrl: 'https://futseek.vercel.app/',
      repoUrl: 'https://futseek.vercel.app/',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 2,
      title: 'Movieverse',
      description: t('movieverse.description'),
      image: '/movieverse.png',
      liveUrl: 'https://movieverse-info.vercel.app/',
      repoUrl: 'https://github.com/sijita/movieverse',
      technologies: ['Nextjs', 'Typescript', 'Supabase', 'Tailwindcss'],
    },
      {
      id: 3,
      title: 'Savory App',
      description: t('savoryapp.description'),
      image: '/savoryapp.jpeg',
      technologies: ['React Native', 'Typescript', 'Tailwindcss', 'Supabase'],
    },
    {
      id: 4,
      title: 'Lender App',
      description: t('lenderapp.description'),
      image: '/lenderapp.png',
      technologies: ['React Native', 'Typescript', 'Tailwindcss', 'Supabase'],
    },
   {
      id: 5,
      title: 'Tech Ecommerce',
      description: t('techecommerce.description'),
      image: '/techecommerce.png',
      liveUrl: "https://sijita-ecommerce.vercel.app/",
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss', 'Postgres', 'Prisma'],
    },
    {
      id: 6,
      title: 'Football Quiz',
      description: t('footballquiz.description'),
      image: '/football-quiz.png',
      liveUrl: 'https://football-quiz-three.vercel.app/',
      repoUrl: 'https://github.com/sijita/football-quiz',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 7,
      title: 'Pokedex',
      description: t('pokedex.description'),
      image: '/pokedex.png',
      liveUrl: 'https://pokedex-2-kappa.vercel.app/',
      repoUrl: 'https://github.com/sijita/Pokedex_2.0',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 8,
      title: 'KarolG Portfolio',
      description: t('karolgportfolio.description'),
      image: '/karolg.png',
      liveUrl: 'https://karolgportfolio.vercel.app/',
      technologies: ['Nextjs', 'Tailwindcss'],
    },
     {
      id: 9,
      title: 'Catering Food and Bakery',
      description: t('cateringfoodbakery.description'),
      image: '/cateringfood.jpeg',
      liveUrl: 'https://catering-food-bakery.vercel.app/',
      repoUrl: 'https://github.com/sijita/catering-food-bakery',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 10,
      title: 'Rodriguez Cleaning',
      description: t('rodriguezcleaning.description'),
      image: '/rodriguezcleaning.jpeg',
      liveUrl: 'https://www.rodriguezcleaningco.com/',
      repoUrl: 'https://github.com/sijita/rodriguez-cleaning',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 11,
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
