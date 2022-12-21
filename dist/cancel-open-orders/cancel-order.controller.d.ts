import { HttpRequestService } from "../service/http-request.service";
export declare class CancelOrderController {
    private httpRequestService;
    constructor(httpRequestService: HttpRequestService);
    marketNewOrder(param: string): any;
}
