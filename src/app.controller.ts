import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sortArrayByAscending')
  getSortArrayByAscending(@Body() array: Array<string | number>) {
    return this.appService.getSortArrayByAscending(array);
  }

  @Get('sortArrayByDescending')
  getSortArrayByDescending(@Body() array: Array<string | number>) {
    return this.appService.getSortArrayByDescending(array);
  }
}
