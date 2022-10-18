import {Injectable} from '@nestjs/common';
import {BURL} from "../const";

@Injectable()
export class HttpRequestService {
    public httpRequest(param: string, end_point: string, method: string = 'GET'): string {
        const params: { signature: string, dataQueryString: string, akey: string } = JSON.parse(param);
        let responseText: string = '';
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let url = BURL + end_point + '?' + params.dataQueryString + '&signature=' + params.signature;
        let ourRequest = new XMLHttpRequest();
        ourRequest.open(method, url, false);
        ourRequest.setRequestHeader('X-MBX-APIKEY', params['akey']);
        ourRequest.onload = function () {
            responseText = ourRequest.responseText
        }
        ourRequest.send();
        return responseText
    }
}
