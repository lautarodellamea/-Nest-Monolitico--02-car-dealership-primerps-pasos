import { IsOptional, IsString, IsUUID } from "class-validator";

export class deleteCarDto {

  @IsString({ message: 'El id debe ser un string' })
  @IsUUID('4', { message: 'El id debe ser un UUID v4' })
  @IsOptional()
  readonly id?: string
}