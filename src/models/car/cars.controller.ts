import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.schema';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async create(@Body() obj: any) {
    await this.carsService.create(obj);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    return this.carsService.fetchBy(id);
  }

  @Get()
  async find(): Promise<Car[]> {
    return this.carsService.fetch();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.carsService.delete(id);
  }
}
