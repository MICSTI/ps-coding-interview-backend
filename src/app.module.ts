import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsController } from './robots/robots.controller';
import { DanceoffsController } from './danceoffs/danceoffs.controller';
import { Robot } from './robots/robot.entity';
import { Danceoff } from './danceoffs/danceoff.entity';
import { RobotModule } from './robots/robots.module';
import { DanceoffModule } from './danceoffs/danceoffs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'parkside',
      password: 'parkside',
      database: 'parkside',
      entities: [Robot, Danceoff],
      synchronize: true,
    }),
    RobotModule,
    DanceoffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
