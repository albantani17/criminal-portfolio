import { useEffect, useState } from "react";

const useActiveSession = () => {
  const [activeSection, setActiveSection] = useState<string>("profile");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "") {
        setActiveSection("profile");
        return;
      }
      setActiveSection(hash);
    };

    const handleScroll = () => {
      const sections = ["profile", "case-files", "criminal-record", "tip-line"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
              // Update URL hash without triggering scroll
              window.history.replaceState(null, "", `#${sectionId}`);
            }
            break;
          }
        }
      }
    };

    // Set initial state
    handleHashChange();

    // Add event listeners
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return { activeSection };
};

export default useActiveSession;
