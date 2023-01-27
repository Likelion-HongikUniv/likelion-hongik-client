import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange(); // Triggered at the first client-side load and if query changes

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange); // IOS
    } else {
      matchMedia.addEventListener("change", handleChange); // Windows
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
