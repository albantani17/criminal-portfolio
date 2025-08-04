import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type Language = "en" | "id";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

const LanguageSwitcher = ({
  currentLanguage,
  onLanguageChange,
  className,
}: LanguageSwitcherProps) => {
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "id", label: "ID", flag: "🇮🇩" },
  ];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Globe className='text-red-500' size={20} />
      <div className='flex bg-neutral-700 rounded-lg p-1'>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200",
              currentLanguage === lang.code
                ? "bg-red-600 text-white shadow-sm"
                : "text-neutral-300 hover:text-white hover:bg-neutral-600"
            )}
          >
            <span className='text-xs'>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
