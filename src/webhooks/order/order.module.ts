import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.schema';
import { HttpModule } from '@nestjs/axios';
import { OrderController } from './order.controller';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature(
      [{ name: Order.name, schema: OrderSchema }],
      'orders',
    ),
  ],
  controllers: [OrderController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
