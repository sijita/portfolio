import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <footer className="md:container mx-auto pt-14" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-[#40EA2F] bg-clip-text text-transparent">
            Let&apos;s Connect!
          </h3>
          <p className="text-sm mt-2">
            I&apos;m always open to new opportunities and collaborations.
          </p>
        </div>
        <div className="flex space-x-4">
          <Button
            as={Link}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            radius="full"
            isIconOnly
            size="sm"
            variant="light"
          >
            <FaGithub className="text-primary" size={20} />
          </Button>
          <Button
            as={Link}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            radius="full"
            isIconOnly
            size="sm"
            variant="light"
          >
            <FaLinkedinIn className="text-primary" size={20} />
          </Button>
        </div>
      </div>
      <Button
        as={Link}
        href="mailto:simonjt.s2001@gmail.com"
        className="flex items-center gap-2 text-primary hover:text-black my-5"
        color="primary"
        variant="ghost"
        fullWidth
      >
        <TbMail />
        {t('title')}
      </Button>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Simón Jiménez Tamayo. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
