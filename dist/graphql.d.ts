export interface ClientLogin {
    email: string;
    password: string;
}
export interface NewClient {
    companyName: string;
    email: string;
    password: string;
    contactName: string;
}
export interface Client {
    id: string;
    companyName: string;
    email: string;
    hash: string;
    contactName: string;
    orders: Order[];
    suppliers: Supplier[];
}
export interface IQuery {
    getClient(id: string): Nullable<Client> | Promise<Nullable<Client>>;
    login(input: ClientLogin): Client | Promise<Client>;
}
export interface IMutation {
    createClient(input: NewClient): Client | Promise<Client>;
    deleteClient(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}
export interface Order {
    id: number;
    clientId: number;
    supplierId?: Nullable<number>;
    price: number;
    comment: string;
    date: string;
    client: Client;
    supplier?: Nullable<Supplier>;
    products: OrderProduct[];
}
export interface OrderProduct {
    quantity: number;
    orderId: number;
    order: Order;
    productId: number;
    product: Product;
}
export interface Product {
    id: number;
    supplierId: number;
    productId?: Nullable<number>;
    name: string;
    price: number;
    supplier: Supplier;
    orders: OrderProduct[];
}
export interface Supplier {
    id: number;
    companyName: string;
    email: string;
    contactName: string;
    clientId: number;
    products: Product[];
    orders: Order[];
    client: Client;
}
type Nullable<T> = T | null;
export {};
