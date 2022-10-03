import { useState } from 'react';

function useDetailsStatus(initialState) {
  const [showDetails, setShowDetails] = useState(initialState);

  return [
    showDetails,
    {
      toggleDetailsStatus: () => {
        setShowDetails((prevDetails) => !prevDetails);
      },
    },
  ];
}

export default useDetailsStatus;
