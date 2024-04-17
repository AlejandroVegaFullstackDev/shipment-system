export class Shipment {
  constructor(
    public id: string | null,
    public recipient: string,
    public sender: string,
    public content: string,
    public shipmentDate: Date,
    public distance: number,
    public fee: number,
  ) {}
}
