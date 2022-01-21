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
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
  create(@Body() createCoffeeDto: CreateCoffeDto) {
    return this.CoffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param(':id') id: string,
    @Body(':id') updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.CoffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.CoffeesService.delete(id);
  }
}
