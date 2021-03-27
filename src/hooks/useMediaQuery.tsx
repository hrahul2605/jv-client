import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [queryToMatch, setQueryToMatch] = useState(query);
  const [matches, setMatches] = useState(
    window.matchMedia(queryToMatch).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(queryToMatch);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.addEventListener('change', listener);
  }, [matches, queryToMatch]);

  // matches is boolean value which says if the query passed matches to current DOM width
  // with setQueryToMatch custom query can be set
  return [matches, setQueryToMatch];
};

export default useMediaQuery;
