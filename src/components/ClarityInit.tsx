import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export const ClarityInit: React.FC = () => {
  useEffect(() => {
    // Initialize Clarity with your project ID
    Clarity.init('ucnp1vlff1');
  }, []);

  return null;
};

export default ClarityInit;
