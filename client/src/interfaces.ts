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
  clientName: string;
  updateClientName: (name: string) => void;
}

export interface SupplierContextType {
  supplierId: number;
  updateSupplierId: (id: number) => void;
  supplierName: string;
  updateSupplierName: (name: string) => void;
}

export interface ProductType {
  id: number;
  supplierId: number;
  productId: number | undefined;
  name: string;
  price: number;
}

export interface LocationState {
  id: string;
  name: string;
}

export interface ProductComponentTypes {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (item: ProductToOrderType) => void;
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
  date: string;
  comment: string;
}

export interface newProductType {
  supplierId: number;
  productName: string;
  productId: number | undefined;
  price: number;
}
