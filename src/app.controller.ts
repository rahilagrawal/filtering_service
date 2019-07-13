import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';
import { DataViewModel } from './DataViewModel';

@ApiUseTags('General')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('filteredData')
  getData(@Query('search') search: string, @Body() filters: { filters: number[] }): DataViewModel[] {

    return this.appService.getData(search, filters.filters);
  }
}
