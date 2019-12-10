import { Controller, Get, Param } from '@nestjs/common';
import { Robot } from './robot.entity';
import { RobotsService } from './robots.service';

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Get()
  async findAll(): Promise<Robot[]> {
    const robots = this.robotsService.findAll();

    if (!robots) {
      return [];
    }

    return robots;
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Robot> {
    const robot = this.robotsService.findOne(params.id);

    if (!robot) {
      return null;
    }

    return robot;
  }
}
