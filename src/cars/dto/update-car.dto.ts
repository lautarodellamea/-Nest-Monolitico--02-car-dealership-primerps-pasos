import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

  // depende de mi back si voy a modificar el id o no
  @IsString({ message: 'El id debe ser un string' })
  @IsUUID('4', { message: 'El id debe ser un UUID v4' })
  @IsOptional()
  readonly id?: string

  @IsString({ message: 'La marca debe ser un string' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'El modelo debe ser un string' })
  @MinLength(3, { message: 'El modelo debe tener al menos 3 caracteres' })
  @IsOptional()
  readonly model?: string;
}