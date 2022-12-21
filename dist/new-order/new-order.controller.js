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
exports.NewOrderController = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
const http_request_service_1 = require("../service/http-request.service");
let NewOrderController = class NewOrderController {
    constructor(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    createNewOrder(param) {
        return this.httpRequestService.httpRequest(param, const_1.POINT_NEW_ORDER, const_1.POST);
    }
};
__decorate([
    (0, common_1.Get)(':params'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('params')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], NewOrderController.prototype, "createNewOrder", null);
NewOrderController = __decorate([
    (0, common_1.Controller)('new-order'),
    __metadata("design:paramtypes", [http_request_service_1.HttpRequestService])
], NewOrderController);
exports.NewOrderController = NewOrderController;
//# sourceMappingURL=new-order.controller.js.map