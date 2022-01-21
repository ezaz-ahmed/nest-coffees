import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly CoffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offest } = paginationQuery;
    return this.CoffeesService.findAll();
  }

  @Get(':id')
  fineOne(@Param('id') id: string) {
    return this.CoffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.CoffeesService.create(body);
  }

  @Patch(':id')
  update(@Param(':id') id: string, @Body(':id') body) {
    return this.CoffeesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.CoffeesService.delete(id);
  }
}
