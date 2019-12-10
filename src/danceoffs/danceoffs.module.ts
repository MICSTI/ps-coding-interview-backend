import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DanceoffsService } from './danceoffs.service';
import { DanceoffsController } from './danceoffs.controller';
import { Danceoff } from './danceoff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Danceoff])],
  providers: [DanceoffsService],
  controllers: [DanceoffsService],
})
export class DanceoffModule {}
