"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
let ClientService = class ClientService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getClient(id) {
        return this.prisma.client.findUnique({
            where: {
                id: parseInt(id),
            }
        });
    }
    async createClient(input) {
        const { password, ...clientData } = input;
        const hash = await argon.hash(input.password);
        return this.prisma.client.create({
            data: {
                ...clientData, hash
            }
        });
    }
    async login(input) {
        const client = await this.prisma.client.findUnique({
            where: {
                email: input.email
            }
        });
        if (!client)
            throw new common_1.ForbiddenException('Credentials invalid.');
        const matchPwd = await argon.verify(client.hash, input.password);
        if (!matchPwd)
            throw new common_1.ForbiddenException('Credentials invalid.');
        return client;
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientService);
//# sourceMappingURL=client.service.js.map