import React, { ReactNode, createContext, useContext, useState } from 'react';
import { SupplierContextType } from '../interfaces';

export const SupplierContext = createContext<SupplierContextType | null>(null);

export default function SupplierProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [supplierId, setSupplierId] = useState<number>(0);
  const [supplierName, setSupplierName] = useState<string>('');

  const updateSupplierId = (id: number) => {
    setSupplierId(id)
  }

  const updateSupplierName = (name: string) => {
    setSupplierName(name);
  }
  return (
    <SupplierContext.Provider
      value={{ supplierId, supplierName, updateSupplierId, updateSupplierName }}>
      {children}
    </SupplierContext.Provider>
  );
}

export function useSupplier() {
  return useContext(SupplierContext);
}
