import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <footer className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent">
            {t('connect')}
          </h3>
          <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">{t('openTo')}</p>
        </div>
        <div className="flex gap-3">
          <Button
            as={Link}
            href="https://github.com/sijita"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            radius="full"
            isIconOnly
            size="md"
            variant="flat"
            className="shadow-sm"
          >
            <FaGithub size={20} className="text-primary" />
          </Button>
          <Button
            as={Link}
            href="https://linkedin.com/in/simon-jimenez-tamayo"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            radius="full"
            isIconOnly
            size="md"
            variant="flat"
            className="shadow-sm"
          >
            <FaLinkedinIn size={20} className="text-primary" />
          </Button>
        </div>
      </div>
      <Button
        as={Link}
        href="mailto:simonjt.s2001@gmail.com"
        className="flex items-center justify-center gap-2 font-medium text-black"
        color="primary"
        variant="solid"
        size="lg"
        radius="full"
      >
        <TbMail size={20} />
        {t('title')}
      </Button>
      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Simón Jiménez Tamayo
        </p>
      </div>
    </footer>
  );
}
