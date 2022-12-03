import {Controller, Get, Param} from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':params')
  getHello(@Param('params') params: string) {
    console.log(JSON.parse(params))
    return JSON.parse(params);
  }
}
