import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {NewOrderController} from './new-order/new-order.controller';
import {CurrentOrderController} from './current-order/current-order.controller';
import {HttpRequestService} from "./service/http-request.service";
import {BalanceController} from './balance/balance.controller';
import {MarketOrderController} from './market-order/market-order.controller';
import {CancelOrderController} from './cancel-open-orders/cancel-order.controller';
import {IncomeHistoryController} from './income-history/income-history.controller';
import {AllOrdersSymbolController} from './set-all-orders-symbol/all-orders-symbol.controller';
import {DeleteListOrdersSymbolController} from "./delete-list-orders-symbol/delete-list-orders-symbol.controller";
import { DeleteOneOrderSymbolController } from './delete-one-order-symbol/delete-one-order-symbol.controller';

@Module({
    imports: [],
    controllers: [AppController, NewOrderController, CurrentOrderController, BalanceController, MarketOrderController, CancelOrderController, IncomeHistoryController, DeleteListOrdersSymbolController, AllOrdersSymbolController, DeleteOneOrderSymbolController],
    providers: [AppService, HttpRequestService],
})
export class AppModule {
}
