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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_service_1 = require("./client.service");
let ClientResolver = class ClientResolver {
    constructor(client) {
        this.client = client;
    }
    async getClient(id) {
        return this.client.getClient(id);
    }
    async login(args) {
        return this.client.login(args);
    }
    async createClient(args) {
        return this.client.createClient(args);
    }
};
exports.ClientResolver = ClientResolver;
__decorate([
    (0, graphql_1.Query)('getClient'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "getClient", null);
__decorate([
    (0, graphql_1.Query)('login'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)('createClient'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "createClient", null);
exports.ClientResolver = ClientResolver = __decorate([
    (0, graphql_1.Resolver)('Client'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientResolver);
//# sourceMappingURL=client.resolver.js.map