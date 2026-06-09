'use client';

import { useEffect, useState } from 'react';

const getInitialMatch = (query: string) => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return false;
  }

  return window.matchMedia(query).matches;
};

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => getInitialMatch(query));

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;

    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
};
