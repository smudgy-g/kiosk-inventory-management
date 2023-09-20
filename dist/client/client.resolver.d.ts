import { ClientService } from "./client.service";
import { ClientLogin, NewClient } from "src/graphql";
export declare class ClientResolver {
    private readonly client;
    constructor(client: ClientService);
    getClient(id: string): Promise<{
        id: number;
        companyName: string;
        email: string;
        hash: string;
        contactName: string;
    }>;
    login(args: ClientLogin): Promise<{
        id: number;
        companyName: string;
        email: string;
        hash: string;
        contactName: string;
    }>;
    createClient(args: NewClient): Promise<{
        id: number;
        companyName: string;
        email: string;
        hash: string;
        contactName: string;
    }>;
}
