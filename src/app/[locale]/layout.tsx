import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

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
