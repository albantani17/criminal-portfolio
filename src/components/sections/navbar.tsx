import useActiveSession from "@/hooks/useActiveSession";
import { navbarConstant } from "../constant/navbar.constant";
import DrawerNav from "../ui/drawer-nav";
import LanguageSwitcher from "../ui/language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { activeSection } = useActiveSession();
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <nav className='container w-full z-50 bg-neutral-800 py-4 px-2 border-b-2 flex justify-start lg:justify-between items-center text-neutral-200 font-special gap-2'>
        <div className='text-2xl order-2 lg:order-1 font-bold'>Alban_.Dev</div>
        <div className='flex items-center gap-4 order-1 lg:order-2'>
          <ul className='flex lg:space-x-4'>
            {navbarConstant.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className={cn(
                    "hover:underline hidden lg:flex hover:text-neutral-300 px-2 py-1 rounded-sm",
                    {
                      "bg-neutral-100 text-neutral-800 underline hover:text-black":
                        activeSection === item.section,
                    }
                  )}
                >
                  {t(item.translationKey)}
                </a>
              </li>
            ))}
            <li className='flex items-center w-full justify-center lg:hidden'>
              <DrawerNav />
            </li>
          </ul>
          <div className='hidden lg:flex'>
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
