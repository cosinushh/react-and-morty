import { useState, useEffect } from 'react';

function useToggle(initialState = false) {
  const [visible, setVisible] = useState(initialState);

  const toggle = () => setVisible((prevVisible) => !prevVisible);

  return [visible, toggle];
}

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export { useToggle, useLocalStorage };
