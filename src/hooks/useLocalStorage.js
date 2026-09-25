import { useState, useEffect } from 'react';

/**
 * Hook genérico de localStorage (alternativa leve ao persist do Zustand).
 * Mantido para o roteiro de aula — o app principal usa Zustand persist.
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item != null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // ignore
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
