import { HttpRequestService } from "../service/http-request.service";
export declare class BalanceController {
    private httpRequestService;
    constructor(httpRequestService: HttpRequestService);
    createNewOrder(param: string): any;
}
