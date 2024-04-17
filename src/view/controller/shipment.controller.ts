import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateShipmentUsecase } from 'src/usecase/shipment/create-shipment.usecase';
import { ListShipmentsUsecase } from 'src/usecase/shipment/list-shipments.usecase';
import { CreateShipmentRequest } from '../form-request/create-shipment.request';
import { ShipmentDto } from '../dtos/create-shipment.request';

@Controller('shipments')
export class ShipmentController {
  constructor(
    private readonly createShipmentUsecase: CreateShipmentUsecase,
    private readonly listShipmentsUsecase: ListShipmentsUsecase,
  ) {}

  @Post()
  async createShipment(
    @Body() request: CreateShipmentRequest,
  ): Promise<ShipmentDto> {
    const shipment = await this.createShipmentUsecase.execute(request);
    return ShipmentDto.fromEntity(shipment);
  }

  @Get()
  async listShipments(): Promise<ShipmentDto[]> {
    const shipments = await this.listShipmentsUsecase.execute();
    return shipments.map((shipment) => ShipmentDto.fromEntity(shipment));
  }
}
