'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutMe() {
  const t = useTranslations('Index.aboutMe');

  return (
    <section className="md:container mx-auto sm:px-4 md:px-20 xl:px-40 py-14">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Image
          src="/me.jpg"
          alt="Foto personal"
          className="p-2 w-60 border border-primary rounded-full"
          width={500}
          height={500}
        />
        <p className="text-lg dark:text-gray-400 text-gray-700 sm:w-[35rem] max-lg:text-center">
          {t.rich('description', {
            space: () => <br></br>,
          })}
        </p>
      </div>
    </section>
  );
}
