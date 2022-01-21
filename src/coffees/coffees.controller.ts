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
    const { limit, offest } = paginationQuery;
    return `This all coffees. Limit ${limit}, Offest: ${offest}`;
  }

  @Get(':id')
  fineOne(@Param('id') id: string) {
    return `One coffee #[${id}]`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param(':id') id: string, @Body(':id') body) {
    return 'action update';
  }

  @Delete(':id')
  delete(@Param(':id') id: string) {
    return 'action update';
  }
}
