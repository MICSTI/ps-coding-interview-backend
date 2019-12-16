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

  const apiBasePath = configService.get('API_BASE_PATH');
  if (!apiBasePath) {
    throw new InternalServerErrorException(
      `environment variable API_BASE_PATH could not be resolved`
    );
  }
  app.setGlobalPrefix(apiBasePath);

  const port = configService.get('API_PORT') || 3000;
  await app.listen(port);
}
bootstrap();
