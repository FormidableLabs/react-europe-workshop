import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  primaryColor: '#0984e3',
});

export { Provider, Consumer };
