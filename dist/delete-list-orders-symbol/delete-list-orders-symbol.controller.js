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
exports.DeleteListOrdersSymbolController = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
const http_request_service_1 = require("../service/http-request.service");
let DeleteListOrdersSymbolController = class DeleteListOrdersSymbolController {
    constructor(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    createNewOrder(param) {
        return this.httpRequestService.httpRequest(param, const_1.DELETE_LIST_ORDERS_SYMBOL, const_1.DELETE);
    }
};
__decorate([
    (0, common_1.Get)(':params'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('params')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], DeleteListOrdersSymbolController.prototype, "createNewOrder", null);
DeleteListOrdersSymbolController = __decorate([
    (0, common_1.Controller)('delete-list-orders-symbol'),
    __metadata("design:paramtypes", [http_request_service_1.HttpRequestService])
], DeleteListOrdersSymbolController);
exports.DeleteListOrdersSymbolController = DeleteListOrdersSymbolController;
//# sourceMappingURL=delete-list-orders-symbol.controller.js.map