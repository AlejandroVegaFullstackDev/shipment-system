import { Inject, Injectable } from '@nestjs/common';
import { ShipmentRepository } from 'src/domain/repositories/shipment.repository.interface';
import { Shipment } from 'src/domain/entities/shipment.entity';
import { CreateShipmentRequest } from 'src/view/form-request/create-shipment.request';

@Injectable()
export class CreateShipmentUsecase {
  constructor(
    @Inject('ShipmentRepository')
    private readonly shipmentRepository: ShipmentRepository,
  ) {}

  async execute(request: CreateShipmentRequest): Promise<Shipment> {
    const fee = this.calculateShipmentFee(request.distance);
    const shipment = new Shipment(
      null,
      request.recipient,
      request.sender,
      request.content,
      new Date(),
      request.distance,
      fee,
    );

    return this.shipmentRepository.create(shipment);
  }

  private calculateShipmentFee(distance: number): number {
    const baseRateEu = 5;
    const ratePerKilometer = 0.5;
    return baseRateEu + distance * ratePerKilometer;
  }
}
