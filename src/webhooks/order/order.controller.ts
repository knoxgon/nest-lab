import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { HttpService } from '@nestjs/axios';
import * as https from 'https';

@Controller('order')
export class OrderController {
  constructor(
    private readonly httpService: HttpService,
    private readonly orderService: OrdersService,
  ) {}

  @Post()
  async createOrder(@Body() data: any) {
    this.httpService
      .post('https://webhook.site/95043af7-d022-4dcd-bf16-94c347e31900', data, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .subscribe({
        complete: async () => {
          const createdOrder = await this.orderService.createOrder(data);
          console.log('Completed', createdOrder);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
}
