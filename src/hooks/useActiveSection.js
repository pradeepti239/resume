import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function updateActiveSection() {
      let current = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = id;
        }
      });

      setActiveSection(current);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}