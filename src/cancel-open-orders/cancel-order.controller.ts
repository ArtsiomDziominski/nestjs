import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {CANCEL_ALL_ORDERS, DELETE} from "../const";

@Controller('cancel-open-orders')
export class CancelOrderController {
    constructor(private httpRequestService: HttpRequestService) {
    }

    @Get(':params')
    @HttpCode(HttpStatus.OK)
    marketNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, CANCEL_ALL_ORDERS, DELETE);
    }
}
