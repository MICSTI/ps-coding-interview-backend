import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { Robot } from './robot.entity';
import { RobotsService } from './robots.service';

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Get()
  async findAll(): Promise<Robot[]> {
    return this.robotsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Robot> {
    const robotId = params.id;
    const robot = await this.robotsService.findOne(robotId);

    if (!robot) {
      throw new NotFoundException(`No robot with id ${robotId} exists`);
    }

    return robot;
  }
}
