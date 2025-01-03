import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useHandleNavbar() {
  const t = useTranslations('Index.navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState('');

  const linksItems = [
    {
      label: t('aboutMe'),
      href: '#about',
    },
    {
      label: t('experience'),
      href: '#experience',
    },
    {
      label: t('projects'),
      href: '#projects',
    },
    {
      label: t('contact'),
      href: '#contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = linksItems.map((item) =>
        document.querySelector(item.href)
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.3, // Ajustado para que sea más preciso
          rootMargin: '0px 0px -50% 0px', // Observa cuando la sección está a la mitad del viewport
        }
      );
      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [linksItems]);

  return {
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    linksItems,
    pathname,
    t,
  };
}
