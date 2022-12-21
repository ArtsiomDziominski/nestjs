import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {GET, OPEN_ORDER_SYMBOL} from "../const";

@Controller('set-all-orders-symbol')
export class AllOrdersSymbolController {
    constructor(private httpRequestService:HttpRequestService) {
    }
    @Get(':params')
    @HttpCode(HttpStatus.CREATED)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, OPEN_ORDER_SYMBOL, GET);
    }
}
