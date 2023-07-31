import React, { ReactNode, createContext, useContext, useState } from 'react';
import { SupplierContextType } from '../interfaces';

export const SupplierContext = createContext<SupplierContextType>({
  supplierId: 2,
  setSupplierId: () => 0,
  supplierName: '',
  setSupplierName: () => '',
});

export default function SupplierProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [supplierId, setSupplierId] = useState<number>(0);
  const [supplierName, setSupplierName] = useState<string>('');

  return (
    <SupplierContext.Provider
      value={{ supplierId, supplierName, setSupplierId, setSupplierName }}>
      {children}
    </SupplierContext.Provider>
  );
}

export function useSupplier() {
  return useContext(SupplierContext);
}
