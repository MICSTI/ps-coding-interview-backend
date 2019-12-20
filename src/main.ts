import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from './shared/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
