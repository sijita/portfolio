'use client';
import { Button } from '@nextui-org/react';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';

export default function DownloadCvBtn({ btnText }: { btnText: string }) {
  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/hojadevida.pdf';
    link.download = 'hoja-de-vida-simon.pdf';
    link.click();
  };

  return (
    <Button
      className="bg-primary hover:bg-primary/70 transition-all uppercase font-semibold text-black flex gap-2 items-center justify-center"
      radius="full"
      size="sm"
      onClick={handleDownloadCv}
    >
      {btnText} <BsFileEarmarkArrowDownFill size={13} />
    </Button>
  );
}
