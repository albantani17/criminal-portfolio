import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { navbarConstant } from "../constant/navbar.constant";
import LanguageSwitcher from "./language-switcher";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useActiveSession from "@/hooks/useActiveSession";
import { useLanguage } from "@/contexts/LanguageContext";

const DrawerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useActiveSession();
  const { language, setLanguage, t } = useLanguage();

  // Tutup drawer saat ukuran layar >= lg
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false); // tutup drawer
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className='cursor-pointer'>
        <Menu size={32} />
      </DrawerTrigger>
      <DrawerContent
        aria-label='Navigation'
        aria-describedby='navigation-menu'
        className='bg-neutral-800 lg:hidden'
      >
        <DrawerHeader>
          <DrawerTitle className='text-2xl font-special text-neutral-200 border-b-2 border-neutral-200'>
            Alban._Dev
          </DrawerTitle>
        </DrawerHeader>
        <div className='p-4'>
          <ul className='flex flex-col gap-2 mb-4'>
            {navbarConstant.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className={cn(
                    `group relative block py-2 px-4 rounded overflow-hidden font-special border-b-2 text-neutral-200 transition`,
                    activeSection === item.section && "text-black"
                  )}
                >
                  {/* Kertas utama */}
                  <span
                    className={cn(
                      "absolute inset-0 w-full bg-white rotate-0 z-0 transition-all duration-300",
                      activeSection === item.section
                        ? "top-0"
                        : "top-full group-hover:top-0"
                    )}
                  />
                  {/* Kertas kedua */}
                  <span
                    className={cn(
                      "absolute inset-0 w-full bg-white rotate-2 z-[-1] transition-all duration-300 delay-75",
                      activeSection === item.section
                        ? "top-1"
                        : "top-full group-hover:top-1"
                    )}
                  />
                  {/* Kertas ketiga */}
                  <span
                    className={cn(
                      "absolute inset-0 w-full bg-white -rotate-3 z-[-2] transition-all duration-300 delay-150",
                      activeSection === item.section
                        ? "top-2"
                        : "top-full group-hover:top-2"
                    )}
                  />
                  {/* Label */}
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-300 group-hover:text-black group-hover:border-b-2 group-hover:border-black",
                      activeSection === item.section &&
                        "border-b-2 border-black"
                    )}
                  >
                    {t(item.translationKey)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className='border-t border-neutral-600 pt-4'>
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
              className='justify-center'
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
