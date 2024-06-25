import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Connection, Model } from 'mongoose';
import { Car } from './car.schema';

@Injectable()
export class CarsService {
  constructor(
    @InjectConnection('cars') private connection: Connection,
    @InjectModel(Car.name, 'cars') private readonly carsModel: Model<Car>,
  ) {}

  async create(dto: any): Promise<Car> {
    const created = new this.carsModel(dto);
    return created.save();
  }

  async fetch(): Promise<Car[]> {
    return this.carsModel.find().exec();
  }

  async fetchBy(id: string): Promise<Car> {
    return this.carsModel.findById(id);
  }

  async delete(id: string) {
    const _id = new mongoose.Types.ObjectId(id);
    const abc = await this.carsModel.findOneAndDelete({ _id }).exec();
    return abc;
  }
}
