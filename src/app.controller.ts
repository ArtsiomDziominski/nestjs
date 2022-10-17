import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {CreateNewOrderDto} from "./new-order/create-new-order.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return 'signature';
  }

  @Post()
  create(@Body() createNewOrderDto: CreateNewOrderDto){
    console.log(createNewOrderDto)
    return createNewOrderDto.signature
  }
}
