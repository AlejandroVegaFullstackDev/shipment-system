import { Injectable } from '@nestjs/common';
import { Shipment } from 'src/domain/entities/shipment.entity';
import { ShipmentRepository } from 'src/domain/repositories/shipment.repository.interface';

@Injectable()
export class ShipmentDao implements ShipmentRepository {
  private shipments: Shipment[] = [];

  async create(shipment: Shipment): Promise<Shipment> {
    shipment.id = this.generateId();
    this.shipments.push(shipment);
    return shipment;
  }

  async findAll(): Promise<Shipment[]> {
    return this.shipments;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
