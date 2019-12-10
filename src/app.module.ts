import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsController } from './robots/robots.controller';
import { DanceoffsController } from './danceoffs/danceoffs.controller';

@Module({
  imports: [],
  controllers: [AppController, RobotsController, DanceoffsController],
  providers: [AppService],
})
export class AppModule {}
