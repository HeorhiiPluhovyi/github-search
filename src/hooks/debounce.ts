import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay: number = 300): string {
  const [debounced, setDebouced] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      return setDebouced(value);
    }, delay);


    return () => clearTimeout(handler)
  }, [ value, delay ])
  

  return debounced;
}
