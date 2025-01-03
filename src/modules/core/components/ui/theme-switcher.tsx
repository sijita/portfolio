import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      aria-label="Toggle theme"
      className="relative"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      radius="full"
      variant="flat"
      size="sm"
    >
      <HiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <HiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
