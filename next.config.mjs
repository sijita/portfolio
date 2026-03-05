import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Evita 402 en Vercel Hobby: las imágenes se sirven desde /public sin optimización
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
