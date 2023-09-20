import { Client } from '@prisma/client';
import { ClientLogin, NewClient } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClientService {
    private prisma;
    constructor(prisma: PrismaService);
    getClient(id: string): Promise<Client | null>;
    createClient(input: NewClient): Promise<Client>;
    login(input: ClientLogin): Promise<Client>;
}
