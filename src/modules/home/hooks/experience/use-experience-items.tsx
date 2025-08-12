import { useTranslations } from 'next-intl';

export default function useExperienceItems() {
  const t = useTranslations('Experience.employeeJobsList.jobs');
  const experienceItems = [
    {
      date: t('leancore.year'),
      label: t('leancore.job'),
      title: t('leancore.company'),
    },
    {
      date: t('themadfox.year'),
      label: t('themadfox.job'),
      title: t('themadfox.company'),
    },
    {
      date: t('hospital.year'),
      label: t('hospital.job'),
      title: t('hospital.company'),
    },
    {
      date: t('bemaster.year'),
      label: t('bemaster.job'),
      title: t('bemaster.company'),
    },
    {
      date: t('trespimedios2.year'),
      label: t('trespimedios2.job'),
      title: t('trespimedios2.company'),
    },
    {
      date: t('trespimedios.year'),
      label: t('trespimedios.job'),
      title: t('trespimedios.company'),
    },
  ];
  return experienceItems;
}
