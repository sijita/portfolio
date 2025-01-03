'use client';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import LocaleSwitcher from './locale-switcher';
import ThemeSwitcher from './theme-switcher';
import useHandleNavbar from '@/modules/core/hooks/use-handle-navbar';

export default function NavBar() {
  const { linksItems, pathname, isMenuOpen, setIsMenuOpen, activeSection } =
    useHandleNavbar();

  return (
    <Navbar
      className="mt-5 p-5 bg-transparent"
      classNames={{
        menu: 'flex flex-col items-center justify-center top-0 bg-default rounded-b-2xl',
        wrapper: 'max-w-full flex justify-center',
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      shouldHideOnScroll
    >
      <NavbarContent className="max-md:hidden" justify="start"></NavbarContent>
      <NavbarContent className="md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
      </NavbarContent>
      <NavbarContent className="max-md:hidden" justify="center">
        <div className="w-full flex items-center gap-10 py-3 px-5 rounded-full bg-[#ffffff] dark:bg-[#0d0d0d] shadow-md">
          <p className="font-medium text-primary uppercase">Sijita</p>
          <div className="flex gap-4">
            {linksItems.map((item, index) => (
              <NavbarItem key={index}>
                <Link
                  className={`uppercase text-sm ${
                    `#${activeSection}` === item.href
                      ? 'text-primary font-semibold'
                      : 'text-black dark:text-white'
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex items-center gap-2 py-3 px-5 bg-[#ffffff] dark:bg-[#0d0d0d] shadow-md rounded-full">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </NavbarContent>
      <NavbarMenu className="dark:bg-[#0d0d0d] bg-white">
        {linksItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={`${
                pathname.includes(item.href)
                  ? 'text-primary font-semibold'
                  : 'dark:text-white text-black'
              } text-lg`}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
