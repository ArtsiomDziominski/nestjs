import {Controller, Get, Param} from '@nestjs/common';
import {sha256} from "js-sha256";



@Controller('new-order')
export class NewOrderController {
    public burl = "https://fapi.binance.com";
    public endPoint = "/fapi/v1/order";
    public keys = {
        "akey" : 'IScu87JM8tnUzhYE0eDfZhGTDBYSCR2qCKDwkjbRxa4r2nyiDpYYeDasUCJwLRyQ',
        "skey" : 'qOjIg4RtKmeM6RQ0CZ29p9KfWtJv4QbJUxLa5rHQdHFUjK2wIQlejMAiJrURaelO'
    }

    @Get()
    getNewOrder(): any {
        let responseText:string;
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var dataQueryString = `symbol=BTCUSDT&side=BUY&quantity=0.002&type=LIMIT&price=15000&timeInForce=GTC&timestamp=` + Date.now();
        let signature = sha256.hmac.create((this.keys)['skey']).update(dataQueryString).hex();
        var url = this.burl + this.endPoint + '?' + dataQueryString + '&signature=' + signature;
        console.log(url)
        let ourRequest = new XMLHttpRequest();
        ourRequest.open('POST',url,true);
        ourRequest.setRequestHeader('X-MBX-APIKEY', (this.keys)['akey']);
        ourRequest.onload = function(){
            responseText = ourRequest.responseText
            console.log(responseText);
        }
        ourRequest.send();

        return responseText;
    }
}
