import { createContext, useContext } from 'react';
import { ClientContextType, SupplierContextType } from './interfaces';

export const ClientContext = createContext<ClientContextType>({
  clientId: 0,
  setClientId: () => void 0,
});

export const SupplierContext = createContext<SupplierContextType>({
  supplierId: 0,
  setSupplierId: () => void 0,
});

export const useClientContext = () => useContext(ClientContext);

export const useSupplierContext = () => useContext(SupplierContext);
