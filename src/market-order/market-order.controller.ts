import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {POINT_NEW_ORDER, POST} from "../const";

@Controller('market-order')
export class MarketOrderController {
    constructor(private httpRequestService: HttpRequestService) {
    }

    @Get(':params')
    @HttpCode(HttpStatus.OK)
    marketNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, POINT_NEW_ORDER, POST);
    }
}
