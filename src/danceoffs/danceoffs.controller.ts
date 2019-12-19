import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { DanceoffDto } from './danceoff.dto';
import { DanceoffsService } from './danceoffs.service';
import { Danceoff } from './danceoff.entity';
import { RobotsService } from 'src/robots/robots.service';
import { CreateDanceoffsDto } from './create-danceoffs.dto';

@Controller('danceoffs')
export class DanceoffsController {
  constructor(
    private readonly danceoffsService: DanceoffsService,
    private readonly robotsService: RobotsService
  ) {}

  @Get()
  async findAll(): Promise<Danceoff[]> {
    return this.danceoffsService.findAll();
  }

  @Post()
  async create(
    @Body() createDanceoffsDto: CreateDanceoffsDto
  ): Promise<Danceoff[]> {
    const result: Danceoff[] = [];

    for (const danceoffDto of createDanceoffsDto.danceoffs) {
      const newDanceoff = await this.createSingleDanceoff(danceoffDto);
      result.push(newDanceoff);
    }

    return result;
  }

  private async createSingleDanceoff(
    createDanceoffDto: DanceoffDto
  ): Promise<Danceoff> {
    // ensures that the opponents array only contains distinct values
    const opponents = [...new Set(createDanceoffDto.opponents)];

    // currently, it is allowed that the opponents array contains more than
    // two elements, but only the first robot is marked as the loser
    if (opponents.length < 2) {
      throw new BadRequestException(
        "There must be at least two distinct robot ids present in the 'opponents' array"
      );
    }

    const newDanceoff = new Danceoff();
    newDanceoff.dancedAt = new Date();

    const winnerId = createDanceoffDto.winner;

    // ensure that the winner is actually in the opponents array
    if (!opponents.includes(winnerId)) {
      throw new BadRequestException(
        "The winning robot must be present in the 'opponents' array"
      );
    }

    const loserId = opponents.find(id => id !== winnerId);

    // ensure that both winner and loser IDs are valid robot IDs
    const robotIds = [winnerId, loserId];
    const participatingRobots = await this.robotsService.findByIds(robotIds);
    robotIds.forEach(robotId => {
      const robot = participatingRobots.find(robot => robot.id === robotId);
      if (!robot) {
        throw new BadRequestException(`No robot with id ${robotId} exists`);
      }

      if (robot.outOfOrder) {
        throw new BadRequestException(
          `The robot '${robot.name}' is out of order and cannot participate in a danceoff`
        );
      }
    });

    newDanceoff.loser = loserId;
    newDanceoff.winner = createDanceoffDto.winner;
    return this.danceoffsService.create(newDanceoff);
  }
}
