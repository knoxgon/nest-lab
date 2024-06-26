import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name, 'orders')
    private readonly ordersModel: Model<Order>,
  ) {}

  async createOrder(data: any) {
    const createdOrder = new this.ordersModel(data);
    return await createdOrder.save();
  }

  async getOrders(): Promise<Order[]> {
    return await this.ordersModel.find({}).exec();
  }
}
