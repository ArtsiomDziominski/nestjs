"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const new_order_controller_1 = require("./new-order/new-order.controller");
const current_order_controller_1 = require("./current-order/current-order.controller");
const http_request_service_1 = require("./service/http-request.service");
const balance_controller_1 = require("./balance/balance.controller");
const market_order_controller_1 = require("./market-order/market-order.controller");
const cancel_order_controller_1 = require("./cancel-open-orders/cancel-order.controller");
const income_history_controller_1 = require("./income-history/income-history.controller");
const all_orders_symbol_controller_1 = require("./set-all-orders-symbol/all-orders-symbol.controller");
const delete_list_orders_symbol_controller_1 = require("./delete-list-orders-symbol/delete-list-orders-symbol.controller");
const delete_one_order_symbol_controller_1 = require("./delete-one-order-symbol/delete-one-order-symbol.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, new_order_controller_1.NewOrderController, current_order_controller_1.CurrentOrderController, balance_controller_1.BalanceController, market_order_controller_1.MarketOrderController, cancel_order_controller_1.CancelOrderController, income_history_controller_1.IncomeHistoryController, delete_list_orders_symbol_controller_1.DeleteListOrdersSymbolController, all_orders_symbol_controller_1.AllOrdersSymbolController, delete_one_order_symbol_controller_1.DeleteOneOrderSymbolController],
        providers: [app_service_1.AppService, http_request_service_1.HttpRequestService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map