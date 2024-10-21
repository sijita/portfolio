import { useTranslations } from 'next-intl';

export default function useProjectsItems() {
  const t = useTranslations('Projects.projects');
  const projects = [
    {
      id: 1,
      title: 'Movie-Verse',
      description: t('movieverse.description'),
      image: '/movieverse.png',
      liveUrl: 'https://movie-verse-test.vercel.app/home',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },

    {
      id: 2,
      title: 'Football Quiz',
      description: t('footballquiz.description'),
      image: '/football-quiz.png',
      liveUrl: 'https://football-quiz-three.vercel.app/',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 3,
      title: 'Pokedex',
      description: t('pokedex.description'),
      image: '/pokedex.png',
      liveUrl: 'https://pokedex-2-kappa.vercel.app/',
      technologies: ['Nextjs', 'Typescript', 'Tailwindcss'],
    },
    {
      id: 4,
      title: 'eCommerce',
      description: t('ecommerce.description'),
      image: '/ecommerce.png',
      liveUrl: 'https://sneakers-ecommerce-snowy.vercel.app/',
      technologies: ['Nextjs', 'Tailwindcss', 'Postgresql', 'Prisma'],
    },
    {
      id: 5,
      title: 'Servidrones',
      description: t('servidrones.description'),
      image: '/servidrones.png',
      liveUrl: 'https://servidrones.vercel.app/',
      technologies: ['React', 'Tailwindcss'],
    },
    {
      id: 6,
      title: 'Ambeyma hotel',
      description: t('ambeyma.description'),
      image: '/ambeyma.png',
      liveUrl: 'https://hotelambeyma.com/',
      technologies: ['React', 'Bootstrap'],
    },
  ];

  return projects;
}
