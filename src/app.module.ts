import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from './db/MongoDb';
import { AppController } from './app.controller';
import { CarsModule } from './models/cars/cars.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      connectionName: 'cars',
    }),
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
