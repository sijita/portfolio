import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Providers from '../providers';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { Sora } from 'next/font/google';
import NavBar from '@/modules/core/components/ui/nav-bar';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sijita - Portafolio',
  description: 'Portafolio de Simón Jiménez Tamayo',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={sora.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
