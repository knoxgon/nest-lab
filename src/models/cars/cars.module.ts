import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './car.schema';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }], 'cars'),
  ],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
