import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@nextui-org/react';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { HiTranslate } from 'react-icons/hi';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isSpanish, setIsSpanish] = useState(locale === 'es');

  const handleLocale = () => {
    const newLocale = isSpanish ? 'en' : 'es';
    setIsSpanish(!isSpanish); // Cambiar el estado para la animación
    router.push(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <Button
      aria-label="Toggle locale"
      className="relative flex items-center gap-2"
      onClick={handleLocale}
      radius="full"
      variant="flat"
      size="sm"
    >
      {/* Texto ES y EN con animación basada en isSpanish */}
      {isSpanish ? 'ES' : 'EN'}
      <span className="sr-only">Toggle locale</span>
      <HiTranslate size={15} />
    </Button>
  );
}
