import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateShipmentRequest {
  @IsString()
  @IsNotEmpty({ message: 'El destinatario no puede estar vacío' })
  recipient: string;

  @IsString()
  @IsNotEmpty({ message: 'El remitente no puede estar vacío' })
  sender: string;

  @IsString()
  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  content: string;

  @IsNumber({}, { message: 'La distancia debe ser un número' })
  @IsNotEmpty({ message: 'La distancia no puede estar vacía' })
  distance: number;
}
