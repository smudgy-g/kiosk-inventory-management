import React, { ReactNode, createContext, useContext, useState } from 'react';
import { ClientContextType } from '../interfaces';

export const ClientContext = createContext<ClientContextType | null>(null);

export default function ClientProvider({ children }: { children: ReactNode }) {
  const [clientId, setClientId] = useState<number>(0);
  const [clientName, setClientName] = useState<string>('');

  const updateClientId = async (id: number) => {
    await setClientId(id);
  };

  const updateClientName = async (name: string) => {
    await setClientName(name);
  };

  return (
    <ClientContext.Provider
      value={{ clientId, clientName, updateClientName, updateClientId }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  return useContext(ClientContext);
}
