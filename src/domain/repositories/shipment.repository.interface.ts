import { Shipment } from '../entities/shipment.entity';

export interface ShipmentRepository {
  create(shipment: Shipment): Promise<Shipment>;
  findAll(): Promise<Shipment[]>;
}
