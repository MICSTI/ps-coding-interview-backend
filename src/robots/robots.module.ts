import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RobotsService } from './robots.service';
import { RobotsController } from './robots.controller';
import { Robot } from './robot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Robot])],
  providers: [RobotsService],
  controllers: [RobotsController],
})
export class RobotModule {}
