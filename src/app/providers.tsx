'use client';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();
  return (
    <NextUIProvider navigate={push}>
      <NextThemesProvider attribute="class" enableSystem>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
