'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import DownloadCvBtn from './download-cv-btn';

export default function AboutMe() {
  const t = useTranslations('Index.aboutMe');

  return (
    <section className="md:container mx-auto sm:px-4 md:px-20 xl:px-40 py-14">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-60 h-60 overflow-hidden rounded-full border-3 border-primary flex-shrink-0">
          <Image
            src="/me.jpeg"
            alt="Foto personal"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg dark:text-gray-400 text-gray-700 sm:w-[35rem] max-lg:text-center">
            {t.rich('description', {
              space: () => <br></br>,
            })}
          </p>
          <DownloadCvBtn btnText={t('downloadCv')} />
        </div>
      </div>
    </section>
  );
}
