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
import { RobotsService } from 'src/robots/robots.service';

@Controller('danceoffs')
export class DanceoffsController {
  constructor(
    private readonly danceoffsService: DanceoffsService,
    private readonly robotsService: RobotsService
  ) {}

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
    @Body() createDanceoffDto: CreateDanceoffDto
  ): Promise<Danceoff> {
    const newDanceoff = new Danceoff();
    newDanceoff.dancedAt = new Date();

    const winnerId = createDanceoffDto.winner;

    // ensure that the winner is actually in the opponents array
    if (!createDanceoffDto.opponents.includes(winnerId)) {
      throw new BadRequestException(
        "The winner must be present in the 'opponents' array"
      );
    }

    const loserId = createDanceoffDto.opponents.find(id => id !== winnerId);

    // ensure that both winner and loser IDs are valid robot IDs
    if (!(await this.robotsService.findOne(winnerId))) {
      throw new BadRequestException(`No robot with ID ${winnerId} exists`);
    }

    if (!(await this.robotsService.findOne(loserId))) {
      throw new BadRequestException(`No robot with ID ${loserId} exists`);
    }

    newDanceoff.loser = loserId;
    newDanceoff.winner = createDanceoffDto.winner;
    return this.danceoffsService.create(newDanceoff);
  }
}
