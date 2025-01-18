import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return { scrollY };
};