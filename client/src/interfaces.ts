import React from 'react';

export interface Supplier {
  clientId: number;
  companyName: string;
  contactName: string;
  email: string;
  id: number;
}

export interface newSupplier {
  clientId: number;
  companyName: string;
  contactName: string;
  email: string;
}

export interface ClientContextType {
  clientId: number;
  updateClientId: (id: number) => void;
  // setClientId: React.Dispatch<React.SetStateAction<number>>;
  clientName: string;
  updateClientName: (name: string) => void;
  // setClientName: React.Dispatch<React.SetStateAction<string>>;
}

export interface SupplierContextType {
  supplierId: number;
  updateSupplierId: (id: number) => void;
  // setSupplierId: React.Dispatch<React.SetStateAction<number>>;
  supplierName: string;
  updateSupplierName: (name: string) => void;
  // setSupplierName: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductType {
  id: number;
  supplierId: number;
  productId: number | undefined;
  name: string;
  price: string;
}

export interface LocationState {
  id: string;
  name: string;
}

export interface ProductComponentTypes {
  id: number;
  name: string;
  price: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onUpdateQuantity: Function;
}

export interface ProductToOrderType {
  id: number;
  price: number;
  quantity: number;
  name: string;
}

export interface OrderType {
  clientId: number;
  supplierId: number;
  price: number;
  products: {
    id: number;
    quantity: number;
  }[];
}

export interface newProductType {
  supplierId: number;
  productName: string;
  productId: number | undefined;
  price: number;
}
