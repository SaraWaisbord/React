
import { useState, useEffect } from 'react';

const useLocalStorage = (method, initialValue, key) => {
  const [stateValue, setStateValue] = useState(initialValue);

  useEffect(() => {
    if (!key) return; 
    try {
      switch (method) {
        case 'set':
          localStorage.setItem(key, JSON.stringify(stateValue));
          console.log(`Value set in localStorage: ${stateValue}`);
          break;
        case 'remove':
          localStorage.removeItem(key);
          setStateValue(null);
          console.log(`Value removed from localStorage`);
          break;
        case 'get':
          const item = localStorage.getItem(key);
          setStateValue(item ? JSON.parse(item) : null);
          console.log(`Value retrieved from localStorage: ${item}`);
          break;
        default:
          console.log("The default case...😉👾👾👾👾")
      }
    } catch (error) {
      console.error("Error accessing localStorage", error);
    }
  }, [method, key]);

  return [stateValue, setStateValue];
};

export default useLocalStorage;
