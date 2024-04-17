import { Inject, Injectable } from '@nestjs/common';
import { ShipmentRepository } from 'src/domain/repositories/shipment.repository.interface';
import { Shipment } from 'src/domain/entities/shipment.entity';

@Injectable()
export class ListShipmentsUsecase {
  constructor(
    @Inject('ShipmentRepository')
    private readonly shipmentRepository: ShipmentRepository,
  ) {}
  async execute(): Promise<Shipment[]> {
    return this.shipmentRepository.findAll();
  }
}
