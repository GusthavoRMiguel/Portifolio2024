import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(key);
      if (storageValue) {
        return JSON.parse(storageValue);
      }
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
