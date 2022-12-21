import { HttpRequestService } from "../service/http-request.service";
export declare class MarketOrderController {
    private httpRequestService;
    constructor(httpRequestService: HttpRequestService);
    marketNewOrder(param: string): any;
}
