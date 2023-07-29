import React from 'react';

export interface Supplier {
  clientId: Number;
  companyName: String;
  contactName: String;
  email: String;
  id: number;
}

export interface newSupplier {
  clientId: Number;
  companyName: String;
  contactName: String;
  email: String;
}

export interface ClientContextType {
  clientId: number;
  setClientId: (c: number) => void;
}
export interface SupplierContextType {
  supplierId: number;
  setSupplierId: (c: number) => void;
}

export interface ProductType {
  id: Number;
  supplierId: Number;
  productId: Number | undefined;
  name: String;
  price: String;
}

export interface LocationState {
  id: string;
  name: String;
}

export interface ProductComponentTypes {
  id: Number;
  name: String;
  price: String;
  onUpdateQuantity: Function;
}

export interface ProductToOrderType {
  id: number;
  price: number;
  quantity: number;
  name: String;
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
