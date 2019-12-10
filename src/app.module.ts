import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsController } from './robots/robots.controller';

@Module({
  imports: [],
  controllers: [AppController, RobotsController],
  providers: [AppService],
})
export class AppModule {}
