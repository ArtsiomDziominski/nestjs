import { HttpRequestService } from "../service/http-request.service";
export declare class CurrentOrderController {
    private httpRequestService;
    constructor(httpRequestService: HttpRequestService);
    createNewOrder(param: string): any;
}
