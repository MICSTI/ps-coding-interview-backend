import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { CreateDanceoffDto } from './create-danceoff.dto';
import { DanceoffsService } from './danceoffs.service';
import { Danceoff } from './danceoff.entity';

@Controller('danceoffs')
export class DanceoffsController {
  constructor(private readonly danceoffsService: DanceoffsService) {}

  @Get()
  async findAll(): Promise<Danceoff[]> {
    const danceoffs = this.danceoffsService.findAll();

    if (!danceoffs) {
      return [];
    }

    return danceoffs;
  }

  @Post()
  async create(
    @Body() createDanceoffDto: CreateDanceoffDto,
  ): Promise<Danceoff> {
    const newDanceoff = new Danceoff();
    newDanceoff.dancedAt = new Date();

    const loserArr = createDanceoffDto.opponents.filter(
      (item: number) => item !== createDanceoffDto.winner,
    );

    // ensure that there is exactly one loser
    if (loserArr.length != 1) {
      throw new BadRequestException(
        "The winner must be present in the 'opponents' array",
      );
    }

    newDanceoff.loser = loserArr[0];
    newDanceoff.winner = createDanceoffDto.winner;
    return this.danceoffsService.create(newDanceoff);
  }
}
