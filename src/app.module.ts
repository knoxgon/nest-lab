import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from './db/MongoDb';
import { AppController } from './app.controller';
import { CarsModule } from './models/car/cars.module';
import { OrdersModule } from './webhooks/order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      connectionName: 'cars',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      connectionName: 'orders',
    }),
    CarsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
