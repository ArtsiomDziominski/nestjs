import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewOrderController } from './new-order/new-order.controller';

@Module({
  imports: [],
  controllers: [AppController, NewOrderController],
  providers: [AppService],
})
export class AppModule {}
