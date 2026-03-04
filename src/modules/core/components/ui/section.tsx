'use client';

import { type ReactNode } from 'react';

type SectionVariant = 'default' | 'muted' | 'elevated';

type SectionProps = {
  children: ReactNode;
  /** id para el ancla de navegación */
  id?: string;
  /** Fondo sutil para alternar ritmo visual */
  variant?: SectionVariant;
  /** Menos padding vertical (para agrupar título + contenido) */
  compact?: boolean;
  className?: string;
};

const variantStyles: Record<SectionVariant, string> = {
  default: '',
  muted:
    'rounded-2xl bg-neutral-100/80 dark:bg-white/[0.03] border border-neutral-200/50 dark:border-neutral-800/50',
  elevated:
    'rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm',
};

export default function Section({
  children,
  id,
  variant = 'default',
  compact = false,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        'md:container mx-auto sm:px-4 md:px-20 xl:px-40',
        compact ? 'py-8' : 'py-14',
        'flex flex-col gap-10',
        variantStyles[variant],
        variant !== 'default' ? 'px-6 md:px-10' : '',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  );
}
