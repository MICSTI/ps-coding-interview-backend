import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsController } from './robots/robots.controller';
import { DanceoffsController } from './danceoffs/danceoffs.controller';
import { Robot } from './robots/robot.entity';
import { Danceoff } from './danceoffs/danceoff.entity';
import { RobotModule } from './robots/robots.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ps_coding_interview',
      entities: [Robot, Danceoff],
      synchronize: true,
    }),
    RobotModule,
  ],
  controllers: [AppController, RobotsController, DanceoffsController],
  providers: [AppService],
})
export class AppModule {}
