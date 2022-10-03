import { useState } from 'react';

function useToggle(initialState = false) {
  const [visible, setVisible] = useState(initialState);

  const toggle = () => setVisible((prevVisible) => !prevVisible);

  return [visible, toggle];
}

export { useToggle };
