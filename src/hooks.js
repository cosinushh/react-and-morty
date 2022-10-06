import { useState, useEffect } from 'react';

function useToggle(initialState = false) {
  const [visible, setVisible] = useState(initialState);

  const toggle = () => setVisible((prevVisible) => !prevVisible);

  return [visible, toggle];
}

// Thanks you, https://github.com/sebsch1337
function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) ?? initialValue);

  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state, key]);

  const remove = () => localStorage.removeItem(key);

  return [state, setState, remove];
}

export { useToggle, useLocalStorage };
