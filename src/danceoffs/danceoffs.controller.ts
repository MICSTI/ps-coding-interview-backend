import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDanceoffDto } from './create-danceoff.dto';
import { DanceoffsService } from './danceoffs.service';
import { Danceoff } from './danceoff.entity';
import { InsertResult } from 'typeorm';

@Controller('danceoffs')
export class DanceoffsController {
  constructor(private readonly danceoffsService: DanceoffsService) {}

  @Get()
  async findAll(): Promise<Danceoff[]> {
    return this.danceoffsService.findAll();
  }

  @Post()
  async create(
    @Body() createDanceoffDto: CreateDanceoffDto,
  ): Promise<InsertResult> {
    const newItem = new Danceoff();
    newItem.dancedAt = new Date();
    newItem.loser = createDanceoffDto.opponents.filter(
      (item: number) => item !== createDanceoffDto.winner,
    )[0];
    newItem.winner = createDanceoffDto.winner;
    return this.danceoffsService.create(newItem);
  }
}
