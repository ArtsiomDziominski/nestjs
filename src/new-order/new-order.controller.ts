import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {END_POINT_NEW_ORDER, POST} from "../const";
import {HttpRequestService} from "../service/http-request.service";

@Controller('new-order')
export class NewOrderController {
    constructor(private httpRequestService: HttpRequestService) {
    }

    @Get(':params')
    @HttpCode(HttpStatus.CREATED)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, END_POINT_NEW_ORDER, POST);
    }
}
