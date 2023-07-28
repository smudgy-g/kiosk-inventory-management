import React from 'react';

export interface Supplier {
  clientId: Number;
  companyName: String;
  contactName: String;
  email: String;
  id: Number;
}

export interface newSupplier {
  clientId: Number;
  companyName: String;
  contactName: String;
  email: String;
}

export interface ClientContextType {
  clientId: Number;
  setClientId: React.Dispatch<React.SetStateAction<Number>>;
}

export interface Product {
  id: Number;
  supplierId: Number;
  productId: Number | undefined;
  name: String;
  price: String;
}