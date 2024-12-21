import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  // para aplicar el dto a toda la aplicacion
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo los campos que estan en el dto, los que noe xistan son removidos del dto, evitando que me manden data basura
      forbidNonWhitelisted: true, // si hay campos en la peticion que no estan en el dto, se lanzara un error
      transform: true, // transforma el dto a la clase correspondiente, si me manda la edad en string lo transforma a number si mi dto lo dice asi
    }));

  await app.listen(process.env.PORT ?? 3000);
}
main();
