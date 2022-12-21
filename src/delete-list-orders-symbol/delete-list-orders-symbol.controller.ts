import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {DELETE, DELETE_LIST_ORDERS_SYMBOL} from "../const";
import {HttpRequestService} from "../service/http-request.service";

@Controller('delete-list-orders-symbol')
export class DeleteListOrdersSymbolController {
    constructor(private httpRequestService:HttpRequestService) {
    }
    @Get(':params')
    @HttpCode(HttpStatus.OK)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, DELETE_LIST_ORDERS_SYMBOL, DELETE);
    }
}
