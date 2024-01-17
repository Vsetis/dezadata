import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollHash = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = location.hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView();
      }
    };

    scrollToHash();

    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);
};

export default useScrollHash;
