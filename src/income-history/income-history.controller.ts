import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {GET, INCOME_HISTORY} from "../const";

@Controller('income-history')
export class IncomeHistoryController {
    constructor(private httpRequestService:HttpRequestService) {
    }
    @Get(':params')
    @HttpCode(HttpStatus.OK)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, INCOME_HISTORY, GET);
    }
}
