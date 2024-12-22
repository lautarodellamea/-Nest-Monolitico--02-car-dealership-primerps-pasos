// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

// // el udpate brand dto extiende del create brand dto y es de tipo parcial, es decir que no es obligatorio enviar todos los campos
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {
//   // solo se necesita el nombre para actualizar
//   @IsString()
//   @MinLength(3)
//   name: string;
// }

export class UpdateBrandDto {
  // solo se necesita el nombre para actualizar
  @IsString()
  @MinLength(3)
  name: string;
}
