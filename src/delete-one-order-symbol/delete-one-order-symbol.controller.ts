import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {HttpRequestService} from "../service/http-request.service";
import {DELETE, POINT_NEW_ORDER} from "../const";

@Controller('delete-one-order-symbol')
export class DeleteOneOrderSymbolController {
    constructor(private httpRequestService:HttpRequestService) {
    }
    @Get(':params')
    @HttpCode(HttpStatus.OK)
    createNewOrder(@Param('params') param: string): any {
        return this.httpRequestService.httpRequest(param, POINT_NEW_ORDER, DELETE);
    }
}
