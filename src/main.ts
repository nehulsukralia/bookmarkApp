import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // below is a middleware that make uses of class validators that we wrote in DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //whitelist strips out anything extra from body fields that is not defined in our DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
