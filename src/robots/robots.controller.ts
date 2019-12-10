import { Controller, Get, Param } from '@nestjs/common';
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
    return this.robotsService.findOne(params.id);
  }
}
