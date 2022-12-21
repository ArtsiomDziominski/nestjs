import { HttpRequestService } from "../service/http-request.service";
export declare class NewOrderController {
    private httpRequestService;
    constructor(httpRequestService: HttpRequestService);
    createNewOrder(param: string): any;
}
