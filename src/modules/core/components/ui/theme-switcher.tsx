import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useRef } from 'react';

// Extend Document interface for View Transitions API
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => {
      ready: Promise<void>;
    };
  }
}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleThemeToggle = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get the click position
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) {
      setTheme(newTheme);
      return;
    }

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the radius needed to cover the entire viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Start the view transition
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    // Wait for the transition to be ready
    await transition.ready;

    // Animate the circular reveal
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: newTheme === 'dark' ? clipPath.reverse() : clipPath,
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: newTheme === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)',
      }
    );
  };

  return (
    <Button
      ref={buttonRef}
      isIconOnly
      aria-label="Toggle theme"
      className="relative"
      onClick={handleThemeToggle}
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
