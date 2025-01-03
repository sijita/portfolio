import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Header() {
  const t = await getTranslations('Index.header');

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
      <Image
        src="/logo.png"
        alt="Sijita"
        width={500}
        height={500}
        className="w-64 sm:w-80 lg:w-96 xl:w-[500px]"
      />
      <p className="text-6xl max-lg:text-4xl font-bold max-sm:text-center">
        {t('developer')}
        <br />
        <span className="text-primary">{t('fullstack')}</span>
      </p>
    </div>
  );
}
