import { createContext, useContext } from 'react';
import { ClientContextType } from './interfaces';

export const ClientContext = createContext<ClientContextType>({
  clientId: 0,
  setClientId: () => {},
});

export const useClientContext = () => useContext(ClientContext);
