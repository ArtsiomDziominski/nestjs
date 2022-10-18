import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {END_POINT_POSITION_RISK, GET} from "../const";

@Controller('current-order')
export class CurrentOrderController {
    constructor(private httpRequestService:HttpRequestService) {
    }
    @Get(':params')
    @HttpCode(HttpStatus.OK)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, END_POINT_POSITION_RISK, GET);
    }
}
