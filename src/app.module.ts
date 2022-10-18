import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewOrderController } from './new-order/new-order.controller';
import { CurrentOrderController } from './current-order/current-order.controller';
import {HttpRequestService} from "./service/http-request.service";
import { BalanceController } from './balance/balance.controller';

@Module({
  imports: [],
  controllers: [AppController, NewOrderController, CurrentOrderController, BalanceController],
  providers: [AppService, HttpRequestService],
})
export class AppModule {}
