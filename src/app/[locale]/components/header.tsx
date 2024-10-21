import Image from 'next/image';
import React from 'react';

export default function Header() {
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
        Desarrollador
        <br />
        <span className="text-primary">Full Stack</span>
      </p>
    </div>
  );
}
