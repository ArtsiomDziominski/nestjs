import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {END_POINT_BALANCE, POST} from "../const";

@Controller('balance')
export class BalanceController {
    constructor(private httpRequestService: HttpRequestService) {
    }

    @Get(':params')
    @HttpCode(HttpStatus.CREATED)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, END_POINT_BALANCE, POST);
    }
}
