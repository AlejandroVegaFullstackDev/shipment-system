import { Shipment } from 'src/domain/entities/shipment.entity';

export class ShipmentDto {
  id: string;
  recipient: string;
  sender: string;
  content: string;
  shipmentDate: Date;
  distance: number;
  fee: number;

  static fromEntity(entity: Shipment): ShipmentDto {
    return {
      id: entity.id,
      recipient: entity.recipient,
      sender: entity.sender,
      content: entity.content,
      shipmentDate: entity.shipmentDate,
      distance: entity.distance,
      fee: entity.fee,
    };
  }
}
