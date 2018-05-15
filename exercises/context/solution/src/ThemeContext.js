import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  color: '#fd79a8',
});

export { Provider, Consumer };
