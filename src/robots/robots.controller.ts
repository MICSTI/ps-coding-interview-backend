import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Robot } from './robot.entity';
import { RobotsService } from './robots.service';
import { CreateRobotDto } from './create-robot.dto';

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Get()
  async findAll(): Promise<Robot[]> {
    return this.robotsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Robot> {
    const robot = await this.robotsService.findOne(params.id);

    if (!robot) {
      throw new NotFoundException('No robot with this ID exists');
    }

    return robot;
  }

  @Post()
  async create(@Body() createRobotDto: CreateRobotDto): Promise<Robot> {
    const newRobot = new Robot();
    newRobot.name = createRobotDto.name;
    newRobot.avatar = createRobotDto.avatar;
    newRobot.experience = createRobotDto.experience;
    newRobot.outOfOrder = createRobotDto.outOfOrder;
    newRobot.powermove = createRobotDto.powermove;

    return this.robotsService.create(newRobot);
  }
}
