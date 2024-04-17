import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentController } from './view/controller/shipment.controller';
import { CreateShipmentUsecase } from './usecase/shipment/create-shipment.usecase';
import { ListShipmentsUsecase } from './usecase/shipment/list-shipments.usecase';
import { ShipmentDao } from './dao/shipment.dao';

@Module({
  imports: [],
  controllers: [AppController, ShipmentController],
  providers: [
    AppService,
    CreateShipmentUsecase,
    ListShipmentsUsecase,
    {
      provide: 'ShipmentRepository',
      useClass: ShipmentDao,
    },
  ],
})
export class AppModule {}
